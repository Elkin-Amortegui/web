"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { performSearch, type SearchResultItem } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // No longer needed for direct input here
import {
  Loader2,
  Search as SearchIconLucide,
  AlertTriangle,
  Newspaper,
  ClipboardList,
  YoutubeIcon,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Info,
  FileText,
} from "lucide-react";

const getIconForType = (type: SearchResultItem["type"]) => {
  switch (type) {
    case "Noticia":
      return <Newspaper className="h-5 w-5 text-primary" />;
    case "Trámite":
      return <ClipboardList className="h-5 w-5 text-primary" />;
    case "Tutorial":
      return <YoutubeIcon className="h-5 w-5 text-primary" />;
    case "Guía":
      return <BookOpen className="h-5 w-5 text-primary" />;
    case "Actividad":
      return <CalendarDays className="h-5 w-5 text-primary" />;
    case "Idioma":
      return <GraduationCap className="h-5 w-5 text-primary" />; // Changed from 'Oferta Académica'
    case "Página Principal":
      return <Info className="h-5 w-5 text-primary" />;
    default:
      return <FileText className="h-5 w-5 text-primary" />;
  }
};

function SearchResultsDisplay() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(null);
      performSearch(query)
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error performing search:", err);
          setError(
            "Error al realizar la búsqueda. Por favor, intente de nuevo más tarde."
          );
          setLoading(false);
        });
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 min-h-[calc(100vh-16rem)]">
      <header className="text-center mb-10 md:mb-12">
        <SearchIconLucide className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">
          Resultados de Búsqueda
        </h1>
        {query && !loading && (
          <p className="text-lg text-foreground/80">
            {results.length > 0
              ? `${results.length} resultado(s) para: `
              : `No se encontraron resultados para: `}
            <span className="font-semibold text-secondary">{`"${query}"`}</span>
          </p>
        )}
        {!query && !loading && (
          <p className="text-lg text-foreground/80">
            Por favor, ingrese un término en la barra de búsqueda del
            encabezado.
          </p>
        )}
      </header>

      {loading && (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <p className="text-lg text-muted-foreground">Buscando...</p>
        </div>
      )}

      {error && !loading && (
        <div className="text-center py-10 px-6 bg-destructive/10 border border-destructive rounded-lg max-w-md mx-auto">
          <AlertTriangle className="mx-auto h-10 w-10 text-destructive mb-3" />
          <p className="text-destructive font-semibold">{error}</p>
        </div>
      )}

      {!loading && !error && query && results.length === 0 && (
        <div className="text-center py-10 px-6 bg-muted/50 border rounded-lg max-w-md mx-auto">
          <SearchIconLucide className="mx-auto h-10 w-10 text-primary mb-3" />
          <p className="text-xl font-semibold text-primary">
            No se encontraron resultados
          </p>
          <p className="text-muted-foreground mt-1">
            Intenta con términos de búsqueda diferentes o más generales.
          </p>
        </div>
      )}

      {!loading && !error && results.length > 0 && (
        <div className="space-y-6 max-w-3xl mx-auto">
          {results.map((result) => (
            <Card
              key={result.id + result.type}
              className="shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1.5">
                  {getIconForType(result.type)}
                  <span>{result.type}</span>
                  {result.date && (
                    <>
                      <span className="mx-1">·</span>
                      <CalendarDays className="h-4 w-4" />
                      <span>
                        {new Date(result.date).toLocaleDateString("es-CO", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </>
                  )}
                  {result.category && (
                    <>
                      <span className="mx-1">·</span>
                      <span>Categoría: {result.category}</span>
                    </>
                  )}
                </div>
                <CardTitle className="text-xl text-primary hover:text-primary/80">
                  <Link href={result.href}>{result.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 text-foreground/80">
                  {result.excerpt || "No hay descripción disponible."}
                </CardDescription>
                <Button
                  variant="link"
                  asChild
                  className="p-0 h-auto mt-2 text-secondary hover:text-secondary/80 text-sm"
                >
                  <Link href={result.href}>Ver más &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && query && (
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/">Volver a Inicio</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    // Suspense is required by Next.js if you use useSearchParams in a Server Component
    // or a Client Component that's not a direct child of a Suspense boundary.
    // Here, SearchResultsDisplay is a client component using it.
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center text-center py-20 min-h-[calc(100vh-16rem)]">
          <Loader2 className="h-16 w-16 animate-spin text-primary mb-6" />
          <p className="text-xl text-muted-foreground">Cargando resultados...</p>
        </div>
      }
    >
      <SearchResultsDisplay />
    </Suspense>
  );
}
