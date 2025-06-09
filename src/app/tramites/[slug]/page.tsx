
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { tramitesData, Tramite } from '../TramiteData'; // Adjusted import path

async function getTramiteData(slug: string): Promise<Tramite | null> {
  const tramite = tramitesData.find((t) => t.slug === slug);
  return tramite || null;
}

export async function generateStaticParams() {
  return tramitesData.map((tramite) => ({
    slug: tramite.slug,
  }));
}

export default async function TramiteDetailPage({ params }: { params: { slug: string } }) {
  const tramite = await getTramiteData(params.slug);

  if (!tramite) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Trámite no encontrado</h1>
        <p className="text-lg text-muted-foreground mb-6">El trámite que buscas no existe o ha sido movido.</p>
        <Button asChild>
          <Link href="/tramites"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Trámites</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/tramites"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Trámites</Link>
          </Button>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">{tramite.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>Publicado: {tramite.date}</span>
            </div>
            {tramite.category && (
              <>
                <span>|</span>
                <div className="flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  <span>Categoría: {tramite.category}</span>
                </div>
              </>
            )}
          </div>
        </header>
        
        {tramite.image && (
          <Image 
            src={tramite.image} 
            alt={tramite.title} 
            width={800} 
            height={400} 
            className="w-full h-auto rounded-lg mb-8 shadow-md object-cover"
            data-ai-hint={tramite.aiHint || 'procedure detail image'}
            priority
          />
        )}

        <div 
          className="prose prose-lg max-w-none text-foreground/90"
          dangerouslySetInnerHTML={{ __html: tramite.content }} 
        />
      </article>
    </div>
  );
}

