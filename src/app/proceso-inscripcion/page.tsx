
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Search, DollarSign, FileCheck, UserPlus, Info, CalendarClock, Users, FileUp, ListChecks, MailCheck, UserCheck, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const newStudentSteps = [
  {
    step: 1,
    icon: Search,
    title: "Inscripción en Línea",
    description: "Realiza tu inscripción a través del portal oficial durante las fechas de convocatoria. ¡Este es el primer paso para unirte a nosotros!",
    link: "/inscripciones",
    linkLabel: "Ir a Inscripciones"
  },
  {
    step: 2,
    icon: ListChecks,
    title: "Lista de Admitidos",
    description: "Una vez cerrado el proceso, se publicará la lista de admitidos. Si no estás en la lista, quedarás en lista de espera. ¡Mantente atento!",
    link: "/noticias",
    linkLabel: "Ver Noticias"
  },
  {
    step: 3,
    icon: MailCheck,
    title: "Notificación y Pago",
    description: "Los admitidos recibirán una notificación por correo para generar el recibo de pago. Realiza el pago para asegurar tu cupo.",
    link: "/valores",
    linkLabel: "Consultar Valores"
  },
  {
    step: 4,
    icon: FileUp,
    title: "Carga de Documentos",
    description: "Sube los documentos requeridos en la plataforma para formalizar tu matrícula. Revisa la lista de documentos más abajo.",
    link: "#documentos",
    linkLabel: "Ver Documentos"
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
          Aquí encontrarás toda la información para unirte a la comunidad del Centro de Idiomas UNILLANOS.
        </p>
      </header>

      <Card className="mb-12 bg-accent/10 border-accent/20 p-6 shadow-lg animate-in fade-in-0 delay-150 duration-500">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <CalendarClock className="h-12 w-12 text-accent shrink-0" />
            <div>
              <CardTitle className="text-xl text-accent">Calendario Académico</CardTitle>
              <CardDescription className="text-foreground/90 mt-1">
                Todos los procesos de inscripción, matrícula y desarrollo de cursos están sujetos a las fechas estipuladas en el calendario académico, el cual puede tener modificaciones.
              </CardDescription>
              <div className="flex gap-4 mt-4">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/calendario-academico">Consultar Calendario</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

      {/* Flujo para Estudiantes Nuevos */}
      <section className="mb-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-10 text-primary flex items-center justify-center gap-3 animate-in fade-in-0 delay-200 duration-500"><UserCheck className="h-8 w-8" />Para Estudiantes Nuevos</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-10 bottom-10 w-1 bg-primary/20 rounded-full hidden md:block" aria-hidden="true"></div>
          <div className="space-y-12 md:space-y-0">
            {newStudentSteps.map((step, index) => (
              <div key={step.step} className={`md:flex items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-12 md:mb-0`}>
                <div className="md:w-1/2">
                  <div className={`animate-in fade-in-0 delay-${200 + index * 150} duration-500 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                     <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out group hover:-translate-y-1 hover:border-secondary border-2 border-transparent">
                        <CardHeader>
                          <CardDescription className="text-primary font-bold">Paso {step.step}</CardDescription>
                          <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                            <step.icon className="h-8 w-8 text-secondary transition-transform duration-300 group-hover:rotate-6" />
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
                </div>
                 <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-primary text-primary-foreground rounded-full items-center justify-center text-2xl font-bold shadow-lg transition-transform duration-300 hover:scale-110">
                    <span className="flex items-center justify-center h-full">{step.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Sección para Estudiantes Antiguos */}
       <section className="mb-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-10 text-primary flex items-center justify-center gap-3 animate-in fade-in-0 delay-300 duration-500"><Users className="h-8 w-8" />Para Estudiantes Antiguos</h2>
        <Card className="max-w-3xl mx-auto bg-card border p-6 shadow-lg animate-in fade-in-0 delay-400 duration-500">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Info className="h-12 w-12 text-primary shrink-0" />
            <div>
              <CardTitle className="text-xl text-primary">Proceso de Renovación</CardTitle>
              <CardDescription className="text-foreground/80 mt-1 space-y-2">
                <p>El proceso para estudiantes antiguos es más directo. Debes esperar la notificación de creación de recibos de pago en tu correo electrónico institucional, en los tiempos establecidos en el calendario académico.</p>
                <p>Posteriormente, deberás cargar los documentos requeridos para sentar tu matrícula en las fechas correspondientes.</p>
              </CardDescription>
            </div>
          </div>
        </Card>
      </section>

      {/* Sección de Documentos */}
      <section id="documentos">
         <h2 className="font-headline text-3xl font-bold text-center mb-10 text-primary animate-in fade-in-0 delay-500 duration-500">Documentos Requeridos</h2>
         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="animate-in fade-in-0 slide-in-from-left-10 delay-600 duration-500 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center gap-2"><UserCheck className="h-6 w-6" />Nuevos</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                        <li>Recibo de pago del semestre vigente</li>
                        <li>Formulario de inscripción diligenciado</li>
                        <li>Documento de identidad del estudiante</li>
                        <li>Fotocopia documento identidad acudiente</li>
                        <li>Fotografía 3x4</li>
                        <li>Certificado de afiliación a EPS vigente</li>
                    </ul>
                </CardContent>
            </Card>
             <Card className="animate-in fade-in-0 slide-in-from-right-10 delay-600 duration-500 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center gap-2"><Users className="h-6 w-6" />Antiguos</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                        <li>Recibo de pago del semestre vigente</li>
                        <li>Documento de identidad del estudiante</li>
                        <li>Fotocopia documento identidad acudiente</li>
                        <li>Paz y salvo</li>
                        <li>Certificado de afiliación a EPS vigente</li>
                    </ul>
                </CardContent>
            </Card>
         </div>
      </section>

    </div>
  );
}
