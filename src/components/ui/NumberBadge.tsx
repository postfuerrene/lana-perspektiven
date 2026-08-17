type Tone = "gold" | "forest" | "tint";

const tones: Record<Tone, string> = {
  gold: "bg-gold text-ink",
  forest: "bg-forest text-white",
  tint: "bg-forest-tint text-forest",
};

export function NumberBadge({
  children,
  tone = "gold",
  className = "",
}: {
  children: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-2xl font-display font-black leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
