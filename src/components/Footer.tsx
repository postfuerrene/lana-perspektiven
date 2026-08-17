import Image from "next/image";
import Link from "next/link";
import { mitgestalten, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/logo-primary.png"
              alt="Stiftung IBZ St. Marienthal"
              width={180}
              height={51}
              className="h-8 w-auto mb-6"
            />
            <p className="font-display font-extrabold text-2xl leading-snug text-ink max-w-sm">
              Landesstelle Nachbarsprachen Sachsen im Verbund der Stiftung IBZ.
            </p>
          </div>

          <div>
            <div className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-gold-ink mb-4">
              Navigation
            </div>
            <ul className="flex flex-col gap-2 font-sans text-sm text-ink/75">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-moss transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-gold-ink mb-4">
              {mitgestalten.contactLabel}
            </div>
            <a
              href={`mailto:${mitgestalten.contactEmail}`}
              className="font-sans text-sm text-ink/75 hover:text-moss transition-colors"
            >
              {mitgestalten.contactEmail}
            </a>
            <p className="font-sans text-xs text-muted mt-6 leading-relaxed">
              Kloster St. Marienthal · 02899 Ostritz
              <br />
              Dreiländereck Deutschland · Polen · Tschechien
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Stiftung IBZ St. Marienthal — LaNa</span>
          <span>Impressum · Datenschutz</span>
        </div>
      </div>
    </footer>
  );
}
