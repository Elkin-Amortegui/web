import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock, Users, Link as LinkIconLucide, MessageCircle, XIcon, ShieldCheck, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const centroIdiomasSocialLinks = [
  { name: 'WhatsApp Centro de Idiomas', href: 'https://wa.me/573112004339?text=Hola,%20quisiera%20más%20información%20sobre%20el%20Centro%20de%20Idiomas.', icon: MessageCircle, tooltip: 'Contactar Centro de Idiomas por WhatsApp (abre en nueva pestaña)' },
  { name: 'YouTube Centro de Idiomas', href: 'https://www.youtube.com/@centrodeidiomasdependencia5670?si=x4Bu-K-0tQ-Q8ik3', icon: Youtube, tooltip: 'Ver canal de YouTube del Centro de Idiomas (abre en nueva pestaña)' },
  { name: 'Facebook Centro de Idiomas', href: 'https://www.facebook.com/centrodeidiomasunillanos/?locale=es_LA', icon: Facebook, tooltip: 'Visitar Facebook del Centro de Idiomas (abre en nueva pestaña)' },
];

const universitySocialLinks = [
  { name: 'Facebook Unillanos', href: 'https://www.facebook.com/unillanosoficial', icon: Facebook, tooltip: 'Visitar Facebook de Unillanos (abre en nueva pestaña)' },
  { name: 'Instagram Unillanos', href: 'https://www.instagram.com/unillanos_/', icon: Instagram, tooltip: 'Visitar Instagram de Unillanos (abre en nueva pestaña)' },
  { name: 'X Unillanos', href: 'https://x.com/unillanos_?lang=es', icon: XIcon, tooltip: 'Visitar X (Twitter) de Unillanos (abre en nueva pestaña)' },
  { name: 'YouTube Unillanos', href: 'https://www.youtube.com/channel/UCmhXbLrVeyotUiBsaPBcxcA', icon: Youtube, tooltip: 'Ver canal de YouTube de Unillanos (abre en nueva pestaña)' },
];

