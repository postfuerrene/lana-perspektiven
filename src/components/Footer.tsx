import Image from "next/image";
import Link from "next/link";
import { mitgestalten, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white/80">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/logo-weiss.png"
              alt="Stiftung IBZ St. Marienthal"
              width={180}
              height={51}
              className="h-9 w-auto mb-6"
            />
            <p className="font-serif italic text-xl leading-relaxed text-white/85 max-w-sm">
              Landesstelle Nachbarsprachen Sachsen im Verbund der Stiftung IBZ St. Marienthal.
            </p>
          </div>

          <div>
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold mb-4">
              Navigation
            </div>
            <ul className="flex flex-col gap-2 font-sans text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold mb-4">
              {mitgestalten.contactLabel}
            </div>
            <a
              href={`mailto:${mitgestalten.contactEmail}`}
              className="font-sans text-sm hover:text-gold transition-colors"
            >
              {mitgestalten.contactEmail}
            </a>
            <p className="font-sans text-xs text-white/50 mt-6 leading-relaxed">
              Kloster St. Marienthal · 02899 Ostritz
              <br />
              Dreiländereck Deutschland · Polen · Tschechien
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Stiftung IBZ St. Marienthal — LaNa</span>
          <span>Impressum · Datenschutz</span>
        </div>
      </div>
    </footer>
  );
}
