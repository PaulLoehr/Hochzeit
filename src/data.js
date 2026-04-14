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
    time: "13:00 Uhr",
  },

  // Dresscode
  dresscode: {
    title: "Dresscode",
    description:
      "Bitte kommt schick und elegant. Wir wünschen uns eine pastellige Farbpalette mit soften Tönen. Für Männer ist ein Anzug in Navy-Blau auch willkommen.",
    // local public/ assets (filenames only) — components will prefix with BASE_URL
    paletteImage: "farbpalette.jpg"
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
  heroImage: "Hero_Bild.jpg", // Hero section background image (place in public/)
  
  // Location Details
  location: {
    name: "Castillo del Mar",
    address: "Industriestraße 70-72, 76698 Zeutern",
    googleMapsUrl: "https://maps.google.com/?q=Castillo+del+Mar+Industriestra%C3%9Fe+70-72+76698+Zeutern",
    googleMapsEmbedUrl: "https://www.google.com/maps?q=Castillo+del+Mar+Industriestra%C3%9Fe+70-72+76698+Zeutern&output=embed",
    images: [
      {
        src: "https://www.castillodelmar.de/images/pictures/aussenbereich/castillodelmar-eingang.jpg",
        alt: "Castillo del Mar Außenbereich",
      },
      {
        src: "https://www.castillodelmar.de/images/pictures/aussenbereich/castillodelmar-pagoden-1.jpg",
        alt: "Eingang zur Eventlocation Castillo del Mar",
      },
      {
        src: "https://www.castillodelmar.de/images/pictures/aussenbereich/castillodelmar-pagoden-4.jpg",
        alt: "Innenbereich des Castillo del Mar",
      },
      {
        src: "https://www.castillodelmar.de/images/pictures/innenbereich/castillodelmar-innen-1.jpg",
        alt: "Festsaal im Castillo del Mar",
      },
    ],
  },
  
  // Timeline Events
  timeline: [
    {
      time: "13:00",
      title: "Ankunft & Empfang",
      description: "Willkommen im Castillo del Mar! Holt euch einen Aperitif an der Bar.",
    },
    {
      time: "14:00",
      title: "Trauung",
      description: "Seid dabei, wenn wir uns das Ja-Wort geben!",
    },
    {
      time: "15:15",
      title: "Sektempfang und Gruppenfoto",
      description: "Stoßt mit uns auf die Ehe an! Anschließend machen wir ein großes Gruppenfoto mit allen Gästen.",
    },
    {
      time: "16:15",
      title: "Hochzeitstorte anschneiden",
      description: "Der süße Höhepunkt des Nachmittags! Lasst euch die Hochzeitstorte schmecken.",
    },
    {
      time: "17:45",
      title: "Ansprache Brautpaar",
      description: "Das Brautpaar hält eine kurze Ansprache und stellt die Hochzeitsgesellschaft vor.",
    },
    {
      time: "18:00",
      title: "Eröffnung des Buffets",
      description: "Lasst es euch schmecken! Es gibt eine vielfältige Auswahl an köstlichen Speisen.",
    },
    {
      time: "Nach dem Essen",
      title: "Programmpunkte, Hochzeitstanz & Party",
      description: "Freut euch auf tolle Programmpunkte, den Eröffnungstanz des Brautpaares und eine ausgelassene Party bis in die Nacht!",
    },
    {
      time: "02:00",
      title: "Ende der Feier",
      description: "Wir hoffen, ihr hattet eine unvergessliche Zeit! Vielen Dank, dass ihr diesen besonderen Tag mit uns gefeiert habt.",
    },


  ],
  
  // FAQ Items
  faq: [
  {
    "question": "Gibt es einen Dresscode?",
    "answer": "Wir würden uns sehr freuen, wenn ihr euch für uns in Schale werft! Um dem Tag einen festlichen Rahmen zu geben, bitten wir um elegante Abendgarderobe – für die Damen gerne Cocktail- oder Abendkleider, für die Herren einen klassischen Anzug."
  },
  {
    "question": "Wo kann ich parken?",
    "answer": "Direkt an der Location stehen ausreichend Parkplätze für euch zur Verfügung. Solltet ihr das Auto nach der Feier stehen lassen wollen, ist das gar kein Problem – ihr könnt es einfach über Nacht dort parken und am nächsten Tag ganz entspannt abholen."
  },
  {
    "question": "Was wünscht ihr euch zur Hochzeit?",
    "answer": "Das größte Geschenk für uns ist es, diesen besonderen Tag gemeinsam mit euch zu verbringen und zu genießen! Solltet ihr uns darüber hinaus eine Freude machen wollen, würden wir uns sehr über einen Zuschuss für unsere Flitterwochen im nächsten Jahr freuen."
  },
  {
    "question": "Was passiert bei schlechtem Wetter?",
    "answer": "Macht euch keine Sorgen um das Wetter! Unsere Location bietet sowohl wunderschöne Außenbereiche als auch tolle Innenräume. Wir sind bestens gerüstet, sodass wir in jedem Fall ein unvergessliches Fest feiern werden."
  },
  {
    "question": "An wen kann ich mich bei Fragen zur Hochzeit wenden?",
    "answer": "Unsere Trauzeugen Nele und Fabian stehen euch bei allen Fragen rund um die Hochzeit gerne zur Verfügung. Ihr erreicht die beiden am besten per E-Mail unter: leitstellesimon@outlook.de."
  },
  {
    "question": "Ich habe eine Idee für einen Programmpunkt oder eine Rede – an wen wende ich mich?",
    "answer": "Wir freuen uns riesig über eure Beiträge und Überraschungen! Da wir – Kira und Paul – das Programm an unserem großen Tag vorher aber nicht kennen möchten, besprecht eure Ideen und Planungen bitte direkt und heimlich mit unseren Trauzeugen Nele und Fabian. Sie planen den Ablauf und helfen euch gerne weiter. Wendet euch bitte per E-Mail an: leitstellesimon@outlook.de"
  },
  {
    "question": "Gibt es Beschäftigungsmöglichkeiten für Kinder?",
    "answer": "Kinder sind auf unserer Hochzeit herzlich willkommen! Damit auch bei unseren kleinen Gästen keine Langeweile aufkommt, richten wir eine gemütliche Kinderecke mit verschiedenen Spiel- und Bastelsachen ein."
  },
  {
    "question": "Können meine Kinder vor Ort schlafen?",
    "answer": "Ja, es steht ein separater Raum zur Verfügung, in dem die Kinder in Ruhe schlafen können, während die Eltern entspannt weiterfeiern. Bitte denkt jedoch daran, bei Bedarf eigene Reisebetten oder Schlafmöglichkeiten für eure Kleinen mitzubringen."
  },
  {
    "question": "Gibt es Übernachtungsmöglichkeiten in der Nähe?",
    "answer": "Ja, es gibt mehrere Hotels und Pensionen in der Nähe der Location, beispielsweise in Bad Langenbrücken, Östringen, Unteröwisheim,... aber auch in Richtung Karlsruhe. Wir empfehlen euch, frühzeitig zu reservieren, da die Unterkünfte in der Umgebung schnell ausgebucht sein können."
  },
  {
    "question": "Was sonst noch?",
    "answer": "Wir wünschen uns vor allem eine unvergessliche Hochzeit, auf der sich alle rundum wohlfühlen. Wir freuen uns riesig darauf, dass unsere Familien und Freunde zusammenkommen und wir gemeinsam ein großartiges Fest feiern!"
  }
],
  
  // RSVP Google Form URL
  rsvp: {
    googleFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfjXoJtU8_Zp8OfwKMUR2oQj6bnpZnE6QjiqW7Px8Qlr1vhEg/viewform?embedded=true",
    fallbackEmail: "leitstellesimon@outlook.de",
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
    kontakt: "leitstellesimon@outlook.de"
  },
};
