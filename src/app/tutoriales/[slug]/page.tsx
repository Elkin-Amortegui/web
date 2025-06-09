
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, Tag, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';
import { tutorialesData, Tutorial } from '../TutorialData';

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
          <Link href="/tutoriales"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Tutoriales</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/tutoriales"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Tutoriales</Link>
          </Button>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">{tutorial.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-6">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>Publicado: {tutorial.date}</span>
            </div>
            {tutorial.category && (
              <>
                <span>|</span>
                <div className="flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  <span>Categoría: {tutorial.category}</span>
                </div>
              </>
            )}
          </div>
        </header>
        
        {tutorial.youtubeVideoId && (
          <div className="aspect-video w-full mb-8 shadow-lg rounded-lg overflow-hidden border">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${tutorial.youtubeVideoId}`}
              title={`Video Tutorial: ${tutorial.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="bg-muted"
            ></iframe>
          </div>
        )}

        {tutorial.description && (
          <div className="prose prose-lg max-w-none text-foreground/90 mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><YoutubeIcon className="mr-2 h-6 w-6" /> Descripción del Video</h2>
            <p>{tutorial.description}</p>
          </div>
        )}

        {/* You can add more content related to the tutorial here if needed */}
        
      </article>
    </div>
  );
}
