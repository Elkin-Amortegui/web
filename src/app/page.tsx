
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpenText, Users, Newspaper, Languages, Tv, ChevronLeft, ChevronRight, ClipboardList, CalendarDays, Lightbulb, HelpCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems as allFaqItems } from '@/app/preguntas-frecuentes/faqData';

// Data imports
import { articles as newsData, type NewsArticle } from '@/app/noticias/NewsData'; 
import { tramitesData, type Tramite } from '@/app/tramites/TramiteData';

const languageHighlights = [
  { name: 'Inglés', icon: Languages },
  { name: 'Francés', icon: Languages },
  { name: 'Alemán', icon: Languages },
  { name: 'Portugués', icon: Languages },
];

const modalityHighlights = [
  { name: 'Presencial', icon: Users },
  { name: 'Semi-intensivo', icon: Tv },
  { name: 'Intensivo', icon: Tv },
];

const heroImages = [
  { src: 'https://placehold.co/1920x700/00723F/FFFFFF?text=Centro+de+Idiomas', alt: 'Centro de Idiomas UNILLANOS', aiHint: 'university building languages', title: 'Transforma tu futuro aprendiendo idiomas', description: 'En el Centro de Idiomas de la Universidad de los Llanos te ofrecemos programas de alta calidad para alcanzar tus metas personales y profesionales.' },
  { src: 'https://placehold.co/1920x700/FFD100/333333?text=Estudiantes+Felices', alt: 'Estudiantes aprendiendo en UNILLANOS', aiHint: 'students classroom learning', title: 'Nuevas Culturas, Nuevas Oportunidades', description: 'Domina un nuevo idioma y expande tus horizontes académicos y laborales con nuestros expertos.' },
  { src: 'https://placehold.co/1920x700/005DAA/FFFFFF?text=Conexión+Global', alt: 'Conexión Global a través de los Idiomas', aiHint: 'global culture travel', title: 'Comunícate con el Mundo', description: 'Aprende inglés, francés, alemán o portugués y conéctate con personas de todo el planeta.' },
];

interface CombinedItem {
  id: string;
  type: 'noticia' | 'tramite';
  slug: string;
  title: string;
  date: string;
  image?: string;
  aiHint?: string;
  excerpt?: string; // Added for news in tabs
}

const faqItemsForHomepage = allFaqItems.slice(0, 10);


const getLatestItems = <T extends { date: string }>(items: T[], count: number): T[] => {
  return [...items]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export default function HomePage() {
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const [latestNewsForTabs, setLatestNewsForTabs] = useState<NewsArticle[]>([]);
  const [latestTramitesForTabs, setLatestTramitesForTabs] = useState<Tramite[]>([]);
  
  const [featuredItems, setFeaturedItems] = useState<CombinedItem[]>([]);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHeroImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 7000);
    
    setLatestNewsForTabs(getLatestItems(newsData, 3));
    setLatestTramitesForTabs(getLatestItems(tramitesData, 3));

    const latest3NewsForCarousel = getLatestItems(newsData, 3).map(n => ({ ...n, type: 'noticia' as const }));
    const latest3TramitesForCarousel = getLatestItems(tramitesData, 3).map(t => ({ ...t, type: 'tramite' as const }));
    
    const combined = [...latest3TramitesForCarousel, ...latest3NewsForCarousel]
      .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()) 
      .slice(0,6); 

    setFeaturedItems(combined);
    
    let featuredTimerId: NodeJS.Timeout | undefined;
    if (combined.length > 0) {
      featuredTimerId = setInterval(() => {
        setCurrentFeaturedIndex((prevIndex) => (prevIndex + 1) % combined.length);
      }, 5000);
    }

    return () => {
      clearInterval(heroTimer);
      if (featuredTimerId) {
        clearInterval(featuredTimerId);
      }
    };
  }, []);

  const goToHeroPrevious = () => {
    setCurrentHeroImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  const goToHeroNext = () => {
    setCurrentHeroImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const goToFeaturedPrevious = () => {
    if (featuredItems.length === 0) return;
    setCurrentFeaturedIndex((prevIndex) => (prevIndex - 1 + featuredItems.length) % featuredItems.length);
  };

  const goToFeaturedNext = () => {
    if (featuredItems.length === 0) return;
    setCurrentFeaturedIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  return (
    <>
      {/* Hero Section with Carousel */}
      <section id="hero" className="relative text-white py-20 md:py-32 flex items-center justify-center text-center overflow-hidden h-[550px] md:h-[calc(100vh-4rem)] min-h-[500px]">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentHeroImageIndex ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-105'
            } ${
              (index < currentHeroImageIndex && currentHeroImageIndex !== 0) || (currentHeroImageIndex === 0 && index === heroImages.length -1 && heroImages.length > 1) ? 
              (index === currentHeroImageIndex ? '' : '-translate-x-full') : 
              (index > currentHeroImageIndex && currentHeroImageIndex !== heroImages.length -1) || (currentHeroImageIndex === heroImages.length -1 && index === 0 && heroImages.length > 1) ? 
              (index === currentHeroImageIndex ? '' : 'translate-x-full') : ''
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill // Changed layout to fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Added sizes
              className="absolute inset-0 z-0 object-cover" // ensure object-cover
              data-ai-hint={image.aiHint}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50 z-0"></div>
          </div>
        ))}

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <BookOpenText className="mx-auto h-16 w-16 mb-6 text-secondary" />
          <div key={currentHeroImageIndex} className="animate-in fade-in-0 slide-in-from-bottom-10 duration-700">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">
              {heroImages[currentHeroImageIndex].title}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              {heroImages[currentHeroImageIndex].description}
            </p>
          </div>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link href="/oferta-academica">Descubre nuestros cursos</Link>
          </Button>
        </div>
        
        <button 
          onClick={goToHeroPrevious} 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors"
          aria-label="Imagen anterior del carrusel principal"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={goToHeroNext} 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors"
          aria-label="Siguiente imagen del carrusel principal"
        >
          <ChevronRight size={32} />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImageIndex(index)}
              className={`h-3 w-3 rounded-full transition-all ${index === currentHeroImageIndex ? 'bg-secondary scale-125' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Ir a imagen ${index + 1} del carrusel principal`}
            ></button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-4">Idiomas Disponibles</h2>
              <p className="text-lg text-foreground/80 mb-6">
                Ofrecemos una variedad de idiomas para que elijas el que más se adapte a tus intereses y necesidades.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {languageHighlights.map(lang => (
                  <div key={lang.name} className="flex items-center gap-3 p-3 bg-card rounded-lg shadow hover:shadow-md transition-shadow">
                    <lang.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-4">Modalidades de Estudio</h2>
              <p className="text-lg text-foreground/80 mb-6">
                Nuestros cursos se adaptan a tu ritmo de vida con diversas modalidades de aprendizaje.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {modalityHighlights.map(mod => (
                  <div key={mod.name} className="flex items-center gap-3 p-3 bg-card rounded-lg shadow hover:shadow-md transition-shadow">
                    <mod.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{mod.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News & Tramites Carousel Section */}
      {featuredItems.length > 0 && (
        <section id="featured-carousel" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Lightbulb className="mx-auto h-12 w-12 text-primary mb-4" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">
                Destacados Recientes
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Explora nuestras noticias y trámites más importantes.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="overflow-hidden relative h-80 md:h-96 rounded-lg shadow-xl border">
                {featuredItems.map((item, index) => (
                  <div
                    key={item.id + item.type}
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                      index === currentFeaturedIndex ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-105'
                    } `}
                  >
                    <Image
                      src={item.image || 'https://placehold.co/600x400/muted/foreground?text=Destacado'}
                      alt={item.title} // Alt text is still important for accessibility
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="absolute inset-0 z-0 object-cover"
                      data-ai-hint={item.aiHint || (item.type === 'noticia' ? 'news highlight' : 'procedure highlight')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-0 flex flex-col items-center justify-end p-6 text-center">
                      {/* Title removed as per request */}
                      <Button asChild size="sm" variant="secondary" className="mt-auto">
                        <Link href={`/${item.type === 'noticia' ? 'noticias' : 'tramites'}/${item.slug}`}>
                          Ver Más
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {featuredItems.length > 1 && (
                <>
                  <button 
                    onClick={goToFeaturedPrevious} 
                    className="absolute top-1/2 left-[-1rem] md:left-[-2rem] transform -translate-y-1/2 z-20 p-2 bg-card/80 hover:bg-card rounded-full text-primary shadow-md"
                    aria-label="Destacado anterior"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button 
                    onClick={goToFeaturedNext} 
                    className="absolute top-1/2 right-[-1rem] md:right-[-2rem] transform -translate-y-1/2 z-20 p-2 bg-card/80 hover:bg-card rounded-full text-primary shadow-md"
                    aria-label="Siguiente destacado"
                  >
                    <ChevronRight size={28} />
                  </button>
                  <div className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                    {featuredItems.map((_, index) => (
                      <button
                        key={`dot-${index}`}
                        onClick={() => setCurrentFeaturedIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full transition-all ${index === currentFeaturedIndex ? 'bg-primary scale-110' : 'bg-muted-foreground/50 hover:bg-muted-foreground/75'}`}
                        aria-label={`Ir a destacado ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* Latest News & Tramites Tabs Section */}
      <section id="latest-updates" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center">
                 <Newspaper className="h-10 w-10 text-primary mr-2" />
                 <ClipboardList className="h-10 w-10 text-primary ml-2" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mt-4 mb-3">
              Últimas Novedades
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Mantente al día con las noticias y trámites más recientes de nuestro Centro de Idiomas.
            </p>
          </div>

          <Tabs defaultValue="tramites" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="tramites">Trámites Recientes</TabsTrigger>
              <TabsTrigger value="noticias">Noticias Recientes</TabsTrigger>
            </TabsList>
            <TabsContent value="tramites">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestTramitesForTabs.map(tramite => (
                  <Card key={tramite.id} className="flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                      <CardHeader>
                        <CardTitle className="font-headline text-lg text-primary hover:text-primary/80">
                          <Link href={`/tramites/${tramite.slug}`}>{tramite.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground flex items-center gap-1">
                          <CalendarDays className="h-3 w-3"/> {formatDate(tramite.date)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow pt-0">
                        <p className="text-sm text-foreground/80 line-clamp-3">{tramite.excerpt}</p>
                      </CardContent>
                      <div className="p-4 pt-0">
                        <Button variant="link" asChild className="p-0 h-auto text-sm text-secondary hover:text-secondary/80">
                          <Link href={`/tramites/${tramite.slug}`}>Leer más &rarr;</Link>
                        </Button>
                      </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline" size="sm">
                  <Link href="/tramites">Ver todos los trámites</Link>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="noticias">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestNewsForTabs.map(news => (
                  <Card key={news.id} className="flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                      <CardHeader>
                        <CardTitle className="font-headline text-lg text-primary hover:text-primary/80">
                          <Link href={`/noticias/${news.slug}`}>{news.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground flex items-center gap-1">
                          <CalendarDays className="h-3 w-3"/> {formatDate(news.date)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow pt-0">
                        <p className="text-sm text-foreground/80 line-clamp-3">{news.excerpt}</p>
                      </CardContent>
                      <div className="p-4 pt-0">
                        <Button variant="link" asChild className="p-0 h-auto text-sm text-secondary hover:text-secondary/80">
                          <Link href={`/noticias/${news.slug}`}>Leer más &rarr;</Link>
                        </Button>
                      </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline" size="sm">
                  <Link href="/noticias">Ver todas las noticias</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              ¿Tienes dudas? Aquí resolvemos las más comunes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] animate-in fade-in-0 slide-in-from-left-10 duration-700">
               <Image 
                src="https://placehold.co/600x750/e0f2fe/0c4a6e?text=Dudas%3F"
                alt="Persona con dudas señalando las preguntas frecuentes"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover shadow-xl"
                data-ai-hint="person thinking pointing"
               />
            </div>
            <div className="animate-in fade-in-0 slide-in-from-right-10 duration-700">
              <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                {faqItemsForHomepage.map((item) => (
                  <AccordionItem value={item.value} key={item.value}>
                    <AccordionTrigger className="text-lg text-left hover:text-primary transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-foreground/80 pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
               <Button asChild variant="outline" className="mt-8">
                 <Link href="/preguntas-frecuentes">Ver más preguntas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
