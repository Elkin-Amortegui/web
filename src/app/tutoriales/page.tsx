
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Film, Users, ShieldQuestion, Briefcase, GraduationCap, Landmark } from 'lucide-react';
import { tutorialesData, type Tutorial, type TargetAudience } from './TutorialData';
import { guiasData, type Guide } from '@/app/guias/GuideData'; 
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const audienceFilters: { label: string; value: TargetAudience; icon: React.ElementType }[] = [
  { label: 'Estudiantes Extensión a la Comunidad', value: 'Estudiantes Extensión a la Comunidad', icon: Users },
  { label: 'Padres de Familia', value: 'Padres de Familia', icon: ShieldQuestion },
  { label: 'Docentes', value: 'Docente', icon: Briefcase },
  { label: 'Plan BULL', value: 'Estudiantes Pregrado (Plan BULL)', icon: GraduationCap },
];

type ContentType = 'tutoriales' | 'guias';

export default function TutorialesGuiasPage() {
  const [selectedAudience, setSelectedAudience] = useState<TargetAudience | null>(null);
  const [selectedContentType, setSelectedContentType] = useState<ContentType>('tutoriales');

  const filteredTutorials = useMemo(() => {
    if (!selectedAudience) return []; 
    return tutorialesData.filter(tutorial => tutorial.targetAudience.includes(selectedAudience!));
  }, [selectedAudience]);

  const filteredGuides = useMemo(() => {
    if (!selectedAudience) return [];
    return guiasData.filter(guide => guide.targetAudience.includes(selectedAudience!));
  }, [selectedAudience]);

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), "PPP", { locale: es });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <div className="flex justify-center items-center gap-3 mb-4">
            <Landmark className="h-16 w-16 text-primary" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Tutoriales y Guías
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Recursos audiovisuales y guías paso a paso para facilitar el uso de nuestros servicios y plataformas. Selecciona tu perfil para ver contenido relevante.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="font-headline text-2xl font-bold text-primary mb-6 text-center">Selecciona tu Perfil</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {audienceFilters.map((filter) => (
            <Tooltip key={filter.value}>
              <TooltipTrigger asChild>
                <Button
                  variant={selectedAudience === filter.value ? 'default' : 'outline'}
                  size="lg"
                  className={`w-full h-16 text-base transition-all duration-200 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center p-2 ${selectedAudience === filter.value ? 'bg-primary text-primary-foreground shadow-lg' : 'border-primary/50 hover:bg-primary/10'}`}
                  onClick={() => {
                    setSelectedAudience(filter.value);
                    setSelectedContentType('tutoriales'); 
                  }}
                  aria-label={`Filtrar contenido por ${filter.label}`}
                >
                  <filter.icon className="mb-1 h-6 w-6" />
                  <span className="text-center text-sm">{filter.label}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ver tutoriales y guías para {filter.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </section>

      {selectedAudience && (
        <section>
          <Tabs value={selectedContentType} onValueChange={(value) => setSelectedContentType(value as ContentType)} className="w-full max-w-4xl mx-auto mb-8">
            <TabsList className="grid w-full grid-cols-2 h-14">
              <Tooltip>
                <TooltipTrigger asChild>
                  <TabsTrigger value="tutoriales" className="text-lg h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <Film className="mr-2 h-5 w-5" /> Tutoriales
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent><p>Ver Tutoriales para {selectedAudience}</p></TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <TabsTrigger value="guias" className="text-lg h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <BookOpen className="mr-2 h-5 w-5" /> Guías
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent><p>Ver Guías para {selectedAudience}</p></TooltipContent>
              </Tooltip>
            </TabsList>
            <TabsContent value="tutoriales" key={`tutorials-${selectedAudience}`}> {/* Added key */}
              {filteredTutorials.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {filteredTutorials.map((tutorial) => (
                    <Card key={tutorial.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                      {tutorial.image && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href={`/tutoriales/${tutorial.slug}`} aria-label={`Ver tutorial: ${tutorial.title}`} className="block aspect-[16/10] overflow-hidden relative">
                               <Image 
                                  src={tutorial.image} 
                                  alt={tutorial.title} 
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  data-ai-hint={tutorial.aiHint || 'tutorial video thumbnail'}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                                  <Film className="h-12 w-12 text-white/80" />
                                </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent><p>Ver detalles del tutorial: {tutorial.title}</p></TooltipContent>
                        </Tooltip>
                      )}
                      <CardHeader className="pb-2 pt-4 px-4">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <CardTitle className="font-headline text-lg mb-1 text-primary hover:text-primary/80 line-clamp-2">
                              <Link href={`/tutoriales/${tutorial.slug}`}>{tutorial.title}</Link>
                            </CardTitle>
                          </TooltipTrigger>
                          <TooltipContent><p>Ver detalles del tutorial: {tutorial.title}</p></TooltipContent>
                        </Tooltip>
                         <CardDescription className="text-xs text-muted-foreground">
                           Publicado: {formatDate(tutorial.date)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-grow">
                        <p className="text-foreground/80 text-sm mb-3 flex-grow line-clamp-3">{tutorial.excerpt}</p>
                      </CardContent>
                       <div className="p-4 pt-0">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="link" asChild className="p-0 h-auto self-start text-secondary hover:text-secondary/80 text-sm">
                              <Link href={`/tutoriales/${tutorial.slug}`}>Ver Tutorial &rarr;</Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent><p>Ver tutorial completo: {tutorial.title}</p></TooltipContent>
                        </Tooltip>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-10 text-lg">No hay tutoriales disponibles para {selectedAudience}.</p>
              )}
            </TabsContent>
            <TabsContent value="guias" key={`guides-${selectedAudience}`}> {/* Added key */}
              {filteredGuides.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {filteredGuides.map((guide) => (
                     <Card key={guide.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                        <Tooltip>
                          <TooltipTrigger asChild>
                           <Link href={`/guias/${guide.slug}`} aria-label={`Ver guía: ${guide.title}`} className="block aspect-[16/10] overflow-hidden relative">
                               <Image 
                                  src={guide.image} 
                                  alt={guide.title} 
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  data-ai-hint={guide.aiHint}
                                />
                                 <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                                  <BookOpen className="h-12 w-12 text-white/80" />
                                </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent><p>Ver detalles de la guía: {guide.title}</p></TooltipContent>
                        </Tooltip>
                      <CardHeader className="pb-2 pt-4 px-4">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <CardTitle className="font-headline text-lg mb-1 text-primary hover:text-primary/80 line-clamp-2">
                              <Link href={`/guias/${guide.slug}`}>{guide.title}</Link>
                            </CardTitle>
                          </TooltipTrigger>
                          <TooltipContent><p>Ver detalles de la guía: {guide.title}</p></TooltipContent>
                        </Tooltip>
                        <CardDescription className="text-xs text-muted-foreground">
                           Publicado: {formatDate(guide.date)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-grow">
                        <p className="text-foreground/80 text-sm mb-3 flex-grow line-clamp-3">{guide.excerpt}</p>
                      </CardContent>
                      <div className="p-4 pt-0">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="link" asChild className="p-0 h-auto self-start text-secondary hover:text-secondary/80 text-sm">
                              <Link href={`/guias/${guide.slug}`}>Ver Guía &rarr;</Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent><p>Ver guía completa: {guide.title}</p></TooltipContent>
                        </Tooltip>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-10 text-lg">No hay guías disponibles para {selectedAudience}.</p>
              )}
            </TabsContent>
          </Tabs>
        </section>
      )}
       {!selectedAudience && (
         <div className="text-center py-10 mt-8 bg-muted/50 rounded-lg">
            <ShieldQuestion className="mx-auto h-12 w-12 text-primary mb-4" />
            <p className="text-xl font-semibold text-primary">Selecciona un perfil arriba</p>
            <p className="text-muted-foreground">Elige una audiencia para ver los tutoriales y guías correspondientes.</p>
        </div>
       )}
    </div>
  );
}
