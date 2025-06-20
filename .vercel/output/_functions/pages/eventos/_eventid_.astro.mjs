import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, b as renderScript, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_DMAQJEd5.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../../chunks/Footer_BbVr7bPF.mjs';
import 'clsx';
/* empty css                                        */
import { e as eventsData } from '../../chunks/events_DcySJ-Ky.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ReservationForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ReservationForm;
  const { eventId, eventTitle, eventPrice } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="reservation-form" data-astro-cid-ithn625t> <div class="form-header" data-astro-cid-ithn625t> <h3 class="form-title" data-astro-cid-ithn625t>Reservar Entrada</h3> <p class="form-subtitle" data-astro-cid-ithn625t>Asegura tu lugar en ${eventTitle}</p> </div> <form class="reservation-form-content" id="reservation-form" data-astro-cid-ithn625t> <input type="hidden" name="eventId"${addAttribute(eventId, "value")} data-astro-cid-ithn625t> <div class="form-group" data-astro-cid-ithn625t> <label class="form-label" data-astro-cid-ithn625t>Tipo de Entrada:</label> <select class="form-select" name="ticketType" required data-astro-cid-ithn625t> <option value="" data-astro-cid-ithn625t>Selecciona tipo</option> <option value="general"${addAttribute(eventPrice, "data-price")} data-astro-cid-ithn625t>General - $${eventPrice}</option> <option value="vip"${addAttribute(eventPrice * 1.5, "data-price")} data-astro-cid-ithn625t>VIP - $${eventPrice * 1.5}</option> <option value="premium"${addAttribute(eventPrice * 2, "data-price")} data-astro-cid-ithn625t>Premium - $${eventPrice * 2}</option> </select> </div> <div class="form-group" data-astro-cid-ithn625t> <label class="form-label" data-astro-cid-ithn625t>Cantidad de Entradas:</label> <select class="form-select" name="quantity" required data-astro-cid-ithn625t> <option value="" data-astro-cid-ithn625t>Selecciona cantidad</option> <option value="1" data-astro-cid-ithn625t>1 entrada</option> <option value="2" data-astro-cid-ithn625t>2 entradas</option> <option value="3" data-astro-cid-ithn625t>3 entradas</option> <option value="4" data-astro-cid-ithn625t>4 entradas</option> <option value="5" data-astro-cid-ithn625t>5 entradas</option> </select> </div> <div class="form-group" data-astro-cid-ithn625t> <label class="form-label" data-astro-cid-ithn625t>Nombre Completo:</label> <input type="text" class="form-input" name="fullName" required placeholder="Tu nombre completo" data-astro-cid-ithn625t> </div> <div class="form-group" data-astro-cid-ithn625t> <label class="form-label" data-astro-cid-ithn625t>Email:</label> <input type="email" class="form-input" name="email" required placeholder="tu@email.com" data-astro-cid-ithn625t> </div> <div class="form-group" data-astro-cid-ithn625t> <label class="form-label" data-astro-cid-ithn625t>Teléfono:</label> <input type="tel" class="form-input" name="phone" required placeholder="+1 234 567 8900" data-astro-cid-ithn625t> </div> <div class="form-group" data-astro-cid-ithn625t> <label class="form-label" data-astro-cid-ithn625t>Comentarios Especiales:</label> <textarea class="form-textarea" name="comments" placeholder="Alguna solicitud especial..." data-astro-cid-ithn625t></textarea> </div> <div class="price-summary" data-astro-cid-ithn625t> <div class="price-row" data-astro-cid-ithn625t> <span data-astro-cid-ithn625t>Subtotal:</span> <span id="subtotal" data-astro-cid-ithn625t>$0</span> </div> <div class="price-row" data-astro-cid-ithn625t> <span data-astro-cid-ithn625t>Impuestos (10%):</span> <span id="taxes" data-astro-cid-ithn625t>$0</span> </div> <div class="price-row total" data-astro-cid-ithn625t> <span data-astro-cid-ithn625t>Total:</span> <span id="total" data-astro-cid-ithn625t>$0</span> </div> </div> <button type="submit" class="btn-reserve" data-astro-cid-ithn625t> <span class="btn-text" data-astro-cid-ithn625t>Reservar Ahora</span> <span class="btn-icon" data-astro-cid-ithn625t>🎫</span> </button> <p class="form-disclaimer" data-astro-cid-ithn625t>
