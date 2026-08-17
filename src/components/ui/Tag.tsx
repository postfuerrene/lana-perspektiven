type Tone = "moss" | "gold" | "line";

const tones: Record<Tone, string> = {
  moss: "bg-moss text-white",
  gold: "bg-gold-tint text-gold-ink",
  line: "bg-white text-ink border border-line",
};

export function Tag({
  children,
  tone = "line",
  ring = false,
}: {
  children: string;
  tone?: Tone;
  ring?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-sans text-xs font-semibold ${tones[tone]}`}
    >
      {children}
      {ring && <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-current opacity-60" />}
    </span>
  );
}
