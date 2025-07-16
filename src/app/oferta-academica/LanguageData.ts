

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
  // Add other properties like duration, benefits, testimonials later
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
    image: 'https://placehold.co/400x250/FFD100/333333?text=Francés+UNILLANOS',
    aiHint: 'french language eiffel',
    pdfUrl: 'https://www.unillanos.edu.co/images/documentos/dependencias/CEI/INSTRUCTIVO_FRANCES_2024-1.pdf',
    brochureImagePages: [
      'https://placehold.co/800x1100/FFD100/333333?text=Francés+Página+1',
      'https://placehold.co/800x1100/FFD100/333333?text=Francés+Página+2',
    ]
  },
  aleman: { 
    name: 'Alemán', 
    slug: 'aleman',
    shortDescription: 'Abre puertas en ciencia y tecnología.',
    description: 'Abre puertas en ciencia, tecnología, ingeniería, filosofía y negocios en Europa. Alemania es una potencia económica y académica.', 
    levels: 'A1, A2, B1', 
    modalities: 'Presencial',
    image: 'https://placehold.co/400x250/005DAA/FFFFFF?text=Alemán+UNILLANOS',
    aiHint: 'german language berlin',
    pdfUrl: 'https://www.unillanos.edu.co/images/documentos/dependencias/CEI/INSTRUCTIVO_ALEMAN_2024-1.pdf',
    brochureImagePages: [
      'https://placehold.co/800x1100/005DAA/FFFFFF?text=Alemán+Página+1',
      'https://placehold.co/800x1100/005DAA/FFFFFF?text=Alemán+Página+2',
      'https://placehold.co/800x1100/005DAA/FFFFFF?text=Alemán+Página+3',
      'https://placehold.co/800x1100/005DAA/FFFFFF?text=Alemán+Página+4',
    ]
  },
  portugues: { 
    name: 'Portugués', 
    slug: 'portugues',
    shortDescription: 'Conecta con vibrantes culturas latinas.',
    description: 'Conecta con vibrantes culturas de América Latina, Europa y África. El portugués es un idioma en crecimiento con importancia en el Mercosur.', 
    levels: 'A1, A2, B1', 
    modalities: 'Presencial, Virtual',
    image: 'https://placehold.co/400x250/4CAF50/FFFFFF?text=Portugués+UNILLANOS',
    aiHint: 'portuguese language rio',
    pdfUrl: 'https://www.unillanos.edu.co/images/documentos/dependencias/CEI/INSTRUCTIVO_PORTUGUES_2024-1.pdf',
    brochureImagePages: [
      'https://placehold.co/800x1100/4CAF50/FFFFFF?text=Portugués+Página+1',
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
    image: 'https://placehold.co/800x450/f87171/ffffff?text=Inglés+5-6+años',
    aiHint: 'children playing learning',
    pdfUrl: '#', // Placeholder
    brochureImagePages: ['/images/oferta-academica/ingles/brochure/5-6/5-6-page-0001.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0002.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0003.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0004.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0005.jpg',
      '/images/oferta-academica/ingles/brochure/5-6/5-6-page-0006.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0007.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0008.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0009.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0010.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0011.jpg',
      '/images/oferta-academica/ingles/brochure/5-6/5-6-page-0012.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0013.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0014.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0015.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0016.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0017.jpg','/images/oferta-academica/ingles/brochure/5-6/5-6-page-0018.jpg',]
  },
  {
    name: 'Inglés para niños de 7 y 8 años',
    slug: 'kids-7-8',
    ageRange: '7 y 8 años',
    description: 'Desarrollo de habilidades comunicativas básicas a través de historias, proyectos y actividades dinámicas.',
    levels: 'Básico 1',
    modalities: 'Presencial',
    image: 'https://placehold.co/800x450/fb923c/ffffff?text=Inglés+7-8+años',
    aiHint: 'children classroom drawing',
    pdfUrl: '#', // Placeholder
    brochureImagePages: ['https://placehold.co/800x1100/fb923c/ffffff?text=Brochure+7-8+años']
  },
  {
    name: 'Inglés para niños de 9 y 10 años',
    slug: 'kids-9-10',
    ageRange: '9 y 10 años',
    description: 'Ampliación de vocabulario y estructuras gramaticales con enfoque en la conversación y la comprensión lectora.',
    levels: 'Básico 2 y 3',
    modalities: 'Presencial',
    image: 'https://placehold.co/800x450/fbbf24/ffffff?text=Inglés+9-10+años',
    aiHint: 'pre-teens studying group',
    pdfUrl: '#', // Placeholder
    brochureImagePages: ['https://placehold.co/800x1100/fbbf24/ffffff?text=Brochure+9-10+años']
  },
  {
    name: 'Inglés para adolescentes de 11 a 14 años',
    slug: 'teens-11-14',
    ageRange: '11 a 14 años',
    description: 'Fortalecimiento de las cuatro habilidades del idioma (habla, escucha, lectura, escritura) con temas de interés juvenil.',
    levels: 'Intermedio',
    modalities: 'Presencial',
    image: 'https://placehold.co/800x450/a3e635/ffffff?text=Inglés+11-14+años',
    aiHint: 'teenagers studying computer',
    pdfUrl: '#', // Placeholder
    brochureImagePages: ['https://placehold.co/800x1100/a3e635/ffffff?text=Brochure+11-14+años']
  },
  {
    name: 'Inglés para mayores de 15 años',
    slug: 'adults-15-plus',
    ageRange: 'Mayor de 15 años',
    description: 'Programa completo para jóvenes y adultos, alineado con el MCER, para el dominio del inglés en contextos académicos y profesionales.',
    levels: 'A1, A2, B1, B2, C1',
    modalities: 'Presencial, Virtual, Intensivo',
    image: 'https://placehold.co/800x450/60a5fa/ffffff?text=Inglés+15%2B+años',
    aiHint: 'university students conversation',
    pdfUrl: 'https://www.unillanos.edu.co/images/documentos/dependencias/CEI/INSTRUCTIVO_INGLES_2024-1.pdf',
    brochureImagePages: [
      'https://placehold.co/800x1100/60a5fa/ffffff?text=Brochure+15%2B+Página+1',
      'https://placehold.co/800x1100/60a5fa/ffffff?text=Brochure+15%2B+Página+2',
    ]
  }
];
