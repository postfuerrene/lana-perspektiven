type Tone = "gold" | "moss" | "tint";

const tones: Record<Tone, string> = {
  gold: "bg-gold text-ink",
  moss: "bg-moss text-white",
  tint: "bg-moss-tint text-moss",
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
