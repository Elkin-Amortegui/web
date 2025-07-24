

// This file centralizes the language data for easier management.

export interface EnglishProgram {
  name: string;
  slug: string;
  ageRange: string;
  description: string;
  shortDescription?: string;
  levels: string;
  modalities: string;
  image: string;
  aiHint?: string;
  pdfUrl?: string; // URL to the brochure PDF (for download)
  brochureImagePages?: string[]; // URLs for individual brochure page images
}
export interface Language {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  levels: string;
  modalities: string;
  image: string;
  aiHint?: string;
  pdfUrl?: string; // URL to the brochure PDF (for download)
  brochureImagePages?: string[]; // URLs for individual brochure page images
}

// Main languages for the offer page
export const languages: Omit<Language, 'description' | 'levels' | 'modalities' | 'pdfUrl' | 'brochureImagePages'>[] = [
  { 
    name: 'Inglés', 
    slug: 'ingles',
    shortDescription: 'El idioma global para nuevas oportunidades.',
    image: '/images/oferta-academica/ingles/ingles.png',
    aiHint: 'english language learning',
  },
  { 
    name: 'Francés', 
    slug: 'frances',
    shortDescription: 'Sumérgete en una cultura rica y diversa.',
    image: '/images/oferta-academica/frances/frances.png',
    aiHint: 'french language eiffel',
  },
  { 
    name: 'Alemán', 
    slug: 'aleman',
    shortDescription: 'Abre puertas en ciencia y tecnología.',
    image: '/images/oferta-academica/aleman/aleman.png',
    aiHint: 'german language berlin',
  },
  { 
    name: 'Portugués', 
    slug: 'portugues',
    shortDescription: 'Conecta con vibrantes culturas latinas.',
    image: '/images/oferta-academica/portugues/portugues.png',
    aiHint: 'portuguese language rio',
  },
];

// Specific data for each language page (excluding English main page)
export const languageDetails: Record<string, Language> = {
  frances: { 
    name: 'Francés', 
    slug: 'frances',
    shortDescription: 'Sumérgete en una cultura rica y diversa.',
    description: 'Sumérgete en una cultura rica y expande tus horizontes literarios, artísticos y diplomáticos. El francés es un idioma oficial en muchas organizaciones internacionales.', 
    levels: 'A1, A2, B1, B2', 
    modalities: 'Presencial, Semi-intensivo',
    image: '/images/oferta-academica/frances/frances.png',
    aiHint: 'french language eiffel',
    brochureImagePages: [
      '/images/oferta-academica/frances/brochure/1.png',
      '/images/oferta-academica/frances/brochure/2.png',
      '/images/oferta-academica/frances/brochure/4.png',
      '/images/oferta-academica/frances/brochure/3.png'
    ]
  },
  aleman: { 
    name: 'Alemán', 
    slug: 'aleman',
    shortDescription: 'Abre puertas en ciencia y tecnología.',
    description: 'Abre puertas en ciencia, tecnología, ingeniería, filosofía y negocios en Europa. Alemania es una potencia económica y académica.', 
    levels: 'A1, A2, B1', 
    modalities: 'Presencial',
    image: '/images/oferta-academica/aleman/aleman.png',
    aiHint: 'german language berlin',
    brochureImagePages: [
      '/images/oferta-academica/aleman/brochure/1.png',
      '/images/oferta-academica/aleman/brochure/2.png',
      '/images/oferta-academica/aleman/brochure/4.png',
      '/images/oferta-academica/aleman/brochure/3.png'
    ]
  },
  portugues: { 
    name: 'Portugués', 
    slug: 'portugues',
    shortDescription: 'Conecta con vibrantes culturas latinas.',
    description: 'Conecta con vibrantes culturas de América Latina, Europa y África. El portugués es un idioma en crecimiento con importancia en el Mercosur.', 
    levels: 'A1, A2, B1', 
    modalities: 'Presencial, Virtual',
    image: '/images/oferta-academica/portugues/portugues.png',
    aiHint: 'portuguese language rio',
    brochureImagePages: [
      '/images/oferta-academica/portugues/brochure/1.png',
      '/images/oferta-academica/portugues/brochure/2.png',
      '/images/oferta-academica/portugues/brochure/3.png',
      '/images/oferta-academica/portugues/brochure/4.png'
    ]
  },
  'pruebas-internacionales': {
    name: 'Pruebas Internacionales',
    slug: 'pruebas-internacionales',
    shortDescription: 'Certifica tu nivel de inglés con los exámenes más reconocidos.',
    description: 'Prepárate con nosotros para alcanzar el éxito en exámenes de certificación internacional como TOEFL, IELTS y otros. Nuestros programas están diseñados para familiarizarte con el formato y las estrategias de cada prueba.',
    levels: 'N/A',
    modalities: 'Presencial, Talleres Intensivos',
    image: '/images/oferta-academica/pruebas-internacionales/pruebas-internacionales.jpg',
    aiHint: 'international exam certificate',
    pdfUrl: '#',
    brochureImagePages: [
      '/images/oferta-academica/pruebas-internacionales/brochure/1.png',
      '/images/oferta-academica/pruebas-internacionales/brochure/2.png',
      '/images/oferta-academica/pruebas-internacionales/brochure/3.png',
    ]
  },
};

