import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DMAQJEd5.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BbVr7bPF.mjs';
import { $ as $$EventFilter, a as $$EventCard } from '../chunks/EventFilter_DhnjLjEp.mjs';
import { e as eventsData } from '../chunks/events_DcySJ-Ky.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Eventos = createComponent(($$result, $$props, $$slots) => {
  const events = eventsData;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Eventos - Kali Club", "data-astro-cid-zk2dtgpv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-zk2dtgpv": true })} ${maybeRenderHead()}<main class="events-page" data-astro-cid-zk2dtgpv> <section class="events-hero" data-astro-cid-zk2dtgpv> <div class="container" data-astro-cid-zk2dtgpv> <div class="hero-content" data-astro-cid-zk2dtgpv> <h1 class="page-title" data-astro-cid-zk2dtgpv>Próximos Eventos</h1> <p class="page-subtitle" data-astro-cid-zk2dtgpv>Vive las mejores noches con los mejores artistas</p> <div class="hero-stats" data-astro-cid-zk2dtgpv> <div class="stat" data-astro-cid-zk2dtgpv> <span class="stat-number" data-astro-cid-zk2dtgpv>${events.length}</span> <span class="stat-label" data-astro-cid-zk2dtgpv>Eventos Programados</span> </div> <div class="stat" data-astro-cid-zk2dtgpv> <span class="stat-number" data-astro-cid-zk2dtgpv>${events.filter((e) => e.ticketsLeft > 0).length}</span> <span class="stat-label" data-astro-cid-zk2dtgpv>Con Entradas Disponibles</span> </div> <div class="stat" data-astro-cid-zk2dtgpv> <span class="stat-number" data-astro-cid-zk2dtgpv>${new Set(events.map((e) => e.genre)).size}</span> <span class="stat-label" data-astro-cid-zk2dtgpv>Géneros Musicales</span> </div> </div> </div> <div class="hero-visual" data-astro-cid-zk2dtgpv> <div class="floating-cards" data-astro-cid-zk2dtgpv> ${events.slice(0, 3).map((event, index) => renderTemplate`<div class="floating-card"${addAttribute(`animation-delay: ${index * 0.5}s`, "style")} data-astro-cid-zk2dtgpv> <img${addAttribute(event.image || "/placeholder.svg", "src")}${addAttribute(event.title, "alt")} class="card-image" data-astro-cid-zk2dtgpv> <div class="card-info" data-astro-cid-zk2dtgpv> <h3 class="card-title" data-astro-cid-zk2dtgpv>${event.title}</h3> <p class="card-artist" data-astro-cid-zk2dtgpv>${event.artist}</p> <span class="card-date" data-astro-cid-zk2dtgpv>${event.date}</span> </div> </div>`)} </div> </div> </div> </section> <section class="events-content" data-astro-cid-zk2dtgpv> <div class="container" data-astro-cid-zk2dtgpv> ${renderComponent($$result2, "EventFilter", $$EventFilter, { "data-astro-cid-zk2dtgpv": true })} <div class="events-grid" id="events-grid" data-astro-cid-zk2dtgpv> ${events.map((event, index) => renderTemplate`<div${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-zk2dtgpv> ${renderComponent($$result2, "EventCard", $$EventCard, { "id": event.id, "title": event.title, "date": event.date, "time": event.time, "artist": event.artist, "genre": event.genre, "price": event.price, "image": event.image, "description": event.description, "venue": event.venue, "capacity": event.capacity, "ticketsLeft": event.ticketsLeft, "data-astro-cid-zk2dtgpv": true })} </div>`)} </div> <div class="load-more-section" data-astro-cid-zk2dtgpv> <button class="btn-load-more" id="load-more" data-astro-cid-zk2dtgpv> <span data-astro-cid-zk2dtgpv>Cargar Más Eventos</span> <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-zk2dtgpv> <path d="M12 5v14M5 12l7 7 7-7" data-astro-cid-zk2dtgpv></path> </svg> </button> </div> </div> </section> <!-- Newsletter Section --> <section class="newsletter-section" data-astro-cid-zk2dtgpv> <div class="container" data-astro-cid-zk2dtgpv> <div class="newsletter-content" data-astro-cid-zk2dtgpv> <div class="newsletter-text" data-astro-cid-zk2dtgpv> <h2 class="newsletter-title" data-astro-cid-zk2dtgpv>No Te Pierdas Ningún Evento</h2> <p class="newsletter-description" data-astro-cid-zk2dtgpv>
Suscríbete a nuestro newsletter y sé el primero en enterarte de nuevos eventos, 
                            ofertas especiales y acceso anticipado a las entradas.
</p> </div> <form class="newsletter-form" id="newsletter-form" data-astro-cid-zk2dtgpv> <div class="form-group" data-astro-cid-zk2dtgpv> <input type="email" class="newsletter-input" placeholder="Tu email" required data-astro-cid-zk2dtgpv> <button type="submit" class="newsletter-btn" data-astro-cid-zk2dtgpv> <span data-astro-cid-zk2dtgpv>Suscribirse</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-zk2dtgpv> <line x1="22" y1="2" x2="11" y2="13" data-astro-cid-zk2dtgpv></line> <polygon points="22,2 15,22 11,13 2,9 22,2" data-astro-cid-zk2dtgpv></polygon> </svg> </button> </div> <p class="newsletter-disclaimer" data-astro-cid-zk2dtgpv>
Al suscribirte aceptas recibir emails promocionales. Puedes darte de baja en cualquier momento.
</p> </form> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-zk2dtgpv": true })} ` })}  ${renderScript($$result, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/eventos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/eventos.astro", void 0);

const $$file = "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/eventos.astro";
const $$url = "/eventos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Eventos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
