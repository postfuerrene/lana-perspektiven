import { PageHero } from "./PageHero";
import { Section, Eyebrow } from "./Section";
import { PrevNext } from "./PrevNext";
import { workPackages, type WorkPackage } from "@/lib/content";

export function APDetail({ wp }: { wp: WorkPackage }) {
  const index = workPackages.findIndex((w) => w.id === wp.id);
  const prevWp = index > 0 ? workPackages[index - 1] : null;
  const nextWp = index < workPackages.length - 1 ? workPackages[index + 1] : null;

  return (
    <>
      <PageHero
        kicker={`Arbeitspaket ${wp.number}`}
        title={wp.title}
        lead={wp.subtitle}
        eyebrowMark={wp.id}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr_0.85fr] lg:gap-8 lg:items-stretch">
          {/* Ziel */}
          <div className="rounded-sm bg-forest/[0.06] border border-line p-8">
            <Eyebrow tone="forest">Ziel</Eyebrow>
            <p className="font-serif text-xl leading-relaxed text-ink">{wp.ziel}</p>
          </div>

          {/* Projekte */}
          <div>
            <Eyebrow tone="forest">Konkrete Projekte &amp; Produkte</Eyebrow>
            <div className="flex flex-col gap-3">
              {wp.projekte.map((p) => (
                <div
                  key={p.num}
                  className="flex gap-5 items-start rounded-sm border border-line bg-paper-card px-6 py-4"
                >
                  <span className="font-mono font-semibold text-sm text-gold-ink pt-0.5">
                    {p.num}
                  </span>
                  <p className="font-sans text-[0.95rem] leading-relaxed text-ink/85">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-sm border-l-4 border-forest bg-forest/[0.06] px-6 py-4">
              <p className="font-sans text-[0.95rem] leading-relaxed text-ink/85">
                <span className="font-semibold uppercase tracking-[0.06em] text-forest">
                  Format &amp; Förderung ·{" "}
                </span>
                {wp.format}
              </p>
            </div>
          </div>

          {/* Ergebnisse */}
          <div>
            <Eyebrow tone="forest">Messbare Ergebnisse</Eyebrow>
            <div className="flex h-[calc(100%-2rem)] flex-col justify-center gap-4 rounded-sm border border-line border-l-4 border-l-gold-deep bg-paper-card px-7 py-7">
              {wp.ergebnisse.map((e) => (
                <div key={e} className="flex gap-3 items-start">
                  <span className="text-gold-ink font-semibold shrink-0" aria-hidden="true">
                    →
                  </span>
                  <p className="font-sans text-sm leading-relaxed text-ink/85">{e}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <PrevNext
        prev={
          prevWp
            ? { href: `/${prevWp.slug}`, label: prevWp.title, sub: `AP${prevWp.number}` }
            : { href: "/synergien", label: "Synergien & Schnittstellen", sub: "Zurück" }
        }
        next={
          nextWp
            ? { href: `/${nextWp.slug}`, label: nextWp.title, sub: `AP${nextWp.number}` }
            : { href: "/", label: "Zur Startseite", sub: "Übersicht" }
        }
      />
    </>
  );
}
