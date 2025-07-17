'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { cn } from '@/lib/utils';
import ImageLightbox from '@/components/ImageLightbox';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';


interface ImageBrochureViewerProps {
  pages: string[];
  languageName: string;
}

export default function ImageBrochureViewer({ pages, languageName }: ImageBrochureViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  if (!pages || pages.length === 0) {
    return <p className="text-center text-muted-foreground py-10">No hay páginas de brochure disponibles para {languageName}.</p>;
  }

  const totalPages = pages.length;

  const goToNextPage = () => {
    if (isMobile) {
      setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
    } else {
      if (currentIndex === 0) {
        setCurrentIndex(1); // From cover to first spread
      } else {
        setCurrentIndex((prev) => Math.min(prev + 2, totalPages - 2));
      }
    }
  };

  const goToPreviousPage = () => {
    if (isMobile) {
       setCurrentIndex((prev) => Math.max(0, prev - 1));
    } else {
      if (currentIndex === 1) {
        setCurrentIndex(0); // From first spread back to cover
      } else {
        setCurrentIndex((prev) => Math.max(0, prev - 2));
      }
    }
  };
  
  const getPageLabel = () => {
    if (isMobile) return `Página ${currentIndex + 1} de ${totalPages}`;
    
    if (currentIndex === 0) return `Portada (Pág. 1)`;
    
    // Check if the last page should be displayed alone
    const lastPageIsUnpaired = totalPages % 2 === 0 && currentIndex >= totalPages - 1;
    if (lastPageIsUnpaired) {
      return `Página ${currentIndex} de ${totalPages}`;
    }
    
    return `Páginas ${currentIndex}-${currentIndex + 1} de ${totalPages}`;
};

  const showSinglePage = isMobile || currentIndex === 0 || (totalPages % 2 === 0 && currentIndex >= totalPages - 1);


  return (
    <div className="w-full max-w-5xl mx-auto my-6">
      <div className="relative group p-4 bg-muted/30 rounded-lg shadow-inner">
        <div className={cn("flex justify-center items-center min-h-[400px] md:min-h-[550px] aspect-[1/1.4] md:aspect-[2/1.4]")}>
          
          <div className="w-full h-full flex justify-center items-center relative">
            {showSinglePage ? (
              // Single Page View (Mobile, Cover, unpaired last page)
              <div className="w-full h-full flex justify-center items-center">
                  <Image 
                      src={pages[currentIndex]} 
                      alt={`Página ${currentIndex + 1} de ${languageName}`} 
                      width={800} height={1100} 
                      className="w-auto h-full max-h-[550px] object-contain shadow-lg rounded-md" 
                      data-ai-hint="brochure page" 
                      priority={currentIndex === 0}
                  />
              </div>
            ) : (
              // Double Page View (Desktop)
              <div className="w-full h-full hidden md:flex justify-center items-center relative gap-2">
                <Image 
                    src={pages[currentIndex]} 
                    alt={`Página ${currentIndex + 1} de ${languageName}`} 
                    width={800} height={1100} 
                    className="w-auto h-full max-h-[550px] object-contain shadow-lg rounded-l-md" 
                    data-ai-hint="brochure page left" 
                />
                {currentIndex + 1 < totalPages && (
                    <Image 
                        src={pages[currentIndex + 1]} 
                        alt={`Página ${currentIndex + 2} de ${languageName}`} 
                        width={800} height={1100} 
                        className="w-auto h-full max-h-[550px] object-contain shadow-lg rounded-r-md" 
                        data-ai-hint="brochure page right" 
                    />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={goToPreviousPage} variant="outline" size="icon" className="absolute top-1/2 left-[-1rem] transform -translate-y-1/2 z-20 p-2 bg-background/70 hover:bg-background/90 text-foreground rounded-full h-12 w-12" aria-label="Página anterior" disabled={currentIndex === 0}>
              <ChevronLeft size={28} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right"><p>Página Anterior</p></TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={goToNextPage} variant="outline" size="icon" className="absolute top-1/2 right-[-1rem] transform -translate-y-1/2 z-20 p-2 bg-background/70 hover:bg-background/90 text-foreground rounded-full h-12 w-12" aria-label="Siguiente página" disabled={currentIndex >= totalPages - (isMobile ? 1 : 2)}>
              <ChevronRight size={28} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left"><p>Página Siguiente</p></TooltipContent>
        </Tooltip>
        
        <div className="absolute top-2 right-2 z-20">
            <Tooltip>
                <TooltipTrigger asChild>
                     <ImageLightbox 
                        pages={pages}
                        initialIndex={currentIndex}
                        languageName={languageName}
                        trigger={
                            <Button variant="outline" size="icon" className="h-12 w-12 bg-background/70 hover:bg-background/90 text-foreground" aria-label="Ampliar brochure">
                                <Expand size={24}/>
                            </Button>
                        }
                    />
                </TooltipTrigger>
                <TooltipContent><p>Ampliar a Pantalla Completa</p></TooltipContent>
            </Tooltip>
        </div>
      </div>
      
       <div className="flex flex-col items-center mt-4 gap-2">
        <div className="p-2 bg-card/80 backdrop-blur-sm rounded-lg shadow-md border max-w-xs mx-auto text-center">
            <span className="text-sm font-medium text-foreground">
                {getPageLabel()}
            </span>
        </div>
       </div>
    </div>
  );
}
