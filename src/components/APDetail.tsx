import { PageHero } from "./PageHero";
import { Section } from "./Section";
import { PrevNext } from "./PrevNext";
import { Tag } from "./ui/Tag";
import { workPackages, type WorkPackage } from "@/lib/content";

export function APDetail({ wp, photoSrc }: { wp: WorkPackage; photoSrc?: string }) {
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
        stationLabel={`Station ${wp.number + 1} von 6 auf der Route`}
        photoSrc={photoSrc}
      />

      {/* Ziel — full-width statement, not a side card */}
      <Section tone="white" className="!pb-10">
        <Tag tone="gold">Ziel</Tag>
        <p className="mt-5 max-w-4xl font-display font-extrabold text-[clamp(1.5rem,3.4vw,2.5rem)] leading-tight text-ink">
          {wp.ziel}
        </p>
      </Section>

      {/* Projekte — connected vertical timeline */}
      <Section tone="cream" className="!pt-2 !pb-10">
        <Tag tone="line">Konkrete Projekte &amp; Produkte</Tag>
        <div className="relative mt-8 max-w-3xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          <div className="flex flex-col gap-8">
            {wp.projekte.map((p) => (
              <div key={p.num} className="relative flex gap-6 pl-0">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-moss-tint font-display font-black text-sm text-moss">
                  {p.num}
                </span>
                <p className="pt-2 font-sans text-[1.02rem] leading-relaxed text-ink/85">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 max-w-3xl rounded-2xl bg-gold-tint px-6 py-5">
          <p className="font-sans text-[0.95rem] leading-relaxed text-ink/85">
            <span className="font-bold uppercase tracking-[0.04em] text-gold-ink">
              Format &amp; Förderung ·{" "}
            </span>
            {wp.format}
          </p>
        </div>
      </Section>

      {/* Ergebnisse — horizontal outcome strip */}
      <Section tone="white" className="!pt-2">
        <Tag tone="moss">Messbare Ergebnisse</Tag>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {wp.ergebnisse.map((e) => (
            <div key={e} className="rounded-[24px] border border-line p-6">
              <span className="text-gold-ink font-display font-black text-2xl" aria-hidden="true">
                →
              </span>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink/80">{e}</p>
            </div>
          ))}
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
