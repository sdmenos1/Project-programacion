import { c as createComponent, m as maybeRenderHead, a as renderTemplate, d as addAttribute, r as renderComponent } from '../chunks/astro/server_DMAQJEd5.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BbVr7bPF.mjs';
import 'clsx';
/* empty css                                 */
import { e as eventsData } from '../chunks/events_DcySJ-Ky.mjs';
import { d as drinksData } from '../chunks/drinks_CgM0_XB5.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="hero-background" data-astro-cid-bbe6dxrz> <div class="hero-overlay" data-astro-cid-bbe6dxrz></div> </div> <div class="hero-content" data-astro-cid-bbe6dxrz> <div class="hero-text" data-astro-cid-bbe6dxrz> <h1 class="hero-title" data-astro-cid-bbe6dxrz> <span class="title-line" data-astro-cid-bbe6dxrz>Vive la</span> <span class="title-line gradient-text" data-astro-cid-bbe6dxrz>Experiencia</span> <span class="title-line" data-astro-cid-bbe6dxrz>Nocturna</span> </h1> <p class="hero-description" data-astro-cid-bbe6dxrz>
Descubre la mejor música, ambiente único y experiencias inolvidables 
                en el corazón de la noche. Tu destino para momentos extraordinarios.
</p> <div class="hero-buttons" data-astro-cid-bbe6dxrz> <a href="/eventos" class="btn btn-primary" data-astro-cid-bbe6dxrz>Ver Eventos</a> <a href="/reservas" class="btn btn-secondary" data-astro-cid-bbe6dxrz>Hacer Reserva</a> </div> </div> <div class="hero-stats" data-astro-cid-bbe6dxrz> <div class="stat-item" data-astro-cid-bbe6dxrz> <span class="stat-number" data-astro-cid-bbe6dxrz>500+</span> <span class="stat-label" data-astro-cid-bbe6dxrz>Eventos Realizados</span> </div> <div class="stat-item" data-astro-cid-bbe6dxrz> <span class="stat-number" data-astro-cid-bbe6dxrz>10K+</span> <span class="stat-label" data-astro-cid-bbe6dxrz>Clientes Satisfechos</span> </div> <div class="stat-item" data-astro-cid-bbe6dxrz> <span class="stat-number" data-astro-cid-bbe6dxrz>5★</span> <span class="stat-label" data-astro-cid-bbe6dxrz>Calificación</span> </div> </div> </div> <div class="scroll-indicator" data-astro-cid-bbe6dxrz> <div class="scroll-arrow" data-astro-cid-bbe6dxrz></div> </div> </section> `;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/Hero.astro", void 0);

const $$FeaturedEvents = createComponent(($$result, $$props, $$slots) => {
  const featuredEvents = eventsData.filter((event) => event.ticketsLeft > 0).sort((a, b) => b.capacity - b.ticketsLeft - (a.capacity - a.ticketsLeft)).slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section class="featured-events" data-astro-cid-fkutir2x> <div class="container" data-astro-cid-fkutir2x> <div class="section-header" data-astro-cid-fkutir2x> <h2 class="section-title" data-astro-cid-fkutir2x>Próximos Eventos</h2> <p class="section-subtitle" data-astro-cid-fkutir2x>No te pierdas las mejores noches de la ciudad</p> </div> <div class="events-grid" data-astro-cid-fkutir2x> ${featuredEvents.map((event, index) => renderTemplate`<article class="featured-event-card"${addAttribute(`animation-delay: ${index * 0.2}s`, "style")} data-astro-cid-fkutir2x> <div class="event-image-container" data-astro-cid-fkutir2x> <img${addAttribute(event.image || "/placeholder.svg", "src")}${addAttribute(event.title, "alt")} class="event-image" data-astro-cid-fkutir2x> <div class="event-overlay" data-astro-cid-fkutir2x> <span class="genre-badge" data-astro-cid-fkutir2x>${event.genre}</span> ${event.ticketsLeft < event.capacity * 0.2 && renderTemplate`<span class="urgency-badge" data-astro-cid-fkutir2x>¡Últimas entradas!</span>`} </div> </div> <div class="event-content" data-astro-cid-fkutir2x> <div class="event-date" data-astro-cid-fkutir2x> <span class="date-day" data-astro-cid-fkutir2x>${new Date(event.date).getDate()}</span> <span class="date-month" data-astro-cid-fkutir2x>${new Date(event.date).toLocaleDateString("es", { month: "short" }).toUpperCase()}</span> </div> <div class="event-info" data-astro-cid-fkutir2x> <h3 class="event-title" data-astro-cid-fkutir2x>${event.title}</h3> <p class="event-artist" data-astro-cid-fkutir2x>con ${event.artist}</p> <div class="event-details" data-astro-cid-fkutir2x> <span class="event-time" data-astro-cid-fkutir2x>🕘 ${event.time}</span> <span class="event-venue" data-astro-cid-fkutir2x>📍 ${event.venue}</span> </div> </div> <div class="event-footer" data-astro-cid-fkutir2x> <div class="price-info" data-astro-cid-fkutir2x> <span class="price-from" data-astro-cid-fkutir2x>Desde</span> <span class="price-amount" data-astro-cid-fkutir2x>$${event.price}</span> </div> <a${addAttribute(`/eventos/${event.id}`, "href")} class="btn-event" data-astro-cid-fkutir2x>Ver Evento</a> </div> <div class="availability-indicator" data-astro-cid-fkutir2x> <div class="availability-bar" data-astro-cid-fkutir2x> <div class="availability-fill"${addAttribute(`width: ${(event.capacity - event.ticketsLeft) / event.capacity * 100}%`, "style")} data-astro-cid-fkutir2x></div> </div> <span class="availability-text" data-astro-cid-fkutir2x>${event.ticketsLeft} entradas disponibles</span> </div> </div> </article>`)} </div> <div class="section-footer" data-astro-cid-fkutir2x> <a href="/eventos" class="btn-view-all" data-astro-cid-fkutir2x> <span data-astro-cid-fkutir2x>Ver Todos los Eventos</span> <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-fkutir2x> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-fkutir2x></path> </svg> </a> </div> </div> </section> `;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/FeaturedEvents.astro", void 0);

