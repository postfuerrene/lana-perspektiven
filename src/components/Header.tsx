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
    <header className="sticky top-0 z-50 bg-forest text-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 lg:px-12">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/assets/logo-weiss.png"
            alt="Stiftung IBZ St. Marienthal"
            width={180}
            height={51}
            className="h-8 w-auto lg:h-9"
            priority
          />
          <span className="hidden sm:block h-6 w-px bg-white/25" />
          <span className="hidden sm:block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
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
                className={`relative px-3 py-2 uppercase tracking-[0.08em] transition-colors ${
                  active ? "text-gold" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-gold" />
                )}
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
          <span className={`h-[2px] w-7 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-[2px] w-7 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-7 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/15 bg-forest px-6 py-4 font-sans">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-base uppercase tracking-[0.06em] ${
                      active ? "text-gold" : "text-white/85"
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
