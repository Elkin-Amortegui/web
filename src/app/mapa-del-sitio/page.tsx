
import Link from 'next/link';
import { MapIcon, Home, BookOpen, Users, CalendarDays, Newspaper, ClipboardList, Info, DollarSign, FileText, Phone, Edit3, ShieldCheck, Navigation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const siteSections = [
  {
    category: 'Principal',
    icon: Home,
    links: [
      { label: 'Inicio', href: '/' },
    ],
  },
  {
    category: 'Académico',
    icon: BookOpen,
    links: [
      { label: 'Oferta Académica', href: '/oferta-academica' },
      { label: 'Inglés', href: '/oferta-academica/ingles' },
      { label: 'Francés', href: '/oferta-academica/frances' },
      { label: 'Alemán', href: '/oferta-academica/aleman' },
      { label: 'Portugués', href: '/oferta-academica/portugues' },
    ],
  },
  {
    category: 'Institucional',
    icon: Users,
    links: [
      { label: 'Quiénes Somos', href: '/quienes-somos' },
      { label: 'Normativa', href: '/normativa' },
      { label: 'Valores y Tarifas', href: '/valores' },
    ],
  },
  {
    category: 'Comunidad',
    icon: CalendarDays,
    links: [
      { label: 'Actividades y Eventos', href: '/actividades' },
      { label: 'Noticias', href: '/noticias' },
    ],
  },
  {
    category: 'Servicios y Ayuda',
    icon: ClipboardList,
    links: [
      { label: 'Trámites y Procedimientos', href: '/tramites' },
      { label: 'Tutoriales y Guías', href: '/tutoriales' },
      { label: 'Inscripciones', href: '/inscripciones' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Cómo llegar', href: '/como-llegar' },
    ],
  },
   {
    category: 'Legal',
    icon: ShieldCheck,
    links: [
      { label: 'Política de Privacidad', href: '/privacy-policy' },
      { label: 'Términos y Condiciones', href: '/terms-conditions' },
    ],
  },
];

export default function MapaDelSitioPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <MapIcon className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">
          Mapa del Sitio
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Encuentra rápidamente la sección que buscas en el Centro de Idiomas UNILLANOS.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteSections.map((section) => (
          <Card key={section.category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-xl flex items-center">
                <section.icon className="h-6 w-6 mr-3 text-primary" />
                {section.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 flex-grow">
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-foreground/90 hover:text-primary hover:underline transition-colors flex items-center text-sm">
                      <MapIcon className="h-3.5 w-3.5 mr-2 text-secondary/70" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
