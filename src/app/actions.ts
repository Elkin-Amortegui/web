
'use server';

import { z } from 'zod';
import { articles } from '@/app/noticias/NewsData';
import { tramitesData } from '@/app/tramites/TramiteData';
import { tutorialesData } from '@/app/tutoriales/TutorialData';
import { guiasData } from '@/app/guias/GuideData';
import { actividadesData } from '@/app/actividades/ActividadData';
import { languages } from '@/app/oferta-academica/LanguageData';

// Contact Form Schema (Updated to include subject)
const contactFormSchema = z.object({
  name: z.string().min(3, 'Nombre es requerido (mínimo 3 caracteres).'),
  email: z.string().email('Correo electrónico inválido.'),
  subject: z.string().min(5, 'Asunto es requerido (mínimo 5 caracteres).'),
  message: z.string().min(10, 'Mensaje debe tener al menos 10 caracteres.'),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Error de validación. Por favor revise los campos.',
      fields: formData as Record<string, string>, // Send back entered data
      issues,
      success: false,
    };
  }

  try {
    // Simulate sending email
    console.log('Contact Data:', parsed.data);
    // Example: await sendEmail({ to: 'centrodeidiomas@unillanos.edu.co', subject: `Nuevo Contacto: ${parsed.data.subject}`, body: ... });

    return { message: '¡Mensaje enviado con éxito! Gracias por contactarnos. Nos pondremos en contacto pronto.', success: true, fields: {}, issues: [] };
  } catch (error)
 {
    console.error('Contact submission error:', error);
    return { 
      message: 'Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.', 
      success: false,
      fields: formData as Record<string, string>, // Send back entered data on server error too
      issues: ['Ocurrió un error en el servidor.']
    };
  }
}

export interface SearchResultItem {
  id: string;
  type: 'Noticia' | 'Trámite' | 'Tutorial' | 'Guía' | 'Actividad' | 'Idioma' | 'Página Principal';
  title: string;
  excerpt: string;
  href: string;
  date?: string;
  category?: string;
  image?: string;
  aiHint?: string;
  content?: string; // Added to ensure all searchable text can be stored here
}

const staticPageData = [
  {
    id: 'oferta-academica-main',
    type: 'Página Principal' as SearchResultItem['type'],
    title: 'Oferta Académica',
    href: '/oferta-academica',
    description: 'Explora nuestros programas de idiomas diseñados para ayudarte a alcanzar la fluidez y abrir nuevas puertas en tu vida personal y profesional.',
    content: `Cursos de Inglés, Francés, Alemán, Portugués. Niveles A1-C1. Modalidades presencial y virtual. Aprende un nuevo idioma con nosotros. Centro de Idiomas Unillanos. Brochure informativo y detalles de cada programa.`,
    keywords: ['cursos', 'idiomas', 'programas', 'niveles', 'modalidades', 'inglés', 'francés', 'alemán', 'portugués']
  },
  {
    id: 'quienes-somos',
    type: 'Página Principal' as SearchResultItem['type'],
    title: 'Quiénes Somos',
    href: '/quienes-somos',
    description: 'Conoce más sobre el Centro de Idiomas de la Universidad de los Llanos: nuestra historia, misión, visión y los testimonios de nuestra comunidad.',
    content: `Misión: Formar personas competentes en lenguas extranjeras. Visión: Ser un Centro de Idiomas líder. Historia del Centro de Idiomas UNILLANOS. Logros destacados. Testimonios de estudiantes. Galería de momentos.`,
    keywords: ['misión', 'visión', 'historia', 'centro de idiomas', 'unillanos', 'logros', 'testimonios']
  },
  {
    id: 'normativa',
    type: 'Página Principal' as SearchResultItem['type'],
    title: 'Normativa del Centro de Idiomas',
    href: '/normativa',
    description: 'Documentos, resoluciones y acuerdos que rigen el funcionamiento y los procesos académicos del Centro de Idiomas UNILLANOS.',
    content: `Consulte aquí la normativa aplicable a nuestros estudiantes, docentes y programas. Información importante sobre reglamentos estudiantiles, resoluciones académicas, acuerdos del consejo, políticas de tratamiento de datos. Próximamente enlaces a PDF. Centro de Idiomas Unillanos.`,
    keywords: ['reglamento', 'resoluciones', 'acuerdos', 'políticas', 'documentos legales', 'normas']
  },
  {
    id: 'valores',
    type: 'Página Principal' as SearchResultItem['type'],
    title: 'Valores y Tarifas',
    href: '/valores',
    description: 'Consulta nuestras tarifas y costos asociados a los programas y servicios del Centro de Idiomas.',
    content: `Tabla de valores. Tarifas actuales de cursos de idiomas, exámenes de clasificación, certificaciones y otros servicios. Información de contacto para consultas sobre costos.`,
    keywords: ['precios', 'costos', 'tarifas', 'matrícula', 'inscripción']
  },
  {
    id: 'inscripciones',
    type: 'Página Principal' as SearchResultItem['type'],
    title: 'Proceso de Inscripción',
    href: '/inscripciones',
    description: 'Información importante sobre cómo unirte a nuestros cursos en el Centro de Idiomas UNILLANOS.',
    content: `Estado actual de inscripciones. Próximas fechas de convocatoria. Pasos para el proceso de inscripción. Consultas de contacto. Redes sociales. Política de privacidad y términos y condiciones.`,
    keywords: ['inscripción', 'matrícula', 'convocatoria', 'unirse', 'cursos']
  },
  {
    id: 'contacto-main',
    type: 'Página Principal' as SearchResultItem['type'],
    title: 'Información de Contacto',
    href: '/contacto',
    description: 'Comunícate con nosotros o visítanos. Encuentra nuestros teléfonos, correos y ubicación.',
    content: `Contacto directo del Centro de Idiomas UNILLANOS. Dirección: Carrera 30A No 41B - 39, Barrio La Grama, Villavicencio. Teléfono. Correo Electrónico. Mapa de ubicación. Redes Sociales. Sistema PQRSD.`,
    keywords: ['teléfono', 'correo', 'dirección', 'mapa', 'ubicación', 'redes sociales', 'pqrsd']
  },
   {
    id: 'mapa-del-sitio',
    type: 'Página Principal' as SearchResultItem['type'],
    title: 'Mapa del Sitio',
    href: '/mapa-del-sitio',
    description: 'Encuentra rápidamente la sección que buscas en el Centro de Idiomas UNILLANOS.',
    content: `Navegación principal. Secciones académicas, institucionales, comunidad, servicios y ayuda, legal. Enlaces a todas las páginas importantes.`,
    keywords: ['navegación', 'enlaces', 'secciones', 'sitemap']
  },
];


