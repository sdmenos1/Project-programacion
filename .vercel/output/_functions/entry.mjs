import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CNUjZKlV.mjs';
import { manifest } from './manifest_D5yGX9_V.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/carta.astro.mjs');
const _page2 = () => import('./pages/eventos/_eventid_.astro.mjs');
const _page3 = () => import('./pages/eventos.astro.mjs');
const _page4 = () => import('./pages/eventos.astro2.mjs');
const _page5 = () => import('./pages/eventos-privados.astro.mjs');
const _page6 = () => import('./pages/galeria.astro.mjs');
const _page7 = () => import('./pages/nosotros.astro.mjs');
const _page8 = () => import('./pages/reservas.astro.mjs');
const _page9 = () => import('./pages/usuarios/_user_.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/carta.astro", _page1],
    ["src/pages/eventos/[eventId].astro", _page2],
    ["src/pages/eventos/index.astro", _page3],
    ["src/pages/eventos.astro", _page4],
    ["src/pages/eventos-privados.astro", _page5],
    ["src/pages/galeria.astro", _page6],
    ["src/pages/nosotros.astro", _page7],
    ["src/pages/reservas.astro", _page8],
    ["src/pages/usuarios/[user].astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "70fddf3e-7ece-4fa8-878c-e3ed3bd1eb37",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
