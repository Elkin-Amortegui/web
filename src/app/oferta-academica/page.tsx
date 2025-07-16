
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { BookOpenCheck, Rocket } from 'lucide-react'; 
import Image from 'next/image';
import { languages } from './LanguageData';
import { cn } from '@/lib/utils';


export default function AcademicOfferPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <BookOpenCheck className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Oferta Académica
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Explora nuestros programas de idiomas diseñados para ayudarte a alcanzar la fluidez y abrir nuevas puertas en tu vida personal y profesional.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {languages.map((lang) => (
            <Link 
              key={lang.slug} 
              href={`/oferta-academica/${lang.slug}`} 
              className={cn(
                  "group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-64 flex items-end p-6 text-white text-center",
                  "focus:outline-none focus:ring-4 focus:ring-primary/50"
              )}
            >
              <Image 
                src={lang.image} 
                alt={lang.name} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                data-ai-hint={lang.aiHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10 w-full">
                <Rocket className="mx-auto h-10 w-10 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-headline text-2xl font-bold text-white">{lang.name}</h3>
                <p className="text-sm opacity-90">{lang.shortDescription}</p>
              </div>
            </Link>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <p className="text-lg text-foreground/80 mb-4">¿Listo para empezar tu viaje de aprendizaje?</p>
        <Button asChild size="lg">
          <Link href="/inscripciones">Consulta el Proceso de Inscripción</Link>
        </Button>
      </div>
    </div>
  );
}