export async function performSearch(query: string): Promise<SearchResultItem[]> {
  if (!query || query.trim() === '') {
    return [];
  }

  const allItems: SearchResultItem[] = [];

  // 1. Noticias
  articles.forEach(article => {
    allItems.push({
      id: article.id,
      type: 'Noticia',
      title: article.title,
      excerpt: article.excerpt,
      href: `/noticias/${article.slug}`,
      date: article.date,
      category: article.category,
      image: article.image,
      aiHint: article.aiHint,
      content: article.content || '',
    });
  });

  // 2. Trámites
  tramitesData.forEach(tramite => {
    allItems.push({
      id: tramite.id,
      type: 'Trámite',
      title: tramite.title,
      excerpt: tramite.excerpt,
      href: `/tramites/${tramite.slug}`,
      date: tramite.date,
      category: tramite.category,
      image: tramite.image,
      aiHint: tramite.aiHint,
      content: tramite.content || '',
    });
  });

  // 3. Tutoriales
  tutorialesData.forEach(tutorial => {
    allItems.push({
      id: tutorial.id,
      type: 'Tutorial',
      title: tutorial.title,
      excerpt: tutorial.excerpt,
      href: `/tutoriales/${tutorial.slug}`,
      date: tutorial.date,
      // category: tutorial.targetAudience.join(', '), // Consider how to best represent this
      image: tutorial.image,
      aiHint: tutorial.aiHint,
      content: tutorial.detailedContent || '',
    });
  });

  // 4. Guías
  guiasData.forEach(guide => {
    allItems.push({
      id: guide.id,
      type: 'Guía',
      title: guide.title,
      excerpt: guide.excerpt,
      href: `/guias/${guide.slug}`,
      date: guide.date,
      // category: guide.targetAudience.join(', '),
      image: guide.image,
      aiHint: guide.aiHint,
      content: guide.detailedContent || '',
    });
  });

  // 5. Actividades
  actividadesData.forEach(actividad => {
    allItems.push({
      id: actividad.id,
      type: 'Actividad',
      title: actividad.title,
      excerpt: actividad.excerpt,
      href: `/actividades/${actividad.slug}`,
      date: actividad.date,
      category: actividad.category,
      image: actividad.image,
      aiHint: actividad.aiHint,
      content: `${actividad.content || ''} ${actividad.location || ''} ${actividad.time || ''}`,
    });
  });

  // 6. Oferta Académica (Idiomas individuales)
  languages.forEach(language => {
    allItems.push({
      id: language.slug,
      type: 'Idioma',
      title: language.name,
      excerpt: language.description,
      href: `/oferta-academica/${language.slug}`,
      image: language.image,
      aiHint: language.aiHint,
      content: `${language.description} Niveles: ${language.levels}. Modalidades: ${language.modalities}. Aprende ${language.name}.`,
    });
  });

  // 7. Páginas Estáticas
  staticPageData.forEach(page => {
    allItems.push({
      id: page.id,
      type: page.type,
      title: page.title,
      excerpt: page.description,
      href: page.href,
      content: `${page.content || ''} ${page.keywords ? page.keywords.join(' ') : ''}`,
    });
  });


  const lowerCaseQuery = query.toLowerCase();
  const filteredItems = allItems.filter(item => {
    const searchableString = [
      item.title,
      item.excerpt,
      item.content,
      item.category,
    ].filter(Boolean).join(' ').toLowerCase(); // filter(Boolean) removes undefined/null/empty strings before join
    return searchableString.includes(lowerCaseQuery);
  });

  return filteredItems;
}
