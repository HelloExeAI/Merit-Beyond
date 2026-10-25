import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export interface ConsultationLead {
  referenceId: string;
  submittedAt: string;
  fullName: string;
  email: string;
  phone?: string;
  organisation?: string;
  role?: string;
  enquiryType: string;
  requirement: string;
  preferredContactMethod?: string;
}

const RECIPIENT_EMAILS = [
  process.env.NOTIFICATION_RECIPIENT_EMAIL || 'ish@meritandbeyond.in',
  'hellostartlet.hr@gmail.com'
].filter(Boolean).join(', ');

/**
 * Persist lead safely to a local CSV spreadsheet so no lead is ever lost.
 */
export function saveLeadToCsv(lead: ConsultationLead): void {
  try {
    const csvFilePath = path.join(process.cwd(), 'leads.csv');
    const fileExists = fs.existsSync(csvFilePath);

    const escapeCsv = (val?: string) => {
      if (!val) return '""';
      const clean = String(val).replace(/"/g, '""').replace(/\r?\n/g, ' ');
      return `"${clean}"`;
    };

    const header = [
      'Reference ID',
      'Submitted At',
      'Full Name',
      'Email',
      'Phone',
      'Organisation',
      'Role / Designation',
      'Enquiry Type',
      'Preferred Contact',
      'Requirement',
    ].join(',') + '\n';

    const row = [
      escapeCsv(lead.referenceId),
      escapeCsv(lead.submittedAt),
      escapeCsv(lead.fullName),
      escapeCsv(lead.email),
      escapeCsv(lead.phone || 'Not provided'),
      escapeCsv(lead.organisation || 'Individual / Not specified'),
      escapeCsv(lead.role || 'Not specified'),
      escapeCsv(lead.enquiryType),
      escapeCsv(lead.preferredContactMethod || 'Either'),
      escapeCsv(lead.requirement),
    ].join(',') + '\n';

    if (!fileExists) {
      fs.writeFileSync(csvFilePath, header + row, 'utf8');
    } else {
      fs.appendFileSync(csvFilePath, row, 'utf8');
    }
    console.log(`[Lead Saved] Reference ${lead.referenceId} appended to leads.csv`);
  } catch (err) {
    console.error('[Lead CSV Save Error]:', err);
  }
}

/**
 * Send executive branded notification email to verified recipients.
 */
export async function sendConsultationEmail(lead: ConsultationLead): Promise<{ sent: boolean; reason?: string }> {
  // Always persist lead locally as a fail-safe
  saveLeadToCsv(lead);

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.warn(
      `[Email Dispatcher] SMTP credentials (SMTP_USER, SMTP_PASS) not configured in .env.local. ` +
      `Lead has been safely saved to leads.csv. Recipient target is: ${RECIPIENT_EMAILS}`
    );
    return {
      sent: false,
      reason: 'SMTP credentials not configured in .env.local',
    };
  }

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const isSecure = smtpPort === 465;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: isSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Advisory &amp; Learning Enquiry - Merit &amp; Beyond</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F3E9D8; margin: 0; padding: 24px; color: #29231D; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #B69A6A; overflow: hidden; box-shadow: 0 4px 20px rgba(41, 35, 29, 0.08); }
    .header { background: #29231D; padding: 28px 32px; text-align: center; }
    .header h1 { margin: 0; color: #ffffff; font-size: 20px; letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; }
    .header p { margin: 6px 0 0 0; color: #B69A6A; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; }
    .badge-bar { background: #FAF5ED; padding: 12px 32px; border-bottom: 1px solid #EADCC5; display: flex; justify-content: space-between; font-size: 12px; color: #78716C; }
    .content { padding: 32px; }
    .section-title { font-size: 13px; font-weight: 700; color: #846A3F; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; border-bottom: 1px solid #F3E9D8; padding-bottom: 6px; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .data-table td { padding: 8px 0; vertical-align: top; font-size: 14px; }
    .data-table td.label { width: 38%; color: #78716C; font-weight: 500; }
    .data-table td.val { width: 62%; color: #29231D; font-weight: 600; }
    .req-box { background: #FAF5ED; border-left: 4px solid #B69A6A; border-radius: 4px; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #29231D; margin-bottom: 28px; white-space: pre-wrap; }
    .btn-wrap { text-align: center; margin-top: 10px; }
    .btn { display: inline-block; background: #29231D; color: #ffffff !important; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-size: 13px; font-weight: 600; letter-spacing: 0.03em; margin: 0 6px; }
    .footer { background: #FAF5ED; padding: 16px 32px; text-align: center; font-size: 11px; color: #78716C; border-top: 1px solid #EADCC5; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Merit &amp; Beyond</h1>
      <p>PEOPLE | PROCESSES | POSSIBILITIES</p>
    </div>
    
    <div class="badge-bar">
      <span><strong>Inquiry ID:</strong> ${lead.referenceId}</span>
      <span>${new Date(lead.submittedAt).toLocaleString('en-US', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })} IST</span>
    </div>

    <div class="content">
      <div class="section-title">Enquiry &amp; Client Details</div>
      <table class="data-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="val"><strong>${lead.fullName}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="val"><a href="mailto:${lead.email}" style="color: #846A3F; text-decoration: underline;">${lead.email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="val">${lead.phone ? `<a href="tel:${lead.phone}" style="color: #29231D; text-decoration: none;">${lead.phone}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Organisation / Entity</td>
          <td class="val">${lead.organisation || 'Individual / Not specified'}</td>
        </tr>
        <tr>
          <td class="label">Role / Designation</td>
          <td class="val">${lead.role || 'Not specified'}</td>
        </tr>
        <tr>
          <td class="label">Enquiry Type</td>
          <td class="val" style="color: #552A19; font-weight: 700;">${lead.enquiryType}</td>
        </tr>
        <tr>
          <td class="label">Preferred Contact</td>
          <td class="val">${lead.preferredContactMethod || 'Either'}</td>
        </tr>
      </table>

      <div class="section-title">Requirement / Description</div>
      <div class="req-box">${lead.requirement}</div>

      <div class="btn-wrap">
        <a class="btn" href="mailto:${lead.email}?subject=Re:%20Merit%20%26%20Beyond%20Enquiry%20[${lead.referenceId}]">Reply to Client</a>
        ${lead.phone ? `<a class="btn" style="background: #B69A6A; color: #29231D !important;" href="tel:${lead.phone}">Call Client</a>` : ''}
      </div>
    </div>

    <div class="footer">
      Automated consultation alert dispatched from Merit &amp; Beyond platform to <strong>${RECIPIENT_EMAILS}</strong>.
    </div>
  </div>
</body>
</html>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"${lead.fullName} via Merit & Beyond" <${smtpUser}>`,
      to: RECIPIENT_EMAILS,
      replyTo: lead.email,
      subject: `New Requirement Enquiry: ${lead.organisation || lead.fullName} [${lead.enquiryType}] (${lead.referenceId})`,
      text: `
New Advisory & Learning Enquiry [${lead.referenceId}]
Submitted: ${lead.submittedAt}

DETAILS:
- Name: ${lead.fullName}
- Email: ${lead.email}
- Phone: ${lead.phone || 'Not provided'}
- Organisation: ${lead.organisation || 'Not specified'}
- Role: ${lead.role || 'Not specified'}
- Enquiry Type: ${lead.enquiryType}
- Preferred Contact: ${lead.preferredContactMethod || 'Either'}

REQUIREMENT:
${lead.requirement}
      `.trim(),
      html: emailHtml,
    });

    console.log(`[Email Sent Successfully] Message ID: ${info.messageId} to ${RECIPIENT_EMAILS}`);
    return { sent: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`[Email Dispatch Failed to ${RECIPIENT_EMAILS}]:`, message);
    return { sent: false, reason: message };
  }
}
