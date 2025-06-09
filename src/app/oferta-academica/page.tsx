
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { BookMarked, BookOpenCheck } from 'lucide-react'; // Added BookOpenCheck
import Image from 'next/image';

// Placeholder data for languages - expanded with slug and pdfUrl
const languages = [
  { 
    name: 'Inglés', 
    slug: 'ingles',
    description: 'Domina el idioma global para nuevas oportunidades profesionales y culturales.', 
    levels: 'A1-C1', 
    modalities: 'Presencial, Virtual, Intensivo',
    image: 'https://placehold.co/400x250/00723F/FFFFFF?text=Inglés',
    aiHint: 'english language classroom',
    pdfUrl: 'https://www.unillanos.edu.co/images/documentos/dependencias/CEI/INSTRUCTIVO_INGLES_2024-1.pdf' // Example PDF
  },
  { 
    name: 'Francés', 
    slug: 'frances',
    description: 'Sumérgete en una cultura rica y expande tus horizontes literarios y artísticos.', 
    levels: 'A1-B2', 
    modalities: 'Presencial, Semi-intensivo',
    image: 'https://placehold.co/400x250/FFD100/333333?text=Francés',
    aiHint: 'french culture paris',
    pdfUrl: 'https://www.unillanos.edu.co/images/documentos/dependencias/CEI/INSTRUCTIVO_FRANCES_2024-1.pdf' // Example PDF
  },
  { 
    name: 'Alemán', 
    slug: 'aleman',
    description: 'Abre puertas en ciencia, tecnología, ingeniería y filosofía.', 
    levels: 'A1-B1', 
    modalities: 'Presencial',
    image: 'https://placehold.co/400x250/005DAA/FFFFFF?text=Alemán',
    aiHint: 'german engineering technology',
    pdfUrl: 'https://www.unillanos.edu.co/images/documentos/dependencias/CEI/INSTRUCTIVO_ALEMAN_2024-1.pdf' // Example PDF
  },
  { 
    name: 'Portugués', 
    slug: 'portugues',
    description: 'Conecta con vibrantes culturas de América Latina y Europa.', 
    levels: 'A1-B1', 
    modalities: 'Presencial, Virtual',
    image: 'https://placehold.co/400x250/4CAF50/FFFFFF?text=Portugués',
    aiHint: 'portuguese culture brazil',
    pdfUrl: 'https://www.unillanos.edu.co/images/documentos/dependencias/CEI/INSTRUCTIVO_PORTUGUES_2024-1.pdf' // Example PDF
  },
];

export default function AcademicOfferPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <BookOpenCheck className="mx-auto h-16 w-16 text-primary mb-4" /> {/* Changed Icon */}
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Oferta Académica
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Explora nuestros programas de idiomas diseñados para ayudarte a alcanzar la fluidez y abrir nuevas puertas en tu vida personal y profesional.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"> {/* Changed to lg:grid-cols-2 for better card display */}
        {languages.map((lang) => (
          <Card key={lang.name} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <CardHeader className="p-0 relative">
              <Image 
                src={lang.image} 
                alt={`Curso de ${lang.name}`} 
                width={400} 
                height={200} 
                className="w-full h-48 object-cover rounded-t-lg"
                data-ai-hint={lang.aiHint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <CardTitle className="text-2xl text-primary mb-2">{lang.name}</CardTitle>
              <CardDescription className="text-foreground/80 mb-3 flex-grow">{lang.description}</CardDescription>
              <div className="space-y-1 text-sm mt-auto">
                <p><strong className="text-primary/90">Niveles:</strong> {lang.levels}</p>
                <p><strong className="text-primary/90">Modalidades:</strong> {lang.modalidades}</p>
              </div>
              <Button asChild className="mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full">
                <Link href={`/oferta-academica/${lang.slug}`}>Ver Detalles y Brochure</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <p className="text-lg text-foreground/80 mb-4">¿Listo para empezar tu viaje de aprendizaje?</p>
        <Button asChild size="lg">
          <Link href="/inscripciones">Consulta el Proceso de Inscripción</Link>
        </Button>
      </div>
    </div>
  );
}
