// src/app/search-results/SearchResultsClient.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search, AlertTriangle } from 'lucide-react';

interface Props {
  initialQuery: string;
}

export default function SearchResultsClient({ initialQuery }: Props) {
  // Ahora estamos en un Client Component, podemos usar hooks
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? initialQuery;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 min-h-[calc(100vh-16rem)]">
      <header className="text-center mb-12">
        <Search className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
          Resultados de Búsqueda
        </h1>
        {query ? (
          <p className="text-lg text-foreground/80">
            Mostrando resultados para: <span className="font-semibold text-secondary">{`"${query}"`}</span>
          </p>
        ) : (
          <p className="text-lg text-foreground/80">
            Por favor, ingresa un término en la barra de búsqueda.
          </p>
        )}
      </header>

      <div className="max-w-2xl mx-auto text-center">
        {query ? (
          <div className="p-8 border rounded-lg bg-card shadow-md">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-primary mb-3">Funcionalidad en Desarrollo</h2>
            <p className="text-foreground/90 mb-4">
              La búsqueda global a través de Noticias, Trámites y Tutoriales está actualmente en desarrollo. 
              Próximamente podrás encontrar aquí todos los resultados relevantes para tu consulta.
            </p>
            <p className="text-muted-foreground text-sm">
              Por ahora, puedes intentar buscar dentro de cada sección individualmente:
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/noticias">Buscar en Noticias</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/tramites">Buscar en Trámites</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/tutoriales">Buscar en Tutoriales</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-8 border rounded-lg bg-card shadow-md">
            <p className="text-xl text-foreground/90">
              Utiliza la barra de búsqueda en el encabezado para encontrar información en el sitio.
            </p>
          </div>
        )}

        <div className="mt-12">
          <Button asChild>
            <Link href="/">Volver a Inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
