import type { SynergyField } from "@/lib/content";
import { NumberBadge } from "./ui/NumberBadge";
import { Tag } from "./ui/Tag";

const cardTones = ["bg-white border border-line", "bg-forest-tint", "bg-white border border-line", "bg-gold-tint", "bg-white border border-line"];
const badgeTones: Array<"forest" | "gold" | "tint"> = ["forest", "gold", "forest", "gold", "forest"];

export function SynergyCard({ field, index }: { field: SynergyField; index: number }) {
  const cardTone = cardTones[index % cardTones.length];
  const badgeTone = badgeTones[index % badgeTones.length];

  return (
    <article
      id={field.slug}
      className={`relative z-10 scroll-mt-24 rounded-[28px] p-7 lg:p-10 ${cardTone}`}
    >
      <div className="flex items-start gap-5 lg:gap-7">
        <NumberBadge tone={badgeTone} className="h-16 w-16 shrink-0 text-2xl lg:h-20 lg:w-20 lg:text-3xl">
          {field.letter}
        </NumberBadge>
        <div className="pt-1">
          <Tag tone="line">Synergiefeld</Tag>
          <h2 className="mt-3 font-display font-extrabold text-[clamp(1.5rem,2.8vw,2.25rem)] leading-tight text-ink">
            {field.title}
          </h2>
        </div>
      </div>

      {field.lead && (
        <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-ink/85">{field.lead}</p>
      )}

      {field.rows && (
        <div className="mt-6 flex flex-col gap-3">
          {field.rows.map((row) => (
            <div
              key={row.tag}
              className="flex flex-col gap-3 rounded-2xl bg-white/70 p-5 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="shrink-0 sm:min-w-[8rem]">
                <Tag tone={row.tag === "LaNa" ? "gold" : "forest"}>{row.tag}</Tag>
              </span>
              <p className="font-sans text-[0.95rem] leading-relaxed text-ink/80">{row.text}</p>
            </div>
          ))}
        </div>
      )}

      {field.extra && (
        <p className="mt-6 max-w-3xl font-sans text-[0.95rem] leading-relaxed text-ink/75">
          {field.extra}
        </p>
      )}

      {field.example && (
        <div className="mt-6 flex flex-col gap-3 max-w-3xl rounded-2xl bg-white/70 p-5 sm:flex-row sm:items-baseline sm:gap-6">
          <span className="shrink-0">
            <Tag tone="line">{field.example.label}</Tag>
          </span>
          <p className="font-sans text-[0.95rem] leading-relaxed text-ink/80">{field.example.text}</p>
        </div>
      )}

      {field.tags && (
        <div className="mt-6 flex flex-wrap gap-2.5 max-w-3xl">
          {field.tags.map((tag) => (
            <Tag key={tag} tone="forest">
              {tag}
            </Tag>
          ))}
        </div>
      )}

      <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-ink px-7 py-6 sm:flex-row sm:items-start sm:gap-6">
        <span className="shrink-0 font-sans text-xs font-bold uppercase tracking-[0.14em] text-gold">
          → Synergie
        </span>
        <p className="font-sans text-base leading-relaxed text-white/90">{field.synergy}</p>
      </div>
    </article>
  );
}
