
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollText, FileText, ShieldCheck } from 'lucide-react';

export default function NormativaPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <ScrollText className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">
          Normativa del Centro de Idiomas
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Documentos, resoluciones y acuerdos que rigen el funcionamiento y los procesos académicos del Centro de Idiomas UNILLANOS.
        </p>
      </header>

      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Documentos Relevantes
            </CardTitle>
            <CardDescription>
              Consulte aquí la normativa aplicable a nuestros estudiantes, docentes y programas.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 border rounded-lg bg-muted/50">
              <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                Información Importante
              </h3>
              <p className="text-foreground/80">
                La información detallada sobre la normativa específica, incluyendo resoluciones académicas, acuerdos del consejo, reglamentos estudiantiles aplicables al Centro de Idiomas, y políticas de tratamiento de datos, está actualmente en proceso de compilación y digitalización para esta sección.
              </p>
              <p className="text-foreground/80 mt-3">
                Próximamente encontrará aquí los enlaces directos a los documentos PDF correspondientes.
              </p>
              <p className="text-foreground/80 mt-3">
                Para consultas urgentes sobre normativa, por favor diríjase a la coordinación del Centro de Idiomas.
              </p>
            </div>
            
            {/* Placeholder for future links
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <a href="#" className="text-primary hover:underline">Reglamento Estudiantil de Idiomas (PDF)</a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">Resolución de Tarifas Vigentes (PDF)</a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">Acuerdo de Creación del Centro de Idiomas (PDF)</a>
              </li>
            </ul>
            */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
