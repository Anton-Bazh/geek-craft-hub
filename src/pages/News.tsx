// File: src/pages/News.tsx
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/SEOHead";
import { newsArticles } from "@/data/newsData";

const News = () => {
  return (
    <>
      <SEOHead
        title="Noticias - GeekHub MX"
        description="Últimas noticias, lanzamientos y novedades del mundo del anime, manga y coleccionables. Mantente informado con GeekHub MX."
        ogImage="/og-news.jpg"
      />

      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias</h1>
            <p className="text-xl text-muted-foreground">
              Últimas novedades y lanzamientos del mundo geek
            </p>
          </div>

          {/* News Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-card rounded-lg shadow-card overflow-hidden hover:shadow-card-hover transition-shadow"
                >
                  {/* Image Placeholder */}
                  <div className="bg-gradient-primary h-48 flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">
                      [Imagen de {article.category}]
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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

                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                      <Link to={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Read More Button */}
                    <Button asChild variant="outline">
                      <Link to={`/news/${article.slug}`}>
                        Leer más
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State (if needed) */}
            {newsArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No hay noticias disponibles en este momento.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
