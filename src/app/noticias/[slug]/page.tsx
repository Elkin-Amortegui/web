
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, ArrowLeft, Tag } from 'lucide-react';
import { articles, NewsArticle } from '@/app/noticias/NewsData'; // Updated import

async function getArticleData(slug: string): Promise<NewsArticle | null> {
  const article = articles.find(a => a.slug === slug);
  return article || null;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleData(params.slug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Artículo no encontrado</h1>
        <p className="text-lg text-muted-foreground mb-6">El artículo que buscas no existe o ha sido movido.</p>
        <Button asChild>
          <Link href="/noticias"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Noticias</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/noticias"><ArrowLeft className="mr-2 h-4 w-4" />Volver a Noticias</Link>
          </Button>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">{article.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            {article.category && (
              <>
                <span>|</span>
                <div className="flex items-center">
                    <Tag className="mr-2 h-4 w-4" />
                    <span>Categoría: {article.category}</span>
                </div>
              </>
            )}
          </div>
        </header>
        
        {article.image && (
          <Image 
            src={article.image} 
            alt={article.title} 
            width={800} 
            height={400} 
            className="w-full h-auto rounded-lg mb-8 shadow-md object-cover"
            data-ai-hint={article.aiHint}
             priority
          />
        )}

        {article.content && (
          <div 
            className="prose prose-lg max-w-none text-foreground/90"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
        )}
      </article>
    </div>
  );
}
