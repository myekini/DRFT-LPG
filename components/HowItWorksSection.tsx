const steps = [
  ['Bring your resume', 'Upload once. DRFT learns your experience and the way you write.'],
  ['Share the role', 'Add the job description and ask for help. DRFT reads the role before suggesting a word.'],
  ['Choose every edit', 'Changes appear in your canvas. Accept what fits, revert what doesn’t, then export a clean PDF.'],
];
export function HowItWorksSection() {
  return <section id="how-it-works" className="section page-width how" aria-labelledby="how-heading">
    <div className="section-title-row"><h2 id="how-heading" className="section-heading">From “that’ll do”<br />to <span className="serif-word">“that’s me.”</span></h2><p>One workspace. Three steps.<br />You stay in control throughout.</p></div>
    <ol className="steps">{steps.map(([title, description], i) => <li key={title}><div className="step-number"><span>0{i + 1}</span></div><h3>{title}</h3><p>{description}</p></li>)}</ol>
  </section>;
}
