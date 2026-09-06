import { WaitlistForm } from './WaitlistForm';
import { BrandMark } from './BrandLogo';
export function WaitlistCTASection() {
  const raw = process.env.NEXT_PUBLIC_WAITLIST_COUNT;
  const count = raw && /^\d+$/.test(raw) ? Number(raw) : null;
  return <section id="waitlist-cta" className="final-cta" aria-labelledby="cta-heading"><div className="page-width"><BrandMark className="cta-mark" /><h2 id="cta-heading">Your next chapter.<br /><span className="serif-word">Make it sound like you.</span></h2><p className="cta-copy">Join the waitlist for early access, product updates,<br className="desktop-break" /> and a free Pro month at launch.</p><div className="cta-form"><WaitlistForm /></div><p className="fine-print">No spam. Leave whenever you like.</p>{count !== null && <p className="waitlist-count">{count.toLocaleString('en-US')} people on the waitlist</p>}</div></section>;
}
