
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DollarSign, Percent, Clock, FileText, CheckCircle, GraduationCap, AlertTriangle, Users, FileQuestion, Baby, School, Zap } from 'lucide-react';

const courseValues = [
  {
    ageRange: '5 - 6 Años',
    regularPrice: '537.000',
    socialPrice: '485.000',
    intensity: '3 Horas / Sem',
    icon: Baby,
  },
  {
    ageRange: '7 - 10 Años',
    regularPrice: '537.000',
    socialPrice: '485.000',
    intensity: '3 Horas / Sem',
    icon: School,
  },
  {
    ageRange: '11 - 14 Años',
    regularPrice: '723.000',
    socialPrice: '609.000',
    intensity: '4 Horas / Sem',
    icon: Users,
  },
  {
    ageRange: '15 Años en adelante',
    regularPrice: '723.000',
    socialPrice: '609.000',
    intensity: '4 Horas / Sem',
    icon: GraduationCap,
  },
  {
    ageRange: '15 Años en adelante (Intensivo)',
    regularPrice: "1'238.000",
    socialPrice: "1'032.000",
    intensity: '8 Horas / Sem',
    icon: Clock,
  },
  {
    ageRange: 'Programa por Habilidades',
    regularPrice: '723.000',
    socialPrice: '609.000',
    intensity: '4 Horas / Sem',
    icon: Zap,
  },
];

const otherServices = [
  {
    title: 'Pruebas Diagnósticas',
    price: '48.000',
    icon: FileQuestion,
  },
  {
    title: 'Pruebas de Suficiencia',
    price: '208.000',
    icon: CheckCircle,
  },
  {
    title: 'Certificados',
    price: '38.000',
    icon: FileText,
  },
  {
    title: 'Preparación Pruebas Internacionales',
    price: '861.000',
    icon: GraduationCap,
  },
];

export default function ValoresPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <header className="text-center mb-12 md:mb-16 animate-in fade-in-0 slide-in-from-top-10 duration-700">
        <DollarSign className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Tabla de Valores 2025
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Consulta nuestras tarifas para cursos y servicios. Invierte en tu futuro bilingüe con nosotros.
        </p>
      </header>

      {/* Course Values Section */}
      <section className="mb-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-10 text-primary">Cursos Regulares y Programas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseValues.map((course, index) => (
            <Card key={index} className={`flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out group animate-in fade-in-0 slide-in-from-bottom-5 delay-${index * 100} duration-500 hover:border-secondary border-2 border-transparent`}>
              <CardHeader className="text-center bg-primary/5 pb-4">
                <course.icon className="mx-auto h-10 w-10 text-primary mb-2 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="font-headline text-2xl text-primary">{course.ageRange}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6 space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Valor Matrícula</p>
                  <p className="text-3xl font-bold text-foreground/90">${course.regularPrice}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Percent className="h-4 w-4" /> Valor Proyección Social
                  </p>
                  <p className="text-2xl font-semibold text-secondary">${course.socialPrice}</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4 justify-center">
                <div className="flex items-center gap-2 text-foreground/80 font-medium">
                  <Clock className="h-5 w-5 text-primary"/>
                  <span>{course.intensity}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Proyeccion Social Info Section */}
      <section className="mb-16">
        <Card className="max-w-4xl mx-auto shadow-lg bg-card border">
            <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Percent className="h-6 w-6"/> Descuento por Proyección Social
                </CardTitle>
                <CardDescription>
                    Este descuento aplica para los siguientes grupos:
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 text-sm md:text-base">
                    <li>Estudiantes de pregrado y posgrado o hijos de estudiantes activos de la Universidad de los Llanos.</li>
                    <li>Egresados de la Universidad de los Llanos.</li>
                    <li>Docentes, funcionarios y pensionados de la Universidad de los llanos o sus hijos.</li>
                    <li>Población especial: Discapacitados, desplazados, indígenas.</li>
                    <li>
                        <span className="font-semibold">Estudiantes en convenios interinstitucionales en bilingüismo.</span>
                        <p className="text-xs text-muted-foreground mt-1 pl-4">
                           Colegios: Serviez, Silvia Ponte, Vanguardia, Gilberto Alzate Avendaño, Guatiquia, Juan Pablo II, Playa Rica, CDE, Antonio Nariño, Integrados San Martin y Nuestra Señora de Fatima (Policía).
                        </p>
                    </li>
                </ul>
            </CardContent>
        </Card>
      </section>

      {/* Other Services Section */}
      <section className="mb-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-10 text-primary">Otros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, index) => (
            <Card key={index} className={`text-center p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out group animate-in fade-in-0 slide-in-from-bottom-5 delay-${(courseValues.length + index) * 100} duration-500`}>
              <service.icon className="mx-auto h-12 w-12 text-secondary mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              <CardTitle className="text-xl font-semibold text-primary/90 mb-2 h-14 flex items-center justify-center">{service.title}</CardTitle>
              <p className="text-3xl font-bold text-foreground/90">${service.price}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Disclaimer Section */}
      <section>
        <Card className="bg-destructive/10 border-destructive/20 p-6 shadow-lg animate-in fade-in-0 slide-in-from-bottom-10 delay-1000 duration-500">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <AlertTriangle className="h-12 w-12 text-destructive shrink-0" />
            <div>
              <CardTitle className="text-xl text-destructive">Información Importante</CardTitle>
              <CardDescription className="text-destructive/90 mt-1">
                Los valores presentados son de referencia y corresponden al año 2025. Podrían estar sujetos a cambios y actualizaciones según las políticas de la Universidad de los Llanos. Para confirmar tarifas y obtener información detallada, por favor contáctanos.
              </CardDescription>
              <Button asChild variant="destructive" className="mt-4 bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                <Link href="/contacto">Contactar Ahora</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
