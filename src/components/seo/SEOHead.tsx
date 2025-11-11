// File: src/components/seo/SEOHead.tsx
import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const SEOHead = ({
  title,
  description,
  ogImage = "/og-default.jpg",
  ogType = "website",
  canonicalUrl,
}: SEOHeadProps) => {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set or update meta tags
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:type", ogType, true);
    
    if (canonicalUrl) {
      setMeta("og:url", canonicalUrl, true);
      
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonicalUrl;
    }
  }, [title, description, ogImage, ogType, canonicalUrl]);

  return null;
};
