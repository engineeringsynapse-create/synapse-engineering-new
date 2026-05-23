import { Q as createComponent, $ as renderComponent, a6 as renderTemplate, Z as maybeRenderHead, B as addAttribute } from '../chunks/astro/server_BdknY_pA.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_4AqNXpvm.mjs';
import { a as $$Navbar, Z as Zap, $ as $$Footer } from '../chunks/Footer_DErB0M8-.mjs';
/* empty css                                     */
import { S as ShieldCheck } from '../chunks/shield-check_DPQ7UwxJ.mjs';
import { A as Activity, C as ChevronRight } from '../chunks/chevron-right_9zjQoeoN.mjs';
import { C as Cpu } from '../chunks/cpu_DIhsm76n.mjs';
export { renderers } from '../renderers.mjs';

const $$Productos = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      title: "Tableros de Distribuci\xF3n",
      slug: "tableros-distribucion",
      desc: "Sistemas de baja tensi\xF3n con interruptores de caja moldeada y bastidor abierto.",
      icon: Zap,
      img: "https://impoexpo.com.pe/wp-content/uploads/2023/07/tableros-electricos-de-distribucion.jpg"
    },
    {
      title: "Celdas de Media Tensi\xF3n",
      slug: "celdas-media-tension",
      desc: "Equipos de maniobra y protecci\xF3n en SF6 o aire para subestaciones.",
      icon: ShieldCheck,
      img: "https://impoexpo.com.pe/wp-content/uploads/2023/07/subestaciones-electricas.jpg"
    },
    {
      title: "Centros de Control de Motores (CCM)",
      slug: "ccm-motores",
      desc: "Arranque directo, estrella-tri\xE1ngulo y variadores de frecuencia centralizados.",
      icon: Activity,
      img: "https://impoexpo.com.pe/wp-content/uploads/2023/07/tablero-de-transferencia-automatica.jpg"
    },
    {
      title: "Automatizaci\xF3n & PLC",
      slug: "automatizacion-plc",
      desc: "Programaci\xF3n de sistemas SCADA y control de procesos industriales.",
      icon: Cpu,
      img: "https://impoexpo.com.pe/wp-content/uploads/2023/07/tablero-empotrable-de-tapa-color-verde.jpg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Nuestros Productos | Synapse Engineering", "data-astro-cid-w4fcemaa": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-w4fcemaa": true })} ${maybeRenderHead()}<main class="bg-white" data-astro-cid-w4fcemaa> <section class="relative h-[50vh] flex items-center bg-[#001529] overflow-hidden" data-astro-cid-w4fcemaa> <div class="container mx-auto px-6 relative z-10" data-astro-cid-w4fcemaa> <h1 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter" data-astro-cid-w4fcemaa>
Nuestros <span class="text-cyan-400" data-astro-cid-w4fcemaa>Productos</span> </h1> <div class="h-2 w-24 bg-cyan-500 mt-4" data-astro-cid-w4fcemaa></div> <p class="text-slate-300 mt-6 max-w-xl font-medium text-lg" data-astro-cid-w4fcemaa>
Ingeniería aplicada a la fabricación de tableros eléctricos de alto valor.
</p> </div> </section> <section class="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden products-section" data-astro-cid-w4fcemaa> <div class="container mx-auto px-6" data-astro-cid-w4fcemaa> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-w4fcemaa> ${products.map((item) => renderTemplate`<div class="product-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300" data-astro-cid-w4fcemaa> <div class="relative h-64 overflow-hidden" data-astro-cid-w4fcemaa> <img${addAttribute(item.img, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" data-astro-cid-w4fcemaa> <a${addAttribute(`/productos/${item.slug}`, "href")} class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 no-underline" data-astro-cid-w4fcemaa> <span class="text-white text-xs font-bold flex items-center gap-2 pointer-events-none" data-astro-cid-w4fcemaa>
VER ESPECIFICACIONES ${renderComponent($$result2, "ChevronRight", ChevronRight, { "size": 14, "class": "text-blue-400", "data-astro-cid-w4fcemaa": true })} </span> </a> </div> <div class="p-8" data-astro-cid-w4fcemaa> <a${addAttribute(`/productos/${item.slug}`, "href")} class="block mb-6 group-hover:no-underline" data-astro-cid-w4fcemaa> <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300" data-astro-cid-w4fcemaa> ${renderComponent($$result2, "item.icon", item.icon, { "size": 24, "data-astro-cid-w4fcemaa": true })} </div> </a> <h4 class="font-black text-slate-900 text-lg mb-3 uppercase tracking-tight leading-tight" data-astro-cid-w4fcemaa> <a${addAttribute(`/productos/${item.slug}`, "href")} class="hover:text-blue-600 transition-colors" data-astro-cid-w4fcemaa> ${item.title} </a> </h4> <p class="text-slate-500 text-xs leading-relaxed font-medium" data-astro-cid-w4fcemaa>${item.desc}</p> </div> </div>`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-w4fcemaa": true })} ` })} `;
}, "C:/Users/user/Desktop/synapse-engineering/src/pages/productos.astro", void 0);

const $$file = "C:/Users/user/Desktop/synapse-engineering/src/pages/productos.astro";
const $$url = "/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Productos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
