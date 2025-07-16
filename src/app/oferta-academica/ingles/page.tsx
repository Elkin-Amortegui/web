
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, User, Users, Baby, School } from 'lucide-react';
import { englishPrograms } from '@/app/oferta-academica/LanguageData';
import { cn } from '@/lib/utils';

const getIconForAge = (ageRange: string) => {
    if (ageRange.includes('5') || ageRange.includes('6') || ageRange.includes('7') || ageRange.includes('8')) return Baby;
    if (ageRange.includes('9') || ageRange.includes('10') || ageRange.includes('11') || ageRange.includes('14')) return School;
    return User;
}

export default function EnglishOfferPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <header className="text-center mb-12 md:mb-16">
                <Button variant="outline" asChild className="mb-6 absolute top-28 left-4 md:left-8">
                    <Link href="/oferta-academica"><ArrowLeft className="mr-2 h-4 w-4" />Volver</Link>
                </Button>
                <Users className="mx-auto h-16 w-16 text-primary mb-4" />
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                    Programas de Inglés
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                    Tenemos un curso de inglés diseñado para cada etapa de la vida. Por favor, selecciona un rango de edad para ver la oferta detallada.
                </p>
            </header>

            <div className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
                {englishPrograms.map((program) => {
                    const Icon = getIconForAge(program.ageRange);
                    return (
                        <Link key={program.slug} href={`/oferta-academica/ingles/${program.slug}`} passHref>
                            <Card className="shadow-md hover:shadow-xl hover:border-primary/50 border-transparent border-2 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group">
                                <CardContent className="p-4 flex items-center gap-4">
                                     <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary transition-colors duration-300">
                                        <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                                     </div>
                                     <div className="flex-grow">
                                        <CardTitle className="text-lg text-primary group-hover:text-primary/80">{program.ageRange}</CardTitle>
                                        <CardDescription className="text-sm">{program.shortDescription || program.description}</CardDescription>
                                     </div>
                                     <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">
                                        &rarr;
                                     </div>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
            
             <div className="mt-16 text-center">
                <p className="text-lg text-foreground/80 mb-4">¿No estás seguro de qué curso elegir?</p>
                <Button asChild variant="outline">
                    <Link href="/contacto">Contáctanos para Asesoría</Link>
                </Button>
            </div>
        </div>
    );
}