// New data structure for English programs by age
export const englishPrograms: EnglishProgram[] = [
  {
    name: 'Inglés para niños de 5 a 6 años',
    slug: 'kids-5-6',
    ageRange: '5 a 6 años',
    description: 'Programa lúdico para el primer contacto con el inglés, enfocado en juegos, canciones y actividades interactivas.',
    levels: 'Inicial',
    modalities: 'Presencial',
    image: '/images/oferta-academica/ingles/ingles.png',
    aiHint: 'children playing learning',
    pdfUrl: '#', // Placeholder
    brochureImagePages: [
      '/images/oferta-academica/ingles/brochure/5-6/1.png',
      '/images/oferta-academica/ingles/brochure/5-6/2.png',
      '/images/oferta-academica/ingles/brochure/5-6/3.png',
      '/images/oferta-academica/ingles/brochure/5-6/4.png',
      '/images/oferta-academica/ingles/brochure/5-6/5.png',
    ]
  },
  {
    name: 'Inglés para niños de 7 y 8 años',
    slug: 'kids-7-8',
    ageRange: '7 y 8 años',
    description: 'Desarrollo de habilidades comunicativas básicas a través de historias, proyectos y actividades dinámicas.',
    levels: 'Básico 1',
    modalities: 'Presencial',
    image: '/images/oferta-academica/ingles/ingles.png',
    aiHint: 'children classroom drawing',
    pdfUrl: '#', // Placeholder
    brochureImagePages: [
      '/images/oferta-academica/ingles/brochure/7-8/1.png',
      '/images/oferta-academica/ingles/brochure/7-8/2.png',
      '/images/oferta-academica/ingles/brochure/7-8/3.png',
      '/images/oferta-academica/ingles/brochure/7-8/4.png',
      '/images/oferta-academica/ingles/brochure/7-8/5.png',
    ]
  },
  {
    name: 'Inglés para niños de 9 y 10 años',
    slug: 'kids-9-10',
    ageRange: '9 y 10 años',
    description: 'Ampliación de vocabulario y estructuras gramaticales con enfoque en la conversación y la comprensión lectora.',
    levels: 'Básico 2 y 3',
    modalities: 'Presencial',
    image: '/images/oferta-academica/ingles/ingles.png',
    aiHint: 'pre-teens studying group',
    pdfUrl: '#', // Placeholder
    brochureImagePages: [
      '/images/oferta-academica/ingles/brochure/9-10/1.png',
      '/images/oferta-academica/ingles/brochure/9-10/2.png',
      '/images/oferta-academica/ingles/brochure/9-10/3.png',
      '/images/oferta-academica/ingles/brochure/9-10/4.png',
      '/images/oferta-academica/ingles/brochure/9-10/5.png',
      '/images/oferta-academica/ingles/brochure/9-10/6.png',
      '/images/oferta-academica/ingles/brochure/9-10/7.png',
      '/images/oferta-academica/ingles/brochure/9-10/8.png',
      '/images/oferta-academica/ingles/brochure/9-10/9.png',

    ]
  },
  {
    name: 'Inglés para adolescentes de 11 a 14 años',
    slug: 'teens-11-14',
    ageRange: '11 a 14 años',
    description: 'Fortalecimiento de las cuatro habilidades del idioma (habla, escucha, lectura, escritura) con temas de interés juvenil.',
    levels: 'Intermedio',
    modalities: 'Presencial',
    image: '/images/oferta-academica/ingles/ingles.png',
    aiHint: 'teenagers studying computer',
    pdfUrl: '#', // Placeholder
    brochureImagePages: [
      '/images/oferta-academica/ingles/brochure/11-14/1.png',
      '/images/oferta-academica/ingles/brochure/11-14/2.png',
      '/images/oferta-academica/ingles/brochure/11-14/3.png',
      '/images/oferta-academica/ingles/brochure/11-14/4.png',
      '/images/oferta-academica/ingles/brochure/11-14/5.png',
      '/images/oferta-academica/ingles/brochure/11-14/6.png',
      '/images/oferta-academica/ingles/brochure/11-14/7.png',
      '/images/oferta-academica/ingles/brochure/11-14/8.png',
      '/images/oferta-academica/ingles/brochure/11-14/9.png',

    ]
  },
  {
    name: 'Inglés para mayores de 15 años',
    slug: 'adults-15-plus',
    ageRange: 'Mayor de 15 años',
    description: 'Programa completo para jóvenes y adultos, alineado con el MCER, para el dominio del inglés en contextos académicos y profesionales.',
    levels: 'A1, A2, B1, B2, C1',
    modalities: 'Presencial, Virtual, Intensivo',
    image: '/images/oferta-academica/ingles/ingles.png',
    aiHint: 'university students conversation',
    pdfUrl: '#',
    brochureImagePages: [
      '/images/oferta-academica/ingles/brochure/15+/1.png',
      '/images/oferta-academica/ingles/brochure/15+/2.png',
      '/images/oferta-academica/ingles/brochure/15+/3.png',
      '/images/oferta-academica/ingles/brochure/15+/4.png',
      '/images/oferta-academica/ingles/brochure/15+/5.png',
      '/images/oferta-academica/ingles/brochure/15+/6.png',
      '/images/oferta-academica/ingles/brochure/15+/7.png',
    ]
  },
  {
    name: 'Programa por Habilidades',
    slug: 'programa-habilidades',
    ageRange: 'Habilidades',
    description: 'Perfecciona tus competencias específicas en inglés. Ideal para quienes han culminado niveles B2 o C1 y buscan maestría.',
    levels: 'Avanzado (Post-B2/C1)',
    modalities: 'Presencial, Virtual',
    image: '/images/oferta-academica/ingles/ingles.png',
    aiHint: 'advanced skills workshop',
    pdfUrl: '#', // Placeholder
    brochureImagePages: [
      '/images/oferta-academica/ingles/brochure/15+/1.png',
      '/images/oferta-academica/ingles/brochure/15+/2.png',
      '/images/oferta-academica/ingles/brochure/15+/3.png',
      '/images/oferta-academica/ingles/brochure/15+/4.png',
      '/images/oferta-academica/ingles/brochure/15+/5.png',
      '/images/oferta-academica/ingles/brochure/15+/6.png',
      '/images/oferta-academica/ingles/brochure/15+/7.png',
    ]
  }
];
