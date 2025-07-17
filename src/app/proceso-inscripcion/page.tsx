
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Search, DollarSign, FileCheck, UserPlus, Info } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Consulta la Oferta",
    description: "Explora nuestros cursos de Inglés, Francés, Alemán y Portugués. Revisa los niveles, horarios y modalidades disponibles para encontrar el programa perfecto para ti.",
    link: "/oferta-academica",
    linkLabel: "Ver Oferta Académica"
  },
  {
    step: 2,
    icon: Check,
    title: "Examen de Clasificación (Si es necesario)",
    description: "Si ya tienes conocimientos previos, presenta nuestro examen de clasificación para ubicarte en el nivel correcto y optimizar tu ruta de aprendizaje.",
     link: "/tramites/inscripcion-examen-clasificacion",
    linkLabel: "Info Examen de Clasificación"
  },
  {
    step: 3,
    icon: DollarSign,
    title: "Realiza el Pago",
    description: "Consulta los valores y tarifas actualizados. Realiza el pago de tu matrícula a través de los canales autorizados por la universidad para asegurar tu cupo.",
    link: "/valores",
    linkLabel: "Ver Tarifas"
  },
  {
    step: 4,
    icon: FileCheck,
    title: "Legaliza tu Matrícula",
    description: "Presenta los documentos requeridos (identidad, comprobante de pago, etc.) en la oficina del Centro de Idiomas o sigue las instrucciones en línea para formalizar tu inscripción. ¡Y listo!",
    link: "/contacto",
    linkLabel: "Contactar para Legalizar"
  }
];

export default function ProcesoInscripcionPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-gradient-to-b from-background to-muted/50">
      <header className="text-center mb-12 md:mb-16 animate-in fade-in-0 slide-in-from-top-10 duration-700">
        <UserPlus className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Proceso de Inscripción
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Sigue estos sencillos pasos para unirte a la comunidad del Centro de Idiomas UNILLANOS.
        </p>
      </header>

      <div className="relative max-w-4xl mx-auto">
        {/* Línea de tiempo decorativa */}
        <div className="absolute left-1/2 top-10 bottom-10 w-1 bg-primary/20 rounded-full hidden md:block" aria-hidden="true"></div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.step} className={`flex flex-col md:flex-row items-center gap-8 animate-in fade-in-0 delay-${index * 150} duration-500`}>
              {/* Contenido de la tarjeta */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out group hover:-translate-y-1 hover:border-secondary border-2 border-transparent">
                  <CardHeader>
                    <CardDescription className="text-primary font-bold">Paso {step.step}</CardDescription>
                    <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                      <step.icon className="h-8 w-8 text-secondary" />
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-6">{step.description}</p>
                    <Button asChild variant="outline">
                      <Link href={step.link}>{step.linkLabel}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Icono de la línea de tiempo */}
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold shadow-lg md:order-2">
                {step.step}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="mt-16 max-w-3xl mx-auto bg-destructive/10 border-destructive/20 p-6 shadow-lg animate-in fade-in-0 slide-in-from-bottom-10 delay-700 duration-500">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Info className="h-12 w-12 text-destructive shrink-0" />
          <div>
            <CardTitle className="text-xl text-destructive">¿Aún tienes dudas?</CardTitle>
            <CardDescription className="text-destructive/90 mt-1">
              Recuerda que las convocatorias de inscripción se anuncian en fechas específicas. Mantente atento a nuestras noticias y redes sociales. Si tienes alguna pregunta, no dudes en contactarnos.
            </CardDescription>
            <div className="flex gap-4 mt-4">
              <Button asChild variant="destructive" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                <Link href="/contacto">Contactar Ahora</Link>
              </Button>
               <Button asChild variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                <Link href="/noticias">Ver Noticias</Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>

    </div>
  );
}
