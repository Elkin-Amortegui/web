
export interface Actividad {
    id: string;
    slug: string;
    title: string;
    date: string; // YYYY-MM-DD, for upcoming events, this is the start date
    endDate?: string; // Optional: YYYY-MM-DD, for multi-day events
    type: 'pasada' | 'proxima' | 'destacada'; // 'destacada' for banner
    image: string;
    aiHint: string;
    excerpt: string;
    content: string; // Full HTML content for detail page
    location?: string;
    time?: string; // e.g., "10:00 AM - 02:00 PM"
    category?: 'Taller' | 'Conferencia' | 'Cultural' | 'Académico' | 'Convocatoria';
  }
  
  export const actividadesData: Actividad[] = [
    {
      id: '1',
      slug: 'semana-francesa-2024',
      title: 'Gran Semana de la Francofonía Unillanos 2024',
      date: '2024-03-18',
      endDate: '2024-03-22',
      type: 'destacada', // Also 'pasada'
      image: 'https://placehold.co/1200x500/00723F/FFFFFF?text=Semana+Francofonía',
      aiHint: 'french cultural festival',
      excerpt: 'Celebra con nosotros la riqueza de la cultura francesa y francófona. Actividades, cine, música y más.',
      content: `
        <p class="mb-4">El Centro de Idiomas de la Universidad de los Llanos te invita a participar en la Gran Semana de la Francofonía. Del 18 al 22 de marzo, tendremos una agenda llena de actividades culturales, proyecciones de cine, muestras gastronómicas, música y conversatorios.</p>
        <h3 class="text-xl font-semibold mt-6 mb-3 text-primary">Agenda Destacada</h3>
        <ul class="list-disc list-inside mb-4 pl-4">
          <li>Lunes 18: Apertura y muestra de cine francés.</li>
          <li>Martes 19: Taller de gastronomía francófona.</li>
          <li>Miércoles 20: Concierto de música en francés.</li>
          <li>Jueves 21: Conversatorio sobre oportunidades de estudio en países francófonos.</li>
          <li>Viernes 22: Clausura con presentaciones culturales.</li>
        </ul>
        <p>¡No te lo pierdas! Todas las actividades son de entrada libre.</p>
      `,
      location: 'Varias sedes, Unillanos',
      time: 'Consultar programación',
      category: 'Cultural',
    },
    {
      id: '2',
      slug: 'taller-preparacion-ielts-2024-s2',
      title: 'Taller Intensivo Preparación IELTS',
      date: '2024-09-05',
      endDate: '2024-09-26',
      type: 'proxima',
      image: 'https://placehold.co/600x400/FFD100/333333?text=Preparación+IELTS',
      aiHint: 'exam preparation workshop',
      excerpt: 'Prepárate para el examen IELTS con nuestro taller intensivo. Cubrimos todas las secciones y estrategias clave.',
      content: `
        <p class="mb-4">¿Necesitas certificar tu nivel de inglés con el examen IELTS? Nuestro taller intensivo te proporcionará las herramientas y estrategias necesarias para enfrentar cada una de las secciones del examen: Listening, Reading, Writing y Speaking.</p>
        <h3 class="text-xl font-semibold mt-6 mb-3 text-primary">Detalles del Taller</h3>
        <ul class="list-disc list-inside mb-4 pl-4">
          <li>Duración: 4 semanas, sesiones los martes y jueves.</li>
          <li>Material de estudio incluido.</li>
          <li>Simulacros de examen.</li>
          <li>Docentes especializados.</li>
        </ul>
        <p>Cupos limitados. Inscripciones abiertas a partir del 15 de agosto.</p>
      `,
      location: 'Centro de Idiomas, Sede La Grama',
      time: '6:00 PM - 8:00 PM',
      category: 'Taller',
    },
    {
      id: '3',
      slug: 'club-conversacion-ingles-oct-2024',
      title: 'Club de Conversación en Inglés - Octubre',
      date: '2024-10-01',
      type: 'proxima',
      image: 'https://placehold.co/600x400/005DAA/FFFFFF?text=English+Club',
      aiHint: 'conversation club students',
      excerpt: 'Únete a nuestro club de conversación en inglés y practica tus habilidades en un ambiente amigable y dinámico.',
      content: `
        <p class="mb-4">Mejora tu fluidez y confianza al hablar inglés participando en nuestro club de conversación. Sesiones semanales con temas variados, moderadas por nuestros docentes.</p>
        <p>Actividad gratuita para estudiantes activos del Centro de Idiomas.</p>
      `,
      location: 'Biblioteca Sede Barcelona',
      time: 'Miércoles 4:00 PM',
      category: 'Académico',
    },
    {
      id: '4',
      slug: 'conferencia-multilinguismo-2023',
      title: 'Conferencia: El Poder del Multilingüismo en el Siglo XXI',
      date: '2023-11-15',
      type: 'pasada',
      image: 'https://placehold.co/600x400/4CAF50/FFFFFF?text=Conferencia',
      aiHint: 'lecture presentation audience',
      excerpt: 'Revive los mejores momentos de nuestra conferencia sobre la importancia del multilingüismo en el mundo actual.',
      content: `
        <p class="mb-4">El pasado 15 de noviembre, contamos con la participación de expertos en lingüística y educación, quienes compartieron sus perspectivas sobre los beneficios del aprendizaje de múltiples idiomas en el contexto profesional y personal del siglo XXI. La conferencia fue un éxito de asistencia y participación.</p>
      `,
      location: 'Auditorio Unillanos',
      category: 'Conferencia',
    },
    {
      id: '5',
      slug: 'convocatoria-monitorias-2025-1',
      title: 'Convocatoria Monitorias Centro de Idiomas 2025-1',
      date: '2024-11-20',
      type: 'proxima',
      image: 'https://placehold.co/600x400/E91E63/FFFFFF?text=Convocatoria+Monitorias',
      aiHint: 'student job application',
      excerpt: 'Participa en la convocatoria para ser monitor del Centro de Idiomas durante el primer semestre de 2025.',
      content: `
        <p class="mb-4">El Centro de Idiomas abre su convocatoria para estudiantes interesados en ser monitores académicos y administrativos. Si tienes un buen dominio de un segundo idioma y te gusta ayudar a otros, ¡esta es tu oportunidad!</p>
        <p>Consulta los requisitos y el cronograma en el enlace adjunto (próximamente).</p>
      `,
      category: 'Convocatoria',
      time: 'Todo el día',
    },
     {
      id: '6',
      slug: 'festival-cultural-idiomas-2023',
      title: 'Festival Cultural de Idiomas 2023',
      date: '2023-09-28',
      type: 'pasada',
      image: 'https://placehold.co/600x400/F44336/FFFFFF?text=Festival+Idiomas',
      aiHint: 'cultural diversity event',
      excerpt: 'Un recuento del exitoso Festival Cultural de Idiomas, donde celebramos la diversidad lingüística y cultural.',
      content: `
        <p class="mb-4">Recordamos con alegría nuestro Festival Cultural de Idiomas, un espacio que reunió a la comunidad universitaria en torno a muestras artísticas, gastronómicas y académicas de diferentes culturas del mundo. Gracias a todos los participantes por hacer de este evento una experiencia inolvidable.</p>
      `,
      location: 'Plazoleta Sede Barcelona',
      category: 'Cultural',
    },
     {
      id: '7',
      slug: 'charla-virtual-estudiar-alemania',
      title: 'Charla Virtual: Oportunidades para Estudiar en Alemania',
      date: '2024-10-15',
      type: 'proxima',
      image: 'https://placehold.co/600x400/3F51B5/FFFFFF?text=Estudiar+Alemania',
      aiHint: 'online meeting webinar',
      excerpt: 'Conéctate a nuestra charla virtual y conoce las becas y programas para estudiar en Alemania.',
      content: `
        <p class="mb-4">Invitamos a todos los interesados en realizar estudios de pregrado o posgrado en Alemania a esta charla informativa. Contaremos con un representante del DAAD (Servicio Alemán de Intercambio Académico) quien resolverá todas tus dudas.</p>
        <p>Enlace de conexión se publicará próximamente.</p>
      `,
      location: 'Virtual (Online)',
      time: '03:00 PM',
      category: 'Académico',
    }
  ];
  