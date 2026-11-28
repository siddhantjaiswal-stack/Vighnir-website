/**
 * The Club's mark: a triangle on a stem over three linked nodes, stroked in the
 * brand gradient. Geometry copied from the app (`shared/ui/appMark.tsx`,
 * viewBox 24 x 26) so the site and the app draw the same mark.
 */
export default function ClubMark({
  id = "cm",
  title,
  strokeWidth = 2,
  className,
}: {
  id?: string;
  title?: string;
  strokeWidth?: number;
  className?: string;
}) {
  const grad = `${id}-g`;
  return (
    <svg
      viewBox="0 0 24 26"
      fill="none"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <linearGradient id={grad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9D7FFA" />
          <stop offset="50%" stopColor="#7D6EFF" />
          <stop offset="100%" stopColor="#5B4CD7" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${grad})`} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L16.5 8.5H7.5L12 3Z" />
        <path d="M12 8.5V16" />
        <circle cx="6" cy="17" r="2.5" />
        <circle cx="18" cy="17" r="2.5" />
        <circle cx="12" cy="21" r="2.5" />
      </g>
    </svg>
  );
}
