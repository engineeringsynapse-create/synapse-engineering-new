import { Q as createComponent, $ as renderComponent, a6 as renderTemplate, O as createAstro, Z as maybeRenderHead, B as addAttribute } from '../../chunks/astro/server_BdknY_pA.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_4AqNXpvm.mjs';
import { d as createLucideIcon, a as $$Navbar, $ as $$Footer } from '../../chunks/Footer_DErB0M8-.mjs';
import { C as Cpu } from '../../chunks/cpu_DIhsm76n.mjs';
import { C as Clock } from '../../chunks/clock_Ct4h6OrB.mjs';
import { S as ShieldCheck } from '../../chunks/shield-check_DPQ7UwxJ.mjs';
export { renderers } from '../../renderers.mjs';

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);

const $$Astro = createAstro();
async function getStaticPaths() {
  return [
    { params: { id: "tdf-01" } },
    { params: { id: "jumbo-02" } },
    { params: { id: "cm-inteligente" } }
  ];
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const allDesigns = {
    "tdf-01": {
      title: "Tablero de distribuci\xF3n principal TDF-01",
      desc: "Recepci\xF3n y distribuci\xF3n segura de energ\xEDa con envolvente autosoportado de alta resistencia.",
      img: "/images/diseno-tdf.png",
      materials: [
        { name: "Interruptores Termomagn\xE9ticos", qty: "4 ud." },
        { name: "Barras de Cobre Electrol\xEDtico", qty: "1 set" },
        { name: "Gabinete con Grado IP65", qty: "1 ud." },
        { name: "Borneras de Conexi\xF3n", qty: "24 ud." }
      ],
      leadTime: "04-06 D\xCDAS",
      validation: "Norma IEC 61439-1"
    }
  };
  const design = allDesigns[id] || allDesigns["tdf-01"];
  const titleParts = design.title.split(" ");
  const lastWord = titleParts.pop();
  const mainTitle = titleParts.join(" ");
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": `${design.title} | Synapse Engineering` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="bg-white min-h-screen pt-32 pb-20"> <div class="container mx-auto px-6"> <a href="/disenos" class="inline-flex items-center gap-2 text-[#001529] hover:text-cyan-600 transition-all font-black text-[11px] uppercase tracking-[0.2em] mb-8 group"> ${renderComponent($$result2, "ChevronLeft", ChevronLeft, { "size": 20, "class": "group-hover:-translate-x-1 transition-transform" })}
Volver a diseños
</a> <div class="max-w-4xl mb-12 space-y-4"> <h1 class="text-4xl md:text-6xl font-black text-[#001529] uppercase tracking-tighter leading-none"> ${mainTitle} <span class="text-cyan-500">${lastWord}</span> </h1> <p class="text-slate-500 text-xl font-medium leading-relaxed italic border-l-4 border-cyan-500 pl-6 max-w-3xl">
"${design.desc}"
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"> <div class="lg:col-span-8 space-y-6"> <div class="bg-slate-50 border border-slate-200 rounded-[32px] p-8 md:p-12 flex items-center justify-center min-h-[500px] shadow-sm overflow-hidden group"> <img${addAttribute(design.img, "src")} class="max-h-[550px] object-contain transition-transform duration-700 group-hover:scale-105"${addAttribute(design.title, "alt")}> </div> <button class="w-full lg:w-max bg-cyan-500 hover:bg-[#001529] text-white font-black px-12 py-5 rounded-xl flex items-center justify-center gap-3 uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-cyan-500/20 group"> ${renderComponent($$result2, "Cpu", Cpu, { "size": 20, "class": "group-hover:rotate-12 transition-transform" })}
Ver modelo 3D interactivo
</button> </div> <div class="lg:col-span-4 space-y-6"> <div class="bg-[#0b1426] rounded-[32px] p-8 shadow-2xl overflow-hidden relative"> <h2 class="text-white text-2xl font-black uppercase tracking-tight mb-8 relative z-10">
Especificaciones
</h2> <div class="space-y-3 relative z-10"> ${design.materials.map((m) => renderTemplate`<div class="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all group"> <span class="text-[10px] text-slate-300 font-bold uppercase group-hover:text-white transition-colors tracking-tight"> ${m.name} </span> <span class="text-[10px] text-cyan-400 font-black bg-cyan-400/10 px-3 py-1 rounded-lg group-hover:bg-cyan-400 group-hover:text-[#0b1426] transition-all"> ${m.qty} </span> </div>`)} </div> </div> <div class="bg-slate-50 p-8 rounded-[32px] border border-slate-200 relative overflow-hidden group shadow-sm"> <div class="flex items-center gap-3 text-[#001529]/60 mb-3"> ${renderComponent($$result2, "Clock", Clock, { "size": 18 })} <span class="text-[10px] font-black uppercase tracking-widest">Entrega Estimada</span> </div> <p class="text-3xl font-black text-[#001529] italic uppercase tracking-tighter">${design.leadTime}</p> ${renderComponent($$result2, "Clock", Clock, { "size": 80, "class": "absolute -right-4 -bottom-4 text-slate-200 group-hover:text-cyan-500/10 group-hover:rotate-12 transition-all duration-500" })} </div> <div class="flex items-center gap-3 text-[#001529]/40 px-4 group"> ${renderComponent($$result2, "ShieldCheck", ShieldCheck, { "size": 20, "class": "group-hover:text-cyan-500 transition-colors" })} <span class="text-[11px] font-bold italic tracking-wide uppercase group-hover:text-[#001529] transition-colors"> ${design.validation} </span> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/user/Desktop/synapse-engineering/src/pages/disenos/[id].astro", void 0);

const $$file = "C:/Users/user/Desktop/synapse-engineering/src/pages/disenos/[id].astro";
const $$url = "/disenos/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
