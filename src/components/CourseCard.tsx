import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap, Clock, Users, BarChart3 } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  levels: string;
  modalities: string;
  duration: string;
  benefits: string[];
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
}

export default function CourseCard({
  id,
  title,
  description,
  levels,
  modalities,
  duration,
  benefits,
  imageSrc,
  imageAlt,
  aiHint,
}: CourseCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="p-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
          data-ai-hint={aiHint}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2 text-primary">{title}</CardTitle>
        <CardDescription className="text-foreground/80 mb-4 h-20 overflow-hidden text-ellipsis">{description}</CardDescription>
        
        <div className="space-y-2 text-sm text-foreground/90 mb-4">
          <p className="flex items-center"><BarChart3 className="w-4 h-4 mr-2 text-primary" /> <strong>Niveles:</strong> {levels}</p>
          <p className="flex items-center"><Users className="w-4 h-4 mr-2 text-primary" /> <strong>Modalidades:</strong> {modalities}</p>
          <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-primary" /> <strong>Duración:</strong> {duration}</p>
        </div>

        <h4 className="font-semibold text-foreground mb-1">Beneficios:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
          {benefits.slice(0, 2).map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={`#enrollment?course=${id}`}>Inscríbete en {title}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
