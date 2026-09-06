export interface WaitlistEmailData {
  email: string;
  waitlistNumber?: number;
  referralCode?: string;
}

export function generateWaitlistEmailHtml({ email, waitlistNumber = 1200 }: WaitlistEmailData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to DRFT Early Access</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 40px 16px; background-color: #f7f7f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'; color: #171816; -webkit-font-smoothing: antialiased;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e6e1; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
    <!-- Brand Header -->
    <tr>
      <td style="padding: 36px 40px 24px; border-bottom: 1px solid #f0f0ed;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td>
              <span style="font-size: 22px; font-weight: 700; letter-spacing: -0.04em; color: #111111; display: inline-flex; align-items: center;">
                <span style="display: inline-block; width: 18px; height: 18px; margin-right: 8px; vertical-align: middle;">
                  <svg viewBox="0 0 192 192" width="18" height="18" style="display:block;">
                    <rect width="192" height="192" rx="40" fill="#0A0A0A" />
                    <rect x="91.4" y="52" width="9.2" height="88" rx="4.6" fill="#00E5A0" />
                    <rect x="52" y="91.4" width="88" height="9.2" rx="4.6" fill="#00E5A0" />
                  </svg>
                </span>
                drft
              </span>
            </td>
            <td align="right">
              <span style="display: inline-block; padding: 4px 10px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; background: #f0fdf4; color: #086b49; border: 1px solid #bbf7d0; border-radius: 9999px;">
                Waitlist Confirmed
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 32px 40px 24px;">
        <h1 style="margin: 0 0 16px; font-size: 24px; font-weight: 650; line-height: 1.25; letter-spacing: -0.035em; color: #111111;">
          You’re on the early access list.
        </h1>
        
        <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6; color: #4b5563;">
          Thanks for joining us early. We’re building DRFT to help you improve your resume without losing the details and voice that make it yours.
        </p>

        <!-- Notion-style Callout Block -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin: 24px 0; background: #fafaf8; border-left: 3px solid #00e5a0; border-radius: 4px; padding: 16px;">
          <tr>
            <td>
              <p style="margin: 0 0 6px; font-size: 13px; font-weight: 600; color: #111111; letter-spacing: -0.01em;">
                Early access, position ${waitlistNumber}
              </p>
              <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #6b7280;">
                Registered as: <strong style="color: #111111; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;">${email}</strong>
                <br />You'll be among the first invited to test the preview.
              </p>
            </td>
          </tr>
        </table>

        <h2 style="margin: 28px 0 12px; font-size: 15px; font-weight: 650; color: #111111; letter-spacing: -0.02em;">
          What to expect when access opens:
        </h2>

        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-size: 14px; line-height: 1.6; color: #4b5563;">
          <tr>
            <td style="padding: 6px 0; vertical-align: top; width: 24px; color: #086b49; font-weight: 700;">+</td>
            <td style="padding: 6px 0;"><strong>AI edits, you decide.</strong> Review each suggestion and keep only what works for you.</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; vertical-align: top; width: 24px; color: #086b49; font-weight: 700;">+</td>
            <td style="padding: 6px 0;"><strong>Your full history.</strong> Keep your experience together and tailor a fresh version for each role.</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; vertical-align: top; width: 24px; color: #086b49; font-weight: 700;">+</td>
            <td style="padding: 6px 0;"><strong>Your data stays yours.</strong> We will never train on your resume without your permission.</td>
          </tr>
        </table>

        <!-- CTA Button -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin: 32px 0 16px;">
          <tr>
            <td align="left">
              <a href="https://drft.io" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #111111; color: #ffffff; text-decoration: none; padding: 12px 22px; font-size: 14px; font-weight: 550; border-radius: 7px; letter-spacing: -0.01em;">
                Visit DRFT &rarr;
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px 40px 32px; border-top: 1px solid #f0f0ed; background: #fafaf9;">
        <p style="margin: 0 0 6px; font-size: 12px; color: #6b7280;">
          DRFT. Write a stronger resume. Keep it yours.
        </p>
        <p style="margin: 0; font-size: 11px; color: #9ca3af; line-height: 1.4;">
          You received this email because ${email} was entered into the early access waitlist at drft.app.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function generateWaitlistEmailPlaintext({ email }: WaitlistEmailData): string {
  return `DRFT: You’re on the early access list

Thanks for joining the DRFT waitlist.

We’re building DRFT to help you improve your resume without losing the details and voice that make it yours.

Early Access Wave #1
Registered email: ${email}

What to expect:
+ AI edits, you decide: Review each suggestion and keep only what works for you.
+ Your full history: Keep your experience together and tailor a fresh version for each role.
+ Your data stays yours: We will never train on your resume without your permission.

Visit DRFT:
https://drft.io

DRFT
You received this because you signed up at drft.app.`;
}
