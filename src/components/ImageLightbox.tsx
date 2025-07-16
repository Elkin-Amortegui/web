'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from '@/components/ui/dialog';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';


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

  const goToNextPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleResetZoom();
    if (isMobile) {
      setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
    } else {
      if (currentIndex === 0) {
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
      if (currentIndex === 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => Math.max(0, prev - 2));
      }
    }
  };

  const totalPages = pages.length;

  const getPageLabel = () => {
    if (totalPages === 1) return "Página 1";
    if (isMobile) return `Página ${currentIndex + 1}`;
    if (currentIndex === 0) return "Portada";
    if (currentIndex >= totalPages - 1) return `Página ${totalPages}`;
    return `Páginas ${currentIndex}-${currentIndex + 1}`;
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
            <Button variant="outline" size="icon" onClick={goToNextPage} disabled={currentIndex >= totalPages - 1} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full h-12 w-12">
              <ChevronRight className="h-6 w-6"/>
            </Button>
          </>
        )}

        <div 
          className="w-full h-full flex items-center justify-center overflow-hidden p-8"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex justify-center items-stretch transition-transform duration-200 ease-out gap-2"
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
              cursor: isDragging && zoomLevel > 1 ? 'grabbing' : (zoomLevel > 1 ? 'grab' : 'default'),
              height: '90%',
              width: '90%',
              maxWidth: isMobile || currentIndex === 0 || currentIndex >= totalPages-1 ? '50%' : '1600px',
            }}
          >
             {/* Mobile View */}
             {isMobile && (
                <div className="flex justify-center items-center h-full w-full">
                  <Image src={pages[currentIndex]} alt={`Página ${currentIndex + 1}`} width={800} height={1100} className="object-contain h-full w-auto shadow-lg" />
                </div>
             )}

             {/* Desktop View */}
             {!isMobile && (
                <>
                  {currentIndex === 0 && (
                    <div className="w-full h-full flex justify-center items-center">
                        <Image src={pages[0]} alt="Portada" width={800} height={1100} className="object-contain h-full w-auto shadow-lg" />
                    </div>
                  )}
                  {currentIndex > 0 && (
                      <div className="w-full h-full flex justify-center items-center gap-2">
                          <div className="w-1/2 flex justify-end">
                            <Image src={pages[currentIndex - 1]} alt={`Página ${currentIndex}`} width={800} height={1100} className="object-contain h-full w-auto shadow-lg" />
                          </div>
                          <div className="w-1/2 flex justify-start">
                             {currentIndex < totalPages && (
                                <Image src={pages[currentIndex]} alt={`Página ${currentIndex + 1}`} width={800} height={1100} className="object-contain h-full w-auto shadow-lg" />
                             )}
                          </div>
                      </div>
                  )}
                </>
             )}
          </div>
        </div>

        {totalPages > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-background/80 px-3 py-1 rounded-full text-sm">
                {getPageLabel()} / {totalPages}
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
