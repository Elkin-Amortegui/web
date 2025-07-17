
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface ImageLightboxProps {
  pages: string[];
  initialIndex?: number;
  trigger: React.ReactElement;
}

export default function ImageLightbox({ 
  pages,
  initialIndex = 0,
  trigger
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      handleResetZoom();
    }
  }, [isOpen, initialIndex]);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev * 1.2, 5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev / 1.2, 1));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomLevel <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);
  
  const handleClose = () => setIsOpen(false);
  
  const totalPages = pages.length;

  const goToNextPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleResetZoom();
    if (isMobile) {
      setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
    } else {
      if (currentIndex === 0) { // From cover to first spread
        setCurrentIndex(1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 2, totalPages - 1));
      }
    }
  };

  const goToPreviousPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleResetZoom();
    if (isMobile) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    } else {
      if (currentIndex === 1) { // From first spread back to cover
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => Math.max(0, prev - 2));
      }
    }
  };

  const isLastPageSingle = totalPages % 2 === 0;

  const getPageLabel = () => {
    if (totalPages === 1) return "Página 1";
    if (isMobile) return `Página ${currentIndex + 1}`;
    
    // Desktop
    if (currentIndex === 0) return "Portada";
    if (!isLastPageSingle && currentIndex === totalPages - 1) return `Página ${totalPages}`;
    
    const startPage = currentIndex;
    const endPage = currentIndex + 1;
    return `Páginas ${startPage}-${endPage}`;
  };

  const isCover = currentIndex === 0;
  const isFinalPageAndOdd = !isLastPageSingle && currentIndex === totalPages - 1;

  const showSinglePageInLightbox = isMobile || isCover || (isFinalPageAndOdd && !isMobile);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent 
        className="max-w-none max-h-none w-screen h-screen p-0 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden border-none rounded-none"
        onEscapeKeyDown={handleClose}
        onInteractOutside={(e) => { e.preventDefault(); handleClose(); }}
        onMouseUp={handleMouseUp}
      >
        <DialogTitle className="sr-only">{`Visor de brochure ampliado`}</DialogTitle>
        <div className="absolute top-2 right-2 z-20 flex gap-2">
          <Button variant="outline" size="icon" onClick={handleZoomIn} aria-label="Acercar"><ZoomIn className="h-5 w-5" /></Button>
          <Button variant="outline" size="icon" onClick={handleZoomOut} aria-label="Alejar" disabled={zoomLevel <= 1}><ZoomOut className="h-5 w-5" /></Button>
          <Button variant="outline" size="icon" onClick={handleResetZoom} aria-label="Restablecer zoom"><RotateCcw className="h-5 w-5" /></Button>
          <DialogClose asChild>
             <Button variant="outline" size="icon" aria-label="Cerrar visor" onClick={handleClose}>
                <X className="h-5 w-5" />
             </Button>
          </DialogClose>
        </div>
        
        {totalPages > 1 && (
          <>
            <Button variant="outline" size="icon" onClick={goToPreviousPage} disabled={currentIndex === 0} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full h-12 w-12">
              <ChevronLeft className="h-6 w-6"/>
            </Button>
            <Button variant="outline" size="icon" onClick={goToNextPage} disabled={currentIndex >= totalPages -1} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full h-12 w-12">
              <ChevronRight className="h-6 w-6"/>
            </Button>
          </>
        )}

        <div 
          className="w-full h-full flex items-center justify-center overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex justify-center items-center transition-transform duration-200 ease-out p-8"
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
              cursor: isDragging && zoomLevel > 1 ? 'grabbing' : (zoomLevel > 1 ? 'grab' : 'default'),
            }}
          >
            {showSinglePageInLightbox ? (
              <div className="flex justify-center items-center max-w-[90vw] max-h-[90vh]">
                 <Image 
                  src={pages[currentIndex]} 
                  alt={`Página ${currentIndex + 1}`} 
                  width={800} height={1100} 
                  className="object-contain shadow-lg max-w-full max-h-full w-auto h-auto md:max-w-[45vw]"
                 />
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2 max-w-[90vw] max-h-[90vh]">
                  <Image 
                    src={pages[currentIndex]} 
                    alt={`Página ${currentIndex + 1}`} 
                    width={800} 
                    height={1100} 
                    className="object-contain shadow-lg max-w-[45vw] max-h-[90vh] w-auto h-auto"
                   />
                  {currentIndex + 1 < totalPages && (
                    <Image 
                      src={pages[currentIndex + 1]} 
                      alt={`Página ${currentIndex + 2}`} 
                      width={800} 
                      height={1100} 
                      className="object-contain shadow-lg max-w-[45vw] max-h-[90vh] w-auto h-auto" 
                    />
                  )}
              </div>
            )}
          </div>
        </div>

        {totalPages > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-background/80 px-3 py-1 rounded-full text-sm">
                {/* Simplified label */}
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

