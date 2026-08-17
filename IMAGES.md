# Bildplatzhalter → Pexels

Alle Hero-Bereiche laufen jetzt mit echten Fotos unter `public/assets/hero/`.
Das abstrakte Signatur-Motiv (die "Flusslinie" in Gold,
`src/components/RiverMotif.tsx`) ist damit überall durch Fotos ersetzt.

## So tauschst du ein Foto aus

1. Neues Foto als JPG unter dem gleichen Dateinamen in `public/assets/hero/`
   ablegen (überschreibt das bestehende).
2. Fertig — der Code verweist bereits auf den Dateinamen.

Empfohlenes Format: querformatig, mind. 1920×1080px, JPG.

## Zuordnung

| Ort | Datei | Status |
|---|---|---|
| Startseite – Hero | `public/assets/hero/home.jpg` | ✅ aktiv |
| Synergien – Hero | `public/assets/hero/synergien.jpg` | ✅ aktiv |
| AP1 – Nachbarsprachen & Mehrsprachigkeit | `public/assets/hero/ap1.jpg` | ✅ aktiv |
| AP2 – Frühkindliche Mehrsprachigkeit | `public/assets/hero/ap2.jpg` | ✅ aktiv |
| AP3 – Bildungslandschaften & Vernetzung | `public/assets/hero/ap3.jpg` | ✅ aktiv |
| AP4 – Digitale Innovation | `public/assets/hero/ap4.jpg` | ✅ aktiv |
| AP5 – Europäische Kooperation | `public/assets/hero/ap5.jpg` | ✅ aktiv |

## Bereits vorhandene echte Assets

- `logo-primary.png` — IBZ-Logo (farbig, aktuell in Header/Footer im Einsatz)
- `logo-weiss.png` — IBZ-Logo (weiß, für dunkle Flächen)
- `hero/home.jpg`, `hero/synergien.jpg` — Trilab-Aufnahmen, aktiv als Hero-Fotos
- `hero/ap2.jpg` – `hero/ap5.jpg` — aktiv als Hero-Fotos

Die Originalfotos `kloster.jpg` und `neisse.jpg` aus dem ursprünglichen
Claude-Design-Projekt konnten nicht übernommen werden (Dateigröße über dem
256-KB-Limit der Design-Sync-Schnittstelle) — die Trilab-Fotos ersetzen sie.
