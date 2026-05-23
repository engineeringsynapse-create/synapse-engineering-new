import { Q as createComponent, $ as renderComponent, a6 as renderTemplate, Z as maybeRenderHead, B as addAttribute } from '../chunks/astro/server_BdknY_pA.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_4AqNXpvm.mjs';
import { d as createLucideIcon, a as $$Navbar, Z as Zap, S as ShoppingCart, $ as $$Footer } from '../chunks/Footer_DErB0M8-.mjs';
import { C as Cpu } from '../chunks/cpu_DIhsm76n.mjs';
export { renderers } from '../renderers.mjs';

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Box = createLucideIcon("Box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Filter = createLucideIcon("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Settings = createLucideIcon("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

const $$Tienda = createComponent(($$result, $$props, $$slots) => {
  const products = [
    { id: 1, name: "Interruptor Masterpact MTZ2", brand: "Schneider", cat: "Tableros", price: 4500, sku: "MTZ2-100", img: "https://www.se.com/pe/es/product-image-resizer/MTZ2_10_H1_3P_F_2_F_RE_7/1/1" },
    { id: 2, name: "Variador de Frecuencia PowerFlex 755", brand: "Allen Bradley", cat: "Automatizaci\xF3n", price: 2150, sku: "PF755-A", img: "https://literature.rockwellautomation.com/idc/groups/literature/documents/pp/750-pp001_-en-p.pdf" },
    { id: 3, name: "Celda de Remonte SM6-24", brand: "Schneider", cat: "Celdas", price: 12800, sku: "SM6-24KV", img: "https://www.se.com/pe/es/product-image-resizer/SM6_Switch_Front/1/1" },
    { id: 4, name: "Mult\xEDmetro Digital Industrial 87V", brand: "Fluke", cat: "Equipos", price: 850, sku: "FLK-87V", img: "https://m.media-amazon.com/images/I/71ovD6W5FGL._AC_SL1500_.jpg" },
    { id: 5, name: "PLC Simatic S7-1500", brand: "Siemens", cat: "Automatizaci\xF3n", price: 1450, sku: "S7-1500-CPU", img: "https://mall.industry.siemens.com/mall/collaterals/catalog/Product_Images/HighRes/P_ST70_XX_03498.jpg" },
    { id: 6, name: "Barra de Cobre Electrol\xEDtico 1/4x2", brand: "Synapse", cat: "Accesorios", price: 120, sku: "CU-252", img: "https://image.made-in-china.com/2f0j00TquUaCzkYvbg/Copper-Busbar-for-Switchgear.jpg" },
    { id: 7, name: "Analizador de Redes PM5560", brand: "Schneider", cat: "Equipos", price: 580, sku: "METSEPM5560", img: "https://www.se.com/pe/es/product-image-resizer/PM5560_Front/1/1" },
    { id: 8, name: "Interruptor Termomagn\xE9tico 3P 20A", brand: "ABB", cat: "Tableros", price: 45, sku: "S203-C20", img: "https://new.abb.com/products/2CDS253001R0204/S203-C20" }
  ];
  const categorias = [
    { name: "Todos", icon: Box },
    { name: "Tableros", icon: Zap },
    { name: "Celdas", icon: Settings },
    { name: "Automatizaci\xF3n", icon: Cpu },
    { name: "Equipos", icon: Filter },
    { name: "Accesorios", icon: Box }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Tienda de Ingenier\xEDa | Synapse Engineering" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="bg-[#f8fafc] min-h-screen"> <section class="bg-[#001529] flex items-center h-[50vh] relative overflow-hidden border-b border-white/5"> <div class="absolute inset-0 opacity-5 bg-[url('/grid-light.svg')] bg-center pointer-events-none"></div> <div class="container mx-auto px-6 relative z-10"> <span class="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block animate-pulse">SUMINISTROS TÉCNICOS V2.0</span> <h1 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
CATÁLOGO <span class="text-cyan-400">INDUSTRIAL</span> </h1> <div class="h-2 w-24 bg-cyan-500 mt-6"></div> </div> </section> <div class="container mx-auto px-6 py-12 md:py-16"> <div class="flex flex-col lg:flex-row gap-8 lg:gap-12"> <aside class="w-full lg:w-80 flex-shrink-0"> <div class="bg-white rounded-[32px] p-6 lg:p-8 border border-slate-100 shadow-sm sticky top-32"> <h3 class="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Filtrar por Categoría</h3> <div class="grid grid-cols-2 lg:grid-cols-1 gap-2"> ${categorias.map((cat) => renderTemplate`<button class="filter-btn w-full text-left px-4 py-3 rounded-2xl text-[11px] lg:text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-3 transition-all uppercase tracking-tighter group"${addAttribute(cat.name, "data-category")}> ${renderComponent($$result2, "cat.icon", cat.icon, { "size": 16, "class": "text-slate-300 group-hover:text-blue-600 transition-colors" })} ${cat.name} </button>`)} </div> </div> </aside> <div class="flex-1"> <div class="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between"> <div class="relative w-full md:max-w-md flex items-center bg-white border border-slate-100 rounded-2xl shadow-sm px-5 py-4"> ${renderComponent($$result2, "Search", Search, { "class": "text-slate-400 flex-shrink-0 mr-4", "size": 20 })} <input id="product-search" type="text" placeholder="Buscar por modelo, marca o SKU..." class="w-full bg-transparent focus:outline-none font-medium text-slate-900"> </div> <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">RESULTADOS: <span id="product-count" class="text-blue-600">${products.length}</span></p> </div> <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"> ${products.map((product) => renderTemplate`<div class="product-card bg-white rounded-[32px] border border-slate-100 p-6 hover:shadow-xl transition-all group relative flex flex-col"${addAttribute(product.cat, "data-cat")}> <div class="aspect-square bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-8 overflow-hidden relative"> <img${addAttribute(product.img, "src")}${addAttribute(product.name, "alt")} class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"> <div class="absolute top-4 left-4"> <span class="bg-white/90 backdrop-blur-sm text-[9px] font-black px-3 py-1 rounded-full text-slate-500 border border-slate-100 uppercase">${product.cat}</span> </div> </div> <p class="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">${product.brand}</p> <h4 class="text-md font-black text-slate-900 leading-tight uppercase tracking-tighter min-h-[40px]">${product.name}</h4> <p class="text-slate-400 text-[9px] mt-2 font-bold uppercase tracking-widest">SKU: ${product.sku}</p> <div class="mt-auto pt-6 flex items-center justify-between border-t border-slate-50 mt-4"> <p class="text-xl font-black text-slate-900 tracking-tighter">S/ ${product.price.toFixed(2)}</p> <button${addAttribute(`window.addToCart({id: ${product.id}, name: "${product.name}", price: ${product.price}, img: "${product.img}"})`, "onclick")} class="bg-[#001529] text-white p-3 rounded-2xl hover:bg-blue-600 transition-all shadow-lg"> ${renderComponent($$result2, "ShoppingCart", ShoppingCart, { "size": 18 })} </button> </div> </div>`)} </div> <div id="no-results" class="hidden text-center py-20"> ${renderComponent($$result2, "Box", Box, { "size": 48, "class": "mx-auto text-slate-300 mb-4" })} <h3 class="text-lg font-black text-slate-400 uppercase">Sin resultados</h3> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "C:/Users/user/Desktop/synapse-engineering/src/pages/tienda.astro", void 0);

const $$file = "C:/Users/user/Desktop/synapse-engineering/src/pages/tienda.astro";
const $$url = "/tienda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tienda,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
