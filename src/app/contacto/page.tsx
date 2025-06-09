
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Facebook, Instagram, TwitterIcon, FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <Mail className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Información de Contacto
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Comunícate con nosotros o visítanos.
        </p>
      </header>

      <div className="flex flex-col gap-12 items-center">
        <div className="w-full max-w-3xl space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Phone className="mr-3 h-6 w-6" /> Contacto Directo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Centro de Idiomas UNILLANOS</h4>
                  <p className="text-foreground/80">Carrera 30A No 41B - 39, Barrio La Grama, Villavicencio, Meta, Colombia.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Teléfono</h4>
                  <p className="text-foreground/80">6086611623 EXT(401)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Correo Electrónico</h4>
                  <p className="text-foreground/80">
                    <a href="mailto:centrodeidiomas@unillanos.edu.co" className="hover:text-primary transition-colors">
                      centrodeidiomas@unillanos.edu.co
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <MapPin className="mr-3 h-6 w-6" /> Nuestra Ubicación
                </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.210795223902!2d-73.63228868523866!3d4.152690996978785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2d0c5a7a8b9b%3A0x6c2e75e3f021041d!2sUniversidad%20de%20los%20Llanos%20-%20Sede%20San%20Antonio!5e0!3m2!1ses!2sco!4v1627050000000!5m2!1ses!2sco" 
                  width="100%" 
                  height="100%" 
                  style={{ border:0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación del Centro de Idiomas UNILLANOS"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-6 mt-12">
            <div>
              <h3 className="font-headline text-xl font-semibold text-primary mb-3">Síguenos en Redes</h3>
              <div className="flex justify-center space-x-3">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.facebook.com/unillanosoficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.instagram.com/unillanosoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://twitter.com/unillanos" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <TwitterIcon className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-xl font-semibold text-primary mb-3">Sistema PQRSD</h3>
              <Button asChild size="lg">
                <Link href="https://www.unillanos.edu.co/index.php/sistema-de-pqrsd-peticiones-quejas-reclamos-sugerencias-y-denuncias" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Radicar PQRSD
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Peticiones, Quejas, Reclamos, Sugerencias y Denuncias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
