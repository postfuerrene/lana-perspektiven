import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "paper",
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "forest" | "card";
}) {
  const bg =
    tone === "forest" ? "bg-forest text-white" : tone === "card" ? "bg-paper-card" : "bg-paper";
  return (
    <section className={`${bg} ${className}`}>
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "forest" }) {
  const color = tone === "gold" ? "text-gold-deep" : "text-forest";
  return (
    <div className={`font-sans text-xs font-bold uppercase tracking-[0.18em] ${color} mb-3`}>
      {children}
    </div>
  );
}
