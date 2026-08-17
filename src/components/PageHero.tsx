import Image from "next/image";
import { RiverMotif } from "./RiverMotif";
import { Tag } from "./ui/Tag";
import { NumberBadge } from "./ui/NumberBadge";

type PageHeroProps = {
  kicker: string;
  title: string;
  lead?: string;
  eyebrowMark?: string;
  photoSrc?: string;
};

export function PageHero({ kicker, title, lead, eyebrowMark, photoSrc }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream">
      {photoSrc ? (
        <>
          <Image src={photoSrc} alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-forest/70" />
        </>
      ) : (
        <>
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-tint" aria-hidden="true" />
          <RiverMotif className="absolute inset-x-0 bottom-0 h-32 w-full opacity-70" tone="forest" />
        </>
      )}
      <div className="relative mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="flex flex-wrap items-center gap-4 mb-7">
          <Tag tone={photoSrc ? "line" : "forest"}>{kicker}</Tag>
        </div>
        <div className="flex items-start gap-6 lg:gap-8">
          {eyebrowMark && (
            <NumberBadge tone="gold" className="h-20 w-20 shrink-0 text-3xl lg:h-28 lg:w-28 lg:text-4xl">
              {eyebrowMark}
            </NumberBadge>
          )}
          <div>
            <h1
              className={`font-display font-extrabold text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] max-w-4xl ${
                photoSrc ? "text-white" : "text-ink"
              }`}
            >
              {title}
            </h1>
            {lead && (
              <p
                className={`mt-6 max-w-2xl font-sans text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed ${
                  photoSrc ? "text-white/90" : "text-muted"
                }`}
              >
                {lead}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
