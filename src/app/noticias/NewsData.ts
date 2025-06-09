
export interface NewsArticle {
    id: string;
    slug: string; // Use ID for slug for now if titles can be long/complex
    title: string;
    date: string; // YYYY-MM-DD
    image: string;
    aiHint: string;
    excerpt: string;
    content?: string; // Full content for detail page
    category: string; 
  }
  
  export const articles: NewsArticle[] = [
    { 
      id: '1', 
      slug: '1',
      title: 'Convocatoria Cursos de Extensión primer semestre 2025', 
      date: '2024-11-10', 
      image: 'https://placehold.co/400x250/00723F/FFFFFF', 
      excerpt: 'El Centro de Idiomas de la Universidad de los Llanos se complace en anunciar la apertura de la convocatoria para los cursos de extensión...', 
      aiHint: 'university students announcement',
      category: 'Convocatorias',
      content: `
        <p class="mb-4">Este es el contenido completo del artículo. El Centro de Idiomas de la Universidad de los Llanos se complace en anunciar la apertura de la convocatoria para los cursos de extensión correspondientes al primer semestre de 2025. Las inscripciones estarán abiertas desde el 15 de noviembre hasta el 15 de diciembre de 2024.</p>
        <h3 class="text-xl font-semibold mt-6 mb-3 text-primary">Idiomas Ofertados</h3>
        <ul class="list-disc list-inside mb-4 pl-4">
          <li>Inglés (Niveles A1 a C1)</li>
          <li>Francés (Niveles A1 a B2)</li>
          <li>Portugués (Niveles A1 a B1)</li>
        </ul>
        <p class="mb-4">Para más información sobre costos, horarios y proceso de matrícula, por favor visite nuestra sección de inscripciones o contáctenos directamente.</p>
      `
    },
    { 
      id: '2', 
      slug: '2',
      title: 'Nuevo laboratorio de idiomas inaugurado en Sede Barcelona', 
      date: '2024-10-25', 
      image: 'https://placehold.co/400x250/FFD100/333333', 
      excerpt: 'Con una inversión significativa, la universidad ha modernizado sus instalaciones para el aprendizaje de idiomas...', 
      aiHint: 'language lab opening',
      category: 'Infraestructura',
      content: `
        <p class="mb-4">La Universidad de los Llanos se enorgullece en presentar el nuevo laboratorio de idiomas en la Sede Barcelona. Estas modernas instalaciones cuentan con equipos de última tecnología, software especializado y espacios colaborativos para enriquecer la experiencia de aprendizaje de nuestros estudiantes.</p>
        <p class="mb-4">La inauguración contó con la presencia de directivas de la universidad, docentes y estudiantes, quienes destacaron la importancia de esta inversión para la formación integral y la competitividad global.</p>
      `
    },
    { 
      id: '3', 
      slug: '3',
      title: 'Testimonios de éxito: Estudiantes del Centro de Idiomas', 
      date: '2024-10-15', 
      image: 'https://placehold.co/400x250/005DAA/FFFFFF', 
      excerpt: 'Conoce cómo el dominio de un segundo idioma ha transformado la vida académica y profesional de nuestros egresados...', 
      aiHint: 'students success stories',
      category: 'Comunidad',
      content: `
        <p class="mb-4">Estudiantes y egresados del Centro de Idiomas UNILLANOS comparten sus historias de cómo el aprendizaje de un nuevo idioma ha impactado positivamente sus vidas. Desde oportunidades laborales en el extranjero hasta un mejor desempeño académico, los testimonios reflejan el valor de nuestros programas.</p>
        <blockquote class="border-l-4 border-primary pl-4 italic my-4">
          "Aprender inglés en el Centro de Idiomas me abrió puertas que nunca imaginé. Hoy trabajo en una multinacional gracias a mi fluidez." - Ana Pérez, Egresada.
        </blockquote>
      `
    },
    { 
      id: '4',
      slug: '4',
      title: 'Intercambio Cultural: Semana de Francia en UNILLANOS', 
      date: '2024-09-20', 
      image: 'https://placehold.co/400x250/E91E63/FFFFFF', 
      excerpt: 'Celebramos la riqueza de la cultura francesa con una semana llena de actividades, cine, gastronomía y charlas...',
      aiHint: 'french cultural event',
      category: 'Eventos',
      content: `
        <p class="mb-4">Durante la segunda semana de septiembre, el Centro de Idiomas lideró la "Semana de Francia en UNILLANOS". El evento incluyó proyecciones de cine francés, degustaciones de gastronomía típica, talleres de conversación y conferencias sobre oportunidades de estudio en Francia.</p>
        <p class="mb-4">Agradecemos la participación de la comunidad universitaria y esperamos seguir fomentando estos espacios de intercambio cultural.</p>
      `
    },
    { 
      id: '5',
      slug: '5',
      title: 'Taller de Preparación para Exámenes Internacionales', 
      date: '2023-11-05', 
      image: 'https://placehold.co/400x250/4CAF50/FFFFFF', 
      excerpt: 'Ofrecimos un taller intensivo para estudiantes que se preparan para presentar exámenes como TOEFL, IELTS y DELF...',
      aiHint: 'exam preparation workshop',
      category: 'Académico',
      content: `
        <p class="mb-4">Con el objetivo de apoyar a nuestros estudiantes en la consecución de certificaciones internacionales, el Centro de Idiomas realizó un taller intensivo de preparación. Se abordaron estrategias específicas para cada sección de los exámenes TOEFL, IELTS y DELF/DALF.</p>
      `
    },
     { 
      id: '6',
      slug: '6',
      title: 'Club de Conversación en Portugués: ¡Únete ahora!', 
      date: '2023-05-10', 
      image: 'https://placehold.co/400x250/FF9800/FFFFFF', 
      excerpt: 'Abrimos inscripciones para nuestro club de conversación en portugués. Un espacio para practicar y mejorar tu fluidez.',
      aiHint: 'conversation club language',
      category: 'Comunidad',
      content: `
        <p class="mb-4">Si estás aprendiendo portugués y quieres practicar tus habilidades de conversación en un ambiente relajado y amigable, ¡nuestro club de conversación es para ti! Sesiones semanales moderadas por hablantes nativos y docentes.</p>
      `
    }
  ];
  