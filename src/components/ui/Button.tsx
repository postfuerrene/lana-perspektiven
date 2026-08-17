import { ReactNode } from "react";

type Variant = "gold" | "dark" | "light";

const variants: Record<Variant, { pill: string; icon: string }> = {
  gold: { pill: "bg-gold text-ink group-hover:bg-gold-deep", icon: "bg-ink/10" },
  dark: { pill: "bg-forest text-white group-hover:bg-forest-deep", icon: "bg-white/15" },
  light: { pill: "bg-white text-ink group-hover:bg-cream", icon: "bg-ink/10" },
};

export function ButtonLabel({
  children,
  variant = "gold",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const v = variants[variant];
  return (
    <span
      className={`inline-flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 font-sans text-sm font-semibold transition-colors ${v.pill} ${className}`}
    >
      {children}
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${v.icon}`}
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M3 11L11 3M11 3H4.5M11 3V9.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}
