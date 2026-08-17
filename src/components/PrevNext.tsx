import Link from "next/link";

type LinkInfo = { href: string; label: string; sub: string } | null;

export function PrevNext({ prev, next }: { prev: LinkInfo; next: LinkInfo }) {
  return (
    <nav
      aria-label="Arbeitspaket-Navigation"
      className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-2 lg:px-10 lg:pb-24"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col justify-center rounded-[24px] border border-line bg-white px-7 py-7 transition-colors hover:border-gold-deep"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-muted">
            ← {prev.sub}
          </span>
          <span className="mt-2 font-display font-extrabold text-xl text-ink group-hover:text-moss">
            {prev.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col justify-center rounded-[24px] border border-line bg-white px-7 py-7 text-right transition-colors hover:border-gold-deep"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-muted">
            {next.sub} →
          </span>
          <span className="mt-2 font-display font-extrabold text-xl text-ink group-hover:text-moss">
            {next.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
