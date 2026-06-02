export function BrushAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 12 C 40 4, 80 20, 130 10 S 240 22, 300 8 S 380 18, 398 12"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M6 16 C 60 22, 120 6, 200 14 S 340 4, 394 16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}