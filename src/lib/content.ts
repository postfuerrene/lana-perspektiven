export const meta = {
  kicker: "LaNa-Perspektiven 2027/28",
  title: "Wo könnte die Reise hingehen?",
  subtitle: "Perspektiven für die LaNa im Verbund der Stiftung IBZ",
  date: "20.08.2026",
  author: "René Seidel",
};

export const kontext = {
  zeitraumLabel: "Zeitraum der Erarbeitung",
  zeitraum: "November 2025 – Januar 2026",
  contributors: [
    { name: "Gregor Schaaf-Schuchardt", role: "Vorstandsvorsitzender" },
    { name: "Gunnar Hille", role: "KoKoPol · Public Relations" },
    { name: "Christin Stupka", role: "KoKoPol · Organisatorische Leitung" },
    { name: "René Seidel", role: "LaNa" },
  ],
};

export type SynergyField = {
  letter: string;
  slug: string;
  title: string;
  lead?: string;
  rows?: { tag: string; text: string }[];
  extra?: string;
  example?: { label: string; text: string };
  tags?: string[];
  synergy: string;
};

export const synergyIntro = {
  kicker: "Synergien & Schnittstellen",
  title: "LaNa · KoKoPol · KoKoTschech · Europabildung",
  lead:
    "Die thematische Nähe zwischen den vier Bereichen eröffnet ein hohes Integrationspotenzial. Fünf Synergiefelder verbinden die Arbeit systematisch miteinander.",
};

export const synergyFields: SynergyField[] = [
  {
    letter: "a",
    slug: "sprachbildung",
    title: "Sprachbildung als Fundament",
    lead: "Alle beteiligten Programme verstehen Sprache als Schlüssel zur Begegnung.",
    rows: [
      { tag: "LaNa", text: "Erprobte Formate für frühe Nachbarsprachförderung und Elternarbeit." },
      { tag: "KoKoPol", text: "Berufsspezifische, praxisorientierte Sprachkurse und Familienseminare zur Mehrsprachigkeit." },
    ],
    synergy:
      "Aufbau einer durchgängigen Lernkette vom Kindergarten über Schule bis zur Erwachsenenbildung – „Nachbarsprachen für alle Lebensphasen“.",
  },
  {
    letter: "b",
    slug: "interkulturelle-bildung",
    title: "Interkulturelle Bildung und Grenzkompetenz",
    lead:
      "KoKoPol hat Trainingsprogramme für interkulturelle Kommunikation, europäische Zusammenarbeit und grenzüberschreitende Verwaltungsarbeit entwickelt.",
    extra:
      "Direkt anschlussfähig an die Netzwerke der LaNa – ergänzbar durch Europabildungs-Module (z. B. EU-Institutionen, Demokratie, Teilhabe).",
    synergy:
      "Entwicklung gemeinsamer Zertifikatskurse „Grenzkompetenz & Nachbarsprachen“ – z. B. für pädagogisches und kommunales Personal.",
  },
  {
    letter: "c",
    slug: "familienarbeit",
    title: "Familien- und Gemeinwesenarbeit",
    rows: [
      { tag: "LaNa", text: "Starker Zugang zu Kindertagesstätten, Elterninitiativen und Bildungsakteur:innen im Vorschulbereich." },
      { tag: "IBZ", text: "Familienseminare, Jugendbildungsformate und grenzüberschreitende Strukturen für Begegnungen und Bildungsaufenthalte." },
    ],
    synergy:
      "Integration der Nachbarsprachenarbeit in bestehende IBZ-Programme – Familienseminare, Sprachcamps, Kinderakademien.",
  },
  {
    letter: "d",
    slug: "europabildung",
    title: "Europabildung als verbindende Querschnittsachse",
    lead:
      "Der im Aufbau befindliche Bereich Europabildung verknüpft die sprachlich-interkulturelle Arbeit mit europäischen Grundwerten, politischer Bildung und Partizipation.",
    example: {
      label: "Beispiel",
      text: "Modulares Lernangebot „Europa im Grenzraum“ – LaNa (Sprachmodule), KoKoPol (interkulturelle Module), Europabildung (Demokratiemodule).",
    },
    synergy:
      "Europabildung bildet die pädagogische Klammer über alle Programme – Demokratie, Vielfalt, Nachhaltigkeit und digitale Teilhabe verschränkt mit Mehrsprachigkeit und Grenzkompetenz.",
  },
  {
    letter: "e",
    slug: "strukturentwicklung",
    title: "Struktur- und Kompetenzentwicklung",
    lead: "Das IBZ bietet organisatorische und infrastrukturelle Voraussetzungen für anspruchsvolle Bildungsprojekte:",
    tags: [
      "Abrechnungsstrukturen",
      "Projektcontrolling",
      "Digitale Lernplattformen",
      "Hybride Seminartechnik",
      "Internationales Partnernetzwerk",
    ],
    synergy:
      "Die LaNa bringt Fachinhalte ein, während das IBZ Management, Skalierung, Antragserfahrung und Öffentlichkeitsarbeit liefert.",
  },
];

