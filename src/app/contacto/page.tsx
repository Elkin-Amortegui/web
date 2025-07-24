
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Facebook, Youtube, MessageCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';


export default function ContactPage() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=573112004339&text=Hola%2C+quisiera+m%C3%A1s+informaci%C3%B3n+sobre+el+Centro+de+Idiomas.&type=phone_number&app_absent=0";

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <header className="text-center mb-12 md:mb-16 animate-in fade-in-0 slide-in-from-top-10 duration-700">
        <Mail className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Información de Contacto
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Comunícate con nosotros o visítanos.
        </p>
      </header>

      <div className="flex flex-col gap-12 items-center">
        <div className="w-full max-w-4xl space-y-8">
          <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-5 delay-200 duration-500">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Phone className="mr-3 h-6 w-6" /> Contacto Directo
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <MapPin className="h-6 w-6 text-primary mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold">Centro de Idiomas UNILLANOS</h4>
                    <p className="text-foreground/80">Carrera 30A No 41B - 39, Barrio La Grama, Villavicencio, Meta, Colombia.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <Mail className="h-6 w-6 text-primary mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold">Correo Electrónico</h4>
                    <Tooltip>
                      <TooltipTrigger asChild>
                         <a href="mailto:centrodeidiomas@unillanos.edu.co" className="text-foreground/80 hover:text-primary transition-colors">
                            centrodeidiomas@unillanos.edu.co
                         </a>
                      </TooltipTrigger>
                      <TooltipContent><p>Enviar correo a centrodeidiomas@unillanos.edu.co</p></TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                 <div className="flex items-start gap-4 group">
                    <Phone className="h-6 w-6 text-primary mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h4 className="font-semibold">Llamadas</h4>
                      <p className="text-foreground/80">6086611623 EXT(401)</p>
                    </div>
                  </div>
                <div className="flex items-start gap-4 group">
                  <MessageCircle className="h-6 w-6 text-primary mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold">WhatsApp (Solo Chat)</h4>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                              311 2004339
                            </a>
                        </TooltipTrigger>
                        <TooltipContent><p>Chatear por WhatsApp (abre en nueva pestaña)</p></TooltipContent>
                     </Tooltip>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-5 delay-300 duration-500">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <MapPin className="mr-3 h-6 w-6" /> Nuestra Ubicación
                </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center overflow-hidden shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.2080418759567!2d-73.62972892490214!3d4.153202845583447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2d0c5d4f882b%3A0x5312377907495258!2sCra.+30%20%2341a-108%2C%20Villavicencio%2C%20Meta!5e0!3m2!1ses-419!2sco!4v1700000000000!5m2!1ses-419!2sco" 
                  width="100%" 
                  height="100%" 
                  style={{ border:0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación del Centro de Idiomas UNILLANOS La Grama"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-6 mt-12 animate-in fade-in-0 slide-in-from-bottom-5 delay-400 duration-500">
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <h3 className="font-headline text-xl font-semibold text-primary mb-4">Síguenos en Redes</h3>
              <div className="flex justify-center space-x-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-full group">
                      <a href="https://www.facebook.com/centrodeidiomasunillanos/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook Centro de Idiomas">
                        <Facebook className="h-6 w-6 transition-transform duration-300 group-hover:scale-125 group-hover:text-primary" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Facebook del Centro de Idiomas</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-full group">
                      <a href="https://www.youtube.com/@centrodeidiomasdependencia5670/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube Centro de Idiomas">
                        <Youtube className="h-6 w-6 transition-transform duration-300 group-hover:scale-125 group-hover:text-primary" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Canal de YouTube del Centro de Idiomas</p></TooltipContent>
                </Tooltip>
                 <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-full group">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Centro de Idiomas">
                        <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-125 group-hover:text-primary" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Chatear por WhatsApp</p></TooltipContent>
                </Tooltip>
              </div>
            </div>

            <div className="p-6 bg-card rounded-lg shadow-lg">
              <h3 className="font-headline text-xl font-semibold text-primary mb-4">Sistema PQRSD</h3>
              <Button asChild size="lg" className="transform hover:scale-105 transition-transform duration-200">
                <a href="https://www.unillanos.edu.co/index.php/sistema-de-pqrsd-peticiones-quejas-reclamos-sugerencias-y-denuncias" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Radicar PQRSD
                </a>
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
