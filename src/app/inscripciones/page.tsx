import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Facebook, Instagram, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

export default function EnrollmentInfoPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <CardTitle className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Proceso de Inscripción
        </CardTitle>
        <CardDescription className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Información importante sobre cómo unirte a nuestros cursos en el Centro de Idiomas UNILLANOS.
        </CardDescription>
      </header>

      <Card className="max-w-2xl mx-auto shadow-xl border-primary border-2">
        <CardHeader className="text-center bg-primary/10">
          <CardTitle className="text-2xl text-primary">Estado Actual de Inscripciones</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 text-center">
          <p className="text-xl font-semibold text-destructive mb-6">
            Actualmente no se encuentran abiertas las inscripciones.
          </p>
          <p className="text-foreground/90 mb-8">
            Por favor, manténgase atento a nuestros canales oficiales para conocer las próximas fechas de convocatoria y los pasos detallados para el proceso de inscripción.
          </p>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-primary mb-3">Para Consultas:</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-foreground/90">
              <a href="tel:+573112004339" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" /> +57 311 200 4339
              </a>
              <a href="mailto:centrodeidiomas@unillanos.edu.co" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" /> centrodeidiomas@unillanos.edu.co
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Síguenos en Redes Sociales:</h3>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.facebook.com/unillanosoficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook UNILLANOS">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.instagram.com/unillanosoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram UNILLANOS">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://twitter.com/unillanos" target="_blank" rel="noopener noreferrer" aria-label="Twitter UNILLANOS">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Al interactuar con nosotros, aceptas nuestra{' '}
            <Link href="/privacy-policy" className="text-primary hover:underline">Política de Privacidad</Link> y nuestros{' '}
            <Link href="/terms-conditions" className="text-primary hover:underline">Términos y Condiciones</Link>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
