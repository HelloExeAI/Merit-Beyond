'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { SiteContent, defaultSiteContent } from '@/data/siteContent';
import { fetchLiveContent, commitLiveContent } from './syncService';

const STORAGE_KEY = 'mb_site_content_master';
const BROADCAST_CHANNEL = 'mb_content_live_sync';

interface ContentContextValue {
  content: SiteContent;
  isCustomized: boolean;
  lastSaved: string | null;
  isSyncing: boolean;
  updateContent: (updater: (prev: SiteContent) => SiteContent) => void;
  updateSection: <K extends keyof SiteContent>(section: K, data: any) => void;
  saveChanges: (newContent?: SiteContent) => Promise<{ success: boolean; syncedLive: boolean; error?: string }>;
  resetToDefaults: () => Promise<void>;
  exportBackup: () => void;
  importBackup: (jsonString: string) => Promise<{ success: boolean; error?: string }>;
}

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [isCustomized, setIsCustomized] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  // Initialize from remote live content & localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let isMounted = true;

    // 1. First, check local storage (fastest for local preview)
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') {
          setContent({ ...defaultSiteContent, ...parsed });
          setIsCustomized(true);
          setLastSaved(parsed.lastUpdated || null);
        }
      }
    } catch {
      // Ignore parse errors
    }

    // 2. Then, fetch latest live content from remote repository
    fetchLiveContent().then((remoteData) => {
      if (isMounted && remoteData) {
        setContent(remoteData);
        setIsCustomized(true);
        setLastSaved(remoteData.lastUpdated || null);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteData));
        } catch {
          // Ignore storage quota errors
        }
      }
    });

    // 3. Set up real-time cross-tab sync via BroadcastChannel
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
      isMounted = false;
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

  /**
   * Saves content locally AND automatically commits to GitHub in the background
   */
  const saveChanges = useCallback(
    async (newContent?: SiteContent): Promise<{ success: boolean; syncedLive: boolean; error?: string }> => {
      const toSave = newContent || content;
      const timestamp = new Date().toISOString();
      const updated: SiteContent = {
        ...toSave,
        lastUpdated: timestamp,
        version: (toSave.version || 1) + 1,
      };

      setIsSyncing(true);

      // 1. Immediately save to localStorage and broadcast locally
      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

          if (typeof BroadcastChannel !== 'undefined') {
            const channel = new BroadcastChannel(BROADCAST_CHANNEL);
            channel.postMessage({ type: 'CONTENT_SAVED', payload: updated });
            channel.close();
          }
        }

        setContent(updated);
        setIsCustomized(true);
        setLastSaved(timestamp);
      } catch (err) {
        console.error('Failed to save to localStorage:', err);
      }

      // 2. Automatically commit to live repository in the background
      const commitRes = await commitLiveContent(updated);
      setIsSyncing(false);

      if (commitRes.success) {
        return { success: true, syncedLive: true };
      } else {
        return {
          success: true,
          syncedLive: false,
          error: commitRes.error || 'Changes saved in browser; remote sync pending.',
        };
      }
    },
    [content]
  );

  const resetToDefaults = useCallback(async () => {
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

      // Commit default content to repository in background
      await commitLiveContent(defaultSiteContent);
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

  const importBackup = useCallback(
    async (jsonString: string): Promise<{ success: boolean; error?: string }> => {
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

        const res = await saveChanges(merged);
        return { success: res.success, error: res.error };
      } catch (err: any) {
        return { success: false, error: err?.message || 'Failed to parse JSON backup file.' };
      }
    },
    [saveChanges]
  );

  return (
    <ContentContext.Provider
      value={{
        content,
        isCustomized,
        lastSaved,
        isSyncing,
        updateContent,
        updateSection,
        saveChanges,
        resetToDefaults,
        exportBackup,
        importBackup,
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
