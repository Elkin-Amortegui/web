
import type { TargetAudience } from '@/app/tutoriales/TutorialData';

export interface Guide {
  id: string;
  slug: string;
  title: string;
  date: string;
  targetAudience: TargetAudience[]; // Puede pertenecer a múltiples audiencias
  excerpt: string;
  image: string; 
  aiHint: string;
  detailedContent: string; // HTML para el contenido de la guía
}

export const guiasData: Guide[] = [
  {
    id: 'guia1',
    slug: 'inscripcion-cursos-extension',
    title: 'Guía Completa: Inscripción a Cursos de Extensión',
    date: '2024-05-15',
    targetAudience: ['Extensión a la comunidad', 'General'],
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
    targetAudience: ['Estudiantes Pregrado (Plan BULL)'],
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
];
