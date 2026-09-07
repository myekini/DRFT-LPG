export function BrandLogo({
  large = false,
  className = '',
}: {
  large?: boolean;
  className?: string;
}) {
  return (
    <span className={`brand-logo ${large ? 'brand-logo-large' : ''} ${className}`.trim()} aria-label="drft">
      <svg
        className="brand-wordmark-svg"
        viewBox="0 0 433 150"
        fill="none"
        stroke="currentColor"
        strokeWidth="18"
        aria-hidden="true"
      >
        <circle cx="50" cy="100" r="41" />
        <path d="M91 0V150" />
        <path transform="translate(130 0)" d="M9 150V50M9 100A41 41 0 0 1 50 59H62V78" />
        <path transform="translate(225 0)" d="M41 150V50A41 41 0 0 1 82 9M18 59H82" />
        <path transform="translate(342 0)" d="M41 27V109A41 41 0 0 0 82 150M18 59H82" />
      </svg>
      <span className="sr-only">drft</span>
    </span>
  );
}

export function BrandMark({
  className = '',
  settled = false,
  animated = false,
}: {
  className?: string;
  settled?: boolean;
  animated?: boolean;
}) {
  return (
    <svg
      className={`brand-mark ${settled ? 'is-settled' : ''} ${animated ? 'is-animated' : ''} ${className}`.trim()}
      viewBox="0 0 152 150"
      fill="none"
      aria-hidden="true"
    >
      <circle className="mark-bowl" cx="50" cy="100" r="38" stroke="currentColor" strokeWidth="24" />
      <path className="mark-cursor" d="M138 0V150" stroke="var(--color-mint-accent)" strokeWidth="28" />
    </svg>
  );
}

export function BrandLockup({
  large = false,
  className = '',
}: {
  large?: boolean;
  className?: string;
}) {
  return (
    <span className={`brand-lockup ${large ? 'brand-lockup-large' : ''} ${className}`.trim()} aria-label="drft">
      <svg
        className="brand-lockup-svg"
        viewBox="0 0 480 150"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="50" cy="100" r="38" stroke="currentColor" strokeWidth="24" />
        <path className="lockup-cursor" d="M138 0V150" stroke="var(--color-mint-accent)" strokeWidth="28" />
        <g stroke="currentColor" strokeWidth="18">
          <path transform="translate(177 0)" d="M9 150V50M9 100A41 41 0 0 1 50 59H62V78" />
          <path transform="translate(272 0)" d="M41 150V50A41 41 0 0 1 82 9M18 59H82" />
          <path transform="translate(389 0)" d="M41 27V109A41 41 0 0 0 82 150M18 59H82" />
        </g>
      </svg>
      <span className="sr-only">drft</span>
    </span>
  );
}
