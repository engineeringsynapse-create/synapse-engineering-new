import { Q as createComponent, $ as renderComponent, a6 as renderTemplate, Z as maybeRenderHead, B as addAttribute } from '../chunks/astro/server_BdknY_pA.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_4AqNXpvm.mjs';
import { d as createLucideIcon, a as $$Navbar, S as ShoppingCart, $ as $$Footer } from '../chunks/Footer_DErB0M8-.mjs';
import { F as Factory, H as HardHat } from '../chunks/hard-hat_DWBL2FPh.mjs';
import { C as CheckCircle2 } from '../chunks/check-circle-2_BDvD5Rsf.mjs';
export { renderers } from '../renderers.mjs';

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Building2 = createLucideIcon("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Landmark = createLucideIcon("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]);

const $$Clientes = createComponent(($$result, $$props, $$slots) => {
  const logos = [
    { name: "INETT", src: "/logos/inett.png" },
    { name: "VALRED", src: "/logos/valred.png" },
    { name: "FASE TRES", src: "/logos/fasetres.png" },
    { name: "TERMO SISTEMAS", src: "/logos/termosistemas.png" },
    { name: "INFRELEC", src: "/logos/infrelec.png" },
    { name: "MOVITECNICA", src: "/logos/movitecnica.png" }
  ];
  const rubros = [
    { nombre: "Empresas Mineras y Extractivas", icon: Factory },
    { nombre: "Empresas Constructoras e Inmobiliarias", icon: HardHat },
    { nombre: "Entidades P\xFAblicas y del Estado", icon: Landmark },
    { nombre: "Sector Bancario y Financiero", icon: Building2 },
    { nombre: "Industria Textil y Pesquera", icon: Factory },
    { nombre: "Supermercados y Retail", icon: ShoppingCart }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Nuestros Clientes | Synapse Engineering" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="bg-white"> <section class="relative h-[50vh] md:h-[50vh] flex items-center bg-[#001529] overflow-hidden"> <div class="absolute inset-0 opacity-20"> <img src="/images/factory-bg.jpg" class="w-full h-full object-cover" alt="Fondo industrial"> </div> <div class="container mx-auto px-6 relative z-10"> <div class="pt-24 pb-12 md:pt-0 md:pb-0"> <h1 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
Nuestros <span class="text-cyan-400">Clientes</span> </h1> <div class="h-2 w-24 bg-cyan-500"></div> <p class="text-slate-300 mt-6 max-w-xl font-medium text-lg">
Más de 20 años suministrando soluciones integrales de ingeniería eléctrica a las empresas más importantes del país.
</p> </div> </div> </section> <section class="py-24 border-b border-slate-100"> <div class="container mx-auto px-6"> <div class="text-center mb-16"> <span class="text-blue-600 font-bold tracking-widest text-xs uppercase">Energía que da confianza</span> <h2 class="text-3xl font-black text-slate-900 uppercase mt-2">Aliados Estratégicos</h2> </div> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"> ${logos.map((logo) => renderTemplate`<div class="group border border-slate-100 p-8 rounded-2xl flex items-center justify-center hover:shadow-xl transition-all duration-500 bg-white"> <img${addAttribute(logo.src, "src")}${addAttribute(logo.name, "alt")} class="max-h-16 grayscale group-hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-105"> </div>`)} </div> </div> </section> <section class="py-24 bg-slate-50"> <div class="container mx-auto px-6"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div> <span class="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
Soluciones Eléctricas Integrales
</span> <h2 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mt-6 mb-8">
Presencia Líder en <br> <span class="text-blue-600">Múltiples Sectores</span> </h2> <p class="text-slate-600 text-lg mb-8 leading-relaxed">
Nuestra capacidad técnica nos permite adaptar tableros y sistemas de automatización a los entornos más exigentes, desde socavones mineros hasta centros de datos bancarios.
</p> <div class="grid sm:grid-cols-2 gap-4"> ${rubros.map((item) => renderTemplate`<div class="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm"> ${renderComponent($$result2, "item.icon", item.icon, { "class": "text-blue-600 w-5 h-5" })} <span class="text-sm font-bold text-slate-700 leading-tight">${item.nombre}</span> </div>`)} </div> </div> <div class="relative"> <div class="bg-[#005596] rounded-3xl p-12 text-white relative z-10 overflow-hidden shadow-2xl"> <div class="absolute -right-10 -bottom-10 opacity-10"> ${renderComponent($$result2, "Factory", Factory, { "size": 300 })} </div> <h3 class="text-3xl font-black mb-6 uppercase italic">Calidad Certificada</h3> <ul class="space-y-4"> <li class="flex gap-3"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "class": "text-cyan-400 shrink-0" })} <p class="text-sm font-medium">Cumplimiento estricto de la norma IEC 61439.</p> </li> <li class="flex gap-3"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "class": "text-cyan-400 shrink-0" })} <p class="text-sm font-medium">Protocolos de pruebas FAT realizados en planta.</p> </li> <li class="flex gap-3"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "class": "text-cyan-400 shrink-0" })} <p class="text-sm font-medium">Garantía extendida en todos nuestros suministros.</p> </li> </ul> </div> <div class="absolute -top-6 -left-6 w-full h-full border-2 border-slate-200 rounded-3xl -z-0"></div> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/user/Desktop/synapse-engineering/src/pages/clientes.astro", void 0);

const $$file = "C:/Users/user/Desktop/synapse-engineering/src/pages/clientes.astro";
const $$url = "/clientes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Clientes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
