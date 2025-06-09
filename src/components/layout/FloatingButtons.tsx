
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import {
  Settings2, Mic, Volume2, ZoomIn, ZoomOut, Link as LinkIconLucide, Palette, Droplets, Type, Pilcrow, RotateCcw, ExternalLink, TextCursorInput, Baseline, AlignHorizontalSpaceAround, MessageCircle, PlusCircle, MinusCircle, Hand, Accessibility as AccessibilityIcon
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'; // TooltipProvider removed from here

const FONT_SIZE_STEPS = [-0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5]; // Relative to base
const SPACING_STEPS = [-0.02, -0.01, 0, 0.01, 0.02, 0.03]; // For letter spacing (em)
const LINE_HEIGHT_STEPS = [-0.2, -0.1, 0, 0.1, 0.2, 0.3]; // For line height (added to base)
const CURSOR_SIZE_STEPS_PX = [20, 28, 36, 44, 52, 60]; // Pixel sizes for custom cursor

const CUSTOM_CURSOR_ID = 'custom-cursor-element';

export default function FloatingButtons() {
  const [isMounted, setIsMounted] = useState(false);
  
  const [fontSizeLevel, setFontSizeLevel] = useState(2); 
  const [letterSpacingLevel, setLetterSpacingLevel] = useState(2);
  const [lineHeightLevel, setLineHeightLevel] = useState(2); 

  const [isGrayscaleModeActive, setIsGrayscaleModeActive] = useState(false);
  const [isInvertColorsActive, setIsInvertColorsActive] = useState(false);
  const [isUnderlineLinksActive, setIsUnderlineLinksActive] = useState(false);
  
  const [isCustomCursorActive, setIsCustomCursorActive] = useState(false);
  const [customCursorSizeLevel, setCustomCursorSizeLevel] = useState(1); // Index for CURSOR_SIZE_STEPS_PX

  const [isReadingGuideActive, setIsReadingGuideActive] = useState(false);
  const readingGuideRef = useRef<HTMLDivElement | null>(null);
  
  const [isTextToSpeechActive, setIsTextToSpeechActive] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;
    }

    if (!readingGuideRef.current && typeof document !== 'undefined') {
        const guide = document.createElement('div');
        guide.className = 'reading-guide-line';
        guide.style.display = 'none'; 
        document.body.appendChild(guide);
        readingGuideRef.current = guide;
    }

    let customCursorElement = document.getElementById(CUSTOM_CURSOR_ID);
    if (!customCursorElement && typeof document !== 'undefined') {
      customCursorElement = document.createElement('div');
      customCursorElement.id = CUSTOM_CURSOR_ID;
      document.body.appendChild(customCursorElement);
    }
    if (customCursorElement) {
      customCursorElement.style.display = 'none'; 
    }
    
    return () => {
        if (readingGuideRef.current && readingGuideRef.current.parentNode) {
            readingGuideRef.current.parentNode.removeChild(readingGuideRef.current);
            readingGuideRef.current = null;
        }
        const existingCursor = document.getElementById(CUSTOM_CURSOR_ID);
        if (existingCursor && existingCursor.parentNode) {
          existingCursor.parentNode.removeChild(existingCursor);
        }
        if (typeof document !== 'undefined') {
          document.body.style.cursor = ''; 
        }
        const synth = synthRef.current;
        if (synth && synth.speaking) {
            synth.cancel();
        }
    };
  }, []);

  const applyStyles = useCallback(() => {
    if (!isMounted || typeof document === 'undefined') return;
    const docEl = document.documentElement;

    docEl.style.setProperty('--font-scale-offset', `${FONT_SIZE_STEPS[fontSizeLevel]}rem`);
    docEl.classList.toggle('acc-text-scaled', fontSizeLevel !== 2);

    docEl.style.setProperty('--letter-spacing-offset', `${SPACING_STEPS[letterSpacingLevel]}em`);
    docEl.classList.toggle('acc-letter-spacing-scaled', letterSpacingLevel !== 2);

    docEl.style.setProperty('--line-height-offset', `${LINE_HEIGHT_STEPS[lineHeightLevel]}`);
    docEl.classList.toggle('acc-line-height-scaled', lineHeightLevel !== 2);
    
    const filters = [];
    if (isGrayscaleModeActive) filters.push('grayscale(1)');
    if (isInvertColorsActive) filters.push('invert(1) hue-rotate(180deg)'); 
    
    docEl.style.filter = filters.join(' ');
    docEl.classList.toggle('acc-filters-active', filters.length > 0);

    docEl.classList.toggle('acc-underline-links', isUnderlineLinksActive);

  }, [isMounted, fontSizeLevel, letterSpacingLevel, lineHeightLevel, isGrayscaleModeActive, isInvertColorsActive, isUnderlineLinksActive]);

  useEffect(() => {
    applyStyles();
  }, [applyStyles]);

  const resetAccessibilitySettings = () => {
    setFontSizeLevel(2);
    setLetterSpacingLevel(2);
    setLineHeightLevel(2);
    setIsGrayscaleModeActive(false);
    setIsInvertColorsActive(false);
    setIsUnderlineLinksActive(false);
    
    setIsCustomCursorActive(false);
    setCustomCursorSizeLevel(1);

    setIsReadingGuideActive(false); 
    const synth = synthRef.current;
    if (isTextToSpeechActive && synth && synth.speaking) {
      synth.cancel();
    }
    setIsTextToSpeechActive(false); 
  };
  
  const changeFontSize = (direction: 'increase' | 'decrease') => {
    setFontSizeLevel(prev => {
      const newLevel = direction === 'increase' ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(FONT_SIZE_STEPS.length - 1, newLevel));
    });
  };

  const changeLetterSpacing = (direction: 'increase' | 'decrease') => {
    setLetterSpacingLevel(prev => {
      const newLevel = direction === 'increase' ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(SPACING_STEPS.length - 1, newLevel));
    });
  };
  
  const changeLineHeight = (direction: 'increase' | 'decrease') => {
    setLineHeightLevel(prev => {
      const newLevel = direction === 'increase' ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(LINE_HEIGHT_STEPS.length - 1, newLevel));
    });
  };

  const handleMouseMoveForReadingGuide = useCallback((e: MouseEvent) => {
    if (readingGuideRef.current) {
      readingGuideRef.current.style.top = `${e.clientY}px`;
    }
  }, []);

  useEffect(() => {
    if (!isMounted || typeof document === 'undefined') return;
    const guide = readingGuideRef.current;
    if (isReadingGuideActive && guide) {
      guide.style.display = 'block';
      document.addEventListener('mousemove', handleMouseMoveForReadingGuide);
    } else if (guide) {
      guide.style.display = 'none';
      document.removeEventListener('mousemove', handleMouseMoveForReadingGuide);
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousemove', handleMouseMoveForReadingGuide);
      }
      if (guide) guide.style.display = 'none'; 
    };
  }, [isReadingGuideActive, handleMouseMoveForReadingGuide, isMounted]);

  const handleMouseMoveForCustomCursor = useCallback((e: MouseEvent) => {
    const cursorEl = document.getElementById(CUSTOM_CURSOR_ID);
    if (cursorEl) {
      cursorEl.style.left = `${e.clientX}px`;
      cursorEl.style.top = `${e.clientY}px`;
    }
  }, []);

  useEffect(() => {
    if (!isMounted || typeof document === 'undefined') return;
    const cursorEl = document.getElementById(CUSTOM_CURSOR_ID);
    if (cursorEl) {
      if (isCustomCursorActive) {
        const size = CURSOR_SIZE_STEPS_PX[customCursorSizeLevel];
        cursorEl.style.width = `${size}px`;
        cursorEl.style.height = `${size}px`;
        cursorEl.style.display = 'block';
        document.body.style.cursor = 'none';
        document.addEventListener('mousemove', handleMouseMoveForCustomCursor);
      } else {
        cursorEl.style.display = 'none';
        document.body.style.cursor = '';
        document.removeEventListener('mousemove', handleMouseMoveForCustomCursor);
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
         document.removeEventListener('mousemove', handleMouseMoveForCustomCursor);
         document.body.style.cursor = ''; 
      }
      if (cursorEl) cursorEl.style.display = 'none';
    };
  }, [isCustomCursorActive, customCursorSizeLevel, handleMouseMoveForCustomCursor, isMounted]);

  const changeCustomCursorSize = (direction: 'increase' | 'decrease') => {
    setCustomCursorSizeLevel(prev => {
      const newLevel = direction === 'increase' ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(CURSOR_SIZE_STEPS_PX.length - 1, newLevel));
    });
  };

  const handleTTSClick = useCallback((event: MouseEvent) => {
    const synth = synthRef.current;
    if (!synth) return;
    if (synth.speaking) synth.cancel();

    const target = event.target as HTMLElement;
    let textToSpeak = '';

    if (target.getAttribute('aria-label')) {
      textToSpeak = target.getAttribute('aria-label')!;
    } 
    else if (target instanceof HTMLImageElement && target.alt) {
      textToSpeak = target.alt;
    } 
    else if (target.getAttribute('data-ai-hint')) {
      textToSpeak = target.getAttribute('data-ai-hint')!;
    }
    else if (target.textContent) {
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0 && target.contains(selection.anchorNode)) {
          textToSpeak = selection.toString().trim();
      } else {
          const interactiveParent = target.closest('a, button, h1, h2, h3, h4, h5, h6, p, li, [role="button"], [role="link"], [data-ai-hint]');
          if (interactiveParent) {
              textToSpeak = interactiveParent.getAttribute('aria-label') || 
                            (interactiveParent instanceof HTMLImageElement ? interactiveParent.alt : '') ||
                            interactiveParent.getAttribute('data-ai-hint') ||
                            (interactiveParent as HTMLElement).innerText || 
                            interactiveParent.textContent || '';
          } else {
            textToSpeak = target.innerText || target.textContent || '';
          }
      }
    }
    
    textToSpeak = textToSpeak.trim().replace(/\s+/g, ' '); 

    if (textToSpeak) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'es-CO'; 
      synth.speak(utterance);
    }
  }, []);


  useEffect(() => {
    if (!isMounted || typeof document === 'undefined') return;
    const synth = synthRef.current;
    if (isTextToSpeechActive) {
      document.addEventListener('click', handleTTSClick, true); 
    } else {
      document.removeEventListener('click', handleTTSClick, true);
      if (synth && synth.speaking) {
        synth.cancel();
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('click', handleTTSClick, true);
      }
       if (synth && synth.speaking) {
        synth.cancel();
      }
    };
  }, [isTextToSpeechActive, handleTTSClick, isMounted]);

  const toggleTextToSpeech = () => {
    const synth = synthRef.current;
    if (!isMounted || !synth) {
      if (typeof alert !== 'undefined') alert('Tu navegador no soporta Texto a Voz o aún no está listo.');
      return;
    }
    if (isTextToSpeechActive && synth.speaking) {
      synth.cancel();
    }
    setIsTextToSpeechActive(prev => !prev);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link 
            href="https://wa.me/573112004339?text=Hola,%20quisiera%20más%20información%20sobre%20el%20Centro%20de%20Idiomas." 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center h-14 w-14"
          >
            <MessageCircle className="h-8 w-8" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Contactar por WhatsApp</p>
        </TooltipContent>
      </Tooltip>

      <Sheet>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                className="fixed bottom-6 left-6 z-50 rounded-full shadow-lg bg-background hover:bg-muted border-primary text-primary h-14 w-14 p-0 flex items-center justify-center"
                aria-label="Abrir panel de accesibilidad"
              >
                <AccessibilityIcon className="h-8 w-8" />
              </Button>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Opciones de Accesibilidad</p>
          </TooltipContent>
        </Tooltip>
        <SheetContent side="left" className="w-[350px] sm:w-[400px] flex flex-col">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2 text-primary text-lg">
              <AccessibilityIcon className="h-6 w-6" />
              Opciones de Accesibilidad
            </SheetTitle>
            <SheetDescription>
              {/* Text removed as per request */}
            </SheetDescription>
          </SheetHeader>
          
          <div className="py-4 space-y-3 overflow-y-auto flex-grow">
            <Button onClick={resetAccessibilitySettings} variant="destructive" className="w-full mb-3 text-base py-2.5 h-auto">
              <RotateCcw className="mr-2 h-5 w-5" /> Restablecer Ajustes
            </Button>

            <div className="p-2.5 border rounded-md bg-card space-y-2">
              <Label className="flex items-center text-sm text-card-foreground"><Type className="mr-2 h-5 w-5 text-primary" />Tamaño del Texto</Label>
              <div className="flex gap-2">
                <Button onClick={() => changeFontSize('decrease')} variant="outline" size="sm" className="flex-1" aria-label="Disminuir tamaño del texto" disabled={fontSizeLevel === 0}>
                  <ZoomOut className="mr-1 h-4 w-4" /> Disminuir
                </Button>
                <Button onClick={() => changeFontSize('increase')} variant="outline" size="sm" className="flex-1" aria-label="Aumentar tamaño del texto" disabled={fontSizeLevel === FONT_SIZE_STEPS.length - 1}>
                  <ZoomIn className="mr-1 h-4 w-4" /> Aumentar
                </Button>
              </div>
            </div>
            
            <div className="p-2.5 border rounded-md bg-card space-y-2">
              <Label className="flex items-center text-sm text-card-foreground"><AlignHorizontalSpaceAround className="mr-2 h-5 w-5 text-primary" />Espaciado de Texto</Label>
              <div className="space-y-1">
                 <p className="text-xs text-muted-foreground ml-1">Interlineado:</p>
                 <div className="flex gap-2">
                    <Button onClick={() => changeLineHeight('decrease')} variant="outline" size="sm" className="flex-1" aria-label="Disminuir interlineado" disabled={lineHeightLevel === 0}>
                      <Baseline className="mr-1 h-4 w-4" /> Disminuir
                    </Button>
                    <Button onClick={() => changeLineHeight('increase')} variant="outline" size="sm" className="flex-1" aria-label="Aumentar interlineado" disabled={lineHeightLevel === LINE_HEIGHT_STEPS.length - 1}>
                      <Baseline className="mr-1 h-4 w-4" /> Aumentar
                    </Button>
                 </div>
                 <p className="text-xs text-muted-foreground ml-1 pt-1">Espacio entre letras:</p>
                 <div className="flex gap-2">
                    <Button onClick={() => changeLetterSpacing('decrease')} variant="outline" size="sm" className="flex-1" aria-label="Disminuir espacio entre letras" disabled={letterSpacingLevel === 0}>
                      <TextCursorInput className="mr-1 h-4 w-4" /> Disminuir
                    </Button>
                    <Button onClick={() => changeLetterSpacing('increase')} variant="outline" size="sm" className="flex-1" aria-label="Aumentar espacio entre letras" disabled={letterSpacingLevel === SPACING_STEPS.length - 1}>
                      <TextCursorInput className="mr-1 h-4 w-4" /> Aumentar
                    </Button>
                 </div>
              </div>
            </div>
            
            {[
              { id: 'grayscaleMode', label: 'Modo Grises', icon: Palette, isActive: isGrayscaleModeActive, toggle: () => setIsGrayscaleModeActive(p => !p) },
              { id: 'invertColors', label: 'Invertir Colores', icon: Droplets, isActive: isInvertColorsActive, toggle: () => setIsInvertColorsActive(p => !p) },
              { id: 'underlineLinks', label: 'Subrayar Enlaces', icon: LinkIconLucide, isActive: isUnderlineLinksActive, toggle: () => setIsUnderlineLinksActive(p => !p) },
            ].map(option => (
              <div key={option.id} className="flex items-center justify-between p-2.5 border rounded-md bg-card hover:bg-muted/50 transition-colors">
                <Label htmlFor={option.id + '-btn'} className="text-sm flex items-center text-card-foreground cursor-pointer">
                  <option.icon className="mr-2 h-5 w-5 text-primary" />
                  {option.label}
                </Label>
                <Button 
                  id={option.id + '-btn'}
                  size="sm" 
                  variant={option.isActive ? "secondary" : "outline"}
                  onClick={option.toggle}
                  className="min-w-[100px]"
                  aria-pressed={option.isActive}
                  aria-label={`${option.isActive ? "Desactivar" : "Activar"} ${option.label}`}
                >
                  {option.isActive ? "Desactivar" : "Activar"}
                </Button>
              </div>
            ))}

            <div className="p-2.5 border rounded-md bg-card space-y-2">
              <Label className="flex items-center text-sm text-card-foreground"><Hand className="mr-2 h-5 w-5 text-primary" />Cursor Personalizado</Label>
              <Button 
                  size="sm" 
                  variant={isCustomCursorActive ? "secondary" : "outline"}
                  onClick={() => setIsCustomCursorActive(p => !p)}
                  className="w-full mb-1"
                  aria-pressed={isCustomCursorActive}
                  aria-label={`${isCustomCursorActive ? "Desactivar" : "Activar"} cursor personalizado`}
                >
                  {isCustomCursorActive ? "Desactivar Cursor" : "Activar Cursor"}
              </Button>
              <div className="flex gap-2">
                <Button onClick={() => changeCustomCursorSize('decrease')} variant="outline" size="sm" className="flex-1" aria-label="Disminuir tamaño del cursor" disabled={!isCustomCursorActive || customCursorSizeLevel === 0}>
                  <MinusCircle className="mr-1 h-4 w-4" /> Disminuir
                </Button>
                <Button onClick={() => changeCustomCursorSize('increase')} variant="outline" size="sm" className="flex-1" aria-label="Aumentar tamaño del cursor" disabled={!isCustomCursorActive || customCursorSizeLevel === CURSOR_SIZE_STEPS_PX.length - 1}>
                  <PlusCircle className="mr-1 h-4 w-4" /> Aumentar
                </Button>
              </div>
            </div>
            
            {[
              { id: 'readingGuide', label: 'Guía de Lectura', icon: Pilcrow, isActive: isReadingGuideActive, toggle: () => setIsReadingGuideActive(p => !p) },
              { id: 'textToSpeech', label: 'Texto a Voz', icon: Volume2, isActive: isTextToSpeechActive, toggle: toggleTextToSpeech, activeLabel: isTextToSpeechActive ? 'Detener Lectura' : 'Activar Click-para-Leer', inactiveLabel: 'Activar Click-para-Leer' },
            ].map(option => (
              <div key={option.id} className="flex items-center justify-between p-2.5 border rounded-md bg-card hover:bg-muted/50 transition-colors">
                <Label htmlFor={option.id + '-btn'} className="text-sm flex items-center text-card-foreground cursor-pointer">
                  <option.icon className="mr-2 h-5 w-5 text-primary" />
                  {option.label}
                </Label>
                <Button 
                  id={option.id + '-btn'}
                  size="sm" 
                  variant={option.isActive ? "secondary" : "outline"}
                  onClick={option.toggle}
                  className="min-w-[100px]"
                  aria-pressed={option.isActive}
                  aria-label={`${option.isActive ? (option.activeLabel || "Desactivar") : (option.inactiveLabel || "Activar")} ${option.label}`}
                >
                  {option.isActive 
                    ? (option.activeLabel || "Desactivar") 
                    : (option.inactiveLabel || "Activar")}
                </Button>
              </div>
            ))}
            
            <Button asChild variant="outline" className="w-full">
              <Link href="https://www.unillanos.edu.co/index.php?option=com_content&view=article&id=5092" target="_blank" rel="noopener noreferrer">
                Ayudas para Discapacidad Visual <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground text-center px-2">
             (JAWS y ZOOMTEXT)
            </p>

          </div>
          <SheetHeader className="mt-auto border-t pt-4">
            <SheetTitle className="sr-only">Panel de Accesibilidad</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