export type WorkPackage = {
  id: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  ziel: string;
  projekte: { num: string; text: string; example?: string }[];
  format: string;
  ergebnisse: string[];
};

export const overviewIntro = {
  kicker: "Diskussionsvorschlag",
  title: "Fünf mögliche Bausteine für die Weiterentwicklung",
  lead:
    "Was folgt, ist keine beschlossene Planung, sondern ein Diskussionsangebot: fünf Ideenskizzen, wie sich die LaNa im Verbund der Stiftung IBZ weiterentwickeln könnte. Gemeinsam wird ausgewählt, was 2027/28 tatsächlich Priorität bekommt – die Grundfinanzierung der drei LaNa-Stellen ist an keinen dieser Vorschläge gebunden. Mit Energie und Fokus kann daraus auch ein ganz neuer Themenbereich entstehen, etwa Freiwilligendienste DE–PL–CZ.",
};

export const workPackages: WorkPackage[] = [
  {
    id: "AP1",
    slug: "ap1",
    number: 1,
    title: "Nachbarsprachen & Mehrsprachigkeit in Europa",
    subtitle: "Die LaNa als europäisches Kompetenzzentrum für sprachliche Bildung im Grenzraum.",
    ziel: "Aufbau eines umfassenden, europäischen Ansatzes zur Förderung der Nachbarsprachen Polnisch und Tschechisch – über alle Bildungsphasen hinweg.",
    projekte: [
      { num: "01", text: "Curriculum „Nachbarsprachen 0–18+“ – Werkstattreihe mit Kita-, Schul- und Fachvertreter:innen zur Erarbeitung eines abgestimmten Sprachlernpfads über die Bildungsstufen hinweg.", example: "Pilotmodul zum Übergang Kita–Grundschule mit Fokus auf Alltagssprache Tschechisch/Polnisch." },
      { num: "02", text: "Trilaterales Schul- und Austauschnetzwerk – Partnerschaften zwischen einzelnen Schulen DE–CZ–PL, jährliche Austauschbegegnungen.", example: "Schulpartnerschaft im Dreiländereck mit jährlicher Begegnungswoche." },
      { num: "03", text: "Kooperation mit Hochschulen – gemeinsame Fortbildungsmodule für Lehramtsstudierende mit TU Dresden, TU Liberec, Uni Wrocław.", example: "Gemeinsames Seminar „Mehrsprachigkeit im Grenzraum“ für Lehramtsstudierende." },
    ],
    format:
      "Europäische Fachtagung „Mehrsprachigkeit im Grenzraum“ (zweitägige Konferenz mit Impulsvorträgen und Workshops für Bildungsakteure aus den drei Ländern) – Antragsziel: Erasmus+ / Interreg.",
    ergebnisse: [
      "Curriculum-Pilotmodul (Kita–Grundschule-Übergang) bis [Datum] erarbeitet und in mind. 2 Einrichtungen erprobt.",
      "Mind. 3 Partnerschulen im trilateralen Netzwerk aktiv eingebunden bis 2028.",
      "1 Fachtagung mit X Teilnehmer:innen bis [Datum].",
    ],
  },
  {
    id: "AP2",
    slug: "ap2",
    number: 2,
    title: "Frühkindliche Mehrsprachigkeit & Familienbildung",
    subtitle: "Nachbarsprache von Anfang an – der originäre Kernauftrag der LaNa.",
    ziel: "Stärkung der frühkindlichen und familienbezogenen Nachbarsprachbildung als langfristige Basis für mehrsprachige Bildungsbiografien.",
    projekte: [
      { num: "01", text: "Rahmenkonzept „Mehrsprachigkeit 0–10“ – Praxisleitfaden mit konkreten Bausteinen für Kita-Alltag, Elternarbeit und Übergang zur Grundschule.", example: "Baustein „mehrsprachiger Morgenkreis“ für den Kita-Alltag." },
      { num: "02", text: "Qualifizierungsprogramm „Sprachbotschafter:innen Nachbarsprachen“ – mehrteilige Fortbildungsreihe für Kita-Fachkräfte, mit Zertifikat.", example: "Vierteilige Reihe mit Abschluss-Zertifikatsübergabe." },
      { num: "03", text: "Mehrsprachige Elternseminare und Familienprojekte – Wochenendseminare mit paralleler Kinderbetreuung, analog bestehender Familienseminar-Formate.", example: "Familienwochenende „Mehrsprachig aufwachsen“ mit Kinderprogramm, analog KoKoPol-Familienseminaren." },
    ],
    format:
      "Qualifizierungsreihe „Sprachbotschafter:innen Nachbarsprachen“ (Präsenzmodule an 2–3 Standorten, ergänzt durch digitale Austauschtreffen) – Antragsziel: Interreg (Familien- und Begegnungsprogramme).",
    ergebnisse: [
      "X qualifizierte Sprachbotschafter:innen pro Durchgang bis [Datum].",
      "2–3 Elternseminare mit je X teilnehmenden Familien pro Jahr.",
      "X teilnehmende Kita-Einrichtungen im ersten Jahr.",
    ],
  },
  {
    id: "AP3",
    slug: "ap3",
    number: 3,
    title: "Mehrsprachige Bildungslandschaften & regionale Vernetzung",
    subtitle: "Regionen befähigen, Mehrsprachigkeit systemisch zu verankern.",
    ziel: "Unterstützung von Kommunen und Bildungseinrichtungen beim Aufbau nachhaltiger Strukturen für Mehrsprachigkeit im Dreiländereck.",
    projekte: [
      { num: "01", text: "Kommunales Mehrsprachigkeitskonzept – Beratungsformat: Bestandsaufnahme vor Ort, Handlungsempfehlungen, Begleitung bei der Umsetzung.", example: "Pilotberatung für eine Gemeinde oder einen Landkreis im Grenzraum." },
      { num: "02", text: "Qualitätssiegel „Mehrsprachige Bildungseinrichtung“ – Kriterienkatalog + Prüfverfahren, das Einrichtungen durchlaufen und auszeichnen lässt.", example: "Pilotierung des Siegels mit 2 Kitas in einem Landkreis." },
      { num: "03", text: "Jährliche Regionalkonferenz Mehrsprachigkeit – eintägige Fachkonferenz mit Vorträgen, Workshops und Vernetzungsformat für Kommunen und Bildungsakteure.", example: "Format angelehnt an das Deutsch-Tschechische Regionalforum, thematisch auf Mehrsprachigkeit fokussiert." },
    ],
    format:
      "Jährliche Regionalkonferenz Mehrsprachigkeit (feste Konferenz mit wechselndem Gastgeberort im Grenzraum) – Antragsziel: Landesprogramme Sachsen, kommunale Kofinanzierung.",
    ergebnisse: [
      "X Kommunen aktiv im Netzwerk eingebunden bis Ende 2027.",
      "Qualitätssiegel-Kriterienkatalog entwickelt und mit 2 Pilot-Einrichtungen erprobt bis [Datum].",
      "1 Regionalkonferenz mit X Teilnehmenden pro Jahr ab [Jahr].",
    ],
  },
  {
    id: "AP4",
    slug: "ap4",
    number: 4,
    title: "Digitale Innovation & Europäische Lernräume",
    subtitle: "Digitale und KI-basierte Wege zur grenzüberschreitenden Bildungsarbeit.",
    ziel: "Digitale Bildung gezielt einsetzen, um Lernzugänge zu schaffen und Arbeitsprozesse zu unterstützen – nicht auf Sprache beschränkt, sondern offen für Kultur und weitere Komponenten grenzüberschreitender Zusammenarbeit.",
    projekte: [
      { num: "01", text: "Digitale Akademie Nachbarsprachen und -kultur (Videoformate, Mikro-Lerneinheiten, virtuelle Austauschräume).", example: "Videoreihe „5 Minuten Tschechisch/Polnisch für den Kita-Alltag“." },
      { num: "02", text: "KI-gestützte Lernangebote (Aussprachetraining, personalisierte Lernpfade).", example: "App-gestütztes Aussprachetraining für Grundschulkinder." },
      { num: "03", text: "Custom-KI-Assistenz für Recherche und Materialerstellung (internes Team-Tool zu Partnern, Best Practice und Inhalten).", example: "Tool zur Recherche passender Förderprogramme und als Formulierungshilfe bei Anträgen." },
    ],
    format:
      "Aufbau der Digitalen Akademie + Pilotierung der KI-gestützten Angebote (Produktion erster Video-Lerneinheiten, Testlauf des Aussprachetrainings mit definierter Nutzer:innengruppe) – Antragsziel: Erasmus+ (digitale Transformation).",
    ergebnisse: [
      "X produzierte Video-Lerneinheiten bis [Datum].",
      "1 Pilotdurchlauf des KI-gestützten Aussprachetrainings mit X Nutzer:innen bis [Datum].",
      "Custom-KI-Assistenz im Team im Einsatz ab [Datum].",
    ],
  },
  {
    id: "AP5",
    slug: "ap5",
    number: 5,
    title: "Europäische Kooperation, Dialog & Wirkung",
    subtitle: "Die LaNa als europäische Stimme der Mehrsprachigkeit.",
    ziel: "Die LaNa positioniert sich als wichtiger Akteur in Europa – in Netzwerken, Dialogforen und Förderprogrammen.",
    projekte: [
      { num: "01", text: "Teilnahme an Erasmus+, Interreg und Jean-Monnet-Initiativen – Antragstellung und Durchführung konkreter Projekte, z. B. Lehrkräftefortbildung in der Dreiländerregion, als Partner oder Antragsteller.", example: "Projekt „Lehrkräftefortbildung in der Dreiländerregion“ als Konsortialpartner." },
      { num: "02", text: "Aufbau eines LaNa Advisory Boards – Gremium aus 5–8 europäischen Expert:innen, tagt 1–2× jährlich zur strategischen Einordnung.", example: "Besetzung mit Vertreter:innen aus Wissenschaft, Politik und Zivilgesellschaft aus DE–CZ–PL." },
      { num: "03", text: "Trinationale Projekte DE–CZ–PL für Schulen, Fachkräfte und Familien – konkrete Begegnungs- und Fortbildungsformate mit Partnerorganisationen in Polen und Tschechien.", example: "Gemeinsames Jugendcamp DE–CZ–PL, z. B. anlässlich des 35. Jubiläums des Nachbarschaftsvertrags." },
    ],
    format:
      "Aufbau LaNa Advisory Board mit begleitenden Policy Papers (Gremium konstituieren, danach 1–2 Positionspapiere pro Jahr für Ministerien und EU-Netzwerke) – Antragsziel: Jean-Monnet-Initiative / Interreg.",
    ergebnisse: [
      "Mind. 2 laufende Interreg-/Erasmus+-Partnerschaften bis [Jahr].",
      "Advisory Board mit X Mitgliedern besetzt bis [Datum].",
      "X Policy Papers pro Jahr ab [Jahr].",
    ],
  },
];