const $$PopularDrinks = createComponent(($$result, $$props, $$slots) => {
  const popularDrinks = drinksData.filter((drink) => drink.popular).slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<section class="popular-drinks" data-astro-cid-pb6jwkj2> <div class="container" data-astro-cid-pb6jwkj2> <div class="section-header" data-astro-cid-pb6jwkj2> <h2 class="section-title" data-astro-cid-pb6jwkj2>Bebidas Populares</h2> <p class="section-subtitle" data-astro-cid-pb6jwkj2>Descubre nuestros cocteles más solicitados</p> </div> <div class="drinks-grid" data-astro-cid-pb6jwkj2> ${popularDrinks.map((drink, index) => renderTemplate`<article class="drink-card"${addAttribute(`animation-delay: ${index * 0.15}s`, "style")} data-astro-cid-pb6jwkj2> <div class="drink-image-container" data-astro-cid-pb6jwkj2> <img${addAttribute(drink.image || "/placeholder.svg", "src")}${addAttribute(drink.name, "alt")} class="drink-image" data-astro-cid-pb6jwkj2> <div class="drink-overlay" data-astro-cid-pb6jwkj2> <span class="popular-badge" data-astro-cid-pb6jwkj2>⭐ Popular</span> <span class="alcohol-badge" data-astro-cid-pb6jwkj2>${drink.alcohol}%</span> </div> <div class="drink-glow" data-astro-cid-pb6jwkj2></div> </div> <div class="drink-content" data-astro-cid-pb6jwkj2> <div class="drink-header" data-astro-cid-pb6jwkj2> <h3 class="drink-name" data-astro-cid-pb6jwkj2>${drink.name}</h3> <span class="drink-category" data-astro-cid-pb6jwkj2>${drink.category}</span> </div> <p class="drink-description" data-astro-cid-pb6jwkj2>${drink.description}</p> <div class="ingredients-preview" data-astro-cid-pb6jwkj2> <span class="ingredients-label" data-astro-cid-pb6jwkj2>Ingredientes principales:</span> <div class="ingredients-tags" data-astro-cid-pb6jwkj2> ${drink.ingredients.slice(0, 3).map((ingredient) => renderTemplate`<span class="ingredient-tag" data-astro-cid-pb6jwkj2>${ingredient}</span>`)} ${drink.ingredients.length > 3 && renderTemplate`<span class="ingredient-tag more" data-astro-cid-pb6jwkj2>+${drink.ingredients.length - 3}</span>`} </div> </div> <div class="drink-footer" data-astro-cid-pb6jwkj2> <div class="price-section" data-astro-cid-pb6jwkj2> <span class="price-amount" data-astro-cid-pb6jwkj2>$${drink.price}</span> </div> <button class="btn-order" data-astro-cid-pb6jwkj2> <span data-astro-cid-pb6jwkj2>Ordenar</span> <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-pb6jwkj2> <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.01" data-astro-cid-pb6jwkj2></path> </svg> </button> </div> </div> </article>`)} </div> <div class="section-footer" data-astro-cid-pb6jwkj2> <a href="/carta" class="btn-view-menu" data-astro-cid-pb6jwkj2> <span data-astro-cid-pb6jwkj2>Ver Carta Completa</span> <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-pb6jwkj2> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-pb6jwkj2></path> </svg> </a> </div> </div> </section> `;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/PopularDrinks.astro", void 0);

const $$AboutPreview = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="about-preview" data-astro-cid-kmsszkmx> <div class="container" data-astro-cid-kmsszkmx> <div class="about-content" data-astro-cid-kmsszkmx> <div class="about-text" data-astro-cid-kmsszkmx> <div class="text-content" data-astro-cid-kmsszkmx> <span class="section-label" data-astro-cid-kmsszkmx>Conoce Kali Club</span> <h2 class="section-title" data-astro-cid-kmsszkmx>Más que una Discoteca</h2> <p class="section-description" data-astro-cid-kmsszkmx>
Desde 2010, hemos sido el epicentro de la vida nocturna en la ciudad. 
                        Creamos experiencias únicas donde la música, el arte y la cultura se 
                        fusionan para ofrecerte noches inolvidables.
</p> <div class="features-grid" data-astro-cid-kmsszkmx> <div class="feature-item" data-astro-cid-kmsszkmx> <div class="feature-icon" data-astro-cid-kmsszkmx>🎵</div> <div class="feature-content" data-astro-cid-kmsszkmx> <h4 class="feature-title" data-astro-cid-kmsszkmx>Música de Calidad</h4> <p class="feature-description" data-astro-cid-kmsszkmx>Los mejores DJs y artistas internacionales</p> </div> </div> <div class="feature-item" data-astro-cid-kmsszkmx> <div class="feature-icon" data-astro-cid-kmsszkmx>✨</div> <div class="feature-content" data-astro-cid-kmsszkmx> <h4 class="feature-title" data-astro-cid-kmsszkmx>Ambiente Único</h4> <p class="feature-description" data-astro-cid-kmsszkmx>Tecnología de vanguardia y diseño innovador</p> </div> </div> <div class="feature-item" data-astro-cid-kmsszkmx> <div class="feature-icon" data-astro-cid-kmsszkmx>🍸</div> <div class="feature-content" data-astro-cid-kmsszkmx> <h4 class="feature-title" data-astro-cid-kmsszkmx>Bebidas Premium</h4> <p class="feature-description" data-astro-cid-kmsszkmx>Cocteles de autor y licores de primera</p> </div> </div> <div class="feature-item" data-astro-cid-kmsszkmx> <div class="feature-icon" data-astro-cid-kmsszkmx>🔒</div> <div class="feature-content" data-astro-cid-kmsszkmx> <h4 class="feature-title" data-astro-cid-kmsszkmx>Seguridad Total</h4> <p class="feature-description" data-astro-cid-kmsszkmx>Ambiente seguro para disfrutar sin preocupaciones</p> </div> </div> </div> <div class="cta-buttons" data-astro-cid-kmsszkmx> <a href="/nosotros" class="btn-primary" data-astro-cid-kmsszkmx>Conoce Nuestra Historia</a> <a href="/contacto" class="btn-secondary" data-astro-cid-kmsszkmx>Contáctanos</a> </div> </div> </div> <div class="about-visual" data-astro-cid-kmsszkmx> <div class="image-stack" data-astro-cid-kmsszkmx> <div class="image-card main" data-astro-cid-kmsszkmx> <img src="/pictures/about/club-interior.jpg" alt="Interior del club" class="about-image" data-astro-cid-kmsszkmx> </div> <div class="image-card secondary" data-astro-cid-kmsszkmx> <img src="/pictures/about/dj-performance.jpg" alt="DJ en vivo" class="about-image" data-astro-cid-kmsszkmx> </div> <div class="image-card tertiary" data-astro-cid-kmsszkmx> <img src="/pictures/about/crowd-dancing.jpg" alt="Gente bailando" class="about-image" data-astro-cid-kmsszkmx> </div> </div> <div class="stats-floating" data-astro-cid-kmsszkmx> <div class="stat-card" data-astro-cid-kmsszkmx> <span class="stat-number" data-astro-cid-kmsszkmx>13+</span> <span class="stat-label" data-astro-cid-kmsszkmx>Años</span> </div> <div class="stat-card" data-astro-cid-kmsszkmx> <span class="stat-number" data-astro-cid-kmsszkmx>500+</span> <span class="stat-label" data-astro-cid-kmsszkmx>Eventos</span> </div> <div class="stat-card" data-astro-cid-kmsszkmx> <span class="stat-number" data-astro-cid-kmsszkmx>50K+</span> <span class="stat-label" data-astro-cid-kmsszkmx>Clientes</span> </div> </div> </div> </div> </div> </section> `;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/AboutPreview.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      id: 1,
      name: "Mar\xEDa Gonz\xE1lez",
      role: "Cliente VIP",
      avatar: "/pictures/testimonials/maria.jpg",
      rating: 5,
      text: "Kali Club es simplemente incre\xEDble. La m\xFAsica, el ambiente, el servicio... todo es de primera calidad. He celebrado varios cumplea\xF1os aqu\xED y siempre superan mis expectativas.",
      event: "Noche de Reggaeton"
    },
    {
      id: 2,
      name: "Carlos Rodr\xEDguez",
      role: "Asistente Regular",
      avatar: "/pictures/testimonials/carlos.jpg",
      rating: 5,
      text: "La mejor discoteca de la ciudad sin duda. Los DJs son espectaculares y la pista de baile siempre est\xE1 llena de buena energ\xEDa. Recomiendo 100% la experiencia VIP.",
      event: "Electronic Vibes"
    },
    {
      id: 3,
      name: "Ana Mart\xEDnez",
      role: "Organizadora de Eventos",
      avatar: "/pictures/testimonials/ana.jpg",
      rating: 5,
      text: "Organic\xE9 el evento de mi empresa aqu\xED y fue un \xE9xito total. El equipo de Kali Club es muy profesional y se encargaron de cada detalle. Definitivamente volveremos.",
      event: "Evento Corporativo"
    },
    {
      id: 4,
      name: "Diego L\xF3pez",
      role: "DJ Invitado",
      avatar: "/pictures/testimonials/diego.jpg",
      rating: 5,
      text: "Como DJ, he tocado en muchos lugares, pero Kali Club tiene el mejor sistema de sonido y la audiencia m\xE1s receptiva. Es un placer tocar aqu\xED.",
      event: "Hip Hop Underground"
    },
    {
      id: 5,
      name: "Sofia Herrera",
      role: "Celebrante",
      avatar: "/pictures/testimonials/sofia.jpg",
      rating: 5,
      text: "Celebr\xE9 mi cumplea\xF1os 25 en Kali Club y fue la mejor noche de mi vida. El servicio VIP, las bebidas, la m\xFAsica... todo perfecto. Mis amigos a\xFAn hablan de esa noche.",
      event: "Cumplea\xF1os VIP"
    },
    {
      id: 6,
      name: "Roberto Silva",
      role: "Cliente Frecuente",
      avatar: "/pictures/testimonials/roberto.jpg",
      rating: 5,
      text: "Vengo a Kali Club desde hace 3 a\xF1os y nunca me decepciona. Siempre hay eventos incre\xEDbles, la seguridad es excelente y el ambiente es \xFAnico en la ciudad.",
      event: "Salsa y Bachata"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="testimonials" data-astro-cid-aadlzisc> <div class="container" data-astro-cid-aadlzisc> <div class="section-header" data-astro-cid-aadlzisc> <span class="section-label" data-astro-cid-aadlzisc>Testimonios</span> <h2 class="section-title" data-astro-cid-aadlzisc>Lo que Dicen Nuestros Clientes</h2> <p class="section-subtitle" data-astro-cid-aadlzisc>Miles de personas han vivido experiencias inolvidables en Kali Club</p> </div> <div class="testimonials-grid" id="testimonials-grid" data-astro-cid-aadlzisc> ${testimonials.map((testimonial, index) => renderTemplate`<article class="testimonial-card"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-aadlzisc> <div class="testimonial-header" data-astro-cid-aadlzisc> <div class="user-info" data-astro-cid-aadlzisc> <img${addAttribute(testimonial.avatar || "/placeholder.svg", "src")}${addAttribute(testimonial.name, "alt")} class="user-avatar" data-astro-cid-aadlzisc> <div class="user-details" data-astro-cid-aadlzisc> <h4 class="user-name" data-astro-cid-aadlzisc>${testimonial.name}</h4> <p class="user-role" data-astro-cid-aadlzisc>${testimonial.role}</p> </div> </div> <div class="rating" data-astro-cid-aadlzisc> ${Array.from({ length: testimonial.rating }, (_, i) => renderTemplate`<span class="star" data-astro-cid-aadlzisc>⭐</span>`)} </div> </div> <blockquote class="testimonial-text" data-astro-cid-aadlzisc>
"${testimonial.text}"
</blockquote> <div class="testimonial-footer" data-astro-cid-aadlzisc> <span class="event-tag" data-astro-cid-aadlzisc>${testimonial.event}</span> <div class="quote-icon" data-astro-cid-aadlzisc> <svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-aadlzisc> <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" data-astro-cid-aadlzisc></path> </svg> </div> </div> </article>`)} </div> <div class="testimonials-stats" data-astro-cid-aadlzisc> <div class="stat-item" data-astro-cid-aadlzisc> <span class="stat-number" data-astro-cid-aadlzisc>4.9</span> <span class="stat-label" data-astro-cid-aadlzisc>Calificación Promedio</span> <div class="stat-stars" data-astro-cid-aadlzisc> <span data-astro-cid-aadlzisc>⭐⭐⭐⭐⭐</span> </div> </div> <div class="stat-item" data-astro-cid-aadlzisc> <span class="stat-number" data-astro-cid-aadlzisc>2,500+</span> <span class="stat-label" data-astro-cid-aadlzisc>Reseñas Positivas</span> </div> <div class="stat-item" data-astro-cid-aadlzisc> <span class="stat-number" data-astro-cid-aadlzisc>98%</span> <span class="stat-label" data-astro-cid-aadlzisc>Clientes Satisfechos</span> </div> </div> <div class="section-footer" data-astro-cid-aadlzisc> <a href="/testimonios" class="btn-view-all" data-astro-cid-aadlzisc> <span data-astro-cid-aadlzisc>Ver Más Testimonios</span> <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-aadlzisc> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-aadlzisc></path> </svg> </a> </div> </div> </section> `;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kali Club - Experiencia Nocturna \xDAnica" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "FeaturedEvents", $$FeaturedEvents, {})} ${renderComponent($$result2, "PopularDrinks", $$PopularDrinks, {})} ${renderComponent($$result2, "AboutPreview", $$AboutPreview, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/index.astro", void 0);

const $$file = "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
