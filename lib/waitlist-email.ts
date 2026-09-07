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
<body style="margin:0;background:#F6F4EF;color:#111111;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Your place on the DRFT early access list is confirmed.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F6F4EF;">
    <tr>
      <td align="center" style="padding:48px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#FFFFFF;border:1px solid #E1DED6;border-radius:18px;box-shadow:0 18px 60px rgba(17,17,17,.04);">
          <tr>
            <td style="padding:34px 38px 0;">
              <a href="${siteUrl}" style="display:inline-block;text-decoration:none;color:#111111;">
                <table role="presentation" cellspacing="0" cellpadding="0"><tr>
                  <td><img src="${siteUrl}/apple-icon.png" width="34" height="34" alt="DRFT" style="display:block;border:0;border-radius:8px;"></td>
                  <td style="padding-left:12px;font-size:22px;font-weight:700;letter-spacing:-0.5px;color:#111111;">drft</td>
                </tr></table>
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:44px 38px 38px;">
              <div style="width:36px;height:4px;background:#0B8F66;border-radius:9999px;margin-bottom:24px;"></div>
              <h1 style="margin:0;font-size:38px;line-height:1.08;letter-spacing:-1.5px;font-weight:700;color:#111111;">You’re in.</h1>
              <p style="margin:18px 0 0;max-width:430px;font-size:16px;line-height:1.65;color:#55534E;">Thanks for joining DRFT. We’ll let you know the moment your early access invite is ready.</p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:28px 0;background:#F6F4EF;border:1px solid #E1DED6;border-radius:10px;">
                <tr>
                  <td style="padding:16px 18px;font-size:13px;color:#55534E;">Confirmed for</td>
                  <td align="right" style="padding:16px 18px;font-size:13px;font-weight:600;color:#111111;font-family:ui-monospace,Menlo,monospace;">${safeEmail}</td>
                </tr>
              </table>

              <p style="margin:0 0 26px;font-size:15px;line-height:1.65;color:#55534E;">Keep the hard-earned experience. Lose the generic buzzwords.</p>
              <a href="${siteUrl}" style="display:inline-block;padding:12px 22px;background:#111111;color:#FFFFFF;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:-0.2px;">Visit DRFT&nbsp;&nbsp;→</a>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 38px 30px;background:#F6F4EF;border-top:1px solid #E1DED6;border-radius:0 0 18px 18px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr>
                <td style="font-size:12px;color:#55534E;font-style:italic;">AI edits. You decide.</td>
                <td align="right" style="font-size:12px;white-space:nowrap;">
                  <a href="${siteUrl}" style="color:#55534E;text-decoration:none;">Website</a>
                  <span style="padding:0 8px;color:#9A978F;">·</span>
                  <a href="${githubUrl}" style="color:#55534E;text-decoration:none;">GitHub</a>
                </td>
              </tr></table>
              <p style="margin:12px 0 0;font-size:11px;line-height:1.5;color:#9A978F;">You received this because ${safeEmail} joined the DRFT waitlist.</p>
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

Keep the hard-earned experience. Lose the generic buzzwords.

Visit DRFT: ${siteUrl}
GitHub: ${githubUrl}

AI edits. You decide.`;
}
