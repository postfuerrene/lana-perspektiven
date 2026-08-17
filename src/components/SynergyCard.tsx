import type { SynergyField } from "@/lib/content";

export function SynergyCard({ field }: { field: SynergyField }) {
  return (
    <article id={field.slug} className="scroll-mt-24 py-16 border-t border-line first:border-t-0 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
        <div className="flex items-start gap-6 lg:flex-col lg:gap-3">
          <span className="font-serif italic font-medium text-[clamp(3.5rem,8vw,6rem)] leading-[0.8] text-gold-ink">
            {field.letter}
          </span>
          <div className="pt-2 lg:pt-0">
            <div className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-forest mb-1">
              Synergiefeld
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif font-normal text-[clamp(1.75rem,3.2vw,2.5rem)] leading-tight text-ink max-w-3xl">
            {field.title}
          </h2>

          {field.lead && (
            <p className="mt-6 max-w-3xl font-serif italic text-xl leading-relaxed text-ink/90">
              {field.lead}
            </p>
          )}

          {field.rows && (
            <div className="mt-8 flex flex-col">
              {field.rows.map((row, i) => (
                <div
                  key={row.tag}
                  className={`flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6 border-t border-line ${
                    i === field.rows!.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span
                    className={`inline-flex shrink-0 items-center justify-center rounded-sm px-4 py-2 font-sans text-xs font-semibold tracking-[0.04em] sm:min-w-[9rem] ${
                      row.tag === "LaNa"
                        ? "bg-gold-soft text-gold-ink"
                        : "bg-forest/10 text-forest"
                    }`}
                  >
                    {row.tag}
                  </span>
                  <p className="font-sans text-base leading-relaxed text-ink/85">{row.text}</p>
                </div>
              ))}
            </div>
          )}

          {field.extra && (
            <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-ink/80">
              {field.extra}
            </p>
          )}

          {field.example && (
            <div className="mt-8 flex flex-col gap-3 max-w-3xl sm:flex-row sm:items-baseline sm:gap-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-forest shrink-0">
                {field.example.label}
              </span>
              <p className="font-sans text-base leading-relaxed text-ink/80">
                {field.example.text}
              </p>
            </div>
          )}

          {field.tags && (
            <div className="mt-8 flex flex-wrap gap-3 max-w-3xl">
              {field.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm bg-forest/10 px-5 py-3 font-sans text-sm text-forest"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-col gap-3 rounded-sm border border-line border-l-4 border-l-gold-deep bg-paper-card px-8 py-7 max-w-3xl">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-gold-ink">
              → Synergie
            </span>
            <p className="font-serif italic text-xl leading-relaxed text-ink">{field.synergy}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
