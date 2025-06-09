
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Info, PlayCircle } from 'lucide-react'; // Using PlayCircle for video indication
import Link from 'next/link';
import Image from 'next/image';
import { tutorialesData } from './TutorialData'; // Importar datos de tutoriales

export default function TutorialesPage() {
  // TODO: Implement search and filter functionality for tutoriales
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <Info className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Tutoriales y Guías
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Recursos audiovisuales y guías paso a paso para facilitar el uso de nuestros servicios y plataformas.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorialesData.map((tutorial) => (
          <Card key={tutorial.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0 relative">
              <Link href={`/tutoriales/${tutorial.slug}`} aria-label={`Ver tutorial: ${tutorial.title}`}>
                <Image 
                  src={tutorial.image || `https://placehold.co/400x250/EEEEEE/333333?text=Video+Tutorial`} 
                  alt={tutorial.title} 
                  width={400} 
                  height={250} 
                  className="w-full h-56 object-cover"
                  data-ai-hint={tutorial.aiHint || 'tutorial video screen'}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <PlayCircle className="h-16 w-16 text-white/80" />
                </div>
              </Link>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-muted-foreground mb-1">{tutorial.date} | {tutorial.category}</p>
              <CardTitle className="font-headline text-xl mb-2 text-primary hover:text-primary/80">
                <Link href={`/tutoriales/${tutorial.slug}`}>{tutorial.title}</Link>
              </CardTitle>
              <CardDescription className="text-foreground/80 text-sm mb-4 flex-grow">{tutorial.excerpt}</CardDescription>
              <Button variant="link" asChild className="p-0 h-auto self-start text-secondary hover:text-secondary/80">
                <Link href={`/tutoriales/${tutorial.slug}`}>Ver Tutorial &rarr;</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
