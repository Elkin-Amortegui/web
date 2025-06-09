
import { languages } from '@/app/oferta-academica/LanguageData'; // Using a separate data file
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Download, FileText, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ImageBrochureViewer from '@/components/ImageBrochureViewer'; // Import the new component

// This function would typically fetch data based on slug
// For now, we'll find it from the imported array
async function getLanguageData(slug: string) {
  return languages.find(lang => lang.slug === slug);
}

export async function generateStaticParams() {
  return languages.map((lang) => ({
    languageName: lang.slug,
  }));
}

export default async function LanguageDetailPage({ params }: { params: { languageName: string } }) {
  const language = await getLanguageData(params.languageName);

  if (!language) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Idioma no encontrado</h1>
        <p className="text-lg text-muted-foreground mb-6">El idioma que buscas no existe o ha sido movido.</p>
        <Button asChild>
          <Link href="/oferta-academica"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Oferta Académica</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-muted/20 min-h-[calc(100vh-10rem)]">
      <header className="mb-8">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/oferta-academica"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Oferta Académica</Link>
        </Button>
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            {language.image && (
                 <Image 
                    src={language.image} 
                    alt={`Curso de ${language.name}`} 
                    width={150} 
                    height={100} 
                    className="rounded-lg shadow-md object-cover md:w-48 md:h-32"
                    data-ai-hint={language.aiHint || 'language course icon'}
                />
            )}
            <div>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{language.name}</h1>
                <p className="text-lg text-foreground/80 mt-1 max-w-2xl">{language.description}</p>
            </div>
        </div>
      </header>

      <Card className="shadow-xl border-primary/20 border bg-card overflow-hidden">
        <CardHeader className="bg-primary/5 border-b border-primary/20">
          <CardTitle className="text-2xl text-primary flex items-center">
            <BookOpen className="mr-3 h-7 w-7" />
            Brochure Informativo: {language.name}
          </CardTitle>
          <CardDescription>
            Explora las páginas de nuestro brochure digital para conocer todos los detalles del programa.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 sm:p-4 md:p-6">
          {language.brochureImagePages && language.brochureImagePages.length > 0 ? (
            <ImageBrochureViewer pages={language.brochureImagePages} languageName={language.name} />
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <p>El brochure digital para este idioma no está disponible en este momento. Inténtalo más tarde.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {language.pdfUrl && (
        <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
                <a href={language.pdfUrl} target="_blank" rel="noopener noreferrer" download={`Brochure-${language.name}.pdf`}>
                <Download className="mr-2 h-5 w-5" />
                Descargar Brochure Completo (PDF)
                </a>
            </Button>
        </div>
      )}

      <div className="mt-16 text-center bg-background/50 p-8 rounded-lg shadow-md">
        <h3 className="font-headline text-2xl text-primary mb-4">¿Interesado en {language.name}?</h3>
        <p className="text-lg text-foreground/80 mb-6 max-w-xl mx-auto">
          Si tienes más preguntas o deseas saber sobre las próximas inscripciones, no dudes en contactarnos o revisar nuestro proceso de inscripción.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/inscripciones">Ver Proceso de Inscripción</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

