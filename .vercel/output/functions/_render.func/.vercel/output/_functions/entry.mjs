import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BqDioqSz.mjs';
import { manifest } from './manifest_DseynQjd.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/chat.astro.mjs');
const _page2 = () => import('./pages/clientes.astro.mjs');
const _page3 = () => import('./pages/contacto.astro.mjs');
const _page4 = () => import('./pages/disenos/_id_.astro.mjs');
const _page5 = () => import('./pages/disenos.astro.mjs');
const _page6 = () => import('./pages/empresa.astro.mjs');
const _page7 = () => import('./pages/productos/automatizacion-plc.astro.mjs');
const _page8 = () => import('./pages/productos/ccm-motores.astro.mjs');
const _page9 = () => import('./pages/productos/celdas-media-tension.astro.mjs');
const _page10 = () => import('./pages/productos/tableros-distribucion.astro.mjs');
const _page11 = () => import('./pages/productos.astro.mjs');
const _page12 = () => import('./pages/productos.astro2.mjs');
const _page13 = () => import('./pages/soporte-ia.astro.mjs');
const _page14 = () => import('./pages/tienda/carrito.astro.mjs');
const _page15 = () => import('./pages/tienda.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/chat.ts", _page1],
    ["src/pages/clientes.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/disenos/[id].astro", _page4],
    ["src/pages/disenos.astro", _page5],
    ["src/pages/empresa.astro", _page6],
    ["src/pages/productos/automatizacion-plc.astro", _page7],
    ["src/pages/productos/ccm-motores.astro", _page8],
    ["src/pages/productos/celdas-media-tension.astro", _page9],
    ["src/pages/productos/tableros-distribucion.astro", _page10],
    ["src/pages/productos/index.astro", _page11],
    ["src/pages/productos.astro", _page12],
    ["src/pages/soporte-ia.astro", _page13],
    ["src/pages/tienda/carrito.astro", _page14],
    ["src/pages/tienda.astro", _page15],
    ["src/pages/index.astro", _page16]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4b29c1e0-761a-494d-a732-41366ddcd63f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
