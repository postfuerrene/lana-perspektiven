import Link from "next/link";

type LinkInfo = { href: string; label: string; sub: string } | null;

export function PrevNext({ prev, next }: { prev: LinkInfo; next: LinkInfo }) {
  return (
    <nav
      aria-label="Arbeitspaket-Navigation"
      className="grid grid-cols-1 divide-y divide-line border-t border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col justify-center px-6 py-8 transition-colors hover:bg-paper-card lg:px-12"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            ← {prev.sub}
          </span>
          <span className="mt-2 font-serif text-2xl text-ink group-hover:text-forest">
            {prev.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col justify-center px-6 py-8 text-right transition-colors hover:bg-paper-card lg:px-12"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            {next.sub} →
          </span>
          <span className="mt-2 font-serif text-2xl text-ink group-hover:text-forest">
            {next.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
