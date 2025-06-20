import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as renderScript, r as renderComponent } from '../chunks/astro/server_DMAQJEd5.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BbVr7bPF.mjs';
import 'clsx';
/* empty css                                 */
import { d as drinksData } from '../chunks/drinks_CgM0_XB5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$DrinkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DrinkCard;
  const { name, category, price, description, image, ingredients, alcohol, popular = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="drink-card"${addAttribute(category.toLowerCase(), "data-category")} data-astro-cid-45vq26fb> <div class="card-image" data-astro-cid-45vq26fb> <img${addAttribute(image || "/placeholder.svg", "src")}${addAttribute(name, "alt")} class="drink-image" data-astro-cid-45vq26fb> <div class="card-overlay" data-astro-cid-45vq26fb> ${popular && renderTemplate`<span class="popular-tag" data-astro-cid-45vq26fb>⭐ Popular</span>`} <span class="alcohol-tag" data-astro-cid-45vq26fb>${alcohol}% Vol.</span> </div> </div> <div class="card-content" data-astro-cid-45vq26fb> <div class="drink-header" data-astro-cid-45vq26fb> <h3 class="drink-name" data-astro-cid-45vq26fb>${name}</h3> <span class="drink-category" data-astro-cid-45vq26fb>${category}</span> </div> <p class="drink-description" data-astro-cid-45vq26fb>${description}</p> <div class="ingredients-section" data-astro-cid-45vq26fb> <h4 class="ingredients-title" data-astro-cid-45vq26fb>Ingredientes:</h4> <ul class="ingredients-list" data-astro-cid-45vq26fb> ${ingredients.map((ingredient) => renderTemplate`<li class="ingredient-item" data-astro-cid-45vq26fb>${ingredient}</li>`)} </ul> </div> <div class="card-footer" data-astro-cid-45vq26fb> <div class="price-section" data-astro-cid-45vq26fb> <span class="price-amount" data-astro-cid-45vq26fb>$${price}</span> </div> <button class="btn btn-order" data-astro-cid-45vq26fb>Ordenar</button> </div> </div> </article> `;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/DrinkCard.astro", void 0);

const $$Astro = createAstro();
const $$DrinkFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DrinkFilter;
  const { categories } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="drink-filter" data-astro-cid-hhjhr45v> <div class="filter-header" data-astro-cid-hhjhr45v> <h3 class="filter-title" data-astro-cid-hhjhr45v>Filtrar Bebidas</h3> <button class="clear-filters" id="clear-drink-filters" data-astro-cid-hhjhr45v>Limpiar Filtros</button> </div> <div class="filter-options" data-astro-cid-hhjhr45v> <div class="filter-group" data-astro-cid-hhjhr45v> <label class="filter-label" data-astro-cid-hhjhr45v>Categoría:</label> <select class="filter-select" id="category-filter" data-astro-cid-hhjhr45v> <option value="" data-astro-cid-hhjhr45v>Todas las categorías</option> ${categories.map((category) => renderTemplate`<option${addAttribute(category.toLowerCase(), "value")} data-astro-cid-hhjhr45v>${category}</option>`)} </select> </div> <div class="filter-group" data-astro-cid-hhjhr45v> <label class="filter-label" data-astro-cid-hhjhr45v>Precio:</label> <select class="filter-select" id="drink-price-filter" data-astro-cid-hhjhr45v> <option value="" data-astro-cid-hhjhr45v>Cualquier precio</option> <option value="0-10" data-astro-cid-hhjhr45v>$0 - $10</option> <option value="11-20" data-astro-cid-hhjhr45v>$11 - $20</option> <option value="21-30" data-astro-cid-hhjhr45v>$21 - $30</option> <option value="30+" data-astro-cid-hhjhr45v>$30+</option> </select> </div> <div class="filter-group" data-astro-cid-hhjhr45v> <label class="filter-label" data-astro-cid-hhjhr45v>Contenido Alcohólico:</label> <select class="filter-select" id="alcohol-filter" data-astro-cid-hhjhr45v> <option value="" data-astro-cid-hhjhr45v>Cualquier graduación</option> <option value="0-10" data-astro-cid-hhjhr45v>0% - 10%</option> <option value="11-20" data-astro-cid-hhjhr45v>11% - 20%</option> <option value="21-30" data-astro-cid-hhjhr45v>21% - 30%</option> <option value="30+" data-astro-cid-hhjhr45v>30%+</option> </select> </div> <div class="filter-group" data-astro-cid-hhjhr45v> <label class="filter-label" data-astro-cid-hhjhr45v>Populares:</label> <select class="filter-select" id="popular-filter" data-astro-cid-hhjhr45v> <option value="" data-astro-cid-hhjhr45v>Todas</option> <option value="popular" data-astro-cid-hhjhr45v>Solo populares</option> </select> </div> </div> </div>  ${renderScript($$result, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/DrinkFilter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/DrinkFilter.astro", void 0);

const $$Carta = createComponent(($$result, $$props, $$slots) => {
  const drinks = drinksData;
  const categories = [...new Set(drinks.map((drink) => drink.category))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carta de Bebidas - Kali Club", "data-astro-cid-f2vctvlz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-f2vctvlz": true })} ${maybeRenderHead()}<main class="drinks-page" data-astro-cid-f2vctvlz> <section class="drinks-hero" data-astro-cid-f2vctvlz> <div class="container" data-astro-cid-f2vctvlz> <h1 class="page-title" data-astro-cid-f2vctvlz>Nuestra Carta</h1> <p class="page-subtitle" data-astro-cid-f2vctvlz>Descubre nuestra selección de bebidas premium y cocteles de autor</p> </div> </section> <section class="drinks-content" data-astro-cid-f2vctvlz> <div class="container" data-astro-cid-f2vctvlz> ${renderComponent($$result2, "DrinkFilter", $$DrinkFilter, { "categories": categories, "data-astro-cid-f2vctvlz": true })} <div class="drinks-grid" id="drinks-grid" data-astro-cid-f2vctvlz> ${drinks.map((drink) => renderTemplate`${renderComponent($$result2, "DrinkCard", $$DrinkCard, { "name": drink.name, "category": drink.category, "price": drink.price, "description": drink.description, "image": drink.image, "ingredients": drink.ingredients, "alcohol": drink.alcohol, "popular": drink.popular, "data-astro-cid-f2vctvlz": true })}`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-f2vctvlz": true })} ` })} `;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/carta.astro", void 0);

const $$file = "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/carta.astro";
const $$url = "/carta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Carta,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
