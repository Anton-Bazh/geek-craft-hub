// File: src/data/newsData.ts
export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
  category: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "nuevos-lanzamientos-mayo-2024",
    title: "Nuevos lanzamientos de Mayo 2024",
    excerpt: "Descubre las últimas figuras y productos que acaban de llegar a nuestra tienda.",
    content: `
      <p>Este mes estamos emocionados de presentar una increíble colección de nuevos productos que harán felices a todos los fanáticos del anime y manga.</p>
      
      <h2>Figuras destacadas</h2>
      <p>Entre los lanzamientos más esperados tenemos la nueva línea de figuras de My Hero Academia, incluyendo una edición especial de Deku con base temática y efectos intercambiables.</p>
      
      <h2>Mangas y cómics</h2>
      <p>También recibimos los últimos tomos de series populares como Demon Slayer, One Piece y Jujutsu Kaisen.</p>
      
      <p>Visita nuestra tienda para ver todos los nuevos productos disponibles.</p>
    `,
    date: "2024-05-15",
    image: "/images/news/mayo-2024.jpg",
    category: "Lanzamientos",
  },
  {
    slug: "guia-cuidado-figuras",
    title: "Guía para el cuidado de tus figuras coleccionables",
    excerpt: "Aprende cómo mantener tus figuras en perfecto estado con estos consejos profesionales.",
    content: `
      <p>Las figuras coleccionables son una inversión y es importante cuidarlas adecuadamente para mantener su valor y apariencia.</p>
      
      <h2>Ubicación adecuada</h2>
      <p>Evita colocar tus figuras en lugares con luz solar directa, ya que puede decolorar los materiales. Busca un lugar fresco y seco.</p>
      
      <h2>Limpieza regular</h2>
      <p>Usa un pincel suave o aire comprimido para remover el polvo. Para manchas difíciles, un paño húmedo suave es suficiente.</p>
      
      <h2>Almacenamiento</h2>
      <p>Si necesitas guardar tus figuras, conserva las cajas originales y usa protección adicional para piezas delicadas.</p>
    `,
    date: "2024-05-10",
    image: "/images/news/cuidado-figuras.jpg",
    category: "Guías",
  },
  {
    slug: "eventos-anime-2024",
    title: "Eventos de anime confirmados para 2024",
    excerpt: "Los mejores eventos de anime y cultura otaku que no te puedes perder este año.",
    content: `
      <p>Este año promete ser increíble para los fanáticos del anime con varios eventos importantes programados.</p>
      
      <h2>Convenciones principales</h2>
      <p>La TNT Comic Con regresa en junio con invitados especiales y exclusivas de figuras. También se confirmó la Expo TNT para noviembre.</p>
      
      <h2>Proyecciones especiales</h2>
      <p>Varios cines programaron proyecciones especiales de películas de anime, incluyendo estrenos y clásicos remasterizados.</p>
      
      <p>Mantente atento a nuestras redes sociales para más información sobre estos eventos.</p>
    `,
    date: "2024-05-05",
    image: "/images/news/eventos-2024.jpg",
    category: "Eventos",
  },
];
