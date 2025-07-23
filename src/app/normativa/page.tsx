
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollText, Search, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { normativaData } from './normativaData';

export default function NormativaPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <header className="text-center mb-12 md:mb-16 animate-in fade-in-0 slide-in-from-top-10 duration-700">
        <ScrollText className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Normativa del Centro de Idiomas
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Documentos, resoluciones y acuerdos que rigen el funcionamiento y los procesos académicos del Centro de Idiomas de la Universidad de los Llanos.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {normativaData.map((item, index) => (
          <div key={item.id} className={`animate-in fade-in-0 slide-in-from-bottom-5 delay-${150 + index * 50} duration-500`}>
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col h-full group hover:-translate-y-1 hover:border-secondary border-2 border-transparent">
              <CardHeader className="flex-row items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary transition-colors duration-300">
                   <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg text-primary">{item.title}</CardTitle>
                  <CardDescription className="text-xs">{item.category}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80 mb-4">{item.description}</p>
                {item.isGroup && item.subItems && (
                  <div className="pl-4 border-l-2 border-primary/20 space-y-2 mt-2">
                    {item.subItems.map(sub => (
                      <div key={sub.title}>
                        <h4 className="font-semibold text-sm text-primary/90">{sub.title}</h4>
                        <p className="text-xs text-foreground/70">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                {item.pdfPath ? (
                  <Dialog>
                    <DialogTrigger asChild>
                       <Button className="w-full" aria-label={`Ver documento ${item.title}`}>
                        <Search className="mr-2 h-4 w-4" />
                        Ver Documento
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-2 flex flex-col">
                      <iframe
                        src={item.pdfPath}
                        title={item.title}
                        width="100%"
                        height="100%"
                        className="flex-grow"
                        style={{ border: 'none' }}
                      />
                    </DialogContent>
                  </Dialog>
                ) : item.linkUrl ? (
                  <Button asChild variant="outline" className="w-full">
                    <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                       <ExternalLink className="mr-2 h-4 w-4" />
                       {item.linkLabel || 'Más Información'}
                    </a>
                  </Button>
                ) : null}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
