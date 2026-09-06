import { IntersectionReveal } from './IntersectionReveal';
const statements = [
  ['It rewrote everything.', 'Your phrasing, your tone, your specific details — gone.'],
  ['You couldn’t see what changed.', 'Accept it all or start over. No real choice in between.'],
  ['Then it forgot you.', 'Next session: paste the resume, explain the context, start again.'],
];
export function ProblemSection() {
  return <section className="problem section page-width" aria-labelledby="problem-heading">
    <div><h2 id="problem-heading" className="section-heading">Your resume.<br />Not an AI’s<br /><span className="serif-word">best guess.</span></h2><p className="problem-intro">Most AI tools make your resume sound polished.<br />They also make it sound like everyone else.</p></div>
    <div className="pain-list">{statements.map(([title, body], i) => <IntersectionReveal key={title} delay={i * 120} className="pain"><span className="pain-dash" aria-hidden="true">—</span><div><h3>{title}</h3><p>{body}</p></div></IntersectionReveal>)}</div>
  </section>;
}
