import { NextResponse } from 'next/server';
import { sendConsultationEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      email,
      workEmail, // backward compat
      phone,
      organisation,
      companyName, // backward compat
      role,
      jobTitle, // backward compat
      enquiryType,
      areaOfInterest, // backward compat
      requirement,
      preferredContactMethod,
      consent,
      honeypot, // Spam trap
    } = data;

    // 1. Spam honeypot verification
    if (honeypot && String(honeypot).trim() !== '') {
      return NextResponse.json({ success: true, message: 'Enquiry received' }, { status: 200 });
    }

    const resolvedEmail = (email || workEmail || '').trim();
    const resolvedName = (fullName || '').trim();
    const resolvedReq = (requirement || '').trim();
    const resolvedEnquiryType = (enquiryType || areaOfInterest || 'Business Advisory').trim();

    // 2. Server-side validation
    if (!resolvedName || !resolvedEmail || !resolvedReq || !consent) {
      return NextResponse.json(
        { error: 'Please complete all required fields (Name, Email, Requirement, and Consent).' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(resolvedEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Generate unique inquiry reference ID
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const referenceId = `MB-${timestamp}-${randomSuffix}`;

    // Dispatch email and save lead to leads.csv
    const submittedAt = new Date().toISOString();
    await sendConsultationEmail({
      referenceId,
      submittedAt,
      fullName: resolvedName,
      email: resolvedEmail,
      phone: phone ? String(phone).trim() : undefined,
      organisation: (organisation || companyName || '').trim() || undefined,
      role: (role || jobTitle || '').trim() || undefined,
      enquiryType: resolvedEnquiryType,
      requirement: resolvedReq,
      preferredContactMethod: preferredContactMethod ? String(preferredContactMethod).trim() : undefined,
    });

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: 'Your requirement enquiry has been securely registered.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'An unexpected server error occurred while registering your enquiry.' },
      { status: 500 }
    );
  }
}
