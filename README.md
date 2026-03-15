# 💍 Hochzeits-Website - Kira & Paul

Eine moderne, elegante und responsive Hochzeits-Website, gebaut mit React, Vite, Tailwind CSS und Framer Motion.

## ✨ Features

- **🔒 Soft Password Gate**: Die Website ist durch ein Passwort geschützt (Passwort: "Forever")
- **🎨 Minimalistisches Design**: Romantisches, high-end Editorial Design mit Sage Green & Cream Farben
- **📱 Fully Responsive**: Optimiert für alle Geräte (Desktop, Tablet, Mobile)
- **✨ Smooth Animations**: Elegante Framer Motion Animationen beim Scrollen
- **📝 Sections**:
  - Hero Section mit Namen des Paares
  - Details (Wann & Wo)
  - Dresscode (schick, pastellig, Navi-Blau)
  - Timeline des Hochzeitstags
  - RSVP Google Form Integration
  - Location mit Karte & Bildern
  - FAQ Accordion

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development Server starten

```bash
npm run dev
```

Die Website ist dann unter [http://localhost:5173](http://localhost:5173) erreichbar.

### Production Build erstellen

```bash
npm run build
```

### Preview des Production Builds

```bash
npm run preview
```

## 📝 Anpassung der Inhalte

Alle Texte und Daten können einfach in der Datei `src/data.js` bearbeitet werden:

```javascript
export const weddingData = {
  // Passwort für den Zugang
  password: "Forever",
  
  // Namen des Paares
  couple: {
    firstName: "Kira",
    secondName: "Paul",
  },
  
  // Datum & Zeit
  date: {
    full: "03. September 2026",
    time: "15:00 Uhr",
  },
  
  // ... weitere Daten
};
```

### Wichtige Anpassungen:

1. **Paar-Namen**: Ändere `couple.firstName` und `couple.secondName`
2. **Datum**: Passe `date.full` und `date.time` an
3. **Location**: Aktualisiere `location.name`, `location.address` und `location.googleMapsUrl`
4. **Timeline**: Bearbeite die `timeline` Array mit deinen Events
5. **FAQ**: Passe die `faq` Array mit deinen Fragen an
6. **RSVP Google Form**: Erstelle ein Google Form und ersetze `rsvp.googleFormUrl`

## 🎨 Google Form für RSVP einrichten

1. Gehe zu [Google Forms](https://docs.google.com/forms)
2. Erstelle ein neues Formular mit Feldern für:
   - Name
   - Teilnahme (Ja/Nein)
   - Diätwünsche
   - Nachricht
3. Klicke auf "Senden" → Tab "Link" → Aktiviere "Verkürzten URL verwenden"
4. Füge `?embedded=true` am Ende der URL hinzu
5. Kopiere die URL und ersetze sie in `src/data.js` → `rsvp.googleFormUrl`

## 🖼️ Hero Hintergrundbild hinzufügen

Um ein eigenes Hochzeitsfoto als Hintergrund zu verwenden:

1. Lege dein Bild im `public` Ordner ab (z.B. `public/hero-bg.jpg`)
2. Öffne `src/components/HeroSection.jsx`
3. Kommentiere die Zeilen mit dem Hintergrundbild ein und passe den Pfad an:

```jsx
<div className="absolute inset-0 bg-cover bg-center opacity-30" 
     style={{ backgroundImage: 'url(/hero-bg.jpg)' }} />
```

## 🎨 Design & Farben

Die Website verwendet eine weiche, romantische Farbpalette:

- **Cream**: `#FAF9F6` (Haupthintergrund)
- **Sage Green**: `#9CAF88` (Akzentfarbe)
- **Charcoal**: `#2C2C2C` (Textfarbe)

Diese können in `tailwind.config.js` angepasst werden.

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🛠️ Technologie-Stack

- **React 19** - UI Framework
- **Vite 7** - Build Tool
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion 11** - Animationen
- **Lucide React** - Icons

## 📄 Lizenz

Dieses Projekt wurde speziell für die Hochzeit von Kira & Paul erstellt.

---

**Mit ❤️ gebaut für einen unvergesslichen Tag**
