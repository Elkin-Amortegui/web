
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageLightboxProps {
  src: string;
  alt: string;
  triggerClassName?: string;
  aiHint?: string;
  width?: number;
  height?: number;
}

export default function ImageLightbox({ 
  src, 
  alt, 
  triggerClassName,
  aiHint,
  width = 350, // Default width for trigger image
  height = 495 // Default height for trigger image
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomLevel <= 1) return;
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

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleClose = () => {
    setIsOpen(false);
    handleResetZoom(); // Reset zoom and position when closing
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) handleResetZoom();
    }}>
      <DialogTrigger asChild>
        <div 
          className={cn("cursor-pointer w-full relative", triggerClassName)}
          style={{ aspectRatio: `${width}/${height}` }}
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(true); }}
          aria-label={`Abrir imagen: ${alt}`}
        >
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-md border"
            data-ai-hint={aiHint}
            priority
          />
        </div>
      </DialogTrigger>
      <DialogContent 
        className="max-w-[90vw] max-h-[90vh] w-auto h-auto p-2 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden"
        onEscapeKeyDown={handleClose}
        onInteractOutside={handleClose}
        onMouseUp={handleMouseUp} // Handle mouse up on content for smoother drag release
      >
        <div className="absolute top-2 right-2 z-20 flex gap-2">
          <Button variant="outline" size="icon" onClick={handleZoomIn} aria-label="Acercar imagen">
            <ZoomIn className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleZoomOut} aria-label="Alejar imagen" disabled={zoomLevel <= 0.5}>
            <ZoomOut className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleResetZoom} aria-label="Restablecer zoom">
            <RotateCcw className="h-5 w-5" />
          </Button>
           <DialogClose asChild>
             <Button variant="outline" size="icon" aria-label="Cerrar visor de imagen" onClick={handleClose}>
                <X className="h-5 w-5" />
             </Button>
           </DialogClose>
        </div>
        
        <div 
          className="w-full h-full flex items-center justify-center overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp} // Also stop dragging if mouse leaves content area
        >
          <Image
            src={src}
            alt={alt}
            width={1200} // Intrinsic width, actual display controlled by CSS & zoom
            height={1600} // Intrinsic height
            quality={90}
            className="transition-transform duration-200 ease-out"
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
              cursor: isDragging && zoomLevel > 1 ? 'grabbing' : (zoomLevel > 1 ? 'grab' : 'default'),
              maxWidth: '100%',
              maxHeight: 'calc(90vh - 60px)', // Account for buttons
              objectFit: 'contain',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
