import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Tile } from "@/components/Tile";
import { RiverMotif, RiverThread } from "@/components/RiverMotif";
import { Tag } from "@/components/ui/Tag";
import { ButtonLabel } from "@/components/ui/Button";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { meta, kontext, overviewIntro, mitgestalten, workPackages } from "@/lib/content";

// Drop a file at /public/assets/hero/home.jpg and set this to
// "/assets/hero/home.jpg" to swap the abstract motif for a real photo.
// See IMAGES.md for the recommended Pexels search + crop.
const HERO_PHOTO: string | undefined = undefined;

const tileTones = ["forest", "gold", "tint", "white", "tint", "gold"] as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        {HERO_PHOTO ? (
          <>
            <Image src={HERO_PHOTO} alt="" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-forest/70" />
          </>
        ) : (
          <>
            <div
              className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gold-tint"
              aria-hidden="true"
            />
            <div
              className="absolute top-1/3 -left-24 h-64 w-64 rounded-full bg-forest-tint"
              aria-hidden="true"
            />
            <RiverMotif className="absolute inset-x-0 bottom-0 h-48 w-full opacity-60" tone="forest" />
          </>
        )}
        <div className="relative mx-auto flex min-h-[82vh] max-w-[1440px] flex-col justify-center px-6 py-20 lg:px-10">
          <Tag tone={HERO_PHOTO ? "line" : "forest"}>{meta.kicker}</Tag>
          <h1
            className={`mt-7 max-w-4xl font-display font-black text-[clamp(2.75rem,7.5vw,6rem)] leading-[0.98] ${
              HERO_PHOTO ? "text-white" : "text-ink"
            }`}
          >
            {meta.title}
          </h1>
          <p
            className={`mt-7 max-w-2xl font-sans text-[clamp(1.15rem,2.2vw,1.4rem)] leading-relaxed ${
              HERO_PHOTO ? "text-white/90" : "text-muted"
            }`}
          >
            {meta.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="#uebersicht" className="group">
              <ButtonLabel variant="dark">Bausteine entdecken</ButtonLabel>
            </Link>
            <span
              className={`font-sans text-sm font-semibold uppercase tracking-[0.06em] ${
                HERO_PHOTO ? "text-white/75" : "text-muted"
              }`}
            >
              {meta.date} · Input: {meta.author}
            </span>
          </div>
        </div>
      </section>

      {/* Kontext / Hintergrund */}
      <Section tone="white">
        <Tag tone="gold">Entstehungskontext</Tag>
        <h2 className="mt-4 font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight text-ink max-w-3xl">
          Wie dieses Konzept entstanden ist
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-[28px] bg-forest-tint p-8">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-forest mb-3 block">
                {kontext.zeitraumLabel}
              </span>
              <span className="font-display font-black text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-ink">
                {kontext.zeitraum}
              </span>
            </div>
            <div className="rounded-[28px] bg-ink px-8 py-7">
              <p className="font-display font-bold text-xl leading-relaxed text-white">
                „{kontext.quote}“
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-line p-8">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-gold-ink mb-4 block">
              Erarbeitet gemeinsam von
            </span>
            <ul className="flex flex-col">
              {kontext.contributors.map((c, i) => (
                <li
                  key={c.name}
                  className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 border-t border-line ${
                    i === kontext.contributors.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="font-display font-bold text-lg text-ink">{c.name}</span>
                  <span className="font-sans text-sm text-muted">{c.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Übersicht */}
      <Section tone="cream" id="uebersicht">
        <Tag tone="forest">{overviewIntro.kicker}</Tag>
        <h2 className="mt-4 font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight text-ink max-w-3xl">
          {overviewIntro.title}
        </h2>
        <p className="mt-5 max-w-3xl font-sans text-base leading-relaxed text-muted">
          {overviewIntro.lead}
        </p>

        <div className="relative mt-14">
          <RiverThread
            className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 hidden w-[calc(100%+5rem)] opacity-[0.4] lg:block"
            tone="gold"
          />
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Tile
              href="/synergien"
              eyebrow="Synergien & Schnittstellen"
              title="LaNa · KoKoPol · KoKoTschech · Europabildung"
              teaser="Fünf Synergiefelder verbinden die Arbeit systematisch miteinander."
              mark="a–e"
              tone="forest"
            />
            {workPackages.map((wp, i) => (
              <Tile
                key={wp.id}
                href={`/${wp.slug}`}
                eyebrow={`Arbeitspaket ${wp.number}`}
                title={wp.title}
                teaser={wp.subtitle}
                mark={wp.id}
                tone={tileTones[i + 1]}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Mitgestalten */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">
          <div>
            <Tag tone="gold">{mitgestalten.kicker}</Tag>
            <h2 className="mt-4 font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-ink">
              {mitgestalten.title}
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-ink/80 max-w-lg">
              {mitgestalten.lead}
            </p>
            <a href={`mailto:${mitgestalten.contactEmail}`} className="group mt-8 inline-block">
              <ButtonLabel variant="dark">{mitgestalten.contactLabel}</ButtonLabel>
            </a>
          </div>
          <ul className="flex flex-col gap-4">
            {mitgestalten.points.map((p, i) => (
              <li
                key={p}
                className="flex gap-5 items-start rounded-[24px] border border-line p-6"
              >
                <NumberBadge tone={i % 2 === 0 ? "gold" : "tint"} className="h-12 w-12 shrink-0 text-lg">
                  {String(i + 1).padStart(2, "0")}
                </NumberBadge>
                <p className="pt-1.5 font-sans text-base leading-relaxed text-ink/85">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
