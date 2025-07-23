
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, BookOpen, Target, Eye, MessageSquare, Award, CheckCircle, Rocket, Flag } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    quote: "Aprender inglés en el Centro de Idiomas de la Universidad de los Llanos me abrió puertas que nunca imaginé. ¡Totalmente recomendado!",
    author: "Sherid Gabriela Marulanda",
    role: "Egresada del Programa de Inglés",
    image: "/images/quienes-somos/est-01.JPG",
    aiHint: "student portrait",
  },
  {
    id: '2',
    quote: "Los profesores son excelentes y las metodologías muy efectivas. Pude alcanzar un nivel B2 en francés en poco tiempo.",
    author: "Marcela Moncaleano",
    role: "Estudiante de Francés",
    image: "/images/quienes-somos/est-02.jpeg",
    aiHint: "happy student",
  },
  {
    id: '3',
    quote: "El ambiente multicultural y el apoyo constante del personal hicieron de mi aprendizaje una experiencia maravillosa.",
    author: "Andrea Camacho",
    role: "Estudiante del Programa de Inglés",
    image: "/images/quienes-somos/est-03.jpeg",
    aiHint: "smiling person",
  },
];


export default function QuienesSomosPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <header className="text-center mb-12 md:mb-16 animate-in fade-in-0 slide-in-from-top-10 duration-700">
        <Users className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">
          Quiénes Somos
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Conoce más sobre el Centro de Idiomas de la Universidad de los Llanos: nuestra historia, misión, visión y los testimonios de nuestra comunidad.
        </p>
      </header>

      {/* Misión y Visión */}
      <section className="mb-16 grid md:grid-cols-2 gap-10 items-stretch animate-in fade-in-0 delay-200 duration-500">
        <Card className="shadow-lg flex flex-col">
            <CardHeader className="flex-row items-center gap-3">
                <Target className="h-10 w-10 text-primary shrink-0" />
                <CardTitle className="text-2xl">Misión</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
            <p className="text-foreground/80">
                Ser referente académico en la enseñanza de idiomas, así como en la docencia y proyección social. El Centro de Idiomas proporciona una formación de alta calidad, en articulación con los estándares del Marco Común Europeo de Referencia para las lenguas, dando alcance a toda la comunidad del Departamento del Meta y la región de la Orinoquia con una visión universal siendo generador de conocimiento y cultura.
            </p>
            </CardContent>
        </Card>
        <Card className="shadow-lg flex flex-col">
            <CardHeader className="flex-row items-center gap-3">
                <Eye className="h-10 w-10 text-primary shrink-0" />
                <CardTitle className="text-2xl">Visión</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
            <p className="text-foreground/80">
                Para el año 2030, el Centro de Idiomas de la Universidad de los Llanos se consolidará como una institución para el trabajo y desarrollo humano líder en la enseñanza de una segunda lengua en la región de la Orinoquia manteniendo la calidad en sus procesos y formando personas competentes para responder a las dinámicas que demanda la sociedad.
            </p>
            </CardContent>
        </Card>
      </section>

      {/* Nuestra Historia */}
      <section className="mb-16 animate-in fade-in-0 slide-in-from-bottom-10 delay-300 duration-700">
        <Card className="shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image 
                src="/images/quienes-somos/sede-frente.png" 
                alt="Edificio del Centro de Idiomas de la Universidad de los Llanos" 
                width={800} 
                height={600} 
                className="w-full h-64 md:h-full object-cover"
                data-ai-hint="university building front"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl flex items-center"><BookOpen className="mr-3 h-8 w-8 text-primary" />Nuestra Historia</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-foreground/80 mb-4">
                  El Centro de Idiomas de la Universidad de los Llanos fue creado en 1997 como una unidad adscrita a la Facultad de Ciencias Humanas y de la Educación, con el propósito de fortalecer el bilingüismo y la formación en lenguas extranjeras. A través de normativas institucionales y nacionales, ha consolidado programas dirigidos tanto a la comunidad universitaria como al público externo, en el marco de la Educación para el Trabajo y el Desarrollo Humano (ETDH).
                </p>
                <p className="text-foreground/80">
                  Actualmente, ofrece formación en idiomas como inglés, francés, alemán y portugués, y lidera procesos académicos que contribuyen al desarrollo de competencias comunicativas, multiculturales e internacionales. Su quehacer se articula con la política de calidad, el sistema de gestión institucional y los lineamientos del Ministerio de Educación Nacional.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </section>
      
      {/* Objetivo General */}
      <section className="mb-16 animate-in fade-in-0 slide-in-from-bottom-10 delay-400 duration-700">
         <Card className="max-w-4xl mx-auto shadow-lg bg-card border">
            <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Rocket className="h-6 w-6"/> Objetivo General
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-foreground/90 text-lg">
                    Promover en los estudiantes de la comunidad Unilllanista y de los programas de extensión a la comunidad de Educación para el Trabajo y Desarrollo Humano, el aprendizaje de una segunda lengua brindando oportunidades que le permitan adquirir habilidades para competir en el ámbito académico y laboral.
                </p>
            </CardContent>
        </Card>
      </section>
      
      {/* Objetivos de Calidad y Estratégicos */}
      <section className="mb-16 grid lg:grid-cols-2 gap-10 items-start animate-in fade-in-0 delay-500 duration-700">
          <Card className="shadow-lg">
              <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                      <Award className="h-6 w-6"/> Objetivos de Calidad
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <ul className="space-y-3">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary mt-1 shrink-0" /><span>Culminar el proceso formativo de los estudiantes inscritos en el desarrollo de competencias comunicativas con el nivel de dominio C1 en inglés.</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary mt-1 shrink-0" /><span>Aumentar la cobertura de los programas presenciales para el 2030 ofertados a la comunidad de extensión en el departamento del Meta.</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary mt-1 shrink-0" /><span>Propender por el mejoramiento continuo de los procesos del Centro de Idiomas de la Universidad de los Llanos, que permitan ajustarse a los cambios sociales, tecnológicos, económicos y normativos del entorno.</span></li>
                  </ul>
              </CardContent>
          </Card>
          <Card className="shadow-lg">
              <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                      <Flag className="h-6 w-6"/> Objetivos Estratégicos
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <ul className="space-y-3">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary mt-1 shrink-0" /><span>Proporcionar programas de enseñanza que permitan a los estudiantes desarrollar habilidades lingüísticas integrales, incluyendo la expresión oral, la comprensión auditiva, la lectura y la escritura.</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary mt-1 shrink-0" /><span>Mantener en continua actualización las herramientas tecnológicas y metodológicas para la enseñanza de una segunda lengua.</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary mt-1 shrink-0" /><span>Seguir mecanismos y lineamientos efectivos de aseguramiento de la calidad garantizando un aprendizaje significativo.</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary mt-1 shrink-0" /><span>Fomentar en los estudiantes el uso de una segunda lengua a través de los procesos evaluativos y la mejora continua.</span></li>
                  </ul>
              </CardContent>
          </Card>
      </section>

      {/* Testimonios */}
      <section className="mb-16 animate-in fade-in-0 delay-600 duration-700">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Testimonios de Nuestra Comunidad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="shadow-lg flex flex-col p-6 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-5"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="pt-0 flex-grow flex flex-col items-center text-center">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  width={80} 
                  height={80} 
                  className="rounded-full mb-4 border-2 border-secondary"
                  data-ai-hint={testimonial.aiHint}
                />
                <MessageSquare className="h-8 w-8 text-primary mb-3" />
                <p className="text-foreground/80 italic mb-4 flex-grow">"{testimonial.quote}"</p>
              </CardContent>
              <div className="mt-auto text-center">
                <p className="font-semibold text-black dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}
