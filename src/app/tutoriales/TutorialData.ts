
export type TargetAudience =
  | 'Estudiantes'
  | 'Extensión a la comunidad'
  | 'Padres de Familia'
  | 'Docente'
  | 'Estudiantes Pregrado (Plan BULL)'
  | 'General';

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  date: string;
  targetAudience: TargetAudience[]; // Puede pertenecer a múltiples audiencias
  excerpt: string;
  detailedContent: string; // HTML para el contenido del tutorial
  youtubeVideoId: string;
  image?: string; // Miniatura opcional para la tarjeta
  aiHint?: string; // Para la miniatura
}

export const tutorialesData: Tutorial[] = [
  {
    id: '1',
    slug: 'acceso-moodle-estudiantes',
    title: 'Guía de Acceso a Moodle para Estudiantes',
    date: '2024-03-10',
    targetAudience: ['Estudiantes', 'Estudiantes Pregrado (Plan BULL)'],
    excerpt: 'Aprende cómo ingresar a la plataforma Moodle, encontrar tus cursos y navegar por los recursos disponibles.',
    detailedContent: `
      <h3 class="text-xl font-semibold text-primary mb-3">Introducción</h3>
      <p class="mb-4">Este video tutorial te guiará paso a paso en el proceso de acceso a la plataforma Moodle del Centro de Idiomas UNILLANOS. Es fundamental para todos los estudiantes nuevos y aquellos que necesiten un repaso.</p>
      <h3 class="text-xl font-semibold text-primary mt-4 mb-3">Pasos Detallados:</h3>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        <li><strong>Acceder al Sitio Web:</strong> Dirígete a la página oficial de Moodle de Unillanos (enlace proporcionado por tu docente).</li>
        <li><strong>Ingresar Credenciales:</strong> Utiliza tu nombre de usuario y contraseña institucional. Si tienes problemas, contacta a soporte técnico.</li>
        <li><strong>Navegar al Curso:</strong> Una vez dentro, busca la sección "Mis Cursos" y selecciona el curso de idiomas correspondiente.</li>
        <li><strong>Explorar Contenido:</strong> Revisa las secciones de materiales, anuncios, foros y tareas.</li>
        <li><strong>Participar en Foros:</strong> Aprende a publicar mensajes y responder a tus compañeros y docentes.</li>
        <li><strong>Enviar Tareas:</strong> Familiarízate con el proceso de carga de archivos y envío de actividades evaluativas.</li>
      </ol>
      <h3 class="text-xl font-semibold text-primary mt-4 mb-3">Recursos Adicionales:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><a href="#" class="text-secondary hover:underline">Manual de Usuario Moodle (PDF)</a></li>
        <li><a href="/contacto" class="text-secondary hover:underline">Contacto Soporte Técnico</a></li>
      </ul>
    `,
    youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder
    image: 'https://placehold.co/400x250/00723F/FFFFFF?text=Moodle+Tutorial',
    aiHint: 'e-learning platform',
  },
  {
    id: '2',
    slug: 'gestion-calificaciones-profesores',
    title: 'Gestión de Calificaciones en Plataforma para Profesores',
    date: '2024-03-15',
    targetAudience: ['Docente'],
    excerpt: 'Tutorial para docentes sobre cómo registrar, modificar y publicar calificaciones de los estudiantes en el sistema académico.',
    detailedContent: `
      <h3 class="text-xl font-semibold text-primary mb-3">Objetivo del Tutorial</h3>
      <p class="mb-4">Dirigido a nuestros docentes, este tutorial explica detalladamente el módulo de gestión de calificaciones. Aprenderás a ingresar notas, generar reportes, y asegurar la correcta publicación de las calificaciones.</p>
      <h3 class="text-xl font-semibold text-primary mt-4 mb-3">Procedimiento:</h3>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        <li><strong>Acceso al Sistema:</strong> Ingresa al sistema de gestión académica con tus credenciales de docente.</li>
        <li><strong>Selección de Grupo/Curso:</strong> Navega hasta el curso y grupo específico para el cual deseas gestionar calificaciones.</li>
        <li><strong>Ingreso de Notas:</strong> Localiza la sección de "Calificador" o "Libro de Calificaciones". Ingresa las notas para cada estudiante y actividad.</li>
        <li><strong>Guardado y Publicación:</strong> Asegúrate de guardar los cambios. Consulta cómo publicar las calificaciones para que sean visibles por los estudiantes según las políticas del centro.</li>
        <li><strong>Generación de Reportes:</strong> Explora las opciones para generar reportes de progreso individuales o grupales.</li>
      </ol>
      <p class="mt-4">Mantener la información académica al día es crucial para el seguimiento del progreso estudiantil.</p>
    `,
    youtubeVideoId: 'L_LUpnjgPso', // Placeholder
    image: 'https://placehold.co/400x250/FFD100/333333?text=Calificaciones',
    aiHint: 'teacher grading system',
  },
  {
    id: '3',
    slug: 'seguimiento-progreso-padres',
    title: 'Cómo Realizar Seguimiento al Progreso Académico (Padres)',
    date: '2024-03-20',
    targetAudience: ['Padres de Familia'],
    excerpt: 'Guía para padres sobre cómo acceder a la información de progreso de sus hijos y entender los reportes académicos.',
    detailedContent: `
      <h3 class="text-xl font-semibold text-primary mb-3">Importancia del Acompañamiento</h3>
      <p class="mb-4">Entendemos la importancia del acompañamiento familiar en el proceso de aprendizaje. Este video muestra a los padres y acudientes cómo pueden acceder a la información relevante sobre el desempeño académico de los estudiantes (especialmente menores de edad).</p>
      <h3 class="text-xl font-semibold text-primary mt-4 mb-3">Pasos para el Seguimiento:</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Portal de Padres:</strong> Accede al portal de padres/acudientes (si está disponible) utilizando las credenciales proporcionadas.</li>
        <li><strong>Consulta de Notas y Asistencia:</strong> Aprende a interpretar los reportes de notas, asistencia y comportamiento.</li>
        <li><strong>Comunicación con Docentes:</strong> Identifica los canales de comunicación disponibles para contactar a los docentes o la coordinación del Centro de Idiomas.</li>
        <li><strong>Revisión de Tareas y Actividades:</strong> Algunos sistemas permiten ver las tareas asignadas y el estado de entrega.</li>
      </ul>
       <h3 class="text-xl font-semibold text-primary mt-4 mb-3">Recursos Adicionales:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><a href="/contacto" class="text-secondary hover:underline">Preguntas Frecuentes para Padres</a></li>
      </ul>
    `,
    youtubeVideoId: 'QH2-TGUlwu4', // Placeholder
    image: 'https://placehold.co/400x250/005DAA/FFFFFF?text=Progreso+Padres',
    aiHint: 'parent student progress',
  },
   {
    id: '4',
    slug: 'solicitud-constancias-online-video',
    title: 'Tutorial: Solicitud de Constancias en Línea (Video)',
    date: '2024-04-05',
    targetAudience: ['Estudiantes', 'Extensión a la comunidad', 'General'],
    excerpt: 'Descubre cómo solicitar tus constancias de estudio de forma rápida y sencilla a través de nuestro nuevo portal.',
    detailedContent: `
      <h3 class="text-xl font-semibold text-primary mb-3">Facilitando Trámites</h3>
      <p class="mb-4">Facilitamos tus trámites. Este tutorial te muestra el nuevo proceso para solicitar constancias de estudio, certificados de notas y otros documentos académicos directamente desde nuestro portal en línea. Ahorra tiempo y gestiona tus solicitudes desde la comodidad de tu hogar.</p>
      <h3 class="text-xl font-semibold text-primary mt-4 mb-3">Proceso de Solicitud:</h3>
      <ol class="list-decimal list-inside space-y-2">
        <li>Ingresa al portal de servicios estudiantiles.</li>
        <li>Selecciona la opción "Solicitud de Documentos".</li>
        <li>Elige el tipo de constancia o certificado que necesitas.</li>
        <li>Verifica tus datos personales y académicos.</li>
        <li>Realiza el pago en línea si es requerido.</li>
        <li>Recibe la confirmación y el documento digital o las instrucciones para recogerlo.</li>
      </ol>
    `,
    youtubeVideoId: 'YddwkMJG1Jo', // Placeholder
    image: 'https://placehold.co/400x250/4CAF50/FFFFFF?text=Constancias+Online',
    aiHint: 'online certificate request',
  },
  {
    id: '5',
    slug: 'uso-recursos-biblioteca-digital',
    title: 'Uso de Recursos de la Biblioteca Digital',
    date: '2024-07-10',
    targetAudience: ['Estudiantes', 'Docente', 'Estudiantes Pregrado (Plan BULL)'],
    excerpt: 'Explora cómo acceder y utilizar los vastos recursos digitales que ofrece la biblioteca para el aprendizaje de idiomas.',
    detailedContent: `
      <h3 class="text-xl font-semibold text-primary mb-3">Potencia tu Aprendizaje</h3>
      <p class="mb-4">La biblioteca digital es una herramienta poderosa. Este tutorial te enseña a:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Buscar libros electrónicos, artículos y material multimedia.</li>
        <li>Utilizar las bases de datos especializadas en idiomas.</li>
        <li>Acceder a herramientas de práctica y ejercicios interactivos.</li>
        <li>Gestionar tus préstamos y reservas digitales.</li>
      </ul>
      <p>¡Aprovecha al máximo estos recursos para complementar tus estudios!</p>
    `,
    youtubeVideoId: 'oHg5SJYRHA0', // Placeholder (another Rick Astley)
    image: 'https://placehold.co/400x250/E91E63/FFFFFF?text=Biblioteca+Digital',
    aiHint: 'digital library access',
  }
];
