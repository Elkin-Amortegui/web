
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, Users, YoutubeIcon } from 'lucide-react'; // Changed Tag to Users
import Link from 'next/link';
import { tutorialesData, Tutorial } from '../TutorialData';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

async function getTutorialData(slug: string): Promise<Tutorial | null> {
  const tutorial = tutorialesData.find((t) => t.slug === slug);
  return tutorial || null;
}

export async function generateStaticParams() {
  return tutorialesData.map((tutorial) => ({
    slug: tutorial.slug,
  }));
}

export default async function TutorialDetailPage({ params }: { params: { slug: string } }) {
  const tutorial = await getTutorialData(params.slug);

  if (!tutorial) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Tutorial no encontrado</h1>
        <p className="text-lg text-muted-foreground mb-6">El tutorial que buscas no existe o ha sido movido.</p>
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
      <article className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-xl border">
        <header className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/tutoriales"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Tutoriales y Guías</Link>
          </Button>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">{tutorial.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-1 mb-6">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>Publicado: {formatDate(tutorial.date)}</span>
            </div>
            {tutorial.targetAudience && tutorial.targetAudience.length > 0 && (
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <span>Dirigido a: {tutorial.targetAudience.join(', ')}</span>
              </div>
            )}
          </div>
        </header>
        
        {tutorial.youtubeVideoId && (
          <div className="aspect-video w-full mb-8 shadow-lg rounded-lg overflow-hidden border bg-muted">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${tutorial.youtubeVideoId}`}
              title={`Video Tutorial: ${tutorial.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {tutorial.detailedContent && (
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
              <YoutubeIcon className="mr-2 h-6 w-6" /> Guía Paso a Paso
            </h2>
            <div dangerouslySetInnerHTML={{ __html: tutorial.detailedContent }} />
          </div>
        )}
      </article>
    </div>
  );
}
