// File: src/pages/NewsDetail.tsx
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/SEOHead";
import { newsArticles } from "@/data/newsData";

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find article by slug
  const article = newsArticles.find((a) => a.slug === slug);

  // If article not found, redirect to news page
  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <>
      <SEOHead
        title={`${article.title} - GeekHub MX`}
        description={article.excerpt}
        ogImage={article.image || "/og-news.jpg"}
        ogType="article"
      />

      <div className="min-h-screen py-12">
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/news">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Volver a noticias
              </Link>
            </Button>

            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  {article.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('es-MX', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {article.title}
              </h1>

              <p className="text-xl text-muted-foreground">
                {article.excerpt}
              </p>
            </header>

            {/* Featured Image Placeholder */}
            <div className="bg-gradient-primary rounded-lg h-64 md:h-96 flex items-center justify-center mb-8">
              <span className="text-primary-foreground">
                [Imagen destacada]
              </span>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none 
                         prose-headings:font-bold prose-headings:text-foreground
                         prose-p:text-muted-foreground prose-p:leading-relaxed
                         prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                         prose-a:text-primary hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Button asChild variant="outline">
                  <Link to="/news">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Ver todas las noticias
                  </Link>
                </Button>

                <Button asChild className="bg-gradient-accent hover:opacity-90">
                  <Link to="/catalog">
                    Ver catálogo de productos
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </>
  );
};

export default NewsDetail;
