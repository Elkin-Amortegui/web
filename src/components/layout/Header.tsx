
'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, X, Facebook, Youtube, MessageCircle, ChevronDown, UserCircle, ExternalLink, LibraryBig } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';
import type { TargetAudienceSlug } from '@/app/tutoriales/TutorialData';
import { audienceSlugMap } from '@/app/tutoriales/TutorialData';


interface NavItem {
  title: string;
  href?: string;
  description?: string;
  isButton?: boolean;
  external?: boolean;
  items?: NavItem[];
}

const mainNavItems: NavItem[] = [
  { title: 'Inicio', href: '/' },
  {
    title: 'Académico',
    items: [
      { title: 'Oferta Académica', href: '/oferta-academica', description: 'Cursos de idiomas disponibles.' },
      { title: 'Valores y Tarifas', href: '/valores', description: 'Consulta costos de programas.' },
    ],
  },
  {
    title: 'Comunidad',
    items: [
      { title: 'Actividades y Eventos', href: '/actividades', description: 'Participa en nuestros eventos.' },
      { title: 'Noticias', href: '/noticias', description: 'Mantente informado.' },
    ],
  },
  {
    title: 'Soporte',
    items: [
      { title: 'Trámites', href: '/tramites', description: 'Procesos administrativos.' },
      { title: 'Tutoriales y Guías', href: '/tutoriales', description: 'Ayuda y recursos.' },
    ],
  },
  {
    title: 'Nosotros', 
    items: [
      { title: 'Quiénes Somos', href: '/quienes-somos', description: 'Nuestra historia y misión.' },
      { title: 'Contacto', href: '/contacto', description: 'Comunícate con nosotros.' },
      { title: 'Normativa', href: '/normativa', description: 'Reglamentos y políticas.' },
    ],
  },
];

const topBarSocials = [
  { name: 'Facebook', href: 'https://www.facebook.com/centrodeidiomasunillanos/?locale=es_LA', icon: Facebook, ariaLabel: "Facebook del Centro de Idiomas" },
  { name: 'YouTube', href: 'https://www.youtube.com/@centrodeidiomasdependencia5670?si=x4Bu-K-0tQ-Q8ik3', icon: Youtube, ariaLabel: "YouTube del Centro de Idiomas" },
  { name: 'WhatsApp', href: 'https://wa.me/573112004339?text=Hola,%20quisiera%20más%20información%20sobre%20el%20Centro%20de%20Idiomas.', icon: MessageCircle, ariaLabel: "WhatsApp del Centro de Idiomas" },
];

const yoSoyItems: { label: string; audienceSlug: TargetAudienceSlug }[] = Object.entries(audienceSlugMap)
  .filter(([slug]) => slug !== 'general') 
  .map(([slug, label]) => ({ label, audienceSlug: slug as TargetAudienceSlug }));

const editorialLinks: NavItem[] = [
  { title: 'Plataforma Pearson', href: 'https://www.pearson.com/', external: true, description: 'Recursos y libros de Pearson.' },
  { title: 'Plataforma Oxford', href: 'https://elt.oup.com/', external: true, description: 'Materiales de Oxford University Press.' },
  { title: 'Plataforma Cambridge', href: 'https://www.cambridgeone.org/', external: true, description: 'Herramientas de Cambridge University Press.' },
];


