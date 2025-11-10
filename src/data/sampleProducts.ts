import { Product, Category, StoreInfo } from "@/types/product";

/**
 * Sample Product Data
 * This would typically come from a database/API in production
 */

export const sampleProducts: Product[] = [
  {
    id: "sku-000123",
    title: "Deku Action Figure 1/8",
    subtitle: "2024 Official Release",
    description_short: "PVC figure, 25cm, themed base included.",
    description_long: "Highly detailed PVC action figure featuring Izuku Midoriya (Deku) from My Hero Academia in his hero costume. Includes interchangeable hands, facial expressions, and a themed display base with LED effects.",
    categories: ["manga", "figures"],
    tags: ["limited", "collectible", "my-hero-academia"],
    images: ["/placeholder.svg"],
    price_suggested: 1499.00,
    currency: "MXN",
    stock: 3,
    attributes: {
      material: "PVC",
      height_cm: 25,
      manufacturer: "GoodToy Co.",
      series: "My Hero Academia",
      character: "Izuku Midoriya",
      limited_edition: true
    }
  },
  {
    id: "sku-000124",
    title: "Naruto Shippuden Collectors Box Set",
    subtitle: "Complete Series Blu-ray",
    description_short: "All 500 episodes in premium quality with exclusive artwork book.",
    description_long: "The ultimate collection for Naruto fans! This premium box set includes all 500 episodes of Naruto Shippuden on Blu-ray, featuring remastered audio and video, behind-the-scenes content, and a 120-page exclusive artwork book with character designs and creator interviews.",
    categories: ["anime", "media"],
    tags: ["complete-series", "collectors", "naruto"],
    images: ["/placeholder.svg"],
    price_suggested: 3999.00,
    currency: "MXN",
    stock: 8,
    attributes: {
      manufacturer: "Viz Media",
      series: "Naruto Shippuden",
      release_date: "2024-01"
    }
  },
  {
    id: "sku-000125",
    title: "Demon Slayer Tanjiro Sword Replica",
    subtitle: "Full-Size Nichirin Blade",
    description_short: "1:1 scale replica of Tanjiro's signature sword, 104cm length.",
    description_long: "An authentic replica of Tanjiro Kamado's Nichirin blade from Demon Slayer. This full-size 104cm sword features detailed engraving, a weathered finish, and comes with a display stand. Made from high-quality zinc alloy with a safe, dull edge.",
    categories: ["weapons", "collectibles"],
    tags: ["demon-slayer", "replica", "display"],
    images: ["/placeholder.svg"],
    price_suggested: 2299.00,
    currency: "MXN",
    stock: 5,
    attributes: {
      material: "Zinc Alloy",
      height_cm: 104,
      weight_g: 850,
      manufacturer: "Anime Replicas Inc.",
      series: "Demon Slayer",
      character: "Tanjiro Kamado"
    }
  },
  {
    id: "sku-000126",
    title: "Attack on Titan Survey Corps Jacket",
    subtitle: "Premium Cosplay Costume",
    description_short: "Official licensed Survey Corps jacket with embroidered wings of freedom.",
    description_long: "Step into the world of Attack on Titan with this premium Survey Corps jacket. Features accurate embroidery, adjustable straps, multiple pockets, and high-quality fabric. Available in multiple sizes for the perfect fit. Officially licensed merchandise.",
    categories: ["clothing", "cosplay"],
    tags: ["attack-on-titan", "licensed", "cosplay"],
    images: ["/placeholder.svg"],
    price_suggested: 1899.00,
    currency: "MXN",
    stock: 12,
    attributes: {
      material: "Cotton Blend",
      manufacturer: "Official Merchandise Co.",
      series: "Attack on Titan"
    }
  },
  {
    id: "sku-000127",
    title: "One Piece Thousand Sunny Model Ship",
    subtitle: "Grand Ship Collection",
    description_short: "Highly detailed plastic model kit of the Straw Hat Pirates' ship.",
    description_long: "Build your own Thousand Sunny! This premium model kit features over 200 pieces, detailed interior sections, movable parts, and display stand. Includes water-slide decals and painting guide. Scale 1:400. Perfect for collectors and model enthusiasts.",
    categories: ["models", "collectibles"],
    tags: ["one-piece", "model-kit", "ship"],
    images: ["/placeholder.svg"],
    price_suggested: 1699.00,
    currency: "MXN",
    stock: 6,
    attributes: {
      material: "Plastic",
      height_cm: 30,
      manufacturer: "Bandai",
      series: "One Piece"
    }
  },
  {
    id: "sku-000128",
    title: "Jujutsu Kaisen Gojo Nendoroid",
    subtitle: "Cute Chibi Figure",
    description_short: "Adorable chibi-style Satoru Gojo with interchangeable parts.",
    description_long: "The strongest sorcerer in cute Nendoroid form! This figure features Satoru Gojo with multiple facial expressions, hand parts, and accessories including his blindfold and Infinite Void effect parts. Fully poseable with Nendoroid joints.",
    categories: ["figures", "nendoroid"],
    tags: ["jujutsu-kaisen", "chibi", "gojo"],
    images: ["/placeholder.svg"],
    price_suggested: 899.00,
    currency: "MXN",
    stock: 15,
    attributes: {
      material: "ABS & PVC",
      height_cm: 10,
      manufacturer: "Good Smile Company",
      series: "Jujutsu Kaisen",
      character: "Satoru Gojo"
    }
  },
  {
    id: "sku-000129",
    title: "Dragon Ball Z Capsule Corp Backpack",
    subtitle: "Premium Gaming/Travel Bag",
    description_short: "Spacious backpack with Capsule Corp logo, USB charging port included.",
    description_long: "Carry your gear in style with this premium Capsule Corp backpack. Features padded laptop compartment (up to 15.6\"), multiple organizational pockets, water-resistant material, USB charging port, and ergonomic shoulder straps. Perfect for gamers, students, and DBZ fans.",
    categories: ["accessories", "bags"],
    tags: ["dragon-ball-z", "practical", "licensed"],
    images: ["/placeholder.svg"],
    price_suggested: 1299.00,
    currency: "MXN",
    stock: 20,
    attributes: {
      material: "Polyester",
      manufacturer: "Official Merchandise Co.",
      series: "Dragon Ball Z"
    }
  },
  {
    id: "sku-000130",
    title: "Pokemon Charizard VMAX Card",
    subtitle: "Rainbow Rare Secret",
    description_short: "Ultra-rare rainbow secret rare from Champions Path, mint condition.",
    description_long: "One of the most sought-after Pokemon cards! This Rainbow Rare Charizard VMAX from the Champions Path set is professionally graded, stored in a protective case, and guaranteed authentic. Perfect addition to any serious collection.",
    categories: ["cards", "collectibles"],
    tags: ["pokemon", "ultra-rare", "investment"],
    images: ["/placeholder.svg"],
    price_suggested: 8999.00,
    currency: "MXN",
    stock: 2,
    attributes: {
      manufacturer: "The Pokemon Company",
      series: "Pokemon TCG",
      character: "Charizard",
      limited_edition: true
    }
  }
];

