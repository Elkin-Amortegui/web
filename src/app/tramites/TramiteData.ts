
export interface Tramite {
    id: string;
    slug: string;
    title: string;
    date: string; // YYYY-MM-DD
    excerpt: string;
    category: string;
    image?: string; 
    aiHint?: string;
    content: string; 
  }
  
  export const tramitesData: Tramite[] = [
    {
      id: '1',
      slug: 'solicitud-certificados',
      title: 'Solicitud de Certificados Académicos',
      date: '2024-01-15',
      category: 'Documentación',
      excerpt: 'Guía paso a paso para solicitar certificados de niveles cursados, constancias de estudio y otros documentos académicos oficiales.',
      image: 'https://placehold.co/400x250/00723F/FFFFFF?text=Certificados',
      aiHint: 'official document certificate',
      content: `
        <h2 class="text-2xl font-semibold text-primary mb-4">Proceso para Solicitar Certificados</h2>
        <p class="mb-4">El Centro de Idiomas UNILLANOS ofrece diversos certificados para validar tus estudios y competencias lingüísticas. Sigue estos pasos para realizar tu solicitud:</p>
        <ol class="list-decimal list-inside space-y-2 mb-6">
          <li>Verifica los requisitos específicos para el tipo de certificado que necesitas (nivel cursado, constancia de matrícula, etc.).</li>
          <li>Completa el formulario de solicitud disponible en la oficina del Centro de Idiomas o que será proximamente habilitado en línea.</li>
          <li>Realiza el pago correspondiente a los derechos de expedición del certificado, si aplica. Consulta la tabla de valores actualizada.</li>
          <li>Presenta el comprobante de pago y el formulario en la secretaría del Centro de Idiomas.</li>
          <li>El tiempo estimado de entrega es de 5 a 7 días hábiles. Se te notificará por correo electrónico cuando esté listo para recoger.</li>
        </ol>
        <h3 class="text-xl font-semibold text-primary mb-3">Documentos Frecuentes:</h3>
        <ul class="list-disc list-inside space-y-1 mb-6">
          <li>Certificado de Nivel Aprobado (Inglés, Francés, etc.)</li>
          <li>Constancia de Estudios</li>
          <li>Certificado de Horas Cursadas</li>
        </ul>
        <p class="text-muted-foreground">Para consultas adicionales sobre este trámite, por favor contáctanos.</p>
      `,
    },
    {
      id: '2',
      slug: 'homologaciones-validaciones',
      title: 'Homologaciones y Validaciones de Idiomas',
      date: '2024-07-01', // Updated Date
      category: 'Académico',
      excerpt: 'Información sobre el proceso para homologar niveles de idiomas cursados en otras instituciones o validar conocimientos.',
      image: 'https://placehold.co/400x250/FFD100/333333?text=Homologación',
      aiHint: 'academic transfer validation',
      content: `
        <h2 class="text-2xl font-semibold text-primary mb-4">Proceso de Homologación y Validación</h2>
        <p class="mb-4">Si has cursado niveles de idiomas en otras instituciones reconocidas o posees conocimientos previos, puedes solicitar su homologación o validación en el Centro de Idiomas UNILLANOS.</p>
        <h3 class="text-xl font-semibold text-primary mb-3">Requisitos Generales:</h3>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Certificados originales de los niveles cursados en la otra institución (para homologación).</li>
          <li>Programas académicos de los cursos realizados (para homologación).</li>
          <li>Solicitud formal de homologación o validación.</li>
          <li>Pago del derecho de estudio de homologación o examen de validación.</li>
        </ul>
        <p class="text-muted-foreground">Este proceso está sujeto a las normativas vigentes de la Universidad de los Llanos.</p>
      `,
    },
    {
      id: '3',
      slug: 'cambios-horario-grupo',
      title: 'Cambios de Horario o Grupo',
      date: '2024-08-20', // Updated Date
      category: 'Administrativo',
      excerpt: 'Procedimiento y condiciones para solicitar cambios de horario o de grupo en los cursos de idiomas, sujeto a disponibilidad.',
      image: 'https://placehold.co/400x250/005DAA/FFFFFF?text=Cambios',
      aiHint: 'schedule change request',
      content: `
        <h2 class="text-2xl font-semibold text-primary mb-4">Solicitud de Cambio de Horario o Grupo</h2>
        <p class="mb-4">Los cambios de horario o grupo son excepcionales y están sujetos a la disponibilidad de cupos y a la aprobación por parte de la coordinación del Centro de Idiomas.</p>
        <h3 class="text-xl font-semibold text-primary mb-3">Condiciones:</h3>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Solo se considerarán solicitudes por motivos de fuerza mayor debidamente justificados.</li>
          <li>La solicitud debe realizarse durante la primera semana de clases.</li>
        </ul>
        <p class="text-muted-foreground">No se garantiza la aprobación de todas las solicitudes.</p>
      `,
    },
    {
      id: '4',
      slug: 'inscripcion-examen-clasificacion',
      title: 'Inscripción a Examen de Clasificación',
      date: '2024-11-05',
      category: 'Exámenes',
      excerpt: 'Proceso para inscribirse al examen de clasificación para determinar su nivel de idioma antes de iniciar un curso.',
      image: 'https://placehold.co/400x250/673AB7/FFFFFF?text=Examen',
      aiHint: 'placement test sign up',
      content: `
        <h2 class="text-2xl font-semibold text-primary mb-4">Inscripción para Examen de Clasificación</h2>
        <p class="mb-4">Si posees conocimientos previos de un idioma y deseas ingresar a un nivel superior al inicial, debes presentar un examen de clasificación. Este examen evalúa tus competencias y te ubica en el nivel adecuado.</p>
        <h3 class="text-xl font-semibold text-primary mb-3">Pasos:</h3>
        <ol class="list-decimal list-inside space-y-2 mb-6">
          <li>Consulta las fechas programadas para los exámenes de clasificación.</li>
          <li>Realiza el pago correspondiente al derecho del examen.</li>
          <li>Inscríbete en línea o en la oficina del Centro de Idiomas presentando el comprobante de pago.</li>
          <li>Preséntate el día y hora indicados para el examen.</li>
        </ol>
        <p class="text-muted-foreground">Los resultados se publicarán en un plazo de 3 días hábiles.</p>
      `,
    },
    {
      id: '5',
      slug: 'solicitud-descuentos',
      title: 'Solicitud de Descuentos Especiales',
      date: '2024-11-15',
      category: 'Administrativo',
      excerpt: 'Información sobre cómo aplicar a descuentos para empleados, egresados de UNILLANOS, y otros convenios.',
      image: 'https://placehold.co/400x250/FF5722/FFFFFF?text=Descuentos',
      aiHint: 'discount application information',
      content: `
        <h2 class="text-2xl font-semibold text-primary mb-4">Aplicación a Descuentos</h2>
        <p class="mb-4">El Centro de Idiomas ofrece descuentos especiales para diferentes miembros de la comunidad UNILLANOS y a través de convenios interinstitucionales.</p>
        <h3 class="text-xl font-semibold text-primary mb-3">Beneficiarios Comunes:</h3>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Estudiantes activos de pregrado y posgrado UNILLANOS.</li>
          <li>Egresados de UNILLANOS.</li>
          <li>Funcionarios y docentes de UNILLANOS.</li>
          <li>Beneficiarios de convenios específicos (consultar listado).</li>
        </ul>
        <p class="mb-4">Para aplicar, deberás presentar la documentación que acredite tu condición al momento de la matrícula. Los porcentajes de descuento varían.</p>
      `,
    },
     {
      id: '6',
      slug: 'proceso-reembolso',
      title: 'Proceso de Solicitud de Reembolsos',
      date: '2023-06-10',
      category: 'Financiero',
      excerpt: 'Pasos y condiciones para solicitar el reembolso de pagos realizados al Centro de Idiomas.',
      image: 'https://placehold.co/400x250/795548/FFFFFF?text=Reembolso',
      aiHint: 'refund request process',
      content: `
        <h2 class="text-2xl font-semibold text-primary mb-4">Solicitud de Reembolsos</h2>
        <p class="mb-4">En casos específicos y justificados, es posible solicitar el reembolso de valores pagados por cursos o servicios no recibidos. Este proceso está sujeto a la política de reembolsos del Centro de Idiomas.</p>
        <h3 class="text-xl font-semibold text-primary mb-3">Condiciones Generales:</h3>
         <ul class="list-disc list-inside space-y-1 mb-4">
          <li>La solicitud debe presentarse por escrito, detallando el motivo.</li>
          <li>Se deben adjuntar los soportes de pago y cualquier otra documentación pertinente.</li>
          <li>Los reembolsos por cancelación de cursos por parte del estudiante pueden tener penalizaciones.</li>
          <li>No aplican reembolsos una vez iniciado el curso, salvo fuerza mayor comprobada.</li>
        </ul>
        <p class="text-muted-foreground">Cada caso será estudiado individualmente por la coordinación administrativa.</p>
      `,
    }
  ];
  
  