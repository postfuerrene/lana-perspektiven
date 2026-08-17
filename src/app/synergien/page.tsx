import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SynergyCard } from "@/components/SynergyCard";
import { RiverThread } from "@/components/RiverMotif";
import { synergyIntro, synergyFields } from "@/lib/content";

export const metadata: Metadata = {
  title: "Synergien — LaNa-Perspektiven",
};

export default function SynergienPage() {
  return (
    <>
      <PageHero
        kicker={synergyIntro.kicker}
        title={synergyIntro.title}
        lead={synergyIntro.lead}
        stationLabel="Station 1 von 6 auf der Route"
        photoSrc="/assets/hero/synergien.jpg"
      />

      <Section tone="cream" className="!pt-8 lg:!pt-10">
        <nav aria-label="Synergiefelder" className="flex flex-wrap gap-2.5 pb-10">
          {synergyFields.map((f) => (
            <a
              key={f.slug}
              href={`#${f.slug}`}
              className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 font-sans text-sm font-medium text-ink/75 transition-colors hover:border-gold-deep hover:text-moss"
            >
              <span className="font-display font-extrabold text-gold-ink">{f.letter}</span>
              {f.title}
            </a>
          ))}
        </nav>

        <div className="relative">
          <RiverThread className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 hidden w-[calc(100%+5rem)] opacity-[0.35] lg:block" tone="moss" />
          <div className="relative flex flex-col gap-6">
            {synergyFields.map((field, i) => (
              <SynergyCard key={field.slug} field={field} index={i} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