export const categories: Category[] = [
  { id: "all", name: "All Products", slug: "all", icon: "Grid3x3" },
  { id: "figures", name: "Figures", slug: "figures", icon: "Users", description: "Action figures, statues, and collectible figures" },
  { id: "manga", name: "Manga & Comics", slug: "manga", icon: "Book", description: "Manga volumes, comics, and graphic novels" },
  { id: "anime", name: "Anime", slug: "anime", icon: "Film", description: "Anime DVDs, Blu-rays, and merchandise" },
  { id: "models", name: "Model Kits", slug: "models", icon: "Box", description: "Gunpla and other model kits" },
  { id: "clothing", name: "Apparel", slug: "clothing", icon: "Shirt", description: "T-shirts, hoodies, and cosplay costumes" },
  { id: "accessories", name: "Accessories", slug: "accessories", icon: "Watch", description: "Bags, keychains, and other accessories" },
  { id: "cards", name: "Trading Cards", slug: "cards", icon: "CreditCard", description: "Pokemon, Yu-Gi-Oh!, and other TCG" },
  { id: "collectibles", name: "Collectibles", slug: "collectibles", icon: "Star", description: "Limited editions and rare items" },
];

export const storeInfo: StoreInfo = {
  name: "Otaku Haven",
  tagline: "Your Premium Geek & Anime Collectibles Store",
  description: "Welcome to Otaku Haven! We specialize in authentic anime figures, manga, collectibles, and exclusive merchandise from your favorite series. Every item is carefully curated and verified for authenticity.",
  contact: {
    whatsapp: "+52-555-123-4567",
    email: "hello@otakuhaven.com",
    social: {
      instagram: "@otakuhaven",
      twitter: "@otakuhaven",
      facebook: "OtakuHavenMX"
    }
  },
  business_hours: "Mon-Sat: 10:00 AM - 8:00 PM",
  location: "Mexico City, Mexico"
};
