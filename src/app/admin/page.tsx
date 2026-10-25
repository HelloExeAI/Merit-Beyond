'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Lock,
  Eye,
  EyeOff,
  LogOut,
  Save,
  RotateCcw,
  Download,
  Upload,
  Globe,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Layers,
  Home,
  Info,
  Briefcase,
  GraduationCap,
  Building2,
  BookOpen,
  Zap,
  Phone,
  Shield,
  Plus,
  Trash2,
  Sparkles,
  CloudUpload,
} from 'lucide-react';
import {
  authenticateAdmin,
  isSessionActive,
  terminateAdminSession,
  checkRateLimit,
} from '@/lib/auth';
import { useContent } from '@/lib/contentContext';

type TabKey =
  | 'global'
  | 'home'
  | 'about'
  | 'services'
  | 'learning'
  | 'industries'
  | 'insights'
  | 'quickconsult'
  | 'contact'
  | 'legal';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loadingCheck, setLoadingCheck] = useState<boolean>(true);

  // Login Form States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSubmitting, setLoginSubmitting] = useState(false);
  const [rateLimitInfo, setRateLimitInfo] = useState(checkRateLimit());

  // Dashboard Tab State
  const [activeTab, setActiveTab] = useState<TabKey>('global');
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number>(0);
  const [selectedIndustryIdx, setSelectedIndustryIdx] = useState<number>(0);
  const [selectedInsightIdx, setSelectedInsightIdx] = useState<number>(0);

  // Notification / Toast
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Content from context
  const {
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
  } = useContent();

  // Working copy for the editor
  const [formData, setFormData] = useState(content);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSavingLive, setIsSavingLive] = useState(false);

  // Check existing session
  useEffect(() => {
    const active = isSessionActive();
    setIsAuthenticated(active);
    setLoadingCheck(false);
    setRateLimitInfo(checkRateLimit());
  }, []);

  // Sync formData when content loads
  useEffect(() => {
    setFormData(content);
  }, [content]);

  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginSubmitting(true);

    try {
      const result = await authenticateAdmin(username, password);
      if (result.success) {
        setIsAuthenticated(true);
        setUsername('');
        setPassword('');
        showToast('Logged in successfully. Administrative session active.', 'success');
      } else {
        setLoginError(result.error || 'Authentication failed. Please verify credentials.');
        setRateLimitInfo(checkRateLimit());
      }
    } catch {
      setLoginError('An unexpected authentication error occurred.');
    } finally {
      setLoginSubmitting(false);
    }
  };

  const handleLogout = () => {
    terminateAdminSession();
    setIsAuthenticated(false);
    showToast('Admin session terminated.', 'info');
  };

  const handleSave = async () => {
    setIsSavingLive(true);
    const res = await saveChanges(formData);
    setIsSavingLive(false);
    if (res.success) {
      setHasUnsavedChanges(false);
      showToast('✓ Saved! Changes are now LIVE across meritandbeyond.in', 'success');
    } else {
      showToast(res.error || 'Error saving changes.', 'error');
    }
  };

  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset all website content to factory defaults? This cannot be undone.')) {
      await resetToDefaults();
      setFormData(content);
      setHasUnsavedChanges(false);
      showToast('Website content restored to factory defaults and live.', 'info');
    }
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target?.result as string;
      const res = await importBackup(text);
      if (res.success) {
        showToast('Backup restored successfully!', 'success');
      } else {
        showToast(res.error || 'Failed to import backup.', 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Helper to mark changes
  const updateForm = (updater: (prev: typeof formData) => typeof formData) => {
    setFormData((prev) => {
      const next = updater(prev);
      setHasUnsavedChanges(true);
      return next;
    });
  };

  if (loadingCheck) {
    return (
      <div className="min-h-screen bg-[#1E1914] flex items-center justify-center text-[#DEC8A9]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#B69A6A] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs uppercase tracking-widest font-mono text-[#B69A6A]">Initialising Security Context...</p>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 1: SECURE LOGIN
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#191512] flex items-center justify-center p-4 selection:bg-[#B69A6A]/30">
        <div className="w-full max-w-md bg-[#241E18] border border-[#B69A6A]/30 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#B69A6A]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#1E1914] border border-[#B69A6A]/40 flex items-center justify-center mx-auto text-[#B69A6A] shadow-inner">
              <Lock className="w-5 h-5" />
            </div>
            <h1 className="font-serif text-2xl text-white font-medium">Merit &amp; Beyond</h1>
            <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#B69A6A]">
              Administrative Content Studio
            </p>
            <p className="text-xs text-[#DEC8A9]/60 max-w-xs mx-auto">
              Authorised personnel only. Enter verified administrative credentials to manage live website content.
            </p>
          </div>

          {/* Lockout Warning */}
          {rateLimitInfo.isLocked && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-800/60 text-red-200 text-xs flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Security Lock Active</p>
                <p className="text-red-300/80 mt-1">
                  Access temporarily restricted due to repeated invalid attempts. Retry in {Math.ceil(rateLimitInfo.remainingSeconds / 60)} minutes.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {loginError && !rateLimitInfo.isLocked && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-950/40 border border-red-900/60 text-red-300 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#DEC8A9]/80 font-medium mb-2">
                Administrator Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={rateLimitInfo.isLocked || loginSubmitting}
                placeholder="Enter admin username"
                required
                className="w-full px-4 py-3 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white placeholder-[#DEC8A9]/30 text-sm focus:outline-none focus:border-[#B69A6A] focus:ring-1 focus:ring-[#B69A6A] transition-all disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#DEC8A9]/80 font-medium mb-2">
                Security Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={rateLimitInfo.isLocked || loginSubmitting}
                  placeholder="Enter security password"
                  required
                  className="w-full px-4 py-3 pr-11 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white placeholder-[#DEC8A9]/30 text-sm focus:outline-none focus:border-[#B69A6A] focus:ring-1 focus:ring-[#B69A6A] transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#DEC8A9]/50 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={rateLimitInfo.isLocked || loginSubmitting}
              className="w-full py-3.5 px-4 bg-[#B69A6A] hover:bg-[#C5AA7A] text-[#1E1914] font-semibold text-sm rounded-xl transition-all shadow-lg hover:shadow-[#B69A6A]/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loginSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#1E1914] border-t-transparent rounded-full animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Unlock Administrative Studio</span>
                </>
              )}
            </button>
          </form>

          {/* Notice */}
          <div className="mt-8 pt-6 border-t border-[#B69A6A]/10 text-center">
            <p className="text-[11px] text-[#DEC8A9]/40 leading-relaxed">
              Protected under salted SHA-256 cryptographic verification. Session access is audited and monitored.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#191512] text-[#DEC8A9] flex flex-col font-sans selection:bg-[#B69A6A]/30">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-2xl border text-sm flex items-center gap-3 backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-3 ${
            toastMessage.type === 'success'
              ? 'bg-emerald-950/90 border-emerald-700/60 text-emerald-200'
              : toastMessage.type === 'error'
              ? 'bg-red-950/90 border-red-700/60 text-red-200'
              : 'bg-[#29231D]/90 border-[#B69A6A]/40 text-[#DEC8A9]'
          }`}
        >
          {toastMessage.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
          )}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Top Administrative Bar */}
      <header className="sticky top-0 z-40 bg-[#1E1914]/95 backdrop-blur-md border-b border-[#B69A6A]/20 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Left: Brand & Status */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#B69A6A]/10 border border-[#B69A6A]/40 flex items-center justify-center text-[#B69A6A]">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base text-white font-medium">Merit &amp; Beyond</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#B69A6A]/20 text-[#B69A6A] border border-[#B69A6A]/30">
                  Live CMS
                </span>
                {hasUnsavedChanges && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Unsaved Edits
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#DEC8A9]/50">
                {lastSaved ? `Last saved: ${new Date(lastSaved).toLocaleTimeString()}` : 'Factory Default Content Active'}
              </p>
            </div>
          </div>

          {/* Right: Master Actions */}
          <div className="flex items-center flex-wrap gap-2.5">
            {/* Live Website Preview */}
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#29231D] hover:bg-[#342C24] border border-[#B69A6A]/30 text-xs text-[#DEC8A9] font-medium transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#B69A6A]" />
              <span>Preview Live Site</span>
            </Link>

            {/* Export JSON */}
            <button
              onClick={exportBackup}
              title="Download content backup as JSON"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#29231D] hover:bg-[#342C24] border border-[#B69A6A]/30 text-xs text-[#DEC8A9] font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#B69A6A]" />
              <span className="hidden sm:inline">Export</span>
            </button>

            {/* Import JSON */}
            <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#29231D] hover:bg-[#342C24] border border-[#B69A6A]/30 text-xs text-[#DEC8A9] font-medium transition-colors cursor-pointer">
              <Upload className="w-3.5 h-3.5 text-[#B69A6A]" />
              <span className="hidden sm:inline">Import</span>
              <input type="file" accept=".json" onChange={handleImportFile} className="hidden" />
            </label>

            {/* Reset Defaults */}
            <button
              onClick={handleReset}
              title="Reset all content to factory defaults"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-950/30 hover:bg-red-950/60 border border-red-900/40 text-xs text-red-300 font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-red-400" />
              <span className="hidden sm:inline">Reset</span>
            </button>

            {/* Master Save Button */}
            <button
              onClick={handleSave}
              disabled={isSavingLive}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#B69A6A] hover:bg-[#C5AA7A] text-[#1E1914] text-xs font-bold transition-all shadow-md hover:shadow-[#B69A6A]/20 disabled:opacity-60"
            >
              {isSavingLive ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-[#1E1914] border-t-transparent rounded-full animate-spin" />
                  <span>Syncing Live...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              title="End session"
              className="inline-flex items-center p-2 rounded-lg bg-[#29231D] hover:bg-red-950/50 border border-[#B69A6A]/20 text-[#DEC8A9]/70 hover:text-red-300 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Studio Body with Navigation Tabs */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-3 space-y-2">
            <div className="bg-[#241E18] border border-[#B69A6A]/20 rounded-2xl p-3 shadow-md sticky top-24">
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#B69A6A] px-3 py-2 font-semibold">
                Content Modules
              </p>
              <nav className="space-y-1">
                {[
                  { id: 'global' as TabKey, label: 'Global & Brand', icon: Globe },
                  { id: 'home' as TabKey, label: 'Homepage (11 Sections)', icon: Home },
                  { id: 'about' as TabKey, label: 'About Page', icon: Info },
                  { id: 'services' as TabKey, label: 'Services (8 Disciplines)', icon: Briefcase },
                  { id: 'learning' as TabKey, label: 'Learning & Workshops', icon: GraduationCap },
                  { id: 'industries' as TabKey, label: 'Industries (4 Sectors)', icon: Building2 },
                  { id: 'insights' as TabKey, label: 'Insights & Articles (6)', icon: BookOpen },
                  { id: 'quickconsult' as TabKey, label: 'M&B QuickConsult (Pilot)', icon: Zap },
                  { id: 'contact' as TabKey, label: 'Contact & Enquiries', icon: Phone },
                  { id: 'legal' as TabKey, label: 'Legal & Compliance', icon: Shield },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-[#B69A6A] text-[#1E1914] font-semibold shadow-md'
                          : 'text-[#DEC8A9]/80 hover:bg-[#2D261F] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#1E1914]' : 'text-[#B69A6A]'}`} />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 opacity-50 ${isActive ? 'rotate-90' : ''}`} />
                    </button>
                  );
                })}
              </nav>

              <div className="mt-4 pt-4 border-t border-[#B69A6A]/10 px-3">
                <p className="text-[11px] text-[#DEC8A9]/50 leading-relaxed">
                  Edits save instantly to local storage and sync in real-time across tabs. Use &quot;Publish to GitHub&quot; to push changes to the live domain.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Editing Panel */}
          <main className="lg:col-span-9 bg-[#241E18] border border-[#B69A6A]/20 rounded-2xl p-6 sm:p-8 shadow-xl">
            {/* TAB 1: GLOBAL & BRAND */}
            {activeTab === 'global' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-white font-medium">Global Brand &amp; Verified Contacts</h2>
                  <p className="text-xs text-[#DEC8A9]/60 mt-1">
                    Manage overarching identity parameters, header tagline, verified contact coordinates, and statutory disclaimers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.global.brandName}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          global: { ...prev.global, brandName: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs focus:outline-none focus:border-[#B69A6A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Advisory Category
                    </label>
                    <input
                      type="text"
                      value={formData.global.category}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          global: { ...prev.global, category: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs focus:outline-none focus:border-[#B69A6A]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Official Tagline (Pipe-separated order)
                    </label>
                    <input
                      type="text"
                      value={formData.global.tagline}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          global: { ...prev.global, tagline: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs focus:outline-none focus:border-[#B69A6A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Verified Contact Email
                    </label>
                    <input
                      type="email"
                      value={formData.global.email}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          global: { ...prev.global, email: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs focus:outline-none focus:border-[#B69A6A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Verified Phone Number
                    </label>
                    <input
                      type="text"
                      value={formData.global.phone}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          global: { ...prev.global, phone: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs focus:outline-none focus:border-[#B69A6A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Primary Domain URL
                    </label>
                    <input
                      type="text"
                      value={formData.global.website}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          global: { ...prev.global, website: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs focus:outline-none focus:border-[#B69A6A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      LinkedIn Page URL
                    </label>
                    <input
                      type="url"
                      value={formData.global.linkedinUrl}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          global: { ...prev.global, linkedinUrl: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs focus:outline-none focus:border-[#B69A6A]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Non-Negotiable Statutory Compliance Notice
                    </label>
                    <textarea
                      rows={3}
                      value={formData.global.disclaimer}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          global: { ...prev.global, disclaimer: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs focus:outline-none focus:border-[#B69A6A] leading-relaxed"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: HOMEPAGE */}
            {activeTab === 'home' && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-xl text-white font-medium">Homepage Content (All 11 Sections)</h2>
                  <p className="text-xs text-[#DEC8A9]/60 mt-1">
                    Edit the hero banner, value proposition pillars, metric counters, philosophy story, and the 5-stage advisory approach.
                  </p>
                </div>

                {/* Section A: Hero */}
                <div className="p-5 bg-[#1E1914] border border-[#B69A6A]/20 rounded-xl space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B69A6A] font-semibold block">
                    Section 1: Hero Banner
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-xs text-[#DEC8A9]/80 mb-1.5">Hero Eyebrow Tag</label>
                      <input
                        type="text"
                        value={formData.home.hero.eyebrow}
                        onChange={(e) =>
                          updateForm((prev) => ({
                            ...prev,
                            home: { ...prev.home, hero: { ...prev.home.hero, eyebrow: e.target.value } },
                          }))
                        }
                        className="w-full px-3 py-2 bg-[#14110E] border border-[#B69A6A]/30 rounded-lg text-white text-xs"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs text-[#DEC8A9]/80 mb-1.5">H1 Primary Headline</label>
                      <input
                        type="text"
                        value={formData.home.hero.headline}
                        onChange={(e) =>
                          updateForm((prev) => ({
                            ...prev,
                            home: { ...prev.home, hero: { ...prev.home.hero, headline: e.target.value } },
                          }))
                        }
                        className="w-full px-3 py-2 bg-[#14110E] border border-[#B69A6A]/30 rounded-lg text-white text-xs font-serif"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs text-[#DEC8A9]/80 mb-1.5">Hero Subtitle</label>
                      <textarea
                        rows={2}
                        value={formData.home.hero.subheadline}
                        onChange={(e) =>
                          updateForm((prev) => ({
                            ...prev,
                            home: { ...prev.home, hero: { ...prev.home.hero, subheadline: e.target.value } },
                          }))
                        }
                        className="w-full px-3 py-2 bg-[#14110E] border border-[#B69A6A]/30 rounded-lg text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#DEC8A9]/80 mb-1.5">Primary CTA Label</label>
                      <input
                        type="text"
                        value={formData.home.hero.ctaPrimaryText}
                        onChange={(e) =>
                          updateForm((prev) => ({
                            ...prev,
                            home: { ...prev.home, hero: { ...prev.home.hero, ctaPrimaryText: e.target.value } },
                          }))
                        }
                        className="w-full px-3 py-2 bg-[#14110E] border border-[#B69A6A]/30 rounded-lg text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#DEC8A9]/80 mb-1.5">Secondary CTA Label</label>
                      <input
                        type="text"
                        value={formData.home.hero.ctaSecondaryText}
                        onChange={(e) =>
                          updateForm((prev) => ({
                            ...prev,
                            home: { ...prev.home, hero: { ...prev.home.hero, ctaSecondaryText: e.target.value } },
                          }))
                        }
                        className="w-full px-3 py-2 bg-[#14110E] border border-[#B69A6A]/30 rounded-lg text-white text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Section B: Value Proposition */}
                <div className="p-5 bg-[#1E1914] border border-[#B69A6A]/20 rounded-xl space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B69A6A] font-semibold block">
                    Section 2: Value Proposition &amp; Pillars
                  </span>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-[#DEC8A9]/80 mb-1.5">Section Headline</label>
                      <input
                        type="text"
                        value={formData.home.valueProp.headline}
                        onChange={(e) =>
                          updateForm((prev) => ({
                            ...prev,
                            home: { ...prev.home, valueProp: { ...prev.home.valueProp, headline: e.target.value } },
                          }))
                        }
                        className="w-full px-3 py-2 bg-[#14110E] border border-[#B69A6A]/30 rounded-lg text-white text-xs font-serif"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {formData.home.valueProp.pillars.map((pillar, pIdx) => (
                        <div key={pIdx} className="p-3.5 bg-[#14110E] border border-[#B69A6A]/20 rounded-lg space-y-2">
                          <label className="block text-[11px] font-semibold text-[#B69A6A]">
                            Pillar {pIdx + 1} Title
                          </label>
                          <input
                            type="text"
                            value={pillar.title}
                            onChange={(e) => {
                              const newPillars = [...formData.home.valueProp.pillars];
                              newPillars[pIdx].title = e.target.value;
                              updateForm((prev) => ({
                                ...prev,
                                home: { ...prev.home, valueProp: { ...prev.home.valueProp, pillars: newPillars } },
                              }));
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#1E1914] border border-[#B69A6A]/30 rounded text-xs text-white"
                          />
                          <label className="block text-[11px] text-[#DEC8A9]/70">Description</label>
                          <textarea
                            rows={2}
                            value={pillar.desc}
                            onChange={(e) => {
                              const newPillars = [...formData.home.valueProp.pillars];
                              newPillars[pIdx].desc = e.target.value;
                              updateForm((prev) => ({
                                ...prev,
                                home: { ...prev.home, valueProp: { ...prev.home.valueProp, pillars: newPillars } },
                              }));
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#1E1914] border border-[#B69A6A]/30 rounded text-xs text-white"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section C: Stats */}
                <div className="p-5 bg-[#1E1914] border border-[#B69A6A]/20 rounded-xl space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B69A6A] font-semibold block">
                    Section 3: Metric Stat Cards (4 Cards)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {formData.home.stats.map((st, sIdx) => (
                      <div key={sIdx} className="p-3 bg-[#14110E] border border-[#B69A6A]/20 rounded-lg space-y-2">
                        <label className="block text-[11px] text-[#B69A6A] font-mono">Value / Metric</label>
                        <input
                          type="text"
                          value={st.number}
                          onChange={(e) => {
                            const newStats = [...formData.home.stats];
                            newStats[sIdx].number = e.target.value;
                            updateForm((prev) => ({
                              ...prev,
                              home: { ...prev.home, stats: newStats },
                            }));
                          }}
                          className="w-full px-2 py-1 bg-[#1E1914] border border-[#B69A6A]/30 rounded text-xs text-white font-bold"
                        />
                        <label className="block text-[11px] text-[#DEC8A9]/70">Label</label>
                        <input
                          type="text"
                          value={st.label}
                          onChange={(e) => {
                            const newStats = [...formData.home.stats];
                            newStats[sIdx].label = e.target.value;
                            updateForm((prev) => ({
                              ...prev,
                              home: { ...prev.home, stats: newStats },
                            }));
                          }}
                          className="w-full px-2 py-1 bg-[#1E1914] border border-[#B69A6A]/30 rounded text-xs text-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section D: The 5 Stages */}
                <div className="p-5 bg-[#1E1914] border border-[#B69A6A]/20 rounded-xl space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B69A6A] font-semibold block">
                    Section 5: The 5-Stage Advisory Methodology
                  </span>
                  <div className="space-y-3">
                    {formData.home.approach.stages.map((stg, stgIdx) => (
                      <div key={stgIdx} className="p-3.5 bg-[#14110E] border border-[#B69A6A]/20 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                        <div className="md:col-span-2 font-mono text-xs text-[#B69A6A] font-bold">
                          Stage {stg.step}
                        </div>
                        <div className="md:col-span-3">
                          <input
                            type="text"
                            value={stg.name}
                            onChange={(e) => {
                              const newStages = [...formData.home.approach.stages];
                              newStages[stgIdx].name = e.target.value;
                              updateForm((prev) => ({
                                ...prev,
                                home: { ...prev.home, approach: { ...prev.home.approach, stages: newStages } },
                              }));
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#1E1914] border border-[#B69A6A]/30 rounded text-xs text-white font-medium"
                          />
                        </div>
                        <div className="md:col-span-7">
                          <input
                            type="text"
                            value={stg.description}
                            onChange={(e) => {
                              const newStages = [...formData.home.approach.stages];
                              newStages[stgIdx].description = e.target.value;
                              updateForm((prev) => ({
                                ...prev,
                                home: { ...prev.home, approach: { ...prev.home.approach, stages: newStages } },
                              }));
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#1E1914] border border-[#B69A6A]/30 rounded text-xs text-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: ABOUT PAGE */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-white font-medium">About Page Content</h2>
                  <p className="text-xs text-[#DEC8A9]/60 mt-1">
                    Edit the foundational purpose, narrative story, mission, vision, and advisory ethics.
                  </p>
                </div>

                <div className="space-y-5 pt-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Hero Headline
                    </label>
                    <input
                      type="text"
                      value={formData.about.hero.headline}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          about: { ...prev.about, hero: { ...prev.about.hero, headline: e.target.value } },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs font-serif"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Hero Subheadline
                    </label>
                    <textarea
                      rows={2}
                      value={formData.about.hero.subheadline}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          about: { ...prev.about, hero: { ...prev.about.hero, subheadline: e.target.value } },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Story Narrative (Main Body)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.about.story.body}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          about: { ...prev.about, story: { ...prev.about.story, body: e.target.value } },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs leading-relaxed"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                        Mission Statement
                      </label>
                      <textarea
                        rows={3}
                        value={formData.about.purpose.mission}
                        onChange={(e) =>
                          updateForm((prev) => ({
                            ...prev,
                            about: { ...prev.about, purpose: { ...prev.about.purpose, mission: e.target.value } },
                          }))
                        }
                        className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                        Vision Statement
                      </label>
                      <textarea
                        rows={3}
                        value={formData.about.purpose.vision}
                        onChange={(e) =>
                          updateForm((prev) => ({
                            ...prev,
                            about: { ...prev.about, purpose: { ...prev.about.purpose, vision: e.target.value } },
                          }))
                        }
                        className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: SERVICES */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-white font-medium">Core Advisory &amp; Specialist Services</h2>
                  <p className="text-xs text-[#DEC8A9]/60 mt-1">
                    Select any of the 8 services to edit headlines, deliverables, outcomes, and scope parameters.
                  </p>
                </div>

                {/* Service Selector Tabs */}
                <div className="flex flex-wrap gap-2 pt-2 border-b border-[#B69A6A]/20 pb-4">
                  {formData.services.map((srv, idx) => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedServiceIdx(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedServiceIdx === idx
                          ? 'bg-[#B69A6A] text-[#1E1914] font-semibold shadow-sm'
                          : 'bg-[#1E1914] text-[#DEC8A9]/70 hover:bg-[#2E2720] hover:text-white'
                      }`}
                    >
                      {srv.categoryNumber}. {srv.title.split(' ')[0]}...
                    </button>
                  ))}
                </div>

                {/* Selected Service Form */}
                {formData.services[selectedServiceIdx] && (
                  <div className="space-y-5 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#B69A6A] uppercase tracking-wider">
                        Editing Service {formData.services[selectedServiceIdx].categoryNumber} of {formData.services.length}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#B69A6A]/10 text-[#B69A6A] border border-[#B69A6A]/30">
                        {formData.services[selectedServiceIdx].isCoreAdvisory ? 'Core Advisory Discipline' : 'Specialist Offering'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                          Service Title
                        </label>
                        <input
                          type="text"
                          value={formData.services[selectedServiceIdx].title}
                          onChange={(e) => {
                            const newServices = [...formData.services];
                            newServices[selectedServiceIdx].title = e.target.value;
                            updateForm((prev) => ({ ...prev, services: newServices }));
                          }}
                          className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs font-serif"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                          Hero Tagline
                        </label>
                        <input
                          type="text"
                          value={formData.services[selectedServiceIdx].heroTagline}
                          onChange={(e) => {
                            const newServices = [...formData.services];
                            newServices[selectedServiceIdx].heroTagline = e.target.value;
                            updateForm((prev) => ({ ...prev, services: newServices }));
                          }}
                          className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                          Short Subtitle / Value Hook
                        </label>
                        <textarea
                          rows={2}
                          value={formData.services[selectedServiceIdx].shortSubtitle}
                          onChange={(e) => {
                            const newServices = [...formData.services];
                            newServices[selectedServiceIdx].shortSubtitle = e.target.value;
                            updateForm((prev) => ({ ...prev, services: newServices }));
                          }}
                          className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                          Key Deliverables (One per line)
                        </label>
                        <textarea
                          rows={5}
                          value={formData.services[selectedServiceIdx].deliverables.join('\n')}
                          onChange={(e) => {
                            const lines = e.target.value.split('\n');
                            const newServices = [...formData.services];
                            newServices[selectedServiceIdx].deliverables = lines;
                            updateForm((prev) => ({ ...prev, services: newServices }));
                          }}
                          className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs font-mono leading-relaxed"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                          Expected Outcomes (One per line)
                        </label>
                        <textarea
                          rows={4}
                          value={formData.services[selectedServiceIdx].whatGoodLooksLike.join('\n')}
                          onChange={(e) => {
                            const lines = e.target.value.split('\n');
                            const newServices = [...formData.services];
                            newServices[selectedServiceIdx].whatGoodLooksLike = lines;
                            updateForm((prev) => ({ ...prev, services: newServices }));
                          }}
                          className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs font-mono leading-relaxed"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 5: LEARNING */}
            {activeTab === 'learning' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-white font-medium">Workplace Learning &amp; Flagship Programme</h2>
                  <p className="text-xs text-[#DEC8A9]/60 mt-1">
                    Manage the flagship Performance Management programme, corporate cohorts, open studios, and policies.
                  </p>
                </div>

                <div className="p-5 bg-[#1E1914] border border-[#B69A6A]/20 rounded-xl space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B69A6A] font-semibold block">
                    Flagship Programme Details
                  </span>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-[#DEC8A9]/80 mb-1.5">Programme Title</label>
                      <input
                        type="text"
                        value={formData.learning.flagship.title}
                        onChange={(e) =>
                          updateForm((prev) => ({
                            ...prev,
                            learning: {
                              ...prev.learning,
                              flagship: { ...prev.learning.flagship, title: e.target.value },
                            },
                          }))
                        }
                        className="w-full px-3.5 py-2 bg-[#14110E] border border-[#B69A6A]/30 rounded-lg text-white text-xs font-serif"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[#DEC8A9]/80 mb-1.5">Pilot Duration</label>
                        <input
                          type="text"
                          value={formData.learning.flagship.pilotDuration}
                          onChange={(e) =>
                            updateForm((prev) => ({
                              ...prev,
                              learning: {
                                ...prev.learning,
                                flagship: { ...prev.learning.flagship, pilotDuration: e.target.value },
                              },
                            }))
                          }
                          className="w-full px-3 py-2 bg-[#14110E] border border-[#B69A6A]/30 rounded-lg text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#DEC8A9]/80 mb-1.5">Delivery Mode</label>
                        <input
                          type="text"
                          value={formData.learning.flagship.deliveryMode}
                          onChange={(e) =>
                            updateForm((prev) => ({
                              ...prev,
                              learning: {
                                ...prev.learning,
                                flagship: { ...prev.learning.flagship, deliveryMode: e.target.value as any },
                              },
                            }))
                          }
                          className="w-full px-3 py-2 bg-[#14110E] border border-[#B69A6A]/30 rounded-lg text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-[#DEC8A9]/80 mb-1.5">
                        Learning Outcomes (One per line)
                      </label>
                      <textarea
                        rows={4}
                        value={formData.learning.flagship.outcomes.join('\n')}
                        onChange={(e) => {
                          const lines = e.target.value.split('\n');
                          updateForm((prev) => ({
                            ...prev,
                            learning: {
                              ...prev.learning,
                              flagship: { ...prev.learning.flagship, outcomes: lines },
                            },
                          }));
                        }}
                        className="w-full px-3.5 py-2.5 bg-[#14110E] border border-[#B69A6A]/30 rounded-lg text-white text-xs font-mono leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: INDUSTRIES */}
            {activeTab === 'industries' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-white font-medium">Industry Sectors (4 Focus Areas)</h2>
                  <p className="text-xs text-[#DEC8A9]/60 mt-1">
                    Customise industry context, operating realities, and advisory points for Hospitality, IT/ITES, Real Estate, and Manufacturing.
                  </p>
                </div>

                {/* Industry Selector */}
                <div className="flex flex-wrap gap-2 pt-2 border-b border-[#B69A6A]/20 pb-4">
                  {formData.industries.map((ind, idx) => (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustryIdx(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedIndustryIdx === idx
                          ? 'bg-[#B69A6A] text-[#1E1914] font-semibold'
                          : 'bg-[#1E1914] text-[#DEC8A9]/70 hover:bg-[#2E2720]'
                      }`}
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>

                {formData.industries[selectedIndustryIdx] && (
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                        Page Heading
                      </label>
                      <input
                        type="text"
                        value={formData.industries[selectedIndustryIdx].pageHeading}
                        onChange={(e) => {
                          const newInd = [...formData.industries];
                          newInd[selectedIndustryIdx].pageHeading = e.target.value;
                          updateForm((prev) => ({ ...prev, industries: newInd }));
                        }}
                        className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs font-serif"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                        Hero Tagline
                      </label>
                      <input
                        type="text"
                        value={formData.industries[selectedIndustryIdx].heroTagline}
                        onChange={(e) => {
                          const newInd = [...formData.industries];
                          newInd[selectedIndustryIdx].heroTagline = e.target.value;
                          updateForm((prev) => ({ ...prev, industries: newInd }));
                        }}
                        className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                        Operating Context
                      </label>
                      <textarea
                        rows={4}
                        value={formData.industries[selectedIndustryIdx].operatingContext}
                        onChange={(e) => {
                          const newInd = [...formData.industries];
                          newInd[selectedIndustryIdx].operatingContext = e.target.value;
                          updateForm((prev) => ({ ...prev, industries: newInd }));
                        }}
                        className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs leading-relaxed"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 7: INSIGHTS */}
            {activeTab === 'insights' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-white font-medium">Advisory Insights &amp; Articles (6 Articles)</h2>
                  <p className="text-xs text-[#DEC8A9]/60 mt-1">
                    Manage titles, executive excerpts, reading times, and publication dates for thought-leadership pieces.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-b border-[#B69A6A]/20 pb-4">
                  {formData.insights.map((ins, idx) => (
                    <button
                      key={ins.id}
                      onClick={() => setSelectedInsightIdx(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedInsightIdx === idx
                          ? 'bg-[#B69A6A] text-[#1E1914] font-semibold'
                          : 'bg-[#1E1914] text-[#DEC8A9]/70 hover:bg-[#2E2720]'
                      }`}
                    >
                      Article {idx + 1}
                    </button>
                  ))}
                </div>

                {formData.insights[selectedInsightIdx] && (
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                        Article Headline
                      </label>
                      <input
                        type="text"
                        value={formData.insights[selectedInsightIdx].title}
                        onChange={(e) => {
                          const newIns = [...formData.insights];
                          newIns[selectedInsightIdx].title = e.target.value;
                          updateForm((prev) => ({ ...prev, insights: newIns }));
                        }}
                        className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs font-serif"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                          Category / Pillar
                        </label>
                        <input
                          type="text"
                          value={formData.insights[selectedInsightIdx].category}
                          onChange={(e) => {
                            const newIns = [...formData.insights];
                            newIns[selectedInsightIdx].category = e.target.value;
                            updateForm((prev) => ({ ...prev, insights: newIns }));
                          }}
                          className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                          Read Time
                        </label>
                        <input
                          type="text"
                          value={formData.insights[selectedInsightIdx].readTime}
                          onChange={(e) => {
                            const newIns = [...formData.insights];
                            newIns[selectedInsightIdx].readTime = e.target.value;
                            updateForm((prev) => ({ ...prev, insights: newIns }));
                          }}
                          className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                        Executive Excerpt
                      </label>
                      <textarea
                        rows={3}
                        value={formData.insights[selectedInsightIdx].excerpt}
                        onChange={(e) => {
                          const newIns = [...formData.insights];
                          newIns[selectedInsightIdx].excerpt = e.target.value;
                          updateForm((prev) => ({ ...prev, insights: newIns }));
                        }}
                        className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs leading-relaxed"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 8: QUICKCONSULT */}
            {activeTab === 'quickconsult' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-white font-medium">M&amp;B QuickConsult (Pilot Product)</h2>
                  <p className="text-xs text-[#DEC8A9]/60 mt-1">
                    Manage the rapid-turnaround pilot advisory model, pricing hypotheses, and diagnostic packages.
                  </p>
                </div>

                <div className="space-y-5 pt-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Product Headline
                    </label>
                    <input
                      type="text"
                      value={formData.quickconsult.headline}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          quickconsult: { ...prev.quickconsult, headline: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs font-serif"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Subheadline
                    </label>
                    <textarea
                      rows={2}
                      value={formData.quickconsult.subheadline}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          quickconsult: { ...prev.quickconsult, subheadline: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <span className="text-xs font-mono uppercase text-[#B69A6A] tracking-wider block">
                      3 Pilot Hypotheses
                    </span>
                    {formData.quickconsult.pricingHypotheses.map((hyp, hIdx) => (
                      <div key={hIdx} className="p-4 bg-[#1E1914] border border-[#B69A6A]/20 rounded-xl space-y-3">
                        <div className="flex items-center justify-between">
                          <input
                            type="text"
                            value={hyp.title}
                            onChange={(e) => {
                              const newHyp = [...formData.quickconsult.pricingHypotheses];
                              newHyp[hIdx].title = e.target.value;
                              updateForm((prev) => ({
                                ...prev,
                                quickconsult: { ...prev.quickconsult, pricingHypotheses: newHyp },
                              }));
                            }}
                            className="w-2/3 px-2.5 py-1 bg-[#14110E] border border-[#B69A6A]/30 rounded text-xs text-white font-medium"
                          />
                          <input
                            type="text"
                            value={hyp.turnaround}
                            onChange={(e) => {
                              const newHyp = [...formData.quickconsult.pricingHypotheses];
                              newHyp[hIdx].turnaround = e.target.value;
                              updateForm((prev) => ({
                                ...prev,
                                quickconsult: { ...prev.quickconsult, pricingHypotheses: newHyp },
                              }));
                            }}
                            className="w-1/4 px-2 py-1 bg-[#14110E] border border-[#B69A6A]/30 rounded text-xs text-[#B69A6A] text-right font-mono"
                          />
                        </div>
                        <input
                          type="text"
                          value={hyp.priceNote}
                          onChange={(e) => {
                            const newHyp = [...formData.quickconsult.pricingHypotheses];
                            newHyp[hIdx].priceNote = e.target.value;
                            updateForm((prev) => ({
                              ...prev,
                              quickconsult: { ...prev.quickconsult, pricingHypotheses: newHyp },
                            }));
                          }}
                          className="w-full px-2.5 py-1 bg-[#14110E] border border-[#B69A6A]/30 rounded text-xs text-[#DEC8A9]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 9: CONTACT */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-white font-medium">Contact &amp; Enquiry Parameters</h2>
                  <p className="text-xs text-[#DEC8A9]/60 mt-1">
                    Manage direct coordinates, working hours, and response time commitments.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Direct Email
                    </label>
                    <input
                      type="email"
                      value={formData.contact.directEmail}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, directEmail: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Direct Phone
                    </label>
                    <input
                      type="text"
                      value={formData.contact.directPhone}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, directPhone: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Office Location
                    </label>
                    <input
                      type="text"
                      value={formData.contact.officeLocation}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, officeLocation: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Response Time Commitment
                    </label>
                    <input
                      type="text"
                      value={formData.contact.responseCommitment}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, responseCommitment: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 10: LEGAL */}
            {activeTab === 'legal' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-white font-medium">Legal Policies &amp; Compliance</h2>
                  <p className="text-xs text-[#DEC8A9]/60 mt-1">
                    Manage overarching legal summaries for Privacy, Terms, Cookies, and Accessibility.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Privacy Policy Overview
                    </label>
                    <textarea
                      rows={3}
                      value={formData.legal.privacyOverview}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          legal: { ...prev.legal, privacyOverview: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A6A] font-semibold mb-2">
                      Terms of Use Overview
                    </label>
                    <textarea
                      rows={3}
                      value={formData.legal.termsOverview}
                      onChange={(e) =>
                        updateForm((prev) => ({
                          ...prev,
                          legal: { ...prev.legal, termsOverview: e.target.value },
                        }))
                      }
                      className="w-full px-3.5 py-2.5 bg-[#1A1612] border border-[#B69A6A]/30 rounded-xl text-white text-xs leading-relaxed"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Save Action Bar inside panel */}
            <div className="mt-8 pt-6 border-t border-[#B69A6A]/20 flex items-center justify-between">
              <span className="text-xs text-[#DEC8A9]/50">
                {hasUnsavedChanges ? '⚠️ You have unsaved changes in this session.' : '✓ All content synchronized.'}
              </span>
              <button
                onClick={handleSave}
                disabled={isSavingLive}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#B69A6A] hover:bg-[#C5AA7A] text-[#1E1914] text-xs font-bold transition-all shadow-lg hover:shadow-[#B69A6A]/20 disabled:opacity-60"
              >
                {isSavingLive ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-[#1E1914] border-t-transparent rounded-full animate-spin" />
                    <span>Syncing Live...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save All Changes</span>
                  </>
                )}
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
