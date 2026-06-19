/**
 * BrandMark — the LifeLine logo: a blood drop with a heartbeat
 * trace cut through it. This is the seed of the site's signature
 * "pulse line" motif, reused in dividers throughout the app.
 */
export default function BrandMark({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4C24 4 9 21.5 9 30.5C9 38.5 15.8 44 24 44C32.2 44 39 38.5 39 30.5C39 21.5 24 4 24 4Z"
        fill="var(--oxblood)"
      />
      <path
        d="M9.5 29H16L19.5 22L24.5 36L28 27H38.5"
        stroke="var(--linen)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
