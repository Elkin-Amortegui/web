
'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Image from 'next/image';
import { ClipboardList, Search, CalendarDays } from 'lucide-react';
import { tramitesData as allTramites, type Tramite } from './TramiteData';

export default function TramitesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedSemester, setSelectedSemester] = useState<string>('all');
  const [filteredTramites, setFilteredTramites] = useState<Tramite[]>(allTramites);

  const availableYears = useMemo(() => {
    const years = new Set(allTramites.map(tramite => new Date(tramite.date).getFullYear().toString()));
    return ['all', ...Array.from(years).sort((a, b) => parseInt(b) - parseInt(a))];
  }, []);

  useEffect(() => {
    let tempTramites = allTramites;

    if (searchTerm) {
      tempTramites = tempTramites.filter(tramite =>
        tramite.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tramite.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tramite.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedYear !== 'all') {
      tempTramites = tempTramites.filter(tramite => new Date(tramite.date).getFullYear().toString() === selectedYear);
    }

    if (selectedSemester !== 'all') {
      tempTramites = tempTramites.filter(tramite => {
        const month = new Date(tramite.date).getMonth() + 1;
        const semester = month <= 6 ? '1' : '2';
        return semester === selectedSemester;
      });
    }
    
    tempTramites.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    setFilteredTramites(tempTramites);
  }, [searchTerm, selectedYear, selectedSemester]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <ClipboardList className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Trámites y Procedimientos
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Encuentra información detallada sobre los procesos administrativos y solicitudes frecuentes del Centro de Idiomas.
        </p>
      </header>

      <div className="mb-8 p-4 md:p-6 bg-card rounded-lg shadow sticky top-16 z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="lg:col-span-2">
            <Label htmlFor="search-tramites" className="text-sm font-medium">Buscar Trámite</Label>
            <div className="relative mt-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                id="search-tramites"
                type="search" 
                placeholder="Buscar por palabra clave..." 
                className="pl-10 w-full" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="filter-year-tramites" className="text-sm font-medium">Año de Publicación</Label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger id="filter-year-tramites" className="w-full mt-1">
                <SelectValue placeholder="Seleccionar año" />
              </SelectTrigger>
              <SelectContent>
                {availableYears.map(year => (
                  <SelectItem key={year} value={year}>
                    {year === 'all' ? 'Todos los años' : year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="filter-semester-tramites" className="text-sm font-medium">Semestre de Publicación</Label>
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger id="filter-semester-tramites" className="w-full mt-1">
                <SelectValue placeholder="Seleccionar semestre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los semestres</SelectItem>
                <SelectItem value="1">Primer Semestre</SelectItem>
                <SelectItem value="2">Segundo Semestre</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {filteredTramites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTramites.map((tramite) => (
            <Card key={tramite.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              {tramite.image && (
                <CardHeader className="p-0">
                  <Link href={`/tramites/${tramite.slug}`} className="block aspect-[16/10] overflow-hidden">
                    <Image 
                      src={tramite.image} 
                      alt={tramite.title} 
                      width={400} 
                      height={250} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                      data-ai-hint={tramite.aiHint || 'procedure illustration'}
                    />
                  </Link>
                </CardHeader>
              )}
              <CardContent className="p-6 flex flex-col flex-grow">
                 <CardDescription className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <CalendarDays className="h-3 w-3"/> {formatDate(tramite.date)}
                    {tramite.category && <span className="ml-1">| {tramite.category}</span>}
                 </CardDescription>
                <CardTitle className="font-headline text-xl mb-2 text-primary hover:text-primary/80">
                  <Link href={`/tramites/${tramite.slug}`}>{tramite.title}</Link>
                </CardTitle>
                <p className="text-foreground/80 text-sm mb-4 flex-grow line-clamp-4">{tramite.excerpt}</p>
                <Button variant="link" asChild className="p-0 h-auto self-start text-secondary hover:text-secondary/80">
                  <Link href={`/tramites/${tramite.slug}`}>Leer más &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
         <div className="text-center py-12">
            <ClipboardList className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-xl font-semibold text-primary">No se encontraron trámites</p>
            <p className="text-muted-foreground">Intenta ajustar tus filtros o términos de búsqueda.</p>
        </div>
      )}
    </div>
  );
}
