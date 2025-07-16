import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { TooltipProvider } from '@/components/ui/tooltip'; 

export const metadata: Metadata = {
  title: 'Centro de Idiomas de la Universidad de los Llanos',
  description: 'Aprende idiomas y transforma tu futuro en el Centro de Idiomas de la Universidad de los Llanos. Cursos de inglés, francés, alemán y portugués.',
  keywords: "Cursos de idiomas Villavicencio, Centro de Idiomas UNILLANOS, Aprender inglés Meta, Unillanos idiomas, aprender frances, aprender aleman, aprender portugues, UNILLANOS",
  icons: {
    icon: '/idiomas-unillanos.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <TooltipProvider> 
          <Header />
          <main className="flex-grow pt-24"> {/* Asegura que el padding superior sea igual a la altura del header */}
            {children}
          </main>
          <Footer />
          <FloatingButtons />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
