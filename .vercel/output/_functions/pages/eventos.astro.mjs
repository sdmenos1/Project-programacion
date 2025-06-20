import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DMAQJEd5.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BbVr7bPF.mjs';
import { $ as $$EventFilter, a as $$EventCard } from '../chunks/EventFilter_DhnjLjEp.mjs';
import { e as eventsData } from '../chunks/events_DcySJ-Ky.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const events = eventsData;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Eventos - Kali Club", "data-astro-cid-3jqi3h3c": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-3jqi3h3c": true })} ${maybeRenderHead()}<main class="events-page" data-astro-cid-3jqi3h3c> <section class="events-hero" data-astro-cid-3jqi3h3c> <div class="container" data-astro-cid-3jqi3h3c> <h1 class="page-title" data-astro-cid-3jqi3h3c>Próximos Eventos</h1> <p class="page-subtitle" data-astro-cid-3jqi3h3c>Vive las mejores noches con los mejores artistas</p> </div> </section> <section class="events-content" data-astro-cid-3jqi3h3c> <div class="container" data-astro-cid-3jqi3h3c> ${renderComponent($$result2, "EventFilter", $$EventFilter, { "data-astro-cid-3jqi3h3c": true })} <div class="events-grid" id="events-grid" data-astro-cid-3jqi3h3c> ${events.map((event) => renderTemplate`${renderComponent($$result2, "EventCard", $$EventCard, { "id": event.id, "title": event.title, "date": event.date, "time": event.time, "artist": event.artist, "genre": event.genre, "price": event.price, "image": event.image, "description": event.description, "venue": event.venue, "capacity": event.capacity, "ticketsLeft": event.ticketsLeft, "data-astro-cid-3jqi3h3c": true })}`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-3jqi3h3c": true })} ` })} `;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/eventos/index.astro", void 0);

const $$file = "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/eventos/index.astro";
const $$url = "/eventos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
