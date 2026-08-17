type RiverMotifProps = {
  className?: string;
  tone?: "gold" | "forest" | "cream";
};

const strokes = {
  gold: "#ffd85f",
  forest: "#202b22",
  cream: "#faf8f2",
};

/**
 * Signature motif: an abstract river bend, standing in for the Neiße that
 * threads the Dreiländereck. Used as a hero backdrop.
 */
export function RiverMotif({ className = "", tone = "gold" }: RiverMotifProps) {
  const stroke = strokes[tone];
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
        strokeWidth="3"
      />
      <path
        d="M-40 260 C 220 200, 340 320, 560 240 S 900 80, 1120 160 S 1440 280, 1660 200"
        stroke={stroke}
        strokeOpacity="0.35"
        strokeWidth="2"
      />
    </svg>
  );
}

/**
 * The same river, promoted to a structural connector that threads behind a
 * card grid — the visual argument that Synergien tie everything together.
 */
export function RiverThread({ className = "", tone = "forest" }: RiverMotifProps) {
  const stroke = strokes[tone];
  return (
    <svg
      className={className}
      viewBox="0 0 1200 1400"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M60 0 C 260 120, -20 260, 220 380 S 640 480, 420 620 S 40 760, 340 880 S 900 940, 660 1080 S 220 1220, 560 1400"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2.5"
        strokeDasharray="1 14"
        strokeLinecap="round"
      />
    </svg>
  );
}
