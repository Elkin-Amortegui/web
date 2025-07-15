
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Camera, Navigation } from 'lucide-react';

const galleryImages = [
  { src: "https://placehold.co/600x400/00723F/FFFFFF?text=Fachada+Centro+Idiomas", alt: "Fachada del Centro de Idiomas", aiHint: "language school building" },
  { src: "https://placehold.co/400x600/FFD100/333333?text=Entrada+Principal", alt: "Entrada principal de la sede", aiHint: "university building entrance" },
  { src: "https://placehold.co/600x400/005DAA/FFFFFF?text=Estudiantes+Caminando", alt: "Estudiantes caminando por el campus", aiHint: "students walking campus" },
  { src: "https://placehold.co/400x300/4CAF50/FFFFFF?text=Jardines+Interiores", alt: "Jardines interiores de la sede", aiHint: "campus garden" },
  { src: "https://placehold.co/500x400/E91E63/FFFFFF?text=Cafetería", alt: "Cafetería del campus", aiHint: "campus cafeteria students" },
  { src: "https://placehold.co/400x400/795548/FFFFFF?text=Detalle+Arquitectónico", alt: "Detalle arquitectónico de la sede", aiHint: "building architecture detail" },
];

const googleMapsDirectionsUrl = "https://www.google.com/maps/dir//Cra.+30+%2341a-108+Villavicencio,+Meta/@4.1562773,-73.6377654,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x8e3e2dec2137e9fb:0x4a3b17f4ccaf0b87";

export default function ComoLlegarPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <MapPin className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Cómo Llegar
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Encuentra nuestra ubicación y planifica tu visita al Centro de Idiomas UNILLANOS en el barrio La Grama.
        </p>
      </header>
      
      <section className="mb-16">
        <Card className="shadow-xl border">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Navigation className="h-6 w-6 text-primary" />
              Nuestra Ubicación
            </CardTitle>
            <CardDescription>
              Centro de Idiomas UNILLANOS - Sede La Grama, Villavicencio, Meta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-md shadow-inner flex items-center justify-center mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.2080418759567!2d-73.62972892490214!3d4.153202845583447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2d0c5d4f882b%3A0x5312377907495258!2sCra.%2030%20%2341a-108%2C%20Villavicencio%2C%20Meta!5e0!3m2!1ses-419!2sco!4v1700000000000!5m2!1ses-419!2sco"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación del Centro de Idiomas UNILLANOS La Grama"
              ></iframe>
            </div>
            <div className="text-center">
                <Button asChild size="lg">
                    <a href={googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                        <Navigation className="mr-2 h-5 w-5" />
                        Obtener Indicaciones en Google Maps
                    </a>
                </Button>
                 <p className="text-sm text-muted-foreground mt-2">
                    Carrera 30A No 41B - 39, Barrio La Grama
                </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="font-headline text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Camera className="h-8 w-8 text-primary" /> Galería de la Sede
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className={`rounded-lg overflow-hidden shadow-lg group aspect-w-1 aspect-h-1 
              ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} 
              ${index === 3 ? 'lg:col-span-2' : ''}
              ${index === 1 ? 'aspect-w-3 aspect-h-4 sm:aspect-w-1 sm:aspect-h-1' : ''}
            `}>
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={600} 
                height={400} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={image.aiHint}
              />
            </div>
          ))}
        </div>
         <p className="text-sm text-muted-foreground mt-4 text-center">Imágenes de referencia. ¡Te esperamos para que conozcas nuestras instalaciones!</p>
      </section>
    </div>
  );
}

