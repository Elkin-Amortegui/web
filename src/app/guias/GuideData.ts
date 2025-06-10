
import type { TargetAudience } from '@/app/tutoriales/TutorialData'; // Using the updated type

export interface Guide {
  id: string;
  slug: string;
  title: string;
  date: string;
  targetAudience: TargetAudience[]; 
  excerpt: string;
  image: string; 
  aiHint: string;
  detailedContent: string; 
}

export const guiasData: Guide[] = [
  {
    id: 'guia1',
    slug: 'inscripcion-cursos-extension',
    title: 'Guía Completa: Inscripción a Cursos de Extensión',
    date: '2024-05-15',
    targetAudience: ['Estudiantes Extensión a la Comunidad', 'General'],
    excerpt: 'Pasos detallados para inscribirte en nuestros cursos de extensión, desde la selección hasta el pago.',
    image: 'https://placehold.co/600x800/3498db/ffffff?text=Guía+Inscripción',
    aiHint: 'registration form guide',
    detailedContent: `
      <h3 class="text-xl font-semibold text-primary mb-3">Bienvenido a la Guía de Inscripción</h3>
      <p class="mb-4">Esta guía te ayudará a completar tu proceso de inscripción a los cursos de extensión ofrecidos por el Centro de Idiomas UNILLANOS de manera exitosa.</p>
      
      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">Paso 1: Consulta la Oferta Académica</h4>
      <p class="mb-3">Visita nuestra sección de <a href="/oferta-academica" class="text-secondary hover:underline">Oferta Académica</a> para conocer los idiomas, niveles y horarios disponibles para los cursos de extensión.</p>

      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">Paso 2: Reúne los Documentos Necesarios</h4>
      <p class="mb-3">Generalmente necesitarás:</p>
      <ul class="list-disc list-inside space-y-1 mb-3 pl-4">
        <li>Copia de tu documento de identidad.</li>
        <li>Comprobante de pago (si aplica preinscripción o pago total).</li>
        <li>Formulario de inscripción diligenciado (disponible en línea o en físico).</li>
      </ul>
      <p class="text-sm text-muted-foreground mb-3">Verifica los requisitos específicos para el curso de tu interés.</p>

      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">Paso 3: Realiza el Pago</h4>
      <p class="mb-3">Consulta los <a href="/valores" class="text-secondary hover:underline">valores y tarifas</a> vigentes. Puedes realizar el pago a través de los canales autorizados por la universidad (banco, plataforma en línea, etc.).</p>

      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">Paso 4: Formaliza tu Inscripción</h4>
      <p class="mb-3">Presenta los documentos y el comprobante de pago en la oficina del Centro de Idiomas o sigue las instrucciones para la inscripción en línea si está habilitada.</p>
      <p class="mb-3">Recibirás una confirmación una vez tu inscripción sea procesada.</p>

      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">¿Preguntas?</h4>
      <p>Si tienes alguna duda durante el proceso, no dudes en <a href="/contacto" class="text-secondary hover:underline">contactarnos</a>.</p>
    `,
  },
  {
    id: 'guia2',
    slug: 'preparacion-examen-bull',
    title: 'Guía de Preparación para Examen Plan BULL',
    date: '2024-06-01',
    targetAudience: ['Estudiantes Pregrado (Plan BULL)', 'Docente'], // Añadido 'Docente'
    excerpt: 'Consejos, recursos y estructura del examen de inglés para el Plan Bilingüe Universitario Llanero (BULL).',
    image: 'https://placehold.co/600x800/2ecc71/ffffff?text=Plan+BULL+Prep',
    aiHint: 'exam preparation study',
    detailedContent: `
      <h3 class="text-xl font-semibold text-primary mb-3">Prepárate para el Éxito en el Plan BULL</h3>
      <p class="mb-4">Esta guía está diseñada para ayudarte a prepararte eficazmente para el examen de inglés del Plan Bilingüe Universitario Llanero (BULL).</p>

      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">Sobre el Examen</h4>
      <p class="mb-3">El examen evalúa tus competencias en comprensión lectora, comprensión auditiva, uso del lenguaje y producción escrita (dependiendo del nivel).</p>
      
      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">Estrategias de Estudio:</h4>
      <ul class="list-disc list-inside space-y-1 mb-3 pl-4">
        <li><strong>Vocabulario:</strong> Dedica tiempo a aprender y repasar vocabulario académico y general.</li>
        <li><strong>Gramática:</strong> Revisa las estructuras gramaticales clave.</li>
        <li><strong>Práctica Auditiva:</strong> Escucha podcasts, noticias y conversaciones en inglés.</li>
        <li><strong>Lectura Comprensiva:</strong> Lee artículos, noticias y textos académicos en inglés.</li>
        <li><strong>Simulacros:</strong> Realiza exámenes de práctica para familiarizarte con el formato y el tiempo.</li>
      </ul>

      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">Recursos Recomendados:</h4>
      <ul class="list-disc list-inside space-y-1 mb-3 pl-4">
        <li>Plataformas en línea para aprender inglés (Duolingo, BBC Learning English, etc.).</li>
        <li>Materiales proporcionados por el Centro de Idiomas.</li>
        <li>Grupos de estudio con compañeros.</li>
      </ul>
      <p class="text-sm text-muted-foreground mb-3">Consulta con el Centro de Idiomas para obtener material de preparación específico si está disponible.</p>

      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">El Día del Examen:</h4>
      <ul class="list-disc list-inside space-y-1 pl-4">
        <li>Llega con anticipación.</li>
        <li>Lleva tu documento de identidad y los materiales permitidos.</li>
        <li>Lee cuidadosamente las instrucciones.</li>
        <li>Administra bien tu tiempo.</li>
      </ul>
    `,
  },
  { // Nueva guía para Padres de Familia
    id: 'guia3-padres',
    slug: 'acompanamiento-aprendizaje-idiomas',
    title: 'Guía para Padres: Acompañamiento en el Aprendizaje de Idiomas',
    date: '2024-07-20',
    targetAudience: ['Padres de Familia'],
    excerpt: 'Consejos y recursos para apoyar a sus hijos en el proceso de aprendizaje de un nuevo idioma en el Centro de Idiomas.',
    image: 'https://placehold.co/600x800/e91e63/ffffff?text=Guía+Padres',
    aiHint: 'parent child studying',
    detailedContent: `
      <h3 class="text-xl font-semibold text-primary mb-3">Apoyando el Viaje Lingüístico de sus Hijos</h3>
      <p class="mb-4">Como padre o acudiente, su rol es fundamental en el éxito del aprendizaje de idiomas de sus hijos. Esta guía ofrece estrategias y recursos para un acompañamiento efectivo.</p>
      
      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">Fomentar un Ambiente Positivo</h4>
      <p class="mb-3">Cree un entorno en casa que valore el aprendizaje de idiomas. Muestre interés por lo que aprenden y celebre sus progresos.</p>
      <ul class="list-disc list-inside space-y-1 mb-3 pl-4">
        <li>Establezca rutinas de estudio consistentes pero flexibles.</li>
        <li>Utilice recursos lúdicos como juegos, canciones o películas en el idioma que estudian.</li>
        <li>Evite presionar excesivamente; el aprendizaje debe ser una experiencia positiva.</li>
      </ul>

      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">Comunicación con el Centro de Idiomas</h4>
      <p class="mb-3">Manténgase en contacto con los docentes y la coordinación para conocer el progreso de su hijo y resolver inquietudes.</p>
      <ul class="list-disc list-inside space-y-1 mb-3 pl-4">
        <li>Asista a las reuniones informativas y de entrega de resultados.</li>
        <li>Revise los comunicados y la plataforma Moodle (si aplica para el curso de su hijo).</li>
        <li>Consulte nuestros <a href="/tutoriales" class="text-secondary hover:underline">tutoriales para padres</a> para entender mejor nuestras plataformas.</li>
      </ul>

      <h4 class="text-lg font-semibold text-primary mt-4 mb-2">Recursos Adicionales</h4>
      <p>Explore junto a sus hijos aplicaciones educativas, libros y contenido en línea que complementen su aprendizaje.</p>
    `,
  }
];
