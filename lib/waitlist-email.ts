export interface WaitlistEmailData {
  email: string;
}

const siteUrl = 'https://drft.io';
const githubUrl = 'https://github.com/drft-open';

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
  })[character] || character);
}

export function generateWaitlistEmailHtml({ email }: WaitlistEmailData): string {
  const safeEmail = escapeHtml(email);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>You’re in</title>
</head>
<body style="margin:0;background:#f4f5f1;color:#171816;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Your place on the DRFT early access list is confirmed.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f5f1;">
    <tr>
      <td align="center" style="padding:48px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:18px;box-shadow:0 18px 60px rgba(26,36,29,.08);">
          <tr>
            <td style="padding:34px 38px 0;">
              <a href="${siteUrl}" style="display:inline-block;text-decoration:none;color:#171816;">
                <table role="presentation" cellspacing="0" cellpadding="0"><tr>
                  <td><img src="${siteUrl}/apple-icon.png" width="34" height="34" alt="" style="display:block;border:0;border-radius:8px;"></td>
                  <td style="padding-left:10px;font-size:22px;font-weight:750;letter-spacing:-.8px;">drft</td>
                </tr></table>
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:52px 38px 38px;">
              <div style="width:38px;height:5px;background:#00e5a0;border-radius:20px;margin-bottom:25px;"></div>
              <h1 style="margin:0;font-size:42px;line-height:1.05;letter-spacing:-2px;font-weight:720;color:#171816;">You’re in.</h1>
              <p style="margin:20px 0 0;max-width:430px;font-size:16px;line-height:1.65;color:#565b54;">Thanks for joining DRFT. We’ll let you know when your early access invite is ready.</p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:32px 0;background:#f4f5f1;border-radius:12px;">
                <tr>
                  <td style="padding:17px 18px;font-size:13px;color:#6c7169;">Confirmed for</td>
                  <td align="right" style="padding:17px 18px;font-size:13px;font-weight:650;color:#171816;">${safeEmail}</td>
                </tr>
              </table>

              <p style="margin:0 0 28px;font-size:16px;line-height:1.65;color:#565b54;">Until then, keep the experience. Lose the generic wording.</p>
              <a href="${siteUrl}" style="display:inline-block;padding:13px 21px;background:#171816;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:650;">Visit DRFT&nbsp;&nbsp;→</a>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 38px 32px;background:#fafaf8;border-radius:0 0 18px 18px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr>
                <td style="font-size:12px;color:#858a82;">AI edits. You decide.</td>
                <td align="right" style="font-size:12px;white-space:nowrap;">
                  <a href="${siteUrl}" style="color:#565b54;text-decoration:none;">Website</a>
                  <span style="padding:0 8px;color:#c4c7c1;">·</span>
                  <a href="${githubUrl}" style="color:#565b54;text-decoration:none;">GitHub</a>
                </td>
              </tr></table>
              <p style="margin:14px 0 0;font-size:10px;line-height:1.5;color:#a0a49c;">You received this because ${safeEmail} joined the DRFT waitlist.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function generateWaitlistEmailPlaintext({ email }: WaitlistEmailData): string {
  return `You’re in.

Thanks for joining DRFT. We’ll let you know when your early access invite is ready.

Confirmed for: ${email}

Until then, keep the experience. Lose the generic wording.

Visit DRFT: ${siteUrl}
GitHub: ${githubUrl}

AI edits. You decide.`;
}
