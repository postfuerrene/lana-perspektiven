import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { Tile } from "@/components/Tile";
import { RiverMotif, RiverDivider } from "@/components/RiverMotif";
import { meta, kontext, overviewIntro, mitgestalten, workPackages } from "@/lib/content";

// Drop a file at /public/assets/hero/home.jpg and set this to
// "/assets/hero/home.jpg" to swap the abstract motif for a real photo.
// See IMAGES.md for the recommended Pexels search + crop.
const HERO_PHOTO: string | undefined = undefined;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-white">
        {HERO_PHOTO && (
          <Image src={HERO_PHOTO} alt="" fill priority className="object-cover" sizes="100vw" />
        )}
        {!HERO_PHOTO && (
          <RiverMotif className="absolute inset-x-0 bottom-0 h-56 w-full opacity-60" tone="gold" />
        )}
        <div
          className={`absolute inset-0 ${
            HERO_PHOTO
              ? "bg-forest/70"
              : "bg-[radial-gradient(ellipse_at_top_right,_rgba(255,216,95,0.10),_transparent_55%)]"
          }`}
        />
        <div className="relative mx-auto flex min-h-[78vh] max-w-[1400px] flex-col justify-center px-6 py-24 lg:px-12">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/65 mb-6">
            {meta.kicker}
          </div>
          <h1 className="max-w-4xl font-serif font-normal text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] text-white">
            {meta.title}
          </h1>
          <p className="mt-7 max-w-2xl font-serif italic text-[clamp(1.25rem,2.6vw,1.75rem)] leading-relaxed text-white/90">
            {meta.subtitle}
          </p>
          <div className="mt-12 h-[3px] w-20 bg-gold" />
          <div className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-white/80">
            {meta.date} · Input: {meta.author}
          </div>
        </div>
      </section>

      {/* Kontext / Hintergrund */}
      <Section tone="paper">
        <Eyebrow tone="forest">Entstehungskontext</Eyebrow>
        <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight text-ink max-w-3xl">
          Wie dieses Konzept entstanden ist
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="flex flex-col">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-forest mb-3">
              {kontext.zeitraumLabel}
            </span>
            <span className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-ink">
              {kontext.zeitraum}
            </span>
            <blockquote className="mt-auto pt-10 border-l-4 border-gold-deep bg-paper-card rounded-sm px-8 py-7">
              <p className="font-serif italic text-xl leading-relaxed text-ink">
                „{kontext.quote}“
              </p>
            </blockquote>
          </div>

          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-forest mb-2 block">
              Erarbeitet gemeinsam von
            </span>
            <ul className="flex flex-col">
              {kontext.contributors.map((c, i) => (
                <li
                  key={c.name}
                  className={`flex items-baseline justify-between gap-6 py-5 border-t border-line ${
                    i === kontext.contributors.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="font-sans text-lg font-semibold text-ink">{c.name}</span>
                  <span className="font-sans text-sm text-muted text-right">{c.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <RiverDivider className="bg-paper" />

      {/* Übersicht */}
      <Section tone="forest" className="relative overflow-hidden">
        <Eyebrow>{overviewIntro.kicker}</Eyebrow>
        <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight text-white max-w-3xl">
          {overviewIntro.title}
        </h2>
        <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-white/75">
          {overviewIntro.lead}
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Tile
            href="/synergien"
            eyebrow="Synergien & Schnittstellen"
            title="LaNa · KoKoPol · KoKoTschech · Europabildung"
            teaser="Fünf Synergiefelder verbinden die Arbeit systematisch miteinander."
            mark="a–e"
          />
          {workPackages.map((wp) => (
            <Tile
              key={wp.id}
              href={`/${wp.slug}`}
              eyebrow={`Arbeitspaket ${wp.number}`}
              title={wp.title}
              teaser={wp.subtitle}
              mark={wp.id}
            />
          ))}
        </div>
      </Section>

      {/* Mitgestalten */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-start">
          <div>
            <Eyebrow tone="forest">{mitgestalten.kicker}</Eyebrow>
            <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-ink">
              {mitgestalten.title}
            </h2>
            <p className="mt-6 font-serif italic text-lg leading-relaxed text-ink/85 max-w-lg">
              {mitgestalten.lead}
            </p>
            <a
              href={`mailto:${mitgestalten.contactEmail}`}
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-forest px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-forest-deep"
            >
              {mitgestalten.contactLabel}
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="flex flex-col">
            {mitgestalten.points.map((p, i) => (
              <li
                key={p}
                className={`flex gap-5 items-start py-6 border-t border-line ${
                  i === mitgestalten.points.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-serif italic text-2xl text-gold-ink leading-tight shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-base leading-relaxed text-ink/85">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