* Al reservar aceptas nuestros términos y condiciones. 
            Recibirás un email de confirmación con los detalles de tu reserva.
</p> </form> </div>  ${renderScript($$result, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/ReservationForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/ReservationForm.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  return eventsData.map((event) => ({
    params: { eventId: event.id.toString() },
    props: { event }
  }));
}
const $$eventId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$eventId;
  const { event } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${event.title} - Kali Club`, "data-astro-cid-ts7bi2qe": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ts7bi2qe": true })} ${maybeRenderHead()}<main class="event-detail" data-astro-cid-ts7bi2qe> <section class="event-hero"${addAttribute(`background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${event.image})`, "style")} data-astro-cid-ts7bi2qe> <div class="container" data-astro-cid-ts7bi2qe> <div class="event-info" data-astro-cid-ts7bi2qe> <span class="event-genre" data-astro-cid-ts7bi2qe>${event.genre}</span> <h1 class="event-title" data-astro-cid-ts7bi2qe>${event.title}</h1> <p class="event-artist" data-astro-cid-ts7bi2qe>con ${event.artist}</p> <div class="event-details" data-astro-cid-ts7bi2qe> <div class="detail-item" data-astro-cid-ts7bi2qe> <span class="detail-icon" data-astro-cid-ts7bi2qe>📅</span> <span data-astro-cid-ts7bi2qe>${event.date}</span> </div> <div class="detail-item" data-astro-cid-ts7bi2qe> <span class="detail-icon" data-astro-cid-ts7bi2qe>🕘</span> <span data-astro-cid-ts7bi2qe>${event.time}</span> </div> <div class="detail-item" data-astro-cid-ts7bi2qe> <span class="detail-icon" data-astro-cid-ts7bi2qe>📍</span> <span data-astro-cid-ts7bi2qe>${event.venue}</span> </div> <div class="detail-item" data-astro-cid-ts7bi2qe> <span class="detail-icon" data-astro-cid-ts7bi2qe>💰</span> <span data-astro-cid-ts7bi2qe>Desde $${event.price}</span> </div> </div> </div> </div> </section> <section class="event-content" data-astro-cid-ts7bi2qe> <div class="container" data-astro-cid-ts7bi2qe> <div class="content-grid" data-astro-cid-ts7bi2qe> <div class="event-description" data-astro-cid-ts7bi2qe> <h2 data-astro-cid-ts7bi2qe>Sobre el Evento</h2> <p data-astro-cid-ts7bi2qe>${event.description}</p> <div class="event-stats" data-astro-cid-ts7bi2qe> <div class="stat" data-astro-cid-ts7bi2qe> <span class="stat-number" data-astro-cid-ts7bi2qe>${event.capacity}</span> <span class="stat-label" data-astro-cid-ts7bi2qe>Capacidad Total</span> </div> <div class="stat" data-astro-cid-ts7bi2qe> <span class="stat-number" data-astro-cid-ts7bi2qe>${event.ticketsLeft}</span> <span class="stat-label" data-astro-cid-ts7bi2qe>Tickets Disponibles</span> </div> <div class="stat" data-astro-cid-ts7bi2qe> <span class="stat-number" data-astro-cid-ts7bi2qe>18+</span> <span class="stat-label" data-astro-cid-ts7bi2qe>Edad Mínima</span> </div> </div> <div class="event-features" data-astro-cid-ts7bi2qe> <h3 data-astro-cid-ts7bi2qe>Lo que incluye:</h3> <ul data-astro-cid-ts7bi2qe> <li data-astro-cid-ts7bi2qe>✨ Acceso completo al evento</li> <li data-astro-cid-ts7bi2qe>🎵 Show en vivo del artista</li> <li data-astro-cid-ts7bi2qe>🍸 Barra libre premium (VIP)</li> <li data-astro-cid-ts7bi2qe>📸 Área de fotos exclusiva</li> <li data-astro-cid-ts7bi2qe>🎁 Merchandising del evento</li> </ul> </div> </div> <div class="reservation-section" data-astro-cid-ts7bi2qe> ${renderComponent($$result2, "ReservationForm", $$ReservationForm, { "eventId": event.id, "eventTitle": event.title, "eventPrice": event.price, "data-astro-cid-ts7bi2qe": true })} </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ts7bi2qe": true })} ` })} `;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/eventos/[eventId].astro", void 0);

const $$file = "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/eventos/[eventId].astro";
const $$url = "/eventos/[eventId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$eventId,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
