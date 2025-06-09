
// This file centralizes the language data for easier management.
export interface Language {
    name: string;
    slug: string;
    description: string;
    levels: string;
    modalities: string;
    image: string;
    aiHint?: string;
    pdfUrl?: string; // URL to the brochure PDF (for download)
    brochureImagePages?: string[]; // URLs for individual brochure page images
    // Add other properties like duration, benefits, testimonials later
  }
  
  export const languages: Language[] = [
    { 
      name: 'Inglés', 
      slug: 'ingles',
      description: 'Domina el idioma global para nuevas oportunidades profesionales y culturales. Esencial para la comunicación internacional, los negocios y el acceso a información.', 
      levels: 'A1, A2, B1, B2, C1', 
      modalities: 'Presencial, Virtual, Semi-intensivo, Intensivo',
      image: 'https://placehold.co/400x250/00723F/FFFFFF?text=Inglés+UNILLANOS',
      aiHint: 'english language learning',
      pdfUrl: 'https://www.unillanos.edu.co/images/documentos/dependencias/CEI/INSTRUCTIVO_INGLES_2024-1.pdf',
      brochureImagePages: [
        'https://placehold.co/800x1100/00723F/FFFFFF?text=Inglés+Página+1',
        'https://placehold.co/800x1100/00723F/FFFFFF?text=Inglés+Página+2',
        'https://placehold.co/800x1100/00723F/FFFFFF?text=Inglés+Página+3',
      ]
    },
    { 
      name: 'Francés', 
      slug: 'frances',
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
    { 
      name: 'Alemán', 
      slug: 'aleman',
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
    { 
      name: 'Portugués', 
      slug: 'portugues',
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
    // { 
    //   name: 'Italiano', // Example for a future language
    //   slug: 'italiano',
    //   description: 'Explora la cuna del arte, la moda y la gastronomía. Un idioma melódico y culturalmente rico.', 
    //   levels: 'A1, A2', 
    //   modalities: 'Próximamente',
    //   image: 'https://placehold.co/400x250/E91E63/FFFFFF?text=Italiano+UNILLANOS',
    //   aiHint: 'italian language rome',
    //   pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Placeholder
    //   brochureImagePages: [
    //      'https://placehold.co/800x1100/E91E63/FFFFFF?text=Italiano+Página+1',
    //      'https://placehold.co/800x1100/E91E63/FFFFFF?text=Italiano+Página+2',
    //   ]
    // },
  ];
  
  