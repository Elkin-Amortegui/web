
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Award, MessageSquare, Users, Target, Eye } from 'lucide-react'; // Added Target and Eye

// Placeholder data for testimonials
const testimonials = [
  {
    id: '1',
    quote: "Aprender inglés en el Centro de Idiomas UNILLANOS me abrió puertas que nunca imaginé. ¡Totalmente recomendado!",
    author: "Ana Pérez",
    role: "Egresada del Programa de Inglés",
    image: "https://placehold.co/100x100/00723F/FFFFFF?text=AP",
    aiHint: "student portrait",
  },
  {
    id: '2',
    quote: "Los profesores son excelentes y las metodologías muy efectivas. Pude alcanzar un nivel B2 en francés en poco tiempo.",
    author: "Carlos López",
    role: "Estudiante de Francés",
    image: "https://placehold.co/100x100/FFD100/333333?text=CL",
    aiHint: "happy student",
  },
  {
    id: '3',
    quote: "El ambiente multicultural y el apoyo constante del personal hicieron de mi aprendizaje una experiencia maravillosa.",
    author: "Sofía Gómez",
    role: "Participante Club de Conversación",
    image: "https://placehold.co/100x100/005DAA/FFFFFF?text=SG",
    aiHint: "smiling person",
  },
];

const achievements = [
    { title: "Más de 20 Años de Experiencia", description: "Formando a la comunidad llanera en diversos idiomas.", icon: Award },
    { title: "Certificaciones Internacionales", description: "Preparamos y certificamos a nuestros estudiantes con estándares globales.", icon: Award },
    { title: "Convenios y Alianzas", description: "Colaboramos con instituciones nacionales e internacionales.", icon: Award },
    { title: "Alta Tasa de Satisfacción", description: "Nuestros estudiantes valoran la calidad de nuestros programas.", icon: Award },
];

const galleryImages = [
  { src: "https://placehold.co/600x400/00723F/FFFFFF?text=Aula+Moderna", alt: "Aula moderna del centro de idiomas", aiHint: "classroom students" },
  { src: "https://placehold.co/400x600/FFD100/333333?text=Estudiantes+Conversando", alt: "Estudiantes conversando en grupo", aiHint: "students talking group" },
  { src: "https://placehold.co/600x400/005DAA/FFFFFF?text=Evento+Cultural", alt: "Evento cultural en el centro de idiomas", aiHint: "cultural event presentation" },
  { src: "https://placehold.co/400x300/4CAF50/FFFFFF?text=Profesor+Explicando", alt: "Profesor explicando en clase", aiHint: "teacher classroom board" },
  { src: "https://placehold.co/500x400/E91E63/FFFFFF?text=Graduación+Idiomas", alt: "Ceremonia de graduación de idiomas", aiHint: "graduation ceremony students" },
  { src: "https://placehold.co/400x400/795548/FFFFFF?text=Biblioteca+Idiomas", alt: "Biblioteca del centro de idiomas", aiHint: "library books study" },
];


export default function QuienesSomosPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <Users className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4"> {/* text-primary removed, global h1 style applies */}
          Quiénes Somos
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Conoce más sobre el Centro de Idiomas de la Universidad de los Llanos: nuestra historia, misión, visión y los testimonios de nuestra comunidad.
        </p>
      </header>

      {/* Misión y Visión */}
      <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
        <Card className="shadow-lg">
            <CardHeader className="flex-row items-center gap-3">
                <Target className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl">Nuestra Misión</CardTitle> {/* text-primary removed, global h3 style applies */}
            </CardHeader>
            <CardContent>
            <p className="text-foreground/80">
                Formar personas competentes en lenguas extranjeras, fomentando el desarrollo de habilidades comunicativas interculturales que contribuyan al crecimiento personal, académico y profesional de la comunidad universitaria y la región, mediante programas de alta calidad y un equipo humano cualificado.
            </p>
            </CardContent>
        </Card>
        <Card className="shadow-lg">
            <CardHeader className="flex-row items-center gap-3">
                <Eye className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl">Nuestra Visión</CardTitle> {/* text-primary removed, global h3 style applies */}
            </CardHeader>
            <CardContent>
            <p className="text-foreground/80">
                Ser un Centro de Idiomas líder y referente en la Orinoquía, reconocido por su excelencia académica, innovación pedagógica y su contribución a la internacionalización de la Universidad de los Llanos y al desarrollo sociocultural de la región, a través de una oferta diversa y pertinente de programas de lenguas extranjeras.
            </p>
            </CardContent>
        </Card>
      </section>

      {/* Nuestra Historia */}
      <section className="mb-16">
        <Card className="shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image 
                src="https://placehold.co/800x600/00723F/FFFFFF?text=Historia+Unillanos" 
                alt="Edificio histórico Unillanos" 
                width={800} 
                height={600} 
                className="w-full h-64 md:h-full object-cover"
                data-ai-hint="university building historical"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl flex items-center"><BookOpen className="mr-3 h-8 w-8 text-primary" />Nuestra Historia</CardTitle> {/* text-primary removed from CardTitle, global h3 style applies. Icon keeps primary color. */}
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-foreground/80 mb-4">
                  El Centro de Idiomas de la Universidad de los Llanos fue fundado con el propósito de responder a las crecientes necesidades de la comunidad académica y de la región en el aprendizaje y certificación de lenguas extranjeras. Desde nuestros inicios, hemos trabajado arduamente para ofrecer programas de alta calidad, metodologías innovadoras y un ambiente propicio para el desarrollo de competencias comunicativas.
                </p>
                <p className="text-foreground/80">
                  A lo largo de los años, hemos expandido nuestra oferta académica, incluyendo inglés, francés, alemán y portugués, y hemos fortalecido nuestros lazos con instituciones nacionales e internacionales para brindar mayores oportunidades a nuestros estudiantes.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </section>

      {/* Logros Destacados */}
      <section className="mb-16">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Logros Destacados</h2> {/* text-primary removed, global h2 style applies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center p-6 bg-primary/5">
              <achievement.icon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-lg font-semibold mb-2">{achievement.title}</CardTitle> {/* text-primary removed, global h3 style applies */}
              <CardDescription className="text-sm text-foreground/70">{achievement.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="mb-16">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Testimonios de Nuestra Comunidad</h2> {/* text-primary removed, global h2 style applies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="shadow-lg flex flex-col p-6 bg-card">
              <CardContent className="pt-0 flex-grow flex flex-col items-center text-center">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  width={80} 
                  height={80} 
                  className="rounded-full mb-4 border-2 border-secondary"
                  data-ai-hint={testimonial.aiHint}
                />
                <MessageSquare className="h-8 w-8 text-primary mb-3" />
                <p className="text-foreground/80 italic mb-4 flex-grow">"{testimonial.quote}"</p>
              </CardContent>
              <div className="mt-auto text-center">
                <p className="font-semibold text-black dark:text-white">{testimonial.author}</p> {/* Changed text-primary to text-black dark:text-white */}
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Galería de Fotos */}
      <section>
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Galería de Momentos</h2> {/* text-primary removed, global h2 style applies */}
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
         <p className="text-sm text-muted-foreground mt-4 text-center">Imágenes de referencia. Pronto actualizaremos con fotos reales de nuestro centro.</p>
      </section>
    </div>
  );
}
