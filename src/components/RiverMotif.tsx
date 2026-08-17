type RiverMotifProps = {
  className?: string;
  tone?: "gold" | "ink";
};

/**
 * Signature motif: an abstract river bend, standing in for the Neiße that
 * threads the Dreiländereck. Reused across hero backgrounds and dividers.
 */
export function RiverMotif({ className = "", tone = "gold" }: RiverMotifProps) {
  const stroke = tone === "gold" ? "#ffd85f" : "#202b22";
  return (
    <svg
      className={className}
      viewBox="0 0 1600 400"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M-40 320 C 220 260, 340 380, 560 300 S 900 140, 1120 220 S 1440 340, 1660 260"
        stroke={stroke}
        strokeOpacity="0.9"
        strokeWidth="2"
      />
      <path
        d="M-40 260 C 220 200, 340 320, 560 240 S 900 80, 1120 160 S 1440 280, 1660 200"
        stroke={stroke}
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function RiverDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1600 60" className="w-full h-auto" preserveAspectRatio="none">
        <path
          d="M0 30 C 200 6, 340 54, 560 30 S 900 6, 1120 30 S 1440 54, 1600 30"
          stroke="#d9a72b"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
