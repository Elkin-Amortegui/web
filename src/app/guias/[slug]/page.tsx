
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { guiasData, Guide } from '../GuideData';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import ImageLightbox from '@/components/ImageLightbox'; // Import the new component

async function getGuideData(slug: string): Promise<Guide | null> {
  const guide = guiasData.find((g) => g.slug === slug);
  return guide || null;
}

export async function generateStaticParams() {
  return guiasData.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = await getGuideData(params.slug);

  if (!guide) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Guía no encontrada</h1>
        <p className="text-lg text-muted-foreground mb-6">La guía que buscas no existe o ha sido movida.</p>
        <Button asChild>
          <Link href="/tutoriales"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Tutoriales y Guías</Link>
        </Button>
      </div>
    );
  }
  
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), "PPP", { locale: es });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto bg-card p-4 md:p-6 rounded-lg shadow-xl border">
        <header className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/tutoriales"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Tutoriales y Guías</Link>
          </Button>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">{guide.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-1 mb-6">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>Publicado: {formatDate(guide.date)}</span>
            </div>
            {Array.isArray(guide.targetAudience) && guide.targetAudience.length > 0 && (
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <span>Dirigido a: {(Array.isArray(guide.targetAudience) ? guide.targetAudience : []).join(', ')}</span>
              </div>
            )}
          </div>
        </header>
        
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-8 items-start">
          <aside className="w-full md:sticky md:top-20">
            {guide.image && (
              <ImageLightbox 
                src={guide.image} 
                alt={guide.title} 
                aiHint={guide.aiHint}
                triggerClassName="w-full h-auto rounded-lg mb-6 shadow-md" // Pass width/height if needed, or aspect ratio
              />
            )}
          </aside>
          
          <main className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
              <BookOpen className="mr-2 h-6 w-6" /> Contenido de la Guía
            </h2>
            {guide.detailedContent && (
              <div dangerouslySetInnerHTML={{ __html: guide.detailedContent }} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
