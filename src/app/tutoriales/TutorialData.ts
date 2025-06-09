
export interface Tutorial {
    id: string;
    slug: string;
    title: string;
    date: string;
    category: 'Estudiantes' | 'Profesores' | 'Padres de Familia' | 'General';
    excerpt: string;
    description: string; // Longer description for the detail page
    youtubeVideoId: string;
    image?: string; // Optional thumbnail for card display
    aiHint?: string;
  }
  
  export const tutorialesData: Tutorial[] = [
    {
      id: '1',
      slug: 'acceso-moodle-estudiantes',
      title: 'Guía de Acceso a Moodle para Estudiantes',
      date: '2024-03-10',
      category: 'Estudiantes',
      excerpt: 'Aprende cómo ingresar a la plataforma Moodle, encontrar tus cursos y navegar por los recursos disponibles.',
      description: 'Este video tutorial te guiará paso a paso en el proceso de acceso a la plataforma Moodle del Centro de Idiomas UNILLANOS. Cubriremos cómo encontrar tus cursos asignados, revisar materiales, participar en foros y enviar tareas. Es fundamental para todos los estudiantes nuevos y aquellos que necesiten un repaso.',
      youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder video ID (Rick Astley)
      image: 'https://placehold.co/400x250/00723F/FFFFFF?text=Moodle+Tutorial',
      aiHint: 'e-learning platform tutorial',
    },
    {
      id: '2',
      slug: 'gestion-calificaciones-profesores',
      title: 'Gestión de Calificaciones en Plataforma para Profesores',
      date: '2024-03-15',
      category: 'Profesores',
      excerpt: 'Tutorial para docentes sobre cómo registrar, modificar y publicar calificaciones de los estudiantes en el sistema académico.',
      description: 'Dirigido a nuestros docentes, este tutorial explica detalladamente el módulo de gestión de calificaciones. Aprenderás a ingresar notas, generar reportes, y asegurar la correcta publicación de las calificaciones. Mantener la información académica al día es crucial para el seguimiento del progreso estudiantil.',
      youtubeVideoId: 'L_LUpnjgPso', // Placeholder video ID (Keyboard Cat)
      image: 'https://placehold.co/400x250/FFD100/333333?text=Calificaciones',
      aiHint: 'teacher grading system',
    },
    {
      id: '3',
      slug: 'seguimiento-progreso-padres',
      title: 'Cómo Realizar Seguimiento al Progreso Académico (Padres)',
      date: '2024-03-20',
      category: 'Padres de Familia',
      excerpt: 'Guía para padres sobre cómo acceder a la información de progreso de sus hijos y entender los reportes académicos.',
      description: 'Entendemos la importancia del acompañamiento familiar. Este video muestra a los padres y acudientes cómo pueden acceder a la información relevante sobre el desempeño académico de los estudiantes (especialmente menores de edad), cómo interpretar los reportes de notas y asistencia, y los canales de comunicación disponibles con el Centro de Idiomas.',
      youtubeVideoId: 'QH2-TGUlwu4', // Placeholder video ID (Nyan Cat)
      image: 'https://placehold.co/400x250/005DAA/FFFFFF?text=Progreso+Padres',
      aiHint: 'parent student progress',
    },
     {
      id: '4',
      slug: 'solicitud-constancias-online',
      title: 'Tutorial: Solicitud de Constancias en Línea',
      date: '2024-04-05',
      category: 'General',
      excerpt: 'Descubre cómo solicitar tus constancias de estudio de forma rápida y sencilla a través de nuestro nuevo portal.',
      description: 'Facilitamos tus trámites. Este tutorial te muestra el nuevo proceso para solicitar constancias de estudio, certificados de notas y otros documentos académicos directamente desde nuestro portal en línea. Ahorra tiempo y gestiona tus solicitudes desde la comodidad de tu hogar.',
      youtubeVideoId: 'YddwkMJG1Jo', // Placeholder video ID (Dramatic Chipmunk)
      image: 'https://placehold.co/400x250/4CAF50/FFFFFF?text=Constancias+Online',
      aiHint: 'online certificate request',
    },
  ];
  