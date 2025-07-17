
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { HelpCircle } from "lucide-react";
  
  const faqItems = [
      { value: "item-1", question: "¿Qué idiomas enseñan?", answer: "Ofrecemos programas de alta calidad en Inglés, Francés, Alemán y Portugués. Nuestros cursos están diseñados para diferentes edades y niveles, desde principiantes (A1) hasta avanzados (C1)." },
      { value: "item-2", question: "¿Cuáles son los requisitos para inscribirme?", answer: "Los requisitos varían según el programa. Generalmente, necesitas tu documento de identidad y completar el formulario de inscripción. Para niveles no iniciales, podrías necesitar un examen de clasificación. Consulta la página de 'Proceso de Inscripción' para más detalles." },
      { value: "item-3", question: "¿Ofrecen cursos para niños?", answer: "¡Sí! Tenemos programas de inglés especialmente diseñados para niños desde los 5 años, con metodologías lúdicas y efectivas para cada grupo de edad." },
      { value: "item-4", question: "¿Qué modalidades de estudio tienen?", answer: "Contamos con modalidades presenciales, virtuales, semi-intensivas e intensivas para adaptarnos a tus necesidades y ritmo de vida." },
      { value: "item-5", question: "¿Cómo puedo saber mi nivel de idioma?", answer: "Ofrecemos un examen de clasificación que evalúa tus competencias y te ubica en el nivel adecuado para que aproveches al máximo tu aprendizaje." },
      { value: "item-6", question: "¿Hay descuentos disponibles?", answer: "Sí, contamos con tarifas de 'Proyección Social' que ofrecen descuentos a estudiantes, egresados, y personal de Unillanos, así como a población especial y beneficiarios de convenios. Consulta nuestra página de 'Valores y Tarifas' para más información." },
      { value: "item-7", question: "¿Preparan para exámenes internacionales?", answer: "Sí, ofrecemos talleres especializados para la preparación de exámenes internacionales como IELTS, TOEFL, y DELF, entre otros." },
      { value: "item-8", question: "¿Qué es el Plan B.U.L.L.?", answer: "El Plan Bilingüe Universitario Llanero (B.U.L.L.) es un programa para estudiantes de pregrado de Unillanos que busca fortalecer sus competencias en un segundo idioma como requisito de grado. Ofrecemos los cursos y exámenes necesarios para cumplir con este plan." },
      { value: "item-9", question: "¿Dónde están ubicados?", answer: "Nuestra sede principal del Centro de Idiomas está en el barrio La Grama, en la Carrera 30A No 41B - 39, Villavicencio. También tenemos presencia en otros campus de la universidad." },
      { value: "item-10", question: "¿Cuándo son las próximas inscripciones?", answer: "Las fechas de inscripción se anuncian a través de nuestros canales oficiales. Te recomendamos estar atento a nuestra sección de 'Noticias' y redes sociales para no perderte las convocatorias." }
  ];
  
  export default function PreguntasFrecuentesPage() {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <header className="text-center mb-12 md:mb-16 animate-in fade-in-0 slide-in-from-top-10 duration-700">
          <HelpCircle className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre nuestros programas, inscripciones y servicios.
          </p>
        </header>
  
        <div className="max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-10 duration-700">
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem value={item.value} key={item.value}>
                <AccordionTrigger className="text-lg text-left hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    );
  }
  