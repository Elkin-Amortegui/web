
export default function TermsConditionsPage() {
  return (
    <main className="flex-grow container mx-auto px-4 md:px-6 py-16">
      <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8">Términos y Condiciones</h1>
      <div className="prose prose-lg max-w-none text-foreground/90">
        <p>
          Bienvenido al Centro de Idiomas de la Universidad de los Llanos (UNILLANOS). Al utilizar nuestro sitio web y inscribirte en nuestros cursos, aceptas los siguientes términos y condiciones:
        </p>

        <h2 className="font-headline text-2xl mt-6 mb-3">1. Inscripción y Pagos</h2>
        <ul>
          <li>Todas las inscripciones están sujetas a disponibilidad de cupos.</li>
          <li>El pago completo del curso debe realizarse antes de la fecha de inicio para confirmar la inscripción.</li>
          <li>Las políticas de reembolso y cancelación se especificarán en el momento de la inscripción y pueden variar según el curso.</li>
        </ul>

        <h2 className="font-headline text-2xl mt-6 mb-3">2. Conducta del Estudiante</h2>
        <ul>
          <li>Se espera que los estudiantes mantengan un comportamiento respetuoso hacia el personal y otros estudiantes.</li>
          <li>Cualquier forma de acoso o discriminación no será tolerada.</li>
          <li>El Centro de Idiomas se reserva el derecho de suspender o expulsar a estudiantes que violen las normas de conducta.</li>
        </ul>

        <h2 className="font-headline text-2xl mt-6 mb-3">3. Propiedad Intelectual</h2>
        <ul>
          <li>Los materiales del curso, incluyendo textos, audios, videos y software, son propiedad del Centro de Idiomas UNILLANOS o de sus licenciantes y están protegidos por derechos de autor.</li>
          <li>Estos materiales son para uso personal y educativo exclusivo del estudiante inscrito y no pueden ser reproducidos, distribuidos o compartidos sin autorización previa.</li>
        </ul>

        <h2 className="font-headline text-2xl mt-6 mb-3">4. Modificaciones de Cursos y Horarios</h2>
        <ul>
          <li>El Centro de Idiomas se reserva el derecho de modificar horarios, instructores o cancelar cursos si no se alcanza un número mínimo de inscritos o por circunstancias imprevistas. En tales casos, se ofrecerán alternativas o reembolsos según corresponda.</li>
        </ul>
        
        <h2 className="font-headline text-2xl mt-6 mb-3">5. Uso del Sitio Web</h2>
        <ul>
          <li>El contenido de este sitio web es para información general y uso. Está sujeto a cambios sin previo aviso.</li>
          <li>No garantizamos la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales que se encuentran u ofrecen en este sitio web para un propósito particular.</li>
          <li>El uso no autorizado de este sitio web puede dar lugar a una reclamación por daños y perjuicios y/o ser un delito penal.</li>
        </ul>

        <h2 className="font-headline text-2xl mt-6 mb-3">6. Limitación de Responsabilidad</h2>
        <p>
          El Centro de Idiomas UNILLANOS no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar nuestros servicios o sitio web.
        </p>

        <h2 className="font-headline text-2xl mt-6 mb-3">7. Ley Aplicable</h2>
        <p>
          Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de Colombia.
        </p>

        <h2 className="font-headline text-2xl mt-6 mb-3">Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre estos términos y condiciones, por favor contáctanos a <a href="mailto:legal.idiomas@unillanos.edu.co" className="text-primary hover:underline">legal.idiomas@unillanos.edu.co</a>.
        </p>

        <p className="mt-6">
          Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}.
        </p>
      </div>
    </main>
  );
}
