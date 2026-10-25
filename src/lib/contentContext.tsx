'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { SiteContent, defaultSiteContent } from '@/data/siteContent';

const STORAGE_KEY = 'mb_site_content_master';
const BROADCAST_CHANNEL = 'mb_content_live_sync';

interface ContentContextValue {
  content: SiteContent;
  isCustomized: boolean;
  lastSaved: string | null;
  updateContent: (updater: (prev: SiteContent) => SiteContent) => void;
  updateSection: <K extends keyof SiteContent>(section: K, data: any) => void;
  saveChanges: (newContent?: SiteContent) => boolean;
  resetToDefaults: () => void;
  exportBackup: () => void;
  importBackup: (jsonString: string) => { success: boolean; error?: string };
  publishToGitHub: (githubToken: string) => Promise<{ success: boolean; message: string }>;
}

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [isCustomized, setIsCustomized] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  // Initialize from localStorage or fallback on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') {
          setContent({ ...defaultSiteContent, ...parsed });
          setIsCustomized(true);
          setLastSaved(parsed.lastUpdated || null);
        }
      } else {
        // Check if a deployed public/content.json exists
        fetch('/content.json')
          .then((res) => {
            if (res.ok) return res.json();
            return null;
          })
          .then((remoteData) => {
            if (remoteData && typeof remoteData === 'object' && remoteData.version) {
              setContent({ ...defaultSiteContent, ...remoteData });
              setLastSaved(remoteData.lastUpdated || null);
            }
          })
          .catch(() => {
            // Silently use defaults
          });
      }
    } catch {
      // Fallback cleanly to default
    }

    // Set up real-time cross-tab sync via BroadcastChannel
    let channel: BroadcastChannel | null = null;
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        channel = new BroadcastChannel(BROADCAST_CHANNEL);
        channel.onmessage = (event) => {
          if (event.data?.type === 'CONTENT_SAVED' && event.data?.payload) {
            setContent(event.data.payload);
            setIsCustomized(true);
            setLastSaved(event.data.payload.lastUpdated || null);
          } else if (event.data?.type === 'CONTENT_RESET') {
            setContent(defaultSiteContent);
            setIsCustomized(false);
            setLastSaved(null);
          }
        };
      } catch {
        // Fallback for older browsers
      }
    }

    // Storage event listener fallback
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const fresh = JSON.parse(e.newValue);
          setContent(fresh);
          setIsCustomized(true);
          setLastSaved(fresh.lastUpdated || null);
        } catch {
          // Ignore parse errors
        }
      } else if (e.key === STORAGE_KEY && !e.newValue) {
        setContent(defaultSiteContent);
        setIsCustomized(false);
      }
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      if (channel) channel.close();
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const updateContent = useCallback((updater: (prev: SiteContent) => SiteContent) => {
    setContent((prev) => updater(prev));
  }, []);

  const updateSection = useCallback(<K extends keyof SiteContent>(section: K, data: any) => {
    setContent((prev) => ({
      ...prev,
      [section]: typeof data === 'function' ? data(prev[section]) : { ...(prev[section] as Record<string, any>), ...data },
    }));
  }, []);

  const saveChanges = useCallback((newContent?: SiteContent): boolean => {
    const toSave = newContent || content;
    const timestamp = new Date().toISOString();
    const updated: SiteContent = {
      ...toSave,
      lastUpdated: timestamp,
      version: (toSave.version || 1) + 1,
    };

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        
        // Notify other open tabs/windows
        if (typeof BroadcastChannel !== 'undefined') {
          const channel = new BroadcastChannel(BROADCAST_CHANNEL);
          channel.postMessage({ type: 'CONTENT_SAVED', payload: updated });
          channel.close();
        }
      }

      setContent(updated);
      setIsCustomized(true);
      setLastSaved(timestamp);
      return true;
    } catch (err) {
      console.error('Failed to save content:', err);
      return false;
    }
  }, [content]);

  const resetToDefaults = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);

        if (typeof BroadcastChannel !== 'undefined') {
          const channel = new BroadcastChannel(BROADCAST_CHANNEL);
          channel.postMessage({ type: 'CONTENT_RESET' });
          channel.close();
        }
      }

      setContent(defaultSiteContent);
      setIsCustomized(false);
      setLastSaved(null);
    } catch (err) {
      console.error('Failed to reset content:', err);
    }
  }, []);

  const exportBackup = useCallback(() => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(content, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `merit-and-beyond-content-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }, [content]);

  const importBackup = useCallback((jsonString: string): { success: boolean; error?: string } => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || typeof parsed !== 'object') {
        return { success: false, error: 'Invalid JSON format.' };
      }
      
      const merged: SiteContent = {
        ...defaultSiteContent,
        ...parsed,
        lastUpdated: new Date().toISOString(),
        version: (parsed.version || 1) + 1,
      };

      saveChanges(merged);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Failed to parse JSON backup file.' };
    }
  }, [saveChanges]);

  const publishToGitHub = useCallback(async (githubToken: string): Promise<{ success: boolean; message: string }> => {
    const repoOwner = 'HelloExeAI';
    const repoName = 'Merit-Beyond';
    const filePath = 'public/content.json';
    const branch = 'main';

    try {
      // 1. Get current file SHA if it exists
      const getFileRes = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}?ref=${branch}`,
        {
          headers: {
            Authorization: `Bearer ${githubToken.trim()}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );

      let sha: string | undefined = undefined;
      if (getFileRes.ok) {
        const fileData = await getFileRes.json();
        sha = fileData.sha;
      }

      // 2. Commit updated content.json
      const contentBase64 = btoa(unescape(encodeURIComponent(JSON.stringify(content, null, 2))));
      const putRes = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${githubToken.trim()}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Update live website content via Admin CMS [${new Date().toISOString()}]`,
            content: contentBase64,
            branch: branch,
            sha: sha,
          }),
        }
      );

      if (!putRes.ok) {
        const errJson = await putRes.json().catch(() => ({}));
        throw new Error(errJson.message || `GitHub API error: ${putRes.status}`);
      }

      // Also persist locally
      saveChanges();

      return {
        success: true,
        message: 'Successfully published to GitHub! Changes are being deployed to meritandbeyond.in.',
      };
    } catch (err: any) {
      return {
        success: false,
        message: err.message || 'Failed to publish to GitHub. Please check your token.',
      };
    }
  }, [content, saveChanges]);

  return (
    <ContentContext.Provider
      value={{
        content,
        isCustomized,
        lastSaved,
        updateContent,
        updateSection,
        saveChanges,
        resetToDefaults,
        exportBackup,
        importBackup,
        publishToGitHub,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): ContentContextValue {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
