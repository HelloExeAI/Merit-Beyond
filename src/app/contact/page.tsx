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
  Clock, 
  Calendar,
  Lock
} from 'lucide-react';
import { servicesData } from '@/data/services';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    jobTitle: '',
    areaOfInterest: '',
    orgSize: '',
    requirement: '',
    consent: false,
    honeypot: '', // anti-bot spam trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  // Prepopulate area of interest from URL param if available
  useEffect(() => {
    if (serviceParam) {
      const matched = servicesData.find((s) => s.slug === serviceParam);
      if (matched) {
        setFormData((prev) => ({ ...prev, areaOfInterest: matched.title }));
      } else if (serviceParam === 'comprehensive-review') {
        setFormData((prev) => ({ ...prev, areaOfInterest: 'Comprehensive Organisational Review' }));
      } else if (serviceParam === 'general-advisory') {
        setFormData((prev) => ({ ...prev, areaOfInterest: 'General People Strategy & Advisory' }));
      }
    }
  }, [serviceParam]);

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

    // Client-side quick check
    if (!formData.consent) {
      setErrorMessage('Please consent to the privacy policy before submitting.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setReferenceId(result.referenceId || 'MB-CONFIRMED');
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to submit enquiry. Please try again or email directly.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network connection error. Please verify your internet or contact us directly via phone or email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: The Professional Consultation Form */}
      <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-champagne-300 shadow-elevated">
        {submitStatus === 'success' ? (
          <div className="text-center py-8 space-y-5 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-copper-600 font-semibold block">
              Consultation Registered
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-mahogany-600">
              Thank You for Reaching Out
            </h3>

            <div className="p-4 rounded-xl bg-ivory-50 border border-champagne-200 max-w-md mx-auto text-left space-y-2">
              <div className="text-xs text-softblack-muted">
                Advisory Reference: <strong className="font-mono text-mahogany-600">{referenceId}</strong>
              </div>
              <div className="text-xs text-softblack-muted">
                Client Contact: <span className="text-softblack">{formData.workEmail}</span>
              </div>
            </div>

            <p className="text-sm text-softblack-muted leading-relaxed max-w-md mx-auto">
              Our advisory partners have received your details. A senior consultant will review your business requirements and initiate contact within 24 to 48 business hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitStatus('idle');
                  setFormData({
                    fullName: '',
                    workEmail: '',
                    phone: '',
                    companyName: '',
                    jobTitle: '',
                    areaOfInterest: '',
                    orgSize: '',
                    requirement: '',
                    consent: false,
                    honeypot: '',
                  });
                }}
                className="px-6 py-2.5 rounded-lg border border-champagne-300 text-xs font-semibold uppercase text-mahogany-600 hover:bg-ivory-50"
              >
                Submit Another Inquiry
              </button>
              <Link
                href="/"
                className="px-6 py-2.5 rounded-lg bg-copper-500 text-white text-xs font-semibold uppercase hover:bg-copper-600"
              >
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-champagne-200 pb-4">
              <h2 className="text-2xl font-serif font-bold text-mahogany-600">
                Request a Strategic Consultation
              </h2>
              <p className="text-xs sm:text-sm text-softblack-muted mt-1">
                Please complete the details below. All discussions are conducted with strict professional discretion.
              </p>
            </div>

            {/* Error Message Box */}
            {submitStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Anti-bot Honeypot field (hidden from real users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="honeypot">Leave blank</label>
              <input
                id="honeypot"
                type="text"
                name="honeypot"
                tabIndex={-1}
                value={formData.honeypot}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-mahogany-500 mb-1.5">
                  Full Name <span className="text-copper-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Anand Sharma"
                  className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-champagne-300 text-sm text-softblack focus:bg-white focus:outline-none focus:ring-2 focus:ring-copper-500"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-mahogany-500 mb-1.5">
                  Work Email <span className="text-copper-600">*</span>
                </label>
                <input
                  type="email"
                  name="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="anand@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-champagne-300 text-sm text-softblack focus:bg-white focus:outline-none focus:ring-2 focus:ring-copper-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-mahogany-500 mb-1.5">
                  Phone Number <span className="text-copper-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-champagne-300 text-sm text-softblack focus:bg-white focus:outline-none focus:ring-2 focus:ring-copper-500"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-mahogany-500 mb-1.5">
                  Company / Entity Name <span className="text-copper-600">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Apex Enterprises Ltd."
                  className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-champagne-300 text-sm text-softblack focus:bg-white focus:outline-none focus:ring-2 focus:ring-copper-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Job Title (Optional) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-mahogany-500 mb-1.5">
                  Your Designation / Role <span className="text-softblack-muted font-normal text-[11px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g. Managing Director / VP HR"
                  className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-champagne-300 text-sm text-softblack focus:bg-white focus:outline-none focus:ring-2 focus:ring-copper-500"
                />
              </div>

              {/* Organisation Size (Optional) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-mahogany-500 mb-1.5">
                  Organisation Size <span className="text-softblack-muted font-normal text-[11px]">(Optional)</span>
                </label>
                <select
                  name="orgSize"
                  value={formData.orgSize}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-champagne-300 text-sm text-softblack focus:bg-white focus:outline-none focus:ring-2 focus:ring-copper-500"
                >
                  <option value="">Select Headcount Range</option>
                  <option value="1-50 employees">1 - 50 employees (Early Growth)</option>
                  <option value="51-200 employees">51 - 200 employees (Scaling Phase)</option>
                  <option value="201-500 employees">201 - 500 employees (Mid-Market)</option>
                  <option value="500+ employees">500+ employees (Enterprise)</option>
                </select>
              </div>
            </div>

            {/* Area of Interest */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-mahogany-500 mb-1.5">
                Primary Area of Interest <span className="text-copper-600">*</span>
              </label>
              <select
                name="areaOfInterest"
                required
                value={formData.areaOfInterest}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-ivory-50 border border-champagne-300 text-sm text-softblack focus:bg-white focus:outline-none focus:ring-2 focus:ring-copper-500"
              >
                <option value="">Select a Consulting Discipline</option>
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.categoryNumber}. {svc.title}
                  </option>
                ))}
                <option value="Comprehensive Organisational Review">
                  Comprehensive Organisational Diagnostic Review
                </option>
                <option value="General People Strategy & Advisory">
                  General People Advisory &amp; Leadership Consultation
                </option>
              </select>
            </div>

            {/* Brief Description of Requirement */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-mahogany-500 mb-1.5">
                Brief Description of the Requirement <span className="text-copper-600">*</span>
              </label>
              <textarea
                name="requirement"
                required
                rows={4}
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Please outline the specific challenges, upcoming milestones, or people objectives your organisation seeks to address..."
                className="w-full px-4 py-3 rounded-lg bg-ivory-50 border border-champagne-300 text-sm text-softblack focus:bg-white focus:outline-none focus:ring-2 focus:ring-copper-500 leading-relaxed"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                id="consent-checkbox"
                type="checkbox"
                name="consent"
                required
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-champagne-400 text-copper-600 focus:ring-copper-500"
              />
              <label htmlFor="consent-checkbox" className="text-xs text-softblack-muted leading-normal">
                I agree to the processing of this information for advisory consultation purposes in accordance with the{' '}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="text-copper-600 hover:text-copper-700 underline underline-offset-2"
                >
                  Merit &amp; Beyond Privacy Policy
                </Link>
                . We do not sell or share client data.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-copper-500 hover:bg-copper-600 disabled:opacity-70 text-white font-medium text-sm tracking-wider uppercase shadow-md transition-all group"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Transmitting Consultation Details...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Consultation Request</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Right Column: Direct Business Contact Information & Timeline */}
      <div className="lg:col-span-5 space-y-6">
        {/* Contact Info Card */}
        <div className="p-8 rounded-2xl bg-white border border-champagne-300 shadow-subtle space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-copper-600 font-semibold block mb-1">
              Direct Contact
            </span>
            <h3 className="text-2xl font-serif font-bold text-mahogany-600">
              Corporate Office &amp; Advisory
            </h3>
            <p className="text-xs text-softblack-muted mt-1">
              Official contact details from the Merit &amp; Beyond brochure.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <a
              href="tel:+916366056770"
              className="flex items-start gap-3.5 p-3.5 rounded-xl bg-ivory-50 hover:bg-champagne-100/60 border border-champagne-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-copper-600 border border-champagne-200 flex-shrink-0 group-hover:bg-copper-500 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-softblack-muted font-semibold block">
                  Telephone
                </span>
                <span className="text-sm font-semibold text-mahogany-600 group-hover:text-copper-700">
                  +91 6366056770
                </span>
              </div>
            </a>

            <a
              href="mailto:ish@meritandbeyond.in"
              className="flex items-start gap-3.5 p-3.5 rounded-xl bg-ivory-50 hover:bg-champagne-100/60 border border-champagne-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-copper-600 border border-champagne-200 flex-shrink-0 group-hover:bg-copper-500 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-softblack-muted font-semibold block">
                  Advisory Inquiries
                </span>
                <span className="text-sm font-semibold text-mahogany-600 group-hover:text-copper-700 truncate block">
                  ish@meritandbeyond.in
                </span>
              </div>
            </a>

            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-ivory-50 border border-champagne-200">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-copper-600 border border-champagne-200 flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-softblack-muted font-semibold block">
                  Official Web
                </span>
                <span className="text-sm font-semibold text-mahogany-600">
                  https://www.meritandbeyond.in
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Timeline Card: What Happens After You Reach Out */}
        <div className="p-8 rounded-2xl bg-[#FAF5EE] border border-champagne-300 space-y-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-copper-600 font-semibold">
            <Clock className="w-4 h-4" />
            <span>Consultation Lifecycle</span>
          </div>

          <h4 className="text-lg font-serif font-bold text-mahogany-600">
            What Happens Next
          </h4>

          <div className="space-y-4 text-xs font-sans">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-copper-500 text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                1
              </span>
              <div>
                <span className="font-semibold text-mahogany-600 block">Initial Diagnostic Review</span>
                <p className="text-softblack-muted mt-0.5">
                  Our practice partners examine your requirements and current organizational context within 24–48 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-champagne-400 text-mahogany-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                2
              </span>
              <div>
                <span className="font-semibold text-mahogany-600 block">Preliminary Advisory Call</span>
                <p className="text-softblack-muted mt-0.5">
                  A 30-minute structured discovery conversation under mutual confidentiality to clarify operational scope.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-champagne-300 text-mahogany-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                3
              </span>
              <div>
                <span className="font-semibold text-mahogany-600 block">Tailored Engagement Blueprint</span>
                <p className="text-softblack-muted mt-0.5">
                  Delivery of a clear proposal detailing milestones, five-stage methodology, deliverables, and commercial terms.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-champagne-200/80 flex items-center gap-2 text-[11px] text-softblack-muted">
            <Lock className="w-3.5 h-3.5 text-copper-600 flex-shrink-0" />
            <span>Strict confidentiality and mutual non-disclosure assured.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-20 bg-ivory-gradient border-b border-champagne-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-copper-700 text-xs font-semibold tracking-widest uppercase shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-copper-500" />
              <span>Advisory Engagement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-mahogany-600 tracking-tight leading-tight">
              Start a Strategic Conversation
            </h1>
            <p className="text-lg text-softblack-muted font-sans font-normal leading-relaxed">
              Partner with Merit &amp; Beyond to strengthen your people foundations, maintain continuous statutory compliance, and build lasting organizational capability.
            </p>
          </div>
        </div>
      </section>

      {/* FORM AND CONTACT DETAILS SECTION */}
      <section className="py-16 md:py-24 bg-[#F7EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="p-12 text-center text-sm text-softblack-muted bg-white rounded-2xl border border-champagne-200">
              Loading consultation form...
            </div>
          }>
            <ContactFormContent />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
