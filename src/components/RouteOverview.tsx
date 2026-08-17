import { Tile } from "./Tile";

export type Stop = {
  href: string;
  eyebrow: string;
  title: string;
  teaser: string;
  mark: string;
  tone: "moss" | "gold" | "tint" | "white";
};

export function RouteOverview({ stops }: { stops: Stop[] }) {
  return (
    <div className="relative">
      {/* mobile rail */}
      <div className="lg:hidden absolute left-5 top-2 bottom-2 w-px bg-line" aria-hidden="true" />
      <div className="flex flex-col gap-8 lg:hidden">
        {stops.map((stop, i) => (
          <div key={stop.href} className="relative flex gap-5 pl-0">
            <span className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold font-display font-black text-sm text-ink">
              {i + 1}
            </span>
            <div className="flex-1">
              <Tile {...stop} />
            </div>
          </div>
        ))}
      </div>

      {/* desktop route */}
      <div className="hidden lg:block">
        <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-line" aria-hidden="true" />
        <div className="flex flex-col gap-14">
          {stops.map((stop, i) => (
            <div key={stop.href} className="relative grid grid-cols-2 items-center gap-16">
              <span className="absolute left-1/2 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold font-display font-black text-ink">
                {i + 1}
              </span>
              {i % 2 === 0 ? (
                <>
                  <Tile {...stop} />
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <Tile {...stop} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
