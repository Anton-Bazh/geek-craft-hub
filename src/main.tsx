// src/main.tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/**
 * Forzar favicon local en runtime.
 * Cambia el query param (v=20251114) cuando actualices el icono para bustear caché.
 */
(function forceFavicon(href: string) {
  try {
    // Quitar cualquier icono previo
    document.querySelectorAll('link[rel~="icon"]').forEach((el) => el.remove());

    // Añadir favicon .ico
    const ico = document.createElement("link");
    ico.rel = "icon";
    ico.href = href;
    ico.sizes = "any";
    document.head.appendChild(ico);

    // Añadir fallback PNG 32x32 (si existe en /public)
    const png = document.createElement("link");
    png.rel = "icon";
    png.type = "image/png";
    png.sizes = "32x32";
    png.href = href.replace(/\.ico(\?.*)?$/, "-32x32.png?v=20251114");
    document.head.appendChild(png);
  } catch (e) {
    // No romper la app si algo falla
    // eslint-disable-next-line no-console
    console.warn("forceFavicon error:", e);
  }
})("/favicon.ico?v=20251114");

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
