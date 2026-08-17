"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-3 lg:px-10">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/assets/logo-primary.png"
            alt="Stiftung IBZ St. Marienthal"
            width={180}
            height={51}
            className="h-7 w-auto lg:h-8"
            priority
          />
          <span className="hidden sm:block h-5 w-px bg-line" />
          <span className="hidden sm:block font-display text-xs font-extrabold uppercase tracking-[0.12em] text-ink">
            LaNa Perspektiven
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 font-sans text-sm">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 font-semibold uppercase tracking-[0.04em] transition-colors ${
                  active ? "bg-gold text-ink" : "text-ink/65 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex flex-col justify-center gap-1.5 h-11 w-11 shrink-0"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-[2px] w-7 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-[2px] w-7 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-7 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-cream px-6 py-4 font-sans">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-full px-4 py-3 text-base font-semibold uppercase tracking-[0.04em] ${
                      active ? "bg-gold text-ink" : "text-ink/75"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
