import Link from "next/link";

export function Tile({
  href,
  eyebrow,
  title,
  teaser,
  mark,
}: {
  href: string;
  eyebrow: string;
  title: string;
  teaser: string;
  mark: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-white/15 bg-white/5 p-7 transition-colors hover:border-gold/60 hover:bg-white/10 lg:p-8"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-gold-deep">
            {eyebrow}
          </span>
          <span className="font-serif italic text-3xl leading-none text-white/25 group-hover:text-gold/70 transition-colors">
            {mark}
          </span>
        </div>
        <h3 className="mt-4 font-serif text-2xl leading-snug text-white">{title}</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">{teaser}</p>
      </div>
      <div className="mt-8 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-gold">
        Mehr erfahren
        <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}
