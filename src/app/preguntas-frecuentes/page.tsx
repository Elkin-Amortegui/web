import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { HelpCircle } from "lucide-react";
  import { faqItems } from "./faqData";
  
  export default function PreguntasFrecuentesPage() {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <header className="text-center mb-12 md:mb-16 animate-in fade-in-0 slide-in-from-top-10 duration-700">
          <HelpCircle className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre nuestros programas, inscripciones y servicios.
          </p>
        </header>
  
        <div className="max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-10 delay-200 duration-700">
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full bg-card p-4 sm:p-6 rounded-lg shadow-lg border">
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