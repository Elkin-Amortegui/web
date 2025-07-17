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
  languageName: string;
}

export default function ImageLightbox({ 
  pages,
  initialIndex = 0,
  trigger,
  languageName
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isOpen) {
      // Start at page 1 (index 0) for single page view, or page 2 (index 1) for double page view.
      setCurrentIndex(initialIndex);
      handleResetZoom();
    }
  }, [isOpen, initialIndex, isMobile]);

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
    setCurrentIndex((prev) => Math.min(prev + 2, totalPages - 2));
  };

  const goToPreviousPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleResetZoom();
    setCurrentIndex((prev) => Math.max(0, prev - 2));
  };
  
  const getPageLabel = () => {
    return `Páginas ${currentIndex + 1}-${currentIndex + 2} de ${totalPages}`;
  };

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
        <DialogTitle className="sr-only">{`Visor de brochure ampliado: ${languageName}`}</DialogTitle>
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
            <Button variant="outline" size="icon" onClick={goToNextPage} disabled={currentIndex >= totalPages - 2} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full h-12 w-12">
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
            <div className="grid grid-cols-2 gap-2 justify-center items-center max-w-[90vw]">
                <Image 
                    src={pages[currentIndex]} 
                    alt={`Página ${currentIndex + 1}`} 
                    width={800} height={1100} 
                    className="object-contain shadow-lg w-auto h-auto max-w-full max-h-[90vh]"
                />
                {currentIndex + 1 < totalPages && (
                    <Image 
                        src={pages[currentIndex + 1]} 
                        alt={`Página ${currentIndex + 2}`} 
                        width={800} height={1100} 
                        className="object-contain shadow-lg w-auto h-auto max-w-full max-h-[90vh]"
                    />
                )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 p-2 bg-card/80 backdrop-blur-sm rounded-lg shadow-md border max-w-xs mx-auto text-center">
            <span className="text-sm font-medium text-foreground">
                {getPageLabel()}
            </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
