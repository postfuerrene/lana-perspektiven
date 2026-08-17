# Bildplatzhalter → Pexels

Die Seite läuft aktuell mit einem abstrakten Signatur-Motiv (die "Flusslinie" in
Gold, `src/components/RiverMotif.tsx`) statt Fotos in den Hero-Bereichen. Das
ist bewusst so gebaut, damit nichts kaputt aussieht, solange noch keine echten
Fotos ausgewählt sind — aber jede Hero-Komponente hat bereits einen `photoSrc`-
Anschluss, über den ein echtes Foto mit einer Zeile aktiviert wird.

## So aktivierst du ein Foto

1. Foto bei Pexels suchen (Vorschläge unten), lizenzfrei herunterladen.
2. Als JPG unter dem angegebenen Pfad in `public/assets/hero/` ablegen.
3. In der jeweiligen Seite/Komponente `photoSrc="/assets/hero/<name>.jpg"`
   setzen (bei der Startseite: Konstante `HERO_PHOTO` in `src/app/page.tsx`).

Empfohlenes Format: querformatig, mind. 1920×1080px, JPG, Landschafts-/
Weitwinkelaufnahmen wirken am besten unter dem olivfarbenen Verlauf.

## Zuordnung

| Ort | Datei | Wo aktivieren | Pexels-Suchbegriffe |
|---|---|---|---|
| Startseite – Hero | `public/assets/hero/home.jpg` | `HERO_PHOTO` in `src/app/page.tsx` | "river valley aerial", "misty river forest border", "Neisse river landscape", "monastery river Germany" |
| Synergien – Hero | `public/assets/hero/synergien.jpg` | `photoSrc` in `src/app/synergien/page.tsx` | "monastery cloister garden", "historic abbey courtyard", "old european monastery building" |
| AP1 – Nachbarsprachen & Mehrsprachigkeit | `public/assets/hero/ap1.jpg` | `photoSrc` in `src/app/ap1/page.tsx` | "students language exchange classroom", "teenagers school exchange europe", "open book language learning" |
| AP2 – Frühkindliche Mehrsprachigkeit | `public/assets/hero/ap2.jpg` | `photoSrc` in `src/app/ap2/page.tsx` | "kindergarten children playing", "parent reading child multilingual", "preschool teacher kids circle time" |
| AP3 – Bildungslandschaften & Vernetzung | `public/assets/hero/ap3.jpg` | `photoSrc` in `src/app/ap3/page.tsx` | "small european town square", "community meeting town hall", "aerial small town border region" |
| AP4 – Digitale Innovation | `public/assets/hero/ap4.jpg` | `photoSrc` in `src/app/ap4/page.tsx` | "student tablet online learning", "digital classroom technology", "video call language learning" |
| AP5 – Europäische Kooperation | `public/assets/hero/ap5.jpg` | `photoSrc` in `src/app/ap5/page.tsx` | "european flags conference", "international conference panel discussion", "handshake business meeting europe" |

## Bereits vorhandene echte Assets

Diese Dateien stammen aus dem originalen Claude-Design-Projekt und sind schon
im Repo (`public/assets/`):

- `logo-primary.png` — IBZ-Logo (farbig, für helle Flächen)
- `logo-weiss.png` — IBZ-Logo (weiß, für dunkle Flächen, aktuell in Header/Footer im Einsatz)

Die Originalfotos `kloster.jpg` und `neisse.jpg` aus dem Design-Projekt konnten
nicht vollständig übernommen werden (Dateigröße über dem 256-KB-Limit der
Design-Sync-Schnittstelle) — daher die Pexels-Empfehlungen oben als Ersatz.
