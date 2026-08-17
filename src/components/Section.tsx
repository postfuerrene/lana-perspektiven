import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "cream",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "forest" | "white";
  id?: string;
}) {
  const bg = tone === "forest" ? "bg-forest text-white" : tone === "white" ? "bg-white" : "bg-cream";
  return (
    <section id={id} className={`scroll-mt-20 ${bg} ${className}`}>
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">{children}</div>
    </section>
  );
}