export const mitgestalten = {
  kicker: "Mitgestalten",
  title: "Wir freuen uns auf Ihre Perspektive",
  lead:
    "Dieses Papier ist ein Angebot, kein fertiger Plan. Wir tauschen uns gern mit Partnerinstitutionen, Fördermittelgeber:innen und Akteur:innen im Dreiländereck darüber aus, welche Bausteine am stärksten anschlussfähig sind – und wo neue Themenfelder entstehen können.",
  points: [
    "Welche Arbeitspakete docken am stärksten an das an, was Sie bereits gemeinsam mit uns aufgebaut haben?",
    "Wo sehen Sie die größten Synergiepotenziale mit KoKoPol, KoKoTschech und Europabildung?",
    "Welches Format ließe sich am schnellsten in eine konkrete Kooperation überführen?",
  ],
  contactLabel: "Kontakt aufnehmen",
  contactEmail: "lana@ibz-marienthal.de",
};

export const nav = [
  { label: "Startseite", href: "/" },
  { label: "Synergien", href: "/synergien" },
  { label: "AP1", href: "/ap1" },
  { label: "AP2", href: "/ap2" },
  { label: "AP3", href: "/ap3" },
  { label: "AP4", href: "/ap4" },
  { label: "AP5", href: "/ap5" },
];
