import { Q as createComponent, $ as renderComponent, a6 as renderTemplate, Z as maybeRenderHead, B as addAttribute } from '../chunks/astro/server_BdknY_pA.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_4AqNXpvm.mjs';
import { d as createLucideIcon, a as $$Navbar, $ as $$Footer } from '../chunks/Footer_DErB0M8-.mjs';
export { renderers } from '../renderers.mjs';

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Maximize2 = createLucideIcon("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);

const $$Disenos = createComponent(($$result, $$props, $$slots) => {
  const designs = [
    {
      id: "tdf-01",
      title: "Tablero de distribuci\xF3n principal TDF-01",
      desc: "Recepci\xF3n y distribuci\xF3n segura de energ\xEDa con envolvente autosoportado.",
      img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80",
      tags: ["Baja Tensi\xF3n", "SolidWorks"]
    },
    {
      id: "jumbo-02",
      title: "Tablero de distribuci\xF3n JUMBO",
      desc: "Alta capacidad - Jumbo Series para entornos industriales exigentes.",
      img: "https://images.unsplash.com/photo-1581092335397-9583ee92d0bb?auto=format&fit=crop&q=80",
      tags: ["Miner\xEDa", "Racks"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Dise\xF1os de Ingenier\xEDa | Synapse Engineering" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="bg-white"> <section class="relative h-[50vh] flex items-center bg-[#001529]"> <div class="container mx-auto px-6 relative z-10"> <h1 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
DISEÑOS <span class="text-cyan-400">3D</span> </h1> <div class="h-2 w-24 bg-cyan-500 mb-6"></div> <p class="text-slate-300 max-w-xl font-medium text-lg leading-relaxed">
Ingeniería de detalle aplicada a cada componente para garantizar precisión milimétrica.
</p> </div> </section> <section class="py-20 bg-slate-50"> <div class="container mx-auto px-6"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> ${designs.map((design) => renderTemplate`<div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full"> <div class="relative h-64 bg-slate-100 flex items-center justify-center p-6"> <img${addAttribute(design.img, "src")} class="max-h-full object-contain"${addAttribute(design.title, "alt")}> <div class="absolute top-4 right-4 flex gap-2"> ${design.tags.map((tag) => renderTemplate`<span class="bg-[#001529] text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider"> ${tag} </span>`)} </div> </div> <div class="p-8 flex flex-col flex-grow"> <h3 class="text-xl font-black text-[#001529] uppercase tracking-tight mb-3"> ${design.title} </h3> <p class="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow"> ${design.desc} </p> <a${addAttribute(`/disenos/${design.id}`, "href")} class="w-full bg-[#001529] hover:bg-blue-800 text-white text-[11px] font-black py-4 rounded-lg transition-all text-center tracking-widest uppercase flex items-center justify-center gap-2">
Ver ficha técnica completa ${renderComponent($$result2, "Maximize2", Maximize2, { "size": 14 })} </a> </div> </div>`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/user/Desktop/synapse-engineering/src/pages/disenos.astro", void 0);

const $$file = "C:/Users/user/Desktop/synapse-engineering/src/pages/disenos.astro";
const $$url = "/disenos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disenos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
