
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CalendarClock, Search, Info } from 'lucide-react';

export default function CalendarioAcademicoPage() {
  const pdfPath = "/docs/calendario-academico/resolucion-academica-096-2024.pdf";

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16 animate-in fade-in-0 slide-in-from-top-10 duration-700">
        <CalendarClock className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Calendario Académico Vigente 2025
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Consulta las fechas clave para inscripciones, matrículas, inicio de clases y periodos de evaluación.
        </p>
      </header>

      <Card className="max-w-2xl mx-auto shadow-xl border-primary/20 border-2 animate-in fade-in-0 delay-200 duration-500">
        <CardHeader className="text-center bg-primary/10">
          <CardTitle className="text-2xl text-primary">Resolución Oficial</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 text-center">
          <p className="text-foreground/90 mb-6">
            A continuación, puede consultar el documento oficial que rige todas las fechas importantes del Centro de Idiomas para el año 2025.
          </p>
          
          <div className="mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">
                    <Search className="mr-2 h-5 w-5" />
                    VER RESOLUCIÓN ACADÉMICA N° 096 DE 2024
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-2 flex flex-col">
                <div className="flex-grow w-full h-full">
                  <iframe
                    src={pdfPath}
                    title="Resolución Académica N° 096 de 2024"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-8 text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
            <Info className="h-5 w-5 inline-block mr-2" />
            Cualquier modificación a este calendario será actualizada y reflejada en esta misma sección. Le recomendamos verificarla con regularidad.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
