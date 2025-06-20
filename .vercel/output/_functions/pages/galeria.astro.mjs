import { c as createComponent, m as maybeRenderHead, b as renderScript, a as renderTemplate, r as renderComponent, d as addAttribute } from '../chunks/astro/server_DMAQJEd5.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BbVr7bPF.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$GalleryFilter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="gallery-filter" data-astro-cid-5znjsx5h> <div class="filter-header" data-astro-cid-5znjsx5h> <h3 class="filter-title" data-astro-cid-5znjsx5h>Filtrar Galería</h3> <button class="clear-filters" id="clear-gallery-filters" data-astro-cid-5znjsx5h>Mostrar Todo</button> </div> <div class="filter-buttons" data-astro-cid-5znjsx5h> <button class="filter-btn active" data-filter="all" data-astro-cid-5znjsx5h>Todas</button> <button class="filter-btn" data-filter="eventos" data-astro-cid-5znjsx5h>Eventos</button> <button class="filter-btn" data-filter="interior" data-astro-cid-5znjsx5h>Interior</button> <button class="filter-btn" data-filter="djs" data-astro-cid-5znjsx5h>DJs</button> <button class="filter-btn" data-filter="ambiente" data-astro-cid-5znjsx5h>Ambiente</button> <button class="filter-btn" data-filter="bebidas" data-astro-cid-5znjsx5h>Bebidas</button> </div> </div>  ${renderScript($$result, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/GalleryFilter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/GalleryFilter.astro", void 0);

