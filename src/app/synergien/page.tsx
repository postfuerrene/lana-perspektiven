import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SynergyCard } from "@/components/SynergyCard";
import { synergyIntro, synergyFields } from "@/lib/content";

export const metadata: Metadata = {
  title: "Synergien — LaNa-Perspektiven",
};

export default function SynergienPage() {
  return (
    <>
      <PageHero kicker={synergyIntro.kicker} title={synergyIntro.title} lead={synergyIntro.lead} />

      <Section tone="paper" className="!pt-4 lg:!pt-6">
        <nav aria-label="Synergiefelder" className="flex flex-wrap gap-3 pb-4 mb-8 border-b border-line">
          {synergyFields.map((f) => (
            <a
              key={f.slug}
              href={`#${f.slug}`}
              className="flex items-center gap-2 rounded-sm border border-line px-4 py-2 font-sans text-sm text-ink/75 hover:border-gold-deep hover:text-forest transition-colors"
            >
              <span className="font-serif italic text-gold-ink">{f.letter}</span>
              {f.title}
            </a>
          ))}
        </nav>

        {synergyFields.map((field) => (
          <SynergyCard key={field.slug} field={field} />
        ))}
      </Section>
    </>
  );
}
