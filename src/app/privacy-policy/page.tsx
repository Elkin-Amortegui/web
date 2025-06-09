
export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow container mx-auto px-4 md:px-6 py-16">
      <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8">Política de Privacidad</h1>
      <div className="prose prose-lg max-w-none text-foreground/90">
        <p>
          En el Centro de Idiomas de la Universidad de los Llanos (UNILLANOS), estamos comprometidos con la protección de tu privacidad y tus datos personales. Esta política describe cómo recopilamos, usamos y protegemos la información que nos proporcionas.
        </p>
        
        <h2 className="font-headline text-2xl mt-6 mb-3">Información que Recopilamos</h2>
        <p>
          Recopilamos información personal cuando te inscribes en nuestros cursos, utilizas nuestro formulario de contacto o interactúas con nuestro sitio web. Esta información puede incluir:
        </p>
        <ul>
          <li>Nombre completo</li>
          <li>Edad</li>
          <li>Nivel de conocimiento del idioma</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Información de pago (procesada de forma segura por nuestros proveedores)</li>
          <li>Información sobre los cursos seleccionados</li>
        </ul>

        <h2 className="font-headline text-2xl mt-6 mb-3">Uso de la Información</h2>
        <p>
          Utilizamos tu información personal para:
        </p>
        <ul>
          <li>Procesar tu inscripción y administrar tu participación en los cursos.</li>
          <li>Comunicarnos contigo sobre horarios, pagos y novedades del centro.</li>
          <li>Responder a tus consultas y solicitudes.</li>
          <li>Mejorar nuestros servicios y la experiencia en el sitio web.</li>
          <li>Cumplir con obligaciones legales y regulatorias.</li>
        </ul>

        <h2 className="font-headline text-2xl mt-6 mb-3">Protección de la Información</h2>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción.
        </p>

        <h2 className="font-headline text-2xl mt-6 mb-3">Compartir Información</h2>
        <p>
          No vendemos, alquilamos ni compartimos tu información personal con terceros con fines de marketing sin tu consentimiento explícito. Podemos compartir tu información con proveedores de servicios que nos asisten en nuestras operaciones (por ejemplo, procesadores de pago), siempre bajo acuerdos de confidencialidad.
        </p>
        
        <h2 className="font-headline text-2xl mt-6 mb-3">Tus Derechos</h2>
        <p>
          Tienes derecho a acceder, rectificar o eliminar tu información personal. También puedes oponerte al procesamiento de tus datos o solicitar la limitación de su uso. Para ejercer estos derechos, contáctanos a <a href="mailto:datospersonales.idiomas@unillanos.edu.co" className="text-primary hover:underline">datospersonales.idiomas@unillanos.edu.co</a>.
        </p>

        <h2 className="font-headline text-2xl mt-6 mb-3">Cambios a esta Política</h2>
        <p>
          Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página.
        </p>
        
        <p className="mt-6">
          Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}.
        </p>
      </div>
    </main>
  );
}
