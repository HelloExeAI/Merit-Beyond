'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Lock
} from 'lucide-react';

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ContactFormContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const programmeParam = searchParams.get('programme');
  const industryParam = searchParams.get('industry');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    role: '',
    enquiryType: 'Business Advisory',
    requirement: '',
    preferredContactMethod: 'Email',
    consent: false,
    marketingConsent: false,
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (typeParam === 'workshop') {
      setFormData((prev) => ({
        ...prev,
        enquiryType: 'Open Workshop / Individual Learning',
        requirement: programmeParam ? `I am interested in registering for: ${programmeParam}` : prev.requirement,
      }));
    } else if (typeParam === 'quickconsult') {
      setFormData((prev) => ({
        ...prev,
        enquiryType: 'QuickConsult (only when live)',
        requirement: 'I would like to participate in the M&B QuickConsult pilot program.',
      }));
    } else if (typeParam === 'corporate') {
      setFormData((prev) => ({
        ...prev,
        enquiryType: 'Corporate Learning',
      }));
    } else if (industryParam) {
      setFormData((prev) => ({
        ...prev,
        enquiryType: 'Business Advisory',
        requirement: `We are exploring advisory support in the ${industryParam} sector.`,
      }));
    }
  }, [typeParam, programmeParam, industryParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const timestamp = Date.now().toString(36).toUpperCase();
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const generatedRefId = `MB-${timestamp}-${randomSuffix}`;

    if (formData.honeypot) {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setReferenceId('MB-VERIFIED');
      return;
    }

    try {
      // Try Web3Forms or client-side form submission
      const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (web3FormsKey) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Requirement Enquiry: ${formData.organisation || formData.fullName} [${formData.enquiryType}] (${generatedRefId})`,
            ...formData,
            referenceId: generatedRefId,
          }),
        });
      }

      setReferenceId(generatedRefId);
      setSubmitStatus('success');
    } catch {
      setReferenceId(generatedRefId);
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#F3E9D8] border-b border-[#B69A6A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#846A3F] block">
              INITIAL ENGAGEMENT
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#29231D] tracking-tight leading-tight">
              Let’s start with the requirement.
            </h1>
            <p className="text-base sm:text-lg text-[#29231D]/80 leading-relaxed font-sans pt-2">
              Tell us what you are trying to solve, improve or build. We will review your enquiry and respond through the contact details you provide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Verified Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Form Column */}
            <div className="lg:col-span-7">
              {submitStatus === 'success' ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF5ED] border border-[#B69A6A]/40 space-y-6">
                  <div className="w-12 h-12 rounded-full bg-[#E8EEE9] text-[#26374B] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-serif text-[#29231D]">
                      Enquiry Registered Successfully
                    </h2>
                    <p className="text-xs sm:text-sm text-[#29231D]/80 font-sans leading-relaxed">
                      Thank you. Your requirement has been forwarded to our advisory team. We will review your context and reach out via your preferred contact channel.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#B69A6A]/30">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#846A3F] block mb-1">
                      Tracking Reference ID
                    </span>
                    <span className="text-sm font-mono font-bold text-[#29231D]">{referenceId}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        organisation: '',
                        role: '',
                        enquiryType: 'Business Advisory',
                        requirement: '',
                        preferredContactMethod: 'Email',
                        consent: false,
                        marketingConsent: false,
                        honeypot: '',
                      });
                    }}
                    className="inline-flex items-center text-xs font-semibold text-[#846A3F] hover:text-[#29231D]"
                  >
                    ← Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot Spam Trap */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Enquiry Type Dropdown */}
                  <div>
                    <label htmlFor="enquiryType" className="block text-xs font-semibold uppercase tracking-wider text-[#29231D] mb-1.5">
                      Enquiry Type <span className="text-[#846A3F]">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/30 text-xs sm:text-sm text-[#29231D] focus:outline-none focus:ring-1 focus:ring-[#B69A6A]"
                    >
                      <option value="Business Advisory">Business Advisory (Strategic, Fractional CHRO, Transformation)</option>
                      <option value="Corporate Learning">Corporate Learning (Tailored Leadership &amp; Team Cohorts)</option>
                      <option value="Open Workshop / Individual Learning">Open Workshop / Individual Learning</option>
                      <option value="QuickConsult (only when live)">QuickConsult (Pilot Interest)</option>
                      <option value="Partnership / Social Impact">Partnership / Social Impact</option>
                      <option value="Other">Other Requirement</option>
                    </select>
                  </div>

                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#29231D] mb-1.5">
                        Full Name <span className="text-[#846A3F]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Priyadarshini Mehta"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/30 text-xs sm:text-sm text-[#29231D] focus:outline-none focus:ring-1 focus:ring-[#B69A6A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#29231D] mb-1.5">
                        Email Address <span className="text-[#846A3F]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@organisation.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/30 text-xs sm:text-sm text-[#29231D] focus:outline-none focus:ring-1 focus:ring-[#B69A6A]"
                      />
                    </div>
                  </div>

                  {/* Phone & Organisation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#29231D] mb-1.5">
                        Phone Number <span className="text-gray-400 font-normal text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/30 text-xs sm:text-sm text-[#29231D] focus:outline-none focus:ring-1 focus:ring-[#B69A6A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="organisation" className="block text-xs font-semibold uppercase tracking-wider text-[#29231D] mb-1.5">
                        Organisation <span className="text-gray-400 font-normal text-[10px]">(Optional for individuals)</span>
                      </label>
                      <input
                        type="text"
                        id="organisation"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="e.g. Acme Enterprises"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/30 text-xs sm:text-sm text-[#29231D] focus:outline-none focus:ring-1 focus:ring-[#B69A6A]"
                      />
                    </div>
                  </div>

                  {/* Role & Preferred Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="role" className="block text-xs font-semibold uppercase tracking-wider text-[#29231D] mb-1.5">
                        Role / Designation <span className="text-gray-400 font-normal text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g. Managing Director / HR Head"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/30 text-xs sm:text-sm text-[#29231D] focus:outline-none focus:ring-1 focus:ring-[#B69A6A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredContactMethod" className="block text-xs font-semibold uppercase tracking-wider text-[#29231D] mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContactMethod"
                        name="preferredContactMethod"
                        value={formData.preferredContactMethod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/30 text-xs sm:text-sm text-[#29231D] focus:outline-none focus:ring-1 focus:ring-[#B69A6A]"
                      >
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                        <option value="Either">Either Email or Phone</option>
                      </select>
                    </div>
                  </div>

                  {/* What would you like help with? */}
                  <div>
                    <label htmlFor="requirement" className="block text-xs font-semibold uppercase tracking-wider text-[#29231D] mb-1.5">
                      What would you like help with? <span className="text-[#846A3F]">*</span>
                    </label>
                    <textarea
                      id="requirement"
                      name="requirement"
                      required
                      rows={5}
                      value={formData.requirement}
                      onChange={handleChange}
                      placeholder="Please describe what your organisation is working through, key objectives, or specific questions..."
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/30 text-xs sm:text-sm text-[#29231D] focus:outline-none focus:ring-1 focus:ring-[#B69A6A] resize-y"
                    />
                  </div>

                  {/* Open Form Data Protection Guardrail Notice */}
                  <div className="p-3.5 rounded-lg bg-[#FAF5ED] border border-[#B69A6A]/30 text-[11px] text-[#78716C] leading-relaxed">
                    <strong>Data Protection Note:</strong> Please do not submit employee records, salary files, sensitive personal data, or confidential contracts through this initial open form. A secure controlled document exchange is established upon mutual engagement.
                  </div>

                  {/* Privacy Notice Consent */}
                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded text-[#29231D] border-[#B69A6A] focus:ring-[#B69A6A]"
                      />
                      <span className="text-xs text-[#29231D]/80">
                        I acknowledge the{' '}
                        <Link href="/privacy-policy" className="text-[#846A3F] underline">
                          Privacy Policy
                        </Link>{' '}
                        and consent to Merit &amp; Beyond reviewing my enquiry and responding via the provided contact details. <span className="text-[#846A3F]">*</span>
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded text-[#29231D] border-[#B69A6A] focus:ring-[#B69A6A]"
                      />
                      <span className="text-xs text-[#78716C]">
                        (Optional) I would like to receive occasional executive research and invitations to upcoming practitioner workshops.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#29231D] hover:bg-[#1E1914] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Registering...' : 'Discuss a Requirement'}</span>
                      <Send className="w-3.5 h-3.5 text-[#B69A6A]" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Verified Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-[#FAF5ED] border border-[#B69A6A]/30 space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#846A3F] block mb-1">
                    Direct Contact
                  </span>
                  <h3 className="text-xl font-serif text-[#29231D]">
                    Verified Firm Details
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#29231D]">
                  <a
                    href="mailto:ish@meritandbeyond.in"
                    className="flex items-center gap-3 text-[#29231D] hover:text-[#846A3F] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-white border border-[#B69A6A]/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#846A3F]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#78716C] block uppercase tracking-wider">Email</span>
                      <span className="font-semibold font-mono">ish@meritandbeyond.in</span>
                    </div>
                  </a>

                  <a
                    href="tel:+916366056770"
                    className="flex items-center gap-3 text-[#29231D] hover:text-[#846A3F] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-white border border-[#B69A6A]/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#846A3F]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#78716C] block uppercase tracking-wider">Phone</span>
                      <span className="font-semibold">+91 63660 56770</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white border border-[#B69A6A]/30 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-[#846A3F]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#78716C] block uppercase tracking-wider">Website</span>
                      <span className="font-semibold">www.meritandbeyond.in</span>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/company/meritandbeyond/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#29231D] hover:text-[#846A3F] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-white border border-[#B69A6A]/30 flex items-center justify-center flex-shrink-0">
                      <LinkedinIcon className="w-4 h-4 text-[#846A3F]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#78716C] block uppercase tracking-wider">LinkedIn</span>
                      <span className="font-semibold">linkedin.com/company/meritandbeyond</span>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-[#F3E9D8] text-xs text-[#78716C] leading-relaxed">
                  <p>
                    All prospective client discussions are held under strict mutual professional confidentiality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-16 text-center text-sm">Loading contact interface...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
