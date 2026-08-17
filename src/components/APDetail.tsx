import { PageHero } from "./PageHero";
import { Section } from "./Section";
import { PrevNext } from "./PrevNext";
import { Tag } from "./ui/Tag";
import { NumberBadge } from "./ui/NumberBadge";
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

      <Section tone="cream">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.5fr_0.9fr] lg:items-stretch">
          {/* Ziel */}
          <div className="rounded-[28px] bg-forest p-8">
            <Tag tone="gold">Ziel</Tag>
            <p className="mt-4 font-display font-bold text-xl leading-snug text-white">{wp.ziel}</p>
          </div>

          {/* Projekte */}
          <div>
            <Tag tone="line">Konkrete Projekte &amp; Produkte</Tag>
            <div className="mt-4 flex flex-col gap-3">
              {wp.projekte.map((p) => (
                <div
                  key={p.num}
                  className="flex gap-4 items-start rounded-2xl border border-line bg-white px-5 py-4"
                >
                  <NumberBadge tone="tint" className="h-9 w-9 shrink-0 text-sm">
                    {p.num}
                  </NumberBadge>
                  <p className="pt-1 font-sans text-[0.95rem] leading-relaxed text-ink/85">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-2xl bg-gold-tint px-6 py-5">
              <p className="font-sans text-[0.95rem] leading-relaxed text-ink/85">
                <span className="font-bold uppercase tracking-[0.04em] text-gold-ink">
                  Format &amp; Förderung ·{" "}
                </span>
                {wp.format}
              </p>
            </div>
          </div>

          {/* Ergebnisse */}
          <div>
            <Tag tone="line">Messbare Ergebnisse</Tag>
            <div className="mt-4 flex h-[calc(100%-2.75rem)] flex-col justify-center gap-4 rounded-[28px] bg-ink px-7 py-8">
              {wp.ergebnisse.map((e) => (
                <div key={e} className="flex gap-3 items-start">
                  <span className="text-gold font-bold shrink-0" aria-hidden="true">
                    →
                  </span>
                  <p className="font-sans text-sm leading-relaxed text-white/85">{e}</p>
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