const bottomLogos = [
  { src: "https://placehold.co/150x60/FFFFFF/1A1A1A?text=Logo+MinEdu", alt: "Logo Ministerio de Educación", aiHint: "government education logo", tooltip: "Visitar Ministerio de Educación (abre en nueva pestaña)", href:"https://www.mineducacion.gov.co/" },
  { src: "https://placehold.co/150x60/FFFFFF/1A1A1A?text=Logo+ICFES", alt: "Logo ICFES", aiHint: "testing service logo", tooltip: "Visitar ICFES (abre en nueva pestaña)", href:"https://www.icfes.gov.co/" },
  { src: "https://placehold.co/150x60/FFFFFF/1A1A1A?text=Logo+Meta", alt: "Logo Gobernación del Meta", aiHint: "regional government logo", tooltip: "Visitar Gobernación del Meta (abre en nueva pestaña)", href:"https://www.meta.gov.co/" },
  { src: "https://placehold.co/150x60/FFFFFF/1A1A1A?text=Logo+ICETEX", alt: "Logo ICETEX", aiHint: "student finance logo", tooltip: "Visitar ICETEX (abre en nueva pestaña)", href:"https://web.icetex.gov.co/" },
  { src: "https://placehold.co/150x60/FFFFFF/1A1A1A?text=Logo+SUE", alt: "Logo Sistema Universitario Estatal (SUE)", aiHint: "university system logo", tooltip: "Visitar SUE (abre en nueva pestaña)", href:"https://suejesure.edu.co/" },
  { src: "https://placehold.co/150x60/FFFFFF/1A1A1A?text=Logo+CNA", alt: "Logo Consejo Nacional de Acreditación (CNA)", aiHint: "accreditation council logo", tooltip: "Visitar CNA (abre en nueva pestaña)", href:"https://www.cna.gov.co/" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-background text-footer-foreground">
      {/* Primera parte del pie de página (superior) */}
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          
          {/* Columna 1: Logos */}
          <div className="space-y-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://www.unillanos.edu.co" target="_blank" rel="noopener noreferrer" aria-label="Página de inicio de Unillanos">
                  <Image
                    src="/images/unillanos-logo-white.png"
                    alt="Logo Unillanos"
                    width={200}
                    height={55}
                    className="h-auto mb-3"
                    data-ai-hint="university logo"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent><p>Visitar página principal de Unillanos (abre en nueva pestaña)</p></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://www.villavicencio.gov.co" target="_blank" rel="noopener noreferrer" aria-label="Alcaldía de Villavicencio">
                  <Image
                    src="/images/villavicencio-unidos-podemos-logo.png" 
                    alt="Logo Villavicencio Unidos Podemos"
                    width={180}
                    height={50}
                    data-ai-hint="city partnership logo"
                    className="h-auto"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent><p>Visitar página de la Alcaldía de Villavicencio (abre en nueva pestaña)</p></TooltipContent>
            </Tooltip>
          </div>

          {/* Columna 2: Horario, Contacto y Redes Sociales (Centro de Idiomas) */}
          <div className="space-y-6">
            <div>
              <h3 className="font-headline text-lg font-semibold text-white mb-3 flex items-center">
                <Clock className="mr-2 h-5 w-5" /> Horario de atención
              </h3>
              <div className="text-sm space-y-1">
                <p>Lunes a Viernes de 7:00 a.m. a 7:00 p.m.</p>
                <p>Sábados de 7:00 a.m. a 4:00 p.m.</p>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold text-white mb-3 flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Contacto
              </h3>
              <ul className="text-sm space-y-1 mb-4">
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="mailto:centrodeidiomas@unillanos.edu.co" className="hover:text-secondary transition-colors flex items-center">
                        <Mail className="mr-2 h-4 w-4 flex-shrink-0" /> centrodeidiomas@unillanos.edu.co
                      </a>
                    </TooltipTrigger>
                    <TooltipContent><p>Enviar correo a centrodeidiomas@unillanos.edu.co</p></TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <span className="flex items-center"><Phone className="mr-2 h-4 w-4 flex-shrink-0" /> Tel: 608 6611623 EXT(401)</span>
                </li>
                <li>
                   <Tooltip>
                     <TooltipTrigger asChild>
                      <a href="https://wa.me/573112004339?text=Hola,%20quisiera%20más%20información%20sobre%20el%20Centro%20de%20Idiomas." target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors flex items-center">
                        <MessageCircle className="mr-2 h-4 w-4 flex-shrink-0" /> WhatsApp: 3112004339
                      </a>
                     </TooltipTrigger>
                     <TooltipContent><p>Contactar por WhatsApp al 3112004339 (abre en nueva pestaña)</p></TooltipContent>
                   </Tooltip>
                </li>
              </ul>
            </div>
             <div>
              <h3 className="font-headline text-lg font-semibold text-white mb-3 flex items-center">
                  <Users className="mr-2 h-5 w-5" /> Redes Sociales
              </h3>
              <div className="flex space-x-3">
                {centroIdiomasSocialLinks.map(social => (
                  <Tooltip key={social.name}>
                    <TooltipTrigger asChild>
                      <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                        className="text-footer-foreground hover:text-secondary transition-colors">
                        <social.icon className="h-8 w-8" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent><p>{social.tooltip}</p></TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          {/* Columna 3: Ubícanos (Centro de Idiomas) */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-3 flex items-center">
              <MapPin className="mr-2 h-5 w-5" /> Ubícanos
            </h3>
            <address className="text-sm not-italic space-y-1 mb-3">
              <p>Dirección: Carrera 30 N° 41A-108</p>
              <p>Barrio La Grama, Villavicencio, Meta</p>
            </address>
            <div className="w-full max-w-[180px] aspect-square overflow-hidden rounded-md border border-gray-600">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.2080418759567!2d-73.62972892490214!3d4.153202845583447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2d0c5d4f882b%3A0x5312377907495258!2sCra.%2030%20%2341a-108%2C%20Villavicencio%2C%20Meta!5e0!3m2!1ses-419!2sco!4v1700000000000!5m2!1ses-419!2sco" 
                width="100%" 
                height="100%" 
                style={{ border:0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación del Centro de Idiomas UNILLANOS La Grama"
              ></iframe>
            </div>
          </div>

          {/* Columna 4: Enlaces de Interés */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-3 flex items-center">
              <LinkIconLucide className="mr-2 h-5 w-5" /> Enlaces de Interés
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li><Tooltip><TooltipTrigger asChild><Link href="/mapa-del-sitio" className="hover:text-secondary transition-colors">Mapa del Sitio</Link></TooltipTrigger><TooltipContent><p>Ver el Mapa del Sitio</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><Link href="/contacto" className="hover:text-secondary transition-colors">Contáctanos</Link></TooltipTrigger><TooltipContent><p>Ir a la página de Contacto</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><Link href="/quienes-somos" className="hover:text-secondary transition-colors">Nosotros</Link></TooltipTrigger><TooltipContent><p>Conocer más sobre Quiénes Somos</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://www.unillanos.edu.co/index.php/atencion-y-servicios" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Servicios y Trámites</a></TooltipTrigger><TooltipContent><p>Consultar Servicios y Trámites de Unillanos (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><Link href="/normativa" className="hover:text-secondary transition-colors">Normativa</Link></TooltipTrigger><TooltipContent><p>Ver la Normativa del Centro de Idiomas</p></TooltipContent></Tooltip></li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Segunda parte del pie de página (inferior) */}
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="mb-8">
          {/* Título "Entidades y Alianzas" removido */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
            {bottomLogos.map((logo, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a href={logo.href || "#"} target="_blank" rel="noopener noreferrer" aria-label={logo.alt} className="flex justify-center">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      width={120}
                      height={40}
                      className="h-10 object-contain hover:opacity-80 transition-opacity" 
                      data-ai-hint={logo.aiHint}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent><p>{logo.tooltip}</p></TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        <Separator className="bg-gray-700 my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 text-sm">
          <div className="lg:col-span-1 space-y-0.5">
            <h4 className="font-semibold text-base text-white flex items-center mb-1"><MapPin className="mr-2 h-4 w-4" />Ubícanos (Universidad)</h4>
            <p className="mb-0.5"><strong className="text-white/90">Campus Barcelona:</strong> Km. 12 Vía Puerto López</p>
            <p className="mb-0.5"><strong className="text-white/90">Campus San Antonio:</strong> Calle 37 No. 41-02 Barzal</p>
            <p className="mb-0.5"><strong className="text-white/90">Campus Boquemonte:</strong> KM 2 Vía San Juan de Arama - Granada, Meta</p>
            <p className="mb-0.5"><strong className="text-white/90">Edificio Emporio:</strong> Calle 40 A No. 28-32 Emporio</p>
            
            <h4 className="font-semibold text-base text-white mt-2 mb-1 flex items-center"><Clock className="mr-2 h-4 w-4" />Horario de atención (Universidad)</h4>
            <p className="mb-0.5">Lunes a Viernes</p>
            <p className="mb-0.5">7:30 a.m. a 11:30 a.m. y de 2:00 p.m. a 5:30 p.m.</p>
          </div>

          <div className="lg:col-span-1 space-y-2">
            <h4 className="font-semibold text-base text-white flex items-center mb-1"><ShieldCheck className="mr-2 h-4 w-4" />Políticas y Documentación</h4>
            <ul className="space-y-1">
              <li><Tooltip><TooltipTrigger asChild><a href="https://www.unillanos.edu.co/index.php/politica-de-privacidad-y-condiciones-de-uso" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Políticas de Privacidad y Términos de Uso</a></TooltipTrigger><TooltipContent><p>Ver Políticas de Privacidad y Términos de Uso (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://drive.google.com/file/d/0BwmLeW3ZlZXtR0QxeWRNanVNOG1GOER6SkRsaUFtM0NuYmVZ/view?resourcekey=0-KI2mtnlNcRK7boQVeZiJYQ" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Política de Tratamiento y Protección de Datos Personales</a></TooltipTrigger><TooltipContent><p>Ver Política de Tratamiento de Datos (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://sig.unillanos.edu.co/phocadownload/ACUERDO%20SUPERIOR%20002%20DE%202019.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Política de Seguridad de la Información</a></TooltipTrigger><TooltipContent><p>Ver Política de Seguridad de la Información (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://drive.google.com/file/d/0BwmLeW3ZlZXteFFXX0ZEOUpaQkpXQnpmYm9uMlVYZEd0WFlz/view?resourcekey=0-U9NwKW-81SLRPCyRPRnDMw" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Estatuto sobre Propiedad Intelectual</a></TooltipTrigger><TooltipContent><p>Ver Estatuto sobre Propiedad Intelectual (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
            </ul>
          </div>

          <div className="lg:col-span-1 space-y-2">
            <h4 className="font-semibold text-base text-white flex items-center mb-1"><ExternalLink className="mr-2 h-4 w-4" />Enlaces Adicionales</h4>
             <ul className="space-y-1">
              <li><Tooltip><TooltipTrigger asChild><a href="https://www.unillanos.edu.co/index.php/transparencia-y-acceso-a-la-informacion" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Transparencia y Acceso a la Información</a></TooltipTrigger><TooltipContent><p>Visitar Transparencia y Acceso a la Información (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://www.unillanos.edu.co/index.php/sistema-de-pqrsd-peticiones-quejas-reclamos-sugerencias-y-denuncias" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Sistema PQRSD</a></TooltipTrigger><TooltipContent><p>Ir al Sistema PQRSD (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://contratacion.unillanos.edu.co" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Contratación</a></TooltipTrigger><TooltipContent><p>Información sobre Contratación (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://www.unillanos.edu.co/index.php/universidad" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Más información sobre la Universidad</a></TooltipTrigger><TooltipContent><p>Conocer más sobre Unillanos (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://admisiones.unillanos.edu.co/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Admisiones</a></TooltipTrigger><TooltipContent><p>Ir a Admisiones Unillanos (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://pregrados.unillanos.edu.co/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Pregrado</a></TooltipTrigger><TooltipContent><p>Información sobre Pregrados (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://unillanosposgrados.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Posgrado</a></TooltipTrigger><TooltipContent><p>Información sobre Posgrados (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
              <li><Tooltip><TooltipTrigger asChild><a href="https://sig.unillanos.edu.co/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Sistema Integrado de Gestión (SIG)</a></TooltipTrigger><TooltipContent><p>Visitar Sistema Integrado de Gestión (SIG) (abre en nueva pestaña)</p></TooltipContent></Tooltip></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-700 my-8" />

        <div className="text-center">
            <div className="flex justify-center space-x-4 mb-4">
                {universitySocialLinks.map(social => (
                <Tooltip key={social.name}>
                  <TooltipTrigger asChild>
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                        className="text-footer-foreground hover:text-secondary transition-colors">
                        <social.icon className="h-6 w-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent><p>{social.tooltip}</p></TooltipContent>
                </Tooltip>
                ))}
            </div>
            <p className="text-xs">
            © Universidad de los Llanos 1974 - {new Date().getFullYear()}. Reservados todos los derechos.
            <br />
            Nit: 892.000.757-3
            </p>
        </div>
      </div>
    </footer>
  );
}