const $$Galeria = createComponent(($$result, $$props, $$slots) => {
  const galleryImages = [
    {
      id: 1,
      src: "/pictures/gallery/event-1.jpg",
      alt: "Noche de Reggaeton",
      category: "eventos",
      title: "Noche de Reggaeton",
      date: "2024-01-15",
      description: "Una noche llena de ritmo y energ\xEDa"
    },
    {
      id: 2,
      src: "/pictures/gallery/club-interior.jpg",
      alt: "Interior del club",
      category: "interior",
      title: "Sala Principal",
      date: "2024-01-20",
      description: "Nuestro espacio principal con la mejor tecnolog\xEDa"
    },
    {
      id: 3,
      src: "/pictures/gallery/dj-performance.jpg",
      alt: "DJ en vivo",
      category: "djs",
      title: "DJ Ti\xEBsto en Vivo",
      date: "2024-01-25",
      description: "Una presentaci\xF3n inolvidable"
    },
    {
      id: 4,
      src: "/pictures/gallery/crowd-1.jpg",
      alt: "Multitud bailando",
      category: "ambiente",
      title: "Pista de Baile",
      date: "2024-02-01",
      description: "La energ\xEDa de nuestros clientes"
    },
    {
      id: 5,
      src: "/pictures/gallery/vip-area.jpg",
      alt: "\xC1rea VIP",
      category: "interior",
      title: "Zona VIP",
      date: "2024-02-05",
      description: "Exclusividad y confort"
    },
    {
      id: 6,
      src: "/pictures/gallery/bar-cocktails.jpg",
      alt: "Cocteles en el bar",
      category: "bebidas",
      title: "Cocteles de Autor",
      date: "2024-02-10",
      description: "Nuestros bartenders en acci\xF3n"
    },
    {
      id: 7,
      src: "/pictures/gallery/light-show.jpg",
      alt: "Show de luces",
      category: "eventos",
      title: "Show de Luces",
      date: "2024-02-12",
      description: "Tecnolog\xEDa de iluminaci\xF3n de vanguardia"
    },
    {
      id: 8,
      src: "/pictures/gallery/live-band.jpg",
      alt: "Banda en vivo",
      category: "eventos",
      title: "Banda en Vivo",
      date: "2024-02-18",
      description: "M\xFAsica en vivo de alta calidad"
    },
    {
      id: 9,
      src: "/pictures/gallery/birthday-party.jpg",
      alt: "Fiesta de cumplea\xF1os",
      category: "eventos",
      title: "Celebraci\xF3n VIP",
      date: "2024-02-20",
      description: "Momentos especiales \xFAnicos"
    },
    {
      id: 10,
      src: "/pictures/gallery/dj-booth.jpg",
      alt: "Cabina del DJ",
      category: "interior",
      title: "Cabina del DJ",
      date: "2024-02-22",
      description: "Equipamiento profesional de \xFAltima generaci\xF3n"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galer\xEDa - Kali Club", "data-astro-cid-tvv6smhg": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-tvv6smhg": true })} ${maybeRenderHead()}<main class="gallery-page" data-astro-cid-tvv6smhg> <section class="gallery-hero" data-astro-cid-tvv6smhg> <div class="container" data-astro-cid-tvv6smhg> <h1 class="page-title" data-astro-cid-tvv6smhg>Galería</h1> <p class="page-subtitle" data-astro-cid-tvv6smhg>Revive los mejores momentos y descubre nuestros espacios</p> </div> </section> <section class="gallery-content" data-astro-cid-tvv6smhg> <div class="container" data-astro-cid-tvv6smhg> ${renderComponent($$result2, "GalleryFilter", $$GalleryFilter, { "data-astro-cid-tvv6smhg": true })} <div class="gallery-grid" id="gallery-grid" data-astro-cid-tvv6smhg> ${galleryImages.map((image, index) => renderTemplate`<div class="gallery-item"${addAttribute(image.category, "data-category")}${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-tvv6smhg> <div class="image-container" data-astro-cid-tvv6smhg> <img${addAttribute(image.src || "/placeholder.svg", "src")}${addAttribute(image.alt, "alt")} class="gallery-image" loading="lazy" data-astro-cid-tvv6smhg> <div class="image-overlay" data-astro-cid-tvv6smhg> <div class="overlay-content" data-astro-cid-tvv6smhg> <h3 class="image-title" data-astro-cid-tvv6smhg>${image.title}</h3> <p class="image-description" data-astro-cid-tvv6smhg>${image.description}</p> <span class="image-date" data-astro-cid-tvv6smhg>${image.date}</span> </div> <div class="overlay-actions" data-astro-cid-tvv6smhg> <button class="btn-view"${addAttribute(image.src, "data-image")}${addAttribute(image.title, "data-title")} data-astro-cid-tvv6smhg> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-tvv6smhg> <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-astro-cid-tvv6smhg></path> <circle cx="12" cy="12" r="3" data-astro-cid-tvv6smhg></circle> </svg> </button> <button class="btn-share"${addAttribute(image.title, "data-title")} data-astro-cid-tvv6smhg> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-tvv6smhg> <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" data-astro-cid-tvv6smhg></path> <polyline points="16,6 12,2 8,6" data-astro-cid-tvv6smhg></polyline> <line x1="12" y1="2" x2="12" y2="15" data-astro-cid-tvv6smhg></line> </svg> </button> </div> </div> </div> </div>`)} </div> </div> </section> </main>  <div class="lightbox" id="lightbox" data-astro-cid-tvv6smhg> <div class="lightbox-content" data-astro-cid-tvv6smhg> <button class="lightbox-close" id="lightbox-close" data-astro-cid-tvv6smhg>&times;</button> <img src="/placeholder.svg" alt="" class="lightbox-image" id="lightbox-image" data-astro-cid-tvv6smhg> <div class="lightbox-info" data-astro-cid-tvv6smhg> <h3 class="lightbox-title" id="lightbox-title" data-astro-cid-tvv6smhg></h3> </div> <div class="lightbox-nav" data-astro-cid-tvv6smhg> <button class="lightbox-prev" id="lightbox-prev" data-astro-cid-tvv6smhg>‹</button> <button class="lightbox-next" id="lightbox-next" data-astro-cid-tvv6smhg>›</button> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-tvv6smhg": true })} ` })}  ${renderScript($$result, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/galeria.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/galeria.astro", void 0);

const $$file = "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/galeria.astro";
const $$url = "/galeria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Galeria,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
