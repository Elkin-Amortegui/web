
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function ValoresPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <DollarSign className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Tabla de Valores
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Consulta nuestras tarifas y costos asociados a los programas y servicios del Centro de Idiomas.
        </p>
      </header>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Tarifas Actuales</CardTitle>
              <CardDescription>Información sobre costos de cursos, exámenes y otros servicios.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for actual table or list of values */}
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Actualmente, la tabla de valores detallada se encuentra en proceso de actualización para el próximo período académico.
                </p>
                <p className="text-foreground/80">
                  Para obtener información precisa y actualizada sobre los costos de nuestros cursos de idiomas (Inglés, Francés, Alemán, Portugués), exámenes de clasificación, certificaciones, y otros servicios ofrecidos por el Centro de Idiomas, por favor, póngase en contacto directamente con nuestra oficina:
                </p>
                <ul className="list-disc list-inside pl-4 text-foreground/80">
                  <li><strong>Teléfono:</strong> 6086611623 EXT(401)</li>
                  <li><strong>Correo Electrónico:</strong> <a href="mailto:centrodeidiomas@unillanos.edu.co" className="text-primary hover:underline">centrodeidiomas@unillanos.edu.co</a></li>
                  <li><strong>Presencialmente:</strong> Carrera 30A No 41B - 39, Barrio La Grama, Villavicencio.</li>
                </ul>
                <p className="text-foreground/80">
                  Agradecemos su comprensión y le invitamos a consultar nuestros canales oficiales para futuras actualizaciones.
                </p>
              </div>
              {/* 
                Example structure if you had data:
                <table className="w-full mt-4">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-semibold">Curso/Servicio</th>
                      <th className="text-left p-2 font-semibold">Valor (COP)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">Curso de Inglés Nivel A1</td>
                      <td className="p-2">$XXX.XXX</td>
                    </tr>
                    <tr>
                      <td className="p-2">Examen de Clasificación</td>
                      <td className="p-2">$YYY.YYY</td>
                    </tr>
                  </tbody>
                </table>
              */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
