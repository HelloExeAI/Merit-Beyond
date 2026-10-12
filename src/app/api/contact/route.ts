import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      workEmail,
      phone,
      companyName,
      jobTitle,
      areaOfInterest,
      orgSize,
      requirement,
      consent,
      honeypot, // Spam trap
    } = data;

    // 1. Spam honeypot verification
    if (honeypot && honeypot.trim() !== '') {
      // Silently return success to bot without processing
      return NextResponse.json({ success: true, message: 'Enquiry received' }, { status: 200 });
    }

    // 2. Server-side validation
    if (!fullName || !workEmail || !phone || !companyName || !requirement || !consent) {
      return NextResponse.json(
        { error: 'Missing required consultation fields' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: 'Invalid work email address' },
        { status: 400 }
      );
    }

    // Generate unique inquiry reference ID
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const referenceId = `MB-${timestamp}-${randomSuffix}`;

    // Log the consultation inquiry securely (for production, forwards to CRM / SES / Resend)
    console.log('[Merit & Beyond Advisory Inquiry Received]', {
      referenceId,
      submittedAt: new Date().toISOString(),
      fullName,
      workEmail,
      phone,
      companyName,
      jobTitle: jobTitle || 'Not specified',
      areaOfInterest,
      orgSize: orgSize || 'Not specified',
      requirementLength: requirement.length,
      consentGiven: consent,
    });

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: 'Your advisory consultation request has been securely registered.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'An unexpected server error occurred while registering your inquiry.' },
      { status: 500 }
    );
  }
}
