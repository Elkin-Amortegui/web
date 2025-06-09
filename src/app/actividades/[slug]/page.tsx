
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, ArrowLeft, Tag, LocateIcon, ClockIcon } from 'lucide-react';
import { actividadesData, Actividad } from '@/app/actividades/ActividadData';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';


async function getActividadData(slug: string): Promise<Actividad | null> {
  const actividad = actividadesData.find(a => a.slug === slug);
  return actividad || null;
}

export async function generateStaticParams() {
  return actividadesData.map((actividad) => ({
    slug: actividad.slug,
  }));
}

export default async function ActividadDetailPage({ params }: { params: { slug: string } }) {
  const actividad = await getActividadData(params.slug);

  if (!actividad) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Actividad no encontrada</h1>
        <p className="text-lg text-muted-foreground mb-6">La actividad que buscas no existe o ha sido movida.</p>
        <Button asChild>
          <Link href="/actividades"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Actividades</Link>
        </Button>
      </div>
    );
  }
  
  const formatDate = (dateString: string, dateFormat = 'PPP') => {
    try {
      return format(parseISO(dateString), dateFormat, { locale: es });
    } catch (error) {
      return dateString; 
    }
  };


  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <article className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-xl border">
        <header className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/actividades"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Actividades</Link>
          </Button>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">{actividad.title}</h1>
          <div className="text-sm text-muted-foreground space-y-1">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>
                {formatDate(actividad.date)}
                {actividad.endDate && ` - ${formatDate(actividad.endDate)}`}
              </span>
            </div>
            {actividad.time && (
              <div className="flex items-center">
                <ClockIcon className="mr-2 h-4 w-4" />
                <span>{actividad.time}</span>
              </div>
            )}
            {actividad.location && (
              <div className="flex items-center">
                <LocateIcon className="mr-2 h-4 w-4" />
                <span>{actividad.location}</span>
              </div>
            )}
            {actividad.category && (
              <div className="flex items-center">
                <Tag className="mr-2 h-4 w-4" />
                <span>Categoría: {actividad.category}</span>
              </div>
            )}
          </div>
        </header>
        
        {actividad.image && (
          <Image 
            src={actividad.image} 
            alt={actividad.title} 
            width={800} 
            height={450} 
            className="w-full h-auto rounded-lg mb-8 shadow-md object-cover"
            data-ai-hint={actividad.aiHint}
            priority
          />
        )}

        {actividad.content && (
          <div 
            className="prose prose-lg max-w-none text-foreground/90" // prose-headings:text-primary if you want headings colored
            dangerouslySetInnerHTML={{ __html: actividad.content }} 
          />
        )}
        
        {actividad.type === 'proxima' && (
             <div className="mt-10 text-center p-6 bg-secondary/10 rounded-lg border border-secondary/30">
                <h3 className="font-headline text-xl font-semibold text-secondary mb-3">¡Participa en esta Actividad!</h3>
                <p className="text-secondary-foreground/90 mb-4">
                    Esta es una próxima actividad. Consulta los detalles sobre cómo inscribirte o participar.
                </p>
                <Button asChild>
                    <Link href="/inscripciones">Información de Inscripción</Link>
                </Button>
            </div>
        )}

      </article>
    </div>
  );
}
