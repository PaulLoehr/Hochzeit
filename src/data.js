// Wedding Website Configuration
// Edit this file to customize your wedding website

export const weddingData = {
  // Password Gate
  password: "Forever",
  
  // Couple Names
  couple: {
    firstName: "Kira",
    secondName: "Paul",
  },
  
  // Wedding Date & Time
  date: {
    full: "03. September 2026",
    time: "15:00 Uhr",
  },

  // Dresscode
  dresscode: {
    title: "Dresscode",
    description:
      "Bitte kommt schick und elegant. Wir wünschen uns eine pastellige Farbpalette mit soften Tönen; als klassischer Akzent ist Navi-Blau ausdrücklich willkommen.",
    // local public/ assets (filenames only) — components will prefix with BASE_URL
    paletteImage: "dresscode-palette.svg",
    moodboardImage: "moodboard-outfits.png",
  },

  // Photos
  photos: {
    albumUrl: "https://photos.app.goo.gl/WpzDgEN21bDNZHsy5",
    title: "Bilder & Momente",
    description: "Teilt eure schönsten Schnappschüsse mit uns! Hier könnt ihr alle Bilder der Hochzeit hochladen und die Fotos der anderen Gäste anschauen.",
    // Placeholder photos for the slideshow/collage - replace with your own images (e.g. from the civil wedding)
    previewPhotos: [
      "Slideshow03.JPG",
      "Slideshow04.JPG",
      "Slideshow05.JPG",
      "Slideshow06.JPG",
      "Slideshow07.JPG"
    ],
  },

  // Local public images used by components
  heroImage: "Hero_2.PNG",
  
  // Location Details
  location: {
    name: "Castillo del Mar, 76698 Zeutern",
    address: "Industriestraße 70-72, 76698 Zeutern",
    googleMapsUrl: "https://maps.google.com/?q=Castillo+del+Mar+Industriestra%C3%9Fe+70-72+76698+Zeutern",
    googleMapsEmbedUrl: "https://www.google.com/maps?q=Castillo+del+Mar+Industriestra%C3%9Fe+70-72+76698+Zeutern&output=embed",
    images: [
      {
        src: "https://www.castillodelmar.de/images/pictures/aussenbereich/castillodelmar-eingang.jpg",
        alt: "Castillo del Mar Außenbereich",
      },
      {
        src: "https://www.castillodelmar.de/images/pictures/aussenbereich/castillodelmar-eingang-2.jpg",
        alt: "Eingang zur Eventlocation Castillo del Mar",
      },
      {
        src: "https://www.castillodelmar.de/images/pictures/innenbereich/castillodelmar-innen-1.jpg",
        alt: "Innenbereich des Castillo del Mar",
      },
      {
        src: "https://www.castillodelmar.de/images/pictures/innenbereich/castillodelmar-innen-2.jpg",
        alt: "Festsaal im Castillo del Mar",
      },
    ],
  },
  
  // Timeline Events
  timeline: [
    {
      time: "15:00",
      title: "Trauung",
      description: "Zeremonie im Schlossgarten",
    },
    {
      time: "16:30",
      title: "Sektempfang",
      description: "Cocktails & Canapés auf der Terrasse",
    },
    {
      time: "18:00",
      title: "Dinner",
      description: "3-Gänge Menü im Festsaal",
    },
    {
      time: "21:00",
      title: "Party",
      description: "Tanz & Celebration bis in die Nacht",
    },
  ],
  
  // FAQ Items
  faq: [
    {
      question: "Gibt es einen Dresscode?",
      answer: "Wir freuen uns über festliche Garderobe. Damen in Cocktailkleidern oder eleganten Abendkleidern, Herren in Anzug oder Smoking.",
    },
    {
      question: "Wo kann ich parken?",
      answer: "Es gibt ausreichend Parkplätze direkt am Schloss. Folgt einfach der Beschilderung 'Hochzeit Kira & Paul'.",
    },
    {
      question: "Was wünscht ihr euch zur Hochzeit?",
      answer: "Das Schönste Geschenk ist eure Anwesenheit! Wer uns dennoch etwas schenken möchte: Wir freuen uns über einen Beitrag zu unserer Hochzeitsreise.",
    },
    {
      question: "Gibt es Hotelempfehlungen?",
      answer: "Wir haben Zimmerkontingente im Hotel Rosengarten (5 Min entfernt) und im Landhaus Seeblick (10 Min entfernt) reserviert. Bitte gebt bei der Buchung 'Hochzeit Kira & Paul' an.",
    },
  ],
  
  // RSVP Google Form URL
  rsvp: {
    googleFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfjXoJtU8_Zp8OfwKMUR2oQj6bnpZnE6QjiqW7Px8Qlr1vhEg/viewform?embedded=true",
    fallbackEmail: "kira.paul.wedding@example.com",
  },

  // Trauzeugen
  trauzeugen: {
    intro:
      "Nele und Fabian sind unsere Trauzeugen. Sie kümmern sich um den Ablauf und die Planung des Programms. Wenn ihr Ideen oder Vorschläge für Programmpunkte habt, sprecht euch bitte mit ihnen ab.",
    people: [
      {
        name: "Nele",
        image: "Nele.png",
        alt: "Nele",
        description:
          "Unsere herzliche Organisatorin. Nele unterstützt bei Ablaufplanung und Koordination am Tag selbst.",
      },
      {
        name: "Fabian",
        image: "Fabi.jpg",
        alt: "Fabian",
        description:
          "Unser Ruhepol und Ansprechpartner für technische und organisatorische Fragen während des Events.",
      },
    ],
  },
};
