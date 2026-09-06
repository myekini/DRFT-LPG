import Image from 'next/image';

export function BrandLogo({ large = false }: { large?: boolean }) {
  return (
    <span className={`brand-logo${large ? ' brand-logo-large' : ''}`}>
      <Image className="logo-light" src="/brand/logo-light.png" alt="drft" width={850} height={384} priority />
      <Image className="logo-dark" src="/brand/logo-dark.png" alt="drft" width={850} height={384} priority />
    </span>
  );
}

export function BrandMark({
  className = '',
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      className={`brand-mark ${animated ? 'brand-mark-animated' : ''} ${className}`.trim()}
      viewBox="64 64 64 64"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect className="mark-bar-v" x="91.429" y="64" width="9.143" height="64" rx="2.743" />
      <rect className="mark-bar-h" x="64" y="91.429" width="64" height="9.143" rx="2.743" />
    </svg>
  );
}
