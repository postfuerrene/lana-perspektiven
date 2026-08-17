import Image from "next/image";
import { RiverMotif } from "./RiverMotif";

type PageHeroProps = {
  kicker: string;
  title: string;
  lead?: string;
  eyebrowMark?: string;
  /**
   * Optional hero photograph, e.g. "/assets/hero/synergien.jpg". Drop a file
   * at that path and pass it here to swap the abstract motif for a real
   * photo — see IMAGES.md for the full placeholder → Pexels mapping.
   */
  photoSrc?: string;
};

export function PageHero({ kicker, title, lead, eyebrowMark, photoSrc }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      {photoSrc && (
        <Image
          src={photoSrc}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      {!photoSrc && (
        <RiverMotif
          className="absolute inset-x-0 bottom-0 h-40 w-full opacity-70"
          tone="gold"
        />
      )}
      <div
        className={`absolute inset-0 ${
          photoSrc
            ? "bg-forest/70"
            : "bg-gradient-to-b from-forest via-forest to-forest-deep/60"
        }`}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="flex items-start gap-8">
          {eyebrowMark && (
            <span className="font-serif italic text-[clamp(3.5rem,9vw,6.5rem)] leading-none text-gold shrink-0">
              {eyebrowMark}
            </span>
          )}
          <div>
            <div className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-4">
              {kicker}
            </div>
            <h1 className="font-serif font-normal text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] max-w-4xl">
              {title}
            </h1>
            {lead && (
              <p className="mt-6 max-w-3xl font-serif italic text-[clamp(1.15rem,2.2vw,1.5rem)] leading-relaxed text-white/90">
                {lead}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
