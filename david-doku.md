# Ki Mitschrift

## Projektstart & Setup

- Gemeinsames Treffen zum Projektstart
- Ziel: Grundlegendes React-Setup als Basis für die weitere Entwicklung

- Projektinitialisierung mit Vite
    - Orientierung an der offiziellen React-from-scratch-Dokumentation
    - Entscheidung für Vite wegen schnellem und einfachem Setup
    - Bereits aus der Arbeit bekannt

- Integration von Tailwind CSS
    - Entscheidung aufgrund einfacher Nutzung und vorhandener Erfahrung
    - Einrichtung dauerte länger als geplant
    - Anpassung der Tailwind-Konfiguration
    - Entfernen bzw. Überschreiben der ursprünglichen Styles

- Erstellung eines GitHub-Repositories
    - Gemeinsame Codebasis
    - Ermöglicht paralleles Arbeiten und Versionskontrolle

- **Zeitaufwand:** ca. 3 Stunden

## Routing & Grundstruktur

- Weiterarbeit am Projekt alleine
- Ziel: Grundlegende Seitenstruktur vorbereiten, damit parallel gearbeitet werden kann

- Einrichtung von React Router
  - Installation und Initialkonfiguration des Routers
  - Erste Berührungspunkte mit React Router
  - Anfangsschwierigkeiten beim Setup
  - Mehrere Anpassungen notwendig, bis Routing korrekt funktionierte

- Aufbau einer grundlegenden Page-Struktur
  - Trennung zwischen Pages und Komponenten
  - Vorbereitung leerer Seiten als Platzhalter
  - Ermöglicht es Yannik, direkt an einzelnen Pages weiterzuarbeiten

- Fokus auf saubere Basis statt Feature-Umsetzung
  - Routing als Fundament für spätere Erweiterungen

- Zudem noch ein Navbar gebastelt mit einem Layout über allem drüber

- **Zeitaufwand:** ca. 2 Stunden
---

## 3. Datenmodell & Dummy-Daten – 2 h
- Definition des `FoundItem`-Typs in TypeScript
- Strukturierung realistischer Dummy-Daten
- Trennung von Typen, Daten und UI-Komponenten
- Erste Konsolen- und Sichttests

---

## 4. Item-Rendering & Card-Komponenten – 3 h
- Entwicklung einer wiederverwendbaren Item-Card
- Übergabe von Props und saubere Typisierung
- Basis-Styling mit Tailwind CSS
- Hover- und Interaction-Effekte
- Abstimmung für Mobile- und Desktop-Ansicht

---

## 5. Filterlogik & State-Management – 4 h
- Konzeption eines zentralen Filter-State-Objekts
- Implementierung der kombinierten Filterlogik:
  - Textsuche (Titel & Beschreibung)
  - Kategorie
  - Farbe
  - Fundort
- Performance-Optimierung mit `useMemo`
- Tests verschiedener Filterkombinationen

---

## 6. Filter-UI & UX – 2 h
- Entwicklung der `FoundFilters`-Komponente
- Einklappbares Filter-Panel
- Anbindung an den Filter-State
- Mobile-freundliche Bedienung

---

## 7. Modal-Detailansicht – 3 h
- Umsetzung der Item-Detailansicht als Modal
- Öffnen- und Schließen-Logik
- Escape-Key-Handling
- Scroll-Lock des Hintergrunds
- Einsatz von Icon-Buttons (Heroicons)
- Mobile-spezifisches Verhalten

---

## 8. Responsive Design & Feinschliff – 1 h
- Feinjustierung von Breakpoints und Abständen
- Einheitliche Einrückung von Navbar und Seiteninhalt
- Kleine UI-Verbesserungen und Refactoring  