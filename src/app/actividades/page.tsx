
'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, LocateIcon, ClockIcon, TagIcon, Users } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { actividadesData, Actividad } from './ActividadData';
import { format, parseISO, startOfMonth, endOfMonth, isWithinInterval, getMonth, getYear, addMonths, subMonths, setMonth } from 'date-fns';
import { es } from 'date-fns/locale';

const ITEMS_PER_PAGE = 3; // For banner carousel

export default function ActividadesPage() {
  const [currentDate, setCurrentDate] = useState(new Date()); // For calendar navigation
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const destacadas = useMemo(() => actividadesData.filter(a => a.type === 'destacada' || a.type === 'proxima').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), []);
  const pasadas = useMemo(() => actividadesData.filter(a => a.type === 'pasada').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 6), []); // Show latest 6 past activities
  const proximas = useMemo(() => actividadesData.filter(a => a.type === 'proxima').sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()), []);

  useEffect(() => {
    if (destacadas.length > ITEMS_PER_PAGE) {
      const timer = setInterval(() => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % (destacadas.length - ITEMS_PER_PAGE + 1));
      }, 7000);
      return () => clearInterval(timer);
    }
  }, [destacadas.length]);
  
  const goToPreviousBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + destacadas.length) % destacadas.length );
  };

  const goToNextBanner = () => {
     setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % destacadas.length);
  };


  const eventsByMonth = useMemo(() => {
    return proximas.filter(actividad => {
      const activityDate = parseISO(actividad.date);
      return getYear(activityDate) === getYear(currentDate) && getMonth(activityDate) === getMonth(currentDate);
    });
  }, [proximas, currentDate]);

  const eventDays = useMemo(() => {
    return proximas.map(actividad => parseISO(actividad.date));
  }, [proximas]);
  
  const handleMonthChange = (month: Date) => {
    setCurrentDate(month);
    setSelectedDay(undefined); // Reset selected day when month changes
  };

  const formatDate = (dateString: string, dateFormat = 'PPP') => {
    try {
      return format(parseISO(dateString), dateFormat, { locale: es });
    } catch (error) {
      return dateString; // Fallback
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <Users className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Actividades y Eventos
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Participa en nuestros talleres, conferencias, eventos culturales y mantente al tanto de las convocatorias.
        </p>
      </header>

      {/* Banner/Destacadas Section */}
      {destacadas.length > 0 && (
        <section className="mb-16 relative">
          <h2 className="font-headline text-3xl font-bold text-primary mb-6 text-center">Actividades Destacadas</h2>
          <div className="relative overflow-hidden h-[400px] md:h-[500px] rounded-lg shadow-xl border">
            {destacadas.map((actividad, index) => (
              <div
                key={actividad.id}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  index === currentBannerIndex ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-105'
                }`}
              >
                <Image
                  src={actividad.image}
                  alt={actividad.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute inset-0 z-0 object-cover"
                  data-ai-hint={actividad.aiHint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-end h-full text-center p-6 md:p-12 text-white">
                  <h3 className="font-headline text-2xl md:text-4xl font-bold mb-3">{actividad.title}</h3>
                  <p className="text-sm md:text-lg mb-4 max-w-xl">{actividad.excerpt}</p>
                  <p className="text-sm font-semibold mb-4">{formatDate(actividad.date)} {actividad.endDate && ` - ${formatDate(actividad.endDate)}`}</p>
                  <Button asChild size="lg" variant="secondary">
                    <Link href={`/actividades/${actividad.slug}`}>Ver Detalles</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
           {destacadas.length > 1 && (
            <>
                <Button 
                    onClick={goToPreviousBanner} 
                    variant="outline" 
                    size="icon" 
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 p-2 bg-background/70 hover:bg-background/90 text-foreground rounded-full"
                    aria-label="Actividad destacada anterior"
                >
                    <ChevronLeft size={28} />
                </Button>
                <Button 
                    onClick={goToNextBanner} 
                    variant="outline" 
                    size="icon" 
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 p-2 bg-background/70 hover:bg-background/90 text-foreground rounded-full"
                    aria-label="Siguiente actividad destacada"
                >
                    <ChevronRight size={28} />
                </Button>
                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                    {destacadas.map((_, index) => (
                        <button
                        key={`dot-banner-${index}`}
                        onClick={() => setCurrentBannerIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full transition-all ${index === currentBannerIndex ? 'bg-secondary scale-110' : 'bg-white/50 hover:bg-white/75'}`}
                        aria-label={`Ir a actividad destacada ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </>
           )}
        </section>
      )}

      {/* Próximas Actividades y Calendario */}
      <section className="mb-16">
        <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center">Próximas Actividades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 bg-card p-4 rounded-lg shadow-md border">
             <Calendar
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
                month={currentDate}
                onMonthChange={handleMonthChange}
                locale={es}
                className="rounded-md"
                modifiers={{ highlighted: eventDays }}
                modifiersClassNames={{
                    highlighted: 'bg-secondary/30 text-secondary-foreground rounded-full',
                }}
                classNames={{
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-full",
                    day_today: "bg-accent text-accent-foreground rounded-full",
                }}
            />
            <p className="text-xs text-muted-foreground mt-2 text-center">Días con eventos próximos resaltados.</p>
          </div>
          <div className="md:col-span-2 space-y-6">
            {eventsByMonth.length > 0 ? (
              eventsByMonth.map(actividad => (
                <Card key={actividad.id} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary hover:text-primary/80">
                      <Link href={`/actividades/${actividad.slug}`}>{actividad.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      <CalendarIcon className="inline-block mr-1 h-4 w-4" />
                      {formatDate(actividad.date)} {actividad.endDate && ` - ${formatDate(actividad.endDate)}`}
                      {actividad.time && <><ClockIcon className="inline-block ml-2 mr-1 h-4 w-4" />{actividad.time}</>}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-sm mb-3 line-clamp-3">{actividad.excerpt}</p>
                    {actividad.location && <p className="text-xs text-muted-foreground mb-1"><LocateIcon className="inline-block mr-1 h-3 w-3" />{actividad.location}</p>}
                    {actividad.category && <p className="text-xs text-muted-foreground"><TagIcon className="inline-block mr-1 h-3 w-3" />{actividad.category}</p>}
                     <Button variant="link" asChild className="p-0 h-auto self-start text-secondary hover:text-secondary/80 mt-2 text-sm">
                       <Link href={`/actividades/${actividad.slug}`}>Más Información &rarr;</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground text-center col-span-full py-8">
                No hay actividades programadas para {format(currentDate, 'MMMM yyyy', { locale: es })}.
                {proximas.length > 0 && " Revisa otros meses."}
              </p>
            )}
             {proximas.length === 0 && (
                <p className="text-muted-foreground text-center col-span-full py-8">
                    No hay actividades próximas programadas por el momento. ¡Vuelve pronto!
                </p>
            )}
          </div>
        </div>
      </section>

      {/* Mosaico Actividades Realizadas */}
      {pasadas.length > 0 && (
        <section>
          <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center">Recordando Nuestras Actividades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pasadas.map(actividad => (
              <Card key={actividad.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="p-0">
                  <Link href={`/actividades/${actividad.slug}`} className="block aspect-[16/10] overflow-hidden">
                    <Image 
                        src={actividad.image} 
                        alt={actividad.title} 
                        width={400} height={250} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        data-ai-hint={actividad.aiHint} 
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <CardDescription className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3"/> {formatDate(actividad.date, 'PPP')}
                    {actividad.category && <span className="ml-1">| {actividad.category}</span>}
                  </CardDescription>
                  <CardTitle className="font-headline text-lg mb-2 text-primary hover:text-primary/80">
                    <Link href={`/actividades/${actividad.slug}`}>{actividad.title}</Link>
                  </CardTitle>
                  <p className="text-foreground/80 text-sm mb-3 flex-grow line-clamp-3">{actividad.excerpt}</p>
                  <Button variant="link" asChild className="p-0 h-auto self-start text-secondary hover:text-secondary/80 text-sm">
                    <Link href={`/actividades/${actividad.slug}`}>Leer Recuerdo &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
