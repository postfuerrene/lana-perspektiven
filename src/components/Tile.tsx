import Link from "next/link";
import { ButtonLabel } from "./ui/Button";

type Tone = "forest" | "gold" | "tint" | "white";

const tones: Record<Tone, { bg: string; title: string; body: string; mark: string; eyebrow: string; btn: "gold" | "dark" | "light" }> = {
  forest: { bg: "bg-forest", title: "text-white", body: "text-white/75", mark: "text-white/20", eyebrow: "text-gold", btn: "gold" },
  gold: { bg: "bg-gold", title: "text-ink", body: "text-ink/70", mark: "text-ink/15", eyebrow: "text-forest", btn: "dark" },
  tint: { bg: "bg-forest-tint", title: "text-ink", body: "text-ink/70", mark: "text-forest/15", eyebrow: "text-forest", btn: "dark" },
  white: { bg: "bg-white border border-line", title: "text-ink", body: "text-ink/70", mark: "text-ink/10", eyebrow: "text-gold-ink", btn: "dark" },
};

export function Tile({
  href,
  eyebrow,
  title,
  teaser,
  mark,
  tone = "white",
}: {
  href: string;
  eyebrow: string;
  title: string;
  teaser: string;
  mark: string;
  tone?: Tone;
}) {
  const t = tones[tone];
  return (
    <Link
      href={href}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] p-7 transition-transform hover:-translate-y-1 lg:p-8 ${t.bg}`}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className={`font-sans text-xs font-bold uppercase tracking-[0.12em] ${t.eyebrow}`}>
            {eyebrow}
          </span>
          <span className={`font-display font-black text-4xl leading-none ${t.mark}`}>{mark}</span>
        </div>
        <h3 className={`mt-5 font-display font-extrabold text-2xl leading-snug ${t.title}`}>{title}</h3>
        <p className={`mt-3 font-sans text-sm leading-relaxed ${t.body}`}>{teaser}</p>
      </div>
      <div className="mt-8">
        <ButtonLabel variant={t.btn}>Mehr erfahren</ButtonLabel>
      </div>
    </Link>
  );
}
