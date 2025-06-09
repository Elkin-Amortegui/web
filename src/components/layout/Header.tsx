
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Menu, BookOpenText, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { label: 'Inicio', href: '/', tooltip: 'Ir a la página de Inicio' },
  { label: 'Oferta Académica', href: '/oferta-academica', tooltip: 'Explorar nuestra Oferta Académica' },
  { label: 'Quiénes Somos', href: '/quienes-somos', tooltip: 'Conocer más sobre Nosotros' },
  { label: 'Actividades', href: '/actividades', tooltip: 'Ver Actividades y Eventos' },
  { label: 'Noticias', href: '/noticias', tooltip: 'Leer nuestras Noticias' },
  { label: 'Trámites', href: '/tramites', tooltip: 'Consultar Trámites y Procedimientos' },
  { label: 'Tutoriales', href: '/tutoriales', tooltip: 'Ver Tutoriales y Guías' },
  { label: 'Valores', href: '/valores', tooltip: 'Consultar Valores y Tarifas' },
  { label: 'Normativa', href: '/normativa', tooltip: 'Ver la Normativa' },
  { label: 'Inscripciones', href: '/inscripciones', tooltip: 'Información sobre Inscripciones' },
  { label: 'Contacto', href: '/contacto', tooltip: 'Ir a la página de Contacto' },
];

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search-results?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setShowSearch(false); 
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/" className="flex items-center gap-2" aria-label="Página de inicio del Centro de Idiomas UNILLANOS">
              <BookOpenText className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-semibold text-primary hidden sm:inline">Centro de Idiomas UNILLANOS</span>
              <span className="font-headline text-lg font-semibold text-primary sm:hidden">Idiomas UNILLANOS</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Ir a la página de Inicio</p>
          </TooltipContent>
        </Tooltip>
        
        <nav className="hidden md:flex gap-1 items-center flex-wrap justify-end">
          {navItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className="text-xs font-medium text-foreground/80 transition-colors hover:text-primary px-1.5 py-0.5"
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={() => setShowSearch(!showSearch)} className="ml-1 h-8 w-8" aria-label="Abrir/cerrar barra de búsqueda">
                <Search className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Buscar en el sitio</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
               <Link href="/inscripciones" legacyBehavior passHref>
                <a className={cn(buttonVariants({ size: 'sm', className: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground ml-1 h-8 px-3' }))} aria-label="Inscripciones">
                  Inscríbete
                </a>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ir a la página de Inscripciones</p>
            </TooltipContent>
          </Tooltip>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)} aria-label="Abrir/cerrar barra de búsqueda">
                <Search className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Buscar en el sitio</p>
            </TooltipContent>
          </Tooltip>
          <Sheet>
            <Tooltip>
              <TooltipTrigger asChild>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Abrir menú de navegación">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Abrir menú de navegación</p>
              </TooltipContent>
            </Tooltip>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
               <SheetHeader>
                <SheetTitle className="sr-only">Menú Principal</SheetTitle>
              </SheetHeader>
              <nav className="grid gap-4 text-base font-medium mt-8">
                <SheetClose asChild>
                <Link href="/" className="flex items-center gap-2 mb-2" aria-label="Centro de Idiomas UNILLANOS Home">
                  <BookOpenText className="h-6 w-6 text-primary" />
                  <span className="font-headline text-lg font-semibold text-primary">Idiomas UNILLANOS</span>
                </Link>
                </SheetClose>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className="text-foreground/80 transition-colors hover:text-primary py-1"
                      aria-label={item.label}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-3">
                    <Link href="/inscripciones">Inscríbete Ahora</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {showSearch && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-md p-4 z-40">
          <form onSubmit={handleSearchSubmit} className="container mx-auto max-w-screen-md flex gap-2 items-center">
            <Input 
              type="search" 
              placeholder="Buscar en el sitio..." 
              className="flex-grow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Campo de búsqueda"
              autoFocus
            />
            <Button type="submit" size="icon" aria-label="Realizar búsqueda">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => { setShowSearch(false); setSearchTerm(''); }} aria-label="Cerrar búsqueda">
              <X className="h-5 w-5" />
            </Button>
          </form>
        </div>
      )}
    </header>
  );
}
