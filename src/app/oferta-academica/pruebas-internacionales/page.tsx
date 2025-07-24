
import { languageDetails } from '@/app/oferta-academica/LanguageData'; 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ImageBrochureViewer from '@/components/ImageBrochureViewer'; 
import { notFound } from 'next/navigation';

export default async function PruebasInternacionalesPage() {
  const program = languageDetails['pruebas-internacionales'];

  if (!program) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-muted/20 min-h-[calc(100vh-10rem)]">
      <header className="mb-8">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/oferta-academica"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Oferta Académica</Link>
        </Button>
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <Award className="h-24 w-24 md:h-32 md:w-32 text-primary shrink-0" />
            <div>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{program.name}</h1>
                <p className="text-lg text-foreground/80 mt-1 max-w-2xl">{program.description}</p>
            </div>
        </div>
      </header>

      <Card className="shadow-xl border-primary/20 border bg-card overflow-hidden">
        <CardHeader className="bg-primary/5 border-b border-primary/20">
          <CardTitle className="text-2xl text-primary flex items-center">
            <BookOpen className="mr-3 h-7 w-7" />
            Brochure Informativo: {program.name}
          </CardTitle>
          <CardDescription>
            Explora las páginas de nuestro brochure digital para conocer todos los detalles del programa.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 sm:p-4 md:p-6">
          {program.brochureImagePages && program.brochureImagePages.length > 0 ? (
            <ImageBrochureViewer pages={program.brochureImagePages} languageName={program.name} />
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <p>El brochure digital para este programa no está disponible en este momento. Inténtalo más tarde.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-16 text-center bg-background/50 p-8 rounded-lg shadow-md">
        <h3 className="font-headline text-2xl text-primary mb-4">¿Interesado en certificarte?</h3>
        <p className="text-lg text-foreground/80 mb-6 max-w-xl mx-auto">
          Si tienes más preguntas o deseas saber sobre las próximas inscripciones para nuestros talleres de preparación, contáctanos.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
          <Link href="/proceso-inscripcion">Ver Proceso de Inscripción</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
