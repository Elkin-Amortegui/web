
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageBrochureViewerProps {
  pages: string[];
  languageName: string;
}

export default function ImageBrochureViewer({ pages, languageName }: ImageBrochureViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pages || pages.length === 0) {
    return <p className="text-center text-muted-foreground py-10">No hay páginas de brochure disponibles para {languageName}.</p>;
  }

  const totalPages = pages.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <div className="relative group"> {/* Added group for button visibility on hover */}
        <div className="aspect-[8.5/11] w-full overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl rounded-lg border border-gray-300 dark:border-gray-700">
          {pages.map((pageUrl, index) => (
            <div
              key={pageUrl + index}
              className={cn(
                "absolute inset-0 transition-opacity duration-300 ease-in-out flex items-center justify-center",
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <Image
                src={pageUrl}
                alt={`Página ${index + 1} del brochure de ${languageName}`}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
                data-ai-hint="brochure page scan"
                priority={index === currentIndex}
              />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <>
            <Button 
              onClick={goToPrevious} 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 p-2 bg-background/70 hover:bg-background/90 text-foreground opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              aria-label="Página anterior"
            >
              <ChevronLeft size={28} />
            </Button>
            <Button 
              onClick={goToNext} 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 p-2 bg-background/70 hover:bg-background/90 text-foreground opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              aria-label="Siguiente página"
            >
              <ChevronRight size={28} />
            </Button>
          </>
        )}
      </div>

      {totalPages > 1 && (
        <div className="text-center mt-4 p-2 bg-card/80 backdrop-blur-sm rounded-lg shadow-md border">
          <span className="text-base font-medium text-foreground">
            Página {currentIndex + 1} <span className="text-muted-foreground">de</span> {totalPages}
          </span>
        </div>
      )}
    </div>
  );
}

