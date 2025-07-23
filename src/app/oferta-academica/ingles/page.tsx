
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Baby, GraduationCap, School, User, Users as UsersIcon, Zap } from 'lucide-react';
import { englishPrograms } from '@/app/oferta-academica/LanguageData';
import { cn } from '@/lib/utils';

// Helper to determine the correct icon based on the age range string
const getIconForAge = (ageRange: string) => {
    if (ageRange.includes('5') || ageRange.includes('6')) return Baby;
    if (ageRange.includes('7') || ageRange.includes('8')) return School;
    if (ageRange.includes('9') || ageRange.includes('10')) return School;
    if (ageRange.includes('11') || ageRange.includes('14')) return UsersIcon;
    if (ageRange.includes('Habilidades')) return Zap;
    return GraduationCap; // For 15+ and others
}

export default function EnglishOfferPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <header className="text-center mb-12 md:mb-16 relative">
                <Button variant="outline" asChild className="absolute top-0 left-0 animate-in fade-in-0 slide-in-from-left-10 duration-500">
                    <Link href="/oferta-academica"><ArrowLeft className="mr-2 h-4 w-4" />Volver</Link>
                </Button>
                <div className="animate-in fade-in-0 slide-in-from-top-10 duration-700">
                    <User className="mx-auto h-16 w-16 text-primary mb-4" />
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                        Programas de Inglés
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                        Tenemos un curso de inglés diseñado para cada etapa de la vida. Por favor, selecciona un rango de edad para ver la oferta detallada.
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {englishPrograms.map((program, index) => {
                    const Icon = getIconForAge(program.ageRange);
                    return (
                        <div key={program.slug} className={cn(
                            `animate-in fade-in-0 slide-in-from-bottom-10 delay-${150 + index * 100} duration-500`
                        )}>
                            <Link href={`/oferta-academica/ingles/${program.slug}`} passHref>
                                <Card className="h-full flex flex-col shadow-md hover:shadow-xl hover:border-primary/50 border-transparent border-2 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                                    <CardContent className="p-6 flex items-center gap-4 text-left flex-grow">
                                         <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary transition-colors duration-300 shrink-0 self-start">
                                            <Icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-transform duration-300 group-hover:rotate-6" />
                                         </div>
                                         <div className="flex-grow">
                                            <CardTitle className="text-lg text-primary group-hover:text-primary/90 transition-colors">{program.ageRange}</CardTitle>
                                            <CardDescription className="text-sm">{program.shortDescription || program.description}</CardDescription>
                                         </div>
                                         <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300 self-center">
                                            &rarr;
                                         </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    )
                })}
            </div>
            
             <div className="mt-16 text-center animate-in fade-in-0 delay-500 duration-700">
                <p className="text-lg text-foreground/80 mb-4">¿No estás seguro de qué curso elegir?</p>
                <Button asChild variant="outline" size="lg">
                    <Link href="/contacto">Contáctanos para Asesoría</Link>
                </Button>
            </div>
        </div>
    );
}
