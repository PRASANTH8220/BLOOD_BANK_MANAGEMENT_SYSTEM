/**
 * PulseDivider — the site's signature element: a heartbeat/ECG
 * trace used as a section divider instead of a generic wave-svg.
 * Draws itself in on mount (respects prefers-reduced-motion via CSS).
 */
export default function PulseDivider({
  tone = "var(--oxblood)",
  className = "",
  height = 64,
}) {
  return (
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      width="100%"
      height={height}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0,40 L160,40 L185,40 L205,12 L228,68 L250,40 L320,40
           L860,40 L885,12 L908,68 L930,40 L1200,40"
        fill="none"
        stroke={tone}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pulse-path"
      />
    </svg>
  );
}