export default function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search-results?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setShowSearchInput(false);
    }
  };

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; children?: React.ReactNode, external?: boolean, isActive?: boolean }
  >(({ className, title, children, href, external, isActive, ...props }, ref) => {
    const linkContent = (
      <>
        <div className="text-sm font-medium leading-none">{title}</div>
        {children && (
            <p className={cn("line-clamp-2 text-xs leading-snug mt-0.5", isActive ? "text-primary-foreground/80" : "text-muted-foreground/90 group-hover:text-primary-foreground/80 group-focus:text-primary-foreground/80")}>
                {children}
            </p>
        )}
        {external && <ExternalLink className={cn("inline-block ml-1 h-3 w-3", isActive ? "text-primary-foreground/90" : "text-muted-foreground group-hover:text-primary-foreground group-focus:text-primary-foreground")} />}
      </>
    );
  
    const commonLinkClasses = cn(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors group",
      isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      className
    );
    
    const linkProps = {
      ...props,
      'data-active': isActive ? 'true' : undefined
    };
  
    if (external) {
      return (
        <li>
          <NavigationMenuLink asChild>
            <a
              href={href || '#'}
              ref={ref}
              target="_blank"
              rel="noopener noreferrer"
              className={commonLinkClasses}
              {...linkProps}
            >
              {linkContent}
            </a>
          </NavigationMenuLink>
        </li>
      );
    }
  
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={href || '#'}
            ref={ref}
            className={commonLinkClasses}
            {...linkProps}
          >
            {linkContent}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem"

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background shadow-sm">
      {/* Top Bar */}
      <div className="bg-accent text-accent-foreground">
        <div className="container mx-auto flex h-10 max-w-screen-2xl items-center justify-between px-4 md:px-6 text-xs">
          <div className="flex items-center gap-3">
            {topBarSocials.map(social => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel} className="hover:opacity-80 transition-opacity">
                    <social.icon className="h-4 w-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom"><p>{social.ariaLabel}</p></TooltipContent>
              </Tooltip>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-auto px-2 py-1 text-xs text-accent-foreground hover:bg-primary/20 hover:text-accent-foreground focus:bg-primary/20">
                      Yo Soy <UserCircle className="ml-1.5 h-4 w-4" /> <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom"><p>Selecciona tu perfil para ver contenido relevante</p></TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="end" className="bg-accent border-primary/50">
                {yoSoyItems.map(item => (
                  <DropdownMenuItem key={item.audienceSlug} asChild className="cursor-pointer hover:!bg-primary/30 focus:!bg-primary/30">
                    <Link href={`/tutoriales?audience=${item.audienceSlug}`} className="text-accent-foreground"> 
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-auto px-2 py-1 text-xs text-accent-foreground hover:bg-primary/20 hover:text-accent-foreground focus:bg-primary/20">
                      MÁS <LibraryBig className="ml-1.5 h-4 w-4" /> <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom"><p>Plataformas de Editoriales y otros recursos</p></TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="end" className="bg-accent border-primary/50">
                {editorialLinks.map(link => (
                  <DropdownMenuItem key={link.title} asChild className="cursor-pointer hover:!bg-primary/30 focus:!bg-primary/30">
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-accent-foreground"> 
                      {link.title} <ExternalLink className="inline-block ml-1 h-3 w-3" />
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setShowSearchInput(!showSearchInput)} className="h-7 w-7 hover:bg-primary/20 text-accent-foreground hover:text-accent-foreground" aria-label="Abrir/cerrar barra de búsqueda">
                  <Search className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom"><p>Buscar en el sitio</p></TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto flex h-24 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center h-full">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://www.unillanos.edu.co/index.php" target="_blank" rel="noopener noreferrer" aria-label="Página principal de Unillanos" className="flex items-center h-full">
                <Image
                  src="/images/logos/logo-universidad.png" 
                  alt="Logo Unillanos"
                  width={64} 
                  height={64} 
                  className="h-16 w-auto"  
                  data-ai-hint="university emblem"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent><p>Ir a Unillanos.edu.co</p></TooltipContent>
          </Tooltip>
          
          <div className="h-16 w-px bg-primary mx-3"></div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/" className="flex items-center h-full" aria-label="Página de inicio del Centro de Idiomas UNILLANOS">
                <Image 
                  src="/images/logos/logo-centro-idiomas-unillanos-color.png" 
                  alt="Logo Centro de Idiomas UNILLANOS" 
                  width={213} 
                  height={64} 
                  className="h-16 w-auto" 
                  data-ai-hint="university language center logo"
                  priority
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent><p>Ir a la página de Inicio del Centro de Idiomas</p></TooltipContent>
          </Tooltip>
        </div>


        <div className="flex items-center gap-2 h-full">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex h-full">
            <NavigationMenuList className="space-x-4 h-full"> 
              {mainNavItems.map((item) => (
                item.href ? (
                  <NavigationMenuItem key={item.title} className="h-full"> 
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "group focus:bg-primary focus:text-primary-foreground data-[active]:bg-primary data-[active]:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground text-sm", {'bg-primary text-primary-foreground': pathname === item.href})}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title} className="h-full"> 
                    <NavigationMenuTrigger
                       className={cn(navigationMenuTriggerStyle(), "group focus:bg-primary focus:text-primary-foreground data-[active]:bg-primary data-[active]:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground text-sm")}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 p-3 w-[480px]">
                        {item.items?.map((subItem) => (
                          <ListItem
                            key={subItem.title}
                            title={subItem.title}
                            href={subItem.href}
                            external={subItem.external}
                            isActive={pathname === subItem.href}
                          >
                            {subItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
           <Tooltip>
            <TooltipTrigger asChild>
               <Link href="/inscripciones" legacyBehavior passHref>
                <a className={cn(buttonVariants({ size: 'default', className: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground hidden md:inline-flex h-10 px-6 rounded-md' }))} aria-label="Inscripciones">
                  Inscríbete
                </a>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ir a la página de Inscripciones</p>
            </TooltipContent>
          </Tooltip>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Abrir menú de navegación" className="h-9 w-9">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Abrir menú</span>
                    </Button>
                  </SheetTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Abrir menú de navegación</p>
                </TooltipContent>
              </Tooltip>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0 flex flex-col">
                <SheetHeader className="p-4 border-b">
                   <SheetTitle className="sr-only">Menú Principal</SheetTitle>
                   <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2" aria-label="Centro de Idiomas UNILLANOS Home">
                       <Image src="/images/logos/logo-centro-idiomas-unillanos-color.png" alt="Logo Centro de Idiomas UNILLANOS" width={40} height={40} data-ai-hint="university language center logo mobile"/>
                       <div>
                        <span className="font-headline text-md font-semibold text-primary">Centro de Idiomas</span> 
                        <span className="block text-xs text-primary/80">UNILLANOS</span>
                       </div>
                    </Link>
                  </SheetClose>
                </SheetHeader>
                <ScrollArea className="flex-grow">
                  <nav className="grid gap-2 p-4 text-sm font-medium">
                    {mainNavItems.map((item) => (
                      item.href ? (
                        <SheetClose asChild key={item.title + '-mobile'}>
                          <Link
                            href={item.href}
                            className={cn("block px-3 py-2 rounded-md hover:bg-muted", pathname === item.href ? 'bg-muted text-primary font-semibold' : 'text-foreground/80')}
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      ) : (
                        <div key={item.title + '-mobile-group'} className="py-1">
                          <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase">{item.title}</p>
                          {item.items?.map((subItem) => (
                            <SheetClose asChild key={subItem.title + '-mobile'}>
                              {subItem.external ? (
                                <a
                                  href={subItem.href || '#'}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={cn("block pl-6 pr-3 py-2 rounded-md hover:bg-muted text-foreground/80")}
                                >
                                  {subItem.title} <ExternalLink className="inline-block ml-1 h-3 w-3" />
                                </a>
                              ) : (
                                <Link
                                  href={subItem.href || '#'}
                                  className={cn("block pl-6 pr-3 py-2 rounded-md hover:bg-muted", pathname === subItem.href ? 'bg-muted text-primary font-semibold' : 'text-foreground/80')}
                                >
                                  {subItem.title}
                                </Link>
                              )}
                            </SheetClose>
                          ))}
                        </div>
                      )
                    ))}
                  </nav>
                </ScrollArea>
                <div className="p-4 border-t">
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <Link href="/inscripciones">Inscríbete Ahora</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Input Overlay */}
      {showSearchInput && (
        <div className="absolute top-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-b shadow-md p-4 z-40 h-full md:h-auto">
          <div className="container mx-auto max-w-screen-md flex flex-col md:flex-row gap-2 items-center h-full justify-center md:h-auto md:py-2">
            <form onSubmit={handleSearchSubmit} className="w-full flex gap-2 items-center">
              <Input
                type="search"
                placeholder="Buscar en el sitio..."
                className="flex-grow h-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Campo de búsqueda"
                autoFocus
              />
              <Button type="submit" size="icon" aria-label="Realizar búsqueda" className="h-10 w-10">
                <Search className="h-5 w-5" />
              </Button>
            </form>
            <Button variant="ghost" size="icon" onClick={() => { setShowSearchInput(false); setSearchTerm(''); }} aria-label="Cerrar búsqueda" className="h-10 w-10 md:ml-2">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
