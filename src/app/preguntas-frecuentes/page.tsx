
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessagesSquare } from "lucide-react";
import { faqItems } from "./faqData";
import Image from "next/image";

// Dividir las preguntas en secciones
const importantQuestions = faqItems.slice(0, 10);
const otherQuestions1 = faqItems.slice(10, 20);
const otherQuestions2 = faqItems.slice(20, 30);

export default function PreguntasFrecuentesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-gradient-to-b from-background via-card to-muted/30 overflow-x-hidden">
      <header className="text-center mb-12 md:mb-20 animate-in fade-in-0 slide-in-from-top-10 duration-700">
        <HelpCircle className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Preguntas Frecuentes
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Encuentra respuestas a las dudas más comunes sobre nuestros programas, inscripciones y servicios.
        </p>
      </header>

      {/* Sección 1: Preguntas Importantes */}
      <section className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
         <div className="relative aspect-[4/5] animate-in fade-in-0 slide-in-from-left-20 duration-700 delay-200">
             <Image 
              src="https://placehold.co/600x750/e0f2fe/0c4a6e?text=Dudas%3F"
              alt="Persona con dudas señalando las preguntas frecuentes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg object-cover shadow-xl"
              data-ai-hint="person thinking pointing"
             />
          </div>
          <div className="animate-in fade-in-0 slide-in-from-right-20 duration-700 delay-300">
            <h2 className="font-headline text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <MessagesSquare className="h-7 w-7"/>
              Preguntas Clave
            </h2>
            <Accordion type="single" defaultValue="item-1" collapsible className="w-full bg-card p-4 sm:p-6 rounded-lg shadow-lg border">
              {importantQuestions.map((item) => (
                <AccordionItem value={item.value} key={item.value}>
                  <AccordionTrigger className="text-base md:text-lg text-left hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-foreground/80 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
      </section>

      {/* Sección 2: Otras Preguntas */}
      <section className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div className="animate-in fade-in-0 slide-in-from-left-20 duration-700 delay-200 md:order-2">
            <div className="relative aspect-[4/5]">
              <Image 
                src="https://placehold.co/600x750/fff7e0/fb923c?text=Consultas"
                alt="Estudiante consultando información en un portátil"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover shadow-xl"
                data-ai-hint="student searching online"
              />
            </div>
          </div>
          <div className="animate-in fade-in-0 slide-in-from-right-20 duration-700 delay-300 md:order-1">
            <h2 className="font-headline text-2xl font-bold text-primary mb-4 flex items-center gap-2">
               <MessagesSquare className="h-7 w-7"/>
               Más sobre Nuestros Cursos
            </h2>
            <Accordion type="single" collapsible className="w-full bg-card p-4 sm:p-6 rounded-lg shadow-lg border">
              {otherQuestions1.map((item) => (
                <AccordionItem value={item.value} key={item.value}>
                  <AccordionTrigger className="text-base md:text-lg text-left hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-foreground/80 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
      </section>

      {/* Sección 3: Preguntas Finales */}
       <section className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
         <div className="relative aspect-[4/5] animate-in fade-in-0 slide-in-from-left-20 duration-700 delay-200">
             <Image 
              src="https://placehold.co/600x750/e0e7ff/4338ca?text=Procesos"
              alt="Diagrama de flujo de procesos"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg object-cover shadow-xl"
              data-ai-hint="process flowchart diagram"
             />
          </div>
          <div className="animate-in fade-in-0 slide-in-from-right-20 duration-700 delay-300">
            <h2 className="font-headline text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <MessagesSquare className="h-7 w-7"/>
              Detalles Administrativos
            </h2>
            <Accordion type="single" collapsible className="w-full bg-card p-4 sm:p-6 rounded-lg shadow-lg border">
              {otherQuestions2.map((item) => (
                <AccordionItem value={item.value} key={item.value}>
                  <AccordionTrigger className="text-base md:text-lg text-left hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-foreground/80 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
      </section>

    </div>
  );
}
