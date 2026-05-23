import { Q as createComponent, $ as renderComponent, a6 as renderTemplate, Z as maybeRenderHead } from '../../chunks/astro/server_BdknY_pA.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_4AqNXpvm.mjs';
import { a as $$Navbar, $ as $$Footer } from '../../chunks/Footer_DErB0M8-.mjs';
import { C as CheckCircle2 } from '../../chunks/check-circle-2_BDvD5Rsf.mjs';
import { F as FileText, A as ArrowRight, M as MessageSquare } from '../../chunks/message-square_DKMSR4BT.mjs';
export { renderers } from '../../renderers.mjs';

const $$CeldasMediaTension = createComponent(($$result, $$props, $$slots) => {
  const especificaciones = [
    "Tensi\xF3n nominal hasta 24kV / 36kV.",
    "Aislamiento en gas SF6 o Aire (AIS).",
    "Grado de protecci\xF3n IP4X para interiores.",
    "Enclavamientos mec\xE1nicos de seguridad integrados.",
    "Equipadas con rel\xE9s de protecci\xF3n de \xFAltima generaci\xF3n."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Celdas de Media Tensi\xF3n | Synapse Engineering" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="bg-white"> <section class="bg-[#001529] pt-32 pb-20 relative overflow-hidden"> <div class="absolute right-0 top-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-20"></div> <div class="container mx-auto px-6 relative z-10"> <span class="text-cyan-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Suministros Industriales</span> <h1 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
Celdas de <br> <span class="text-blue-500">Media Tensión</span> </h1> <div class="h-2 w-24 bg-cyan-500"></div> </div> </section> <section class="py-24"> <div class="container mx-auto px-6"> <div class="grid lg:grid-cols-3 gap-16"> <div class="lg:col-span-2"> <h2 class="text-3xl font-black text-slate-900 uppercase mb-8 flex items-center gap-3"> <span class="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg text-xs">01</span>
Descripción Técnica
</h2> <p class="text-slate-600 text-lg leading-relaxed mb-12">
Suministramos celdas de media tensión modulares diseñadas para subestaciones eléctricas, garantizando la máxima protección y maniobra en redes de distribución primaria y secundaria.
</p> <div class="grid md:grid-cols-2 gap-4 mb-16"> ${especificaciones.map((item) => renderTemplate`<div class="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "class": "text-slate-900", "size": 20 })} <span class="text-sm font-bold text-slate-800">${item}</span> </div>`)} </div> <h2 class="text-3xl font-black text-slate-900 uppercase mb-8">Nuestras Fabricaciones</h2> <div class="grid grid-cols-2 gap-4"> <div class="aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-200"> <img src="https://impoexpo.com.pe/wp-content/uploads/2023/07/subestaciones-electricas.jpg" class="w-full h-full object-cover" alt="Celdas MT"> </div> <div class="aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-200"> <img src="https://impoexpo.com.pe/wp-content/uploads/2023/07/tableros-electricos-de-distribucion.jpg" class="w-full h-full object-cover" alt="Detalle"> </div> </div> </div> <div class="space-y-6"> <div class="bg-[#0b1221] p-8 rounded-[2.5rem] text-white shadow-xl"> <h3 class="text-xl font-black uppercase mb-8 tracking-tighter">Documentación</h3> <div class="space-y-3"> <a href="#" class="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"> <div class="flex items-center gap-4"> ${renderComponent($$result2, "FileText", FileText, { "size": 20 })} <span class="text-[10px] font-black uppercase tracking-widest">Ficha Técnica</span> </div> ${renderComponent($$result2, "ArrowRight", ArrowRight, { "size": 16, "class": "text-slate-400 group-hover:translate-x-1 transition-transform" })} </a> <a href="#" class="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"> <div class="flex items-center gap-4"> ${renderComponent($$result2, "FileText", FileText, { "size": 20 })} <span class="text-[10px] font-black uppercase tracking-widest">Catálogo 2026</span> </div> ${renderComponent($$result2, "ArrowRight", ArrowRight, { "size": 16, "class": "text-slate-400 group-hover:translate-x-1 transition-transform" })} </a> </div> </div> <div class="bg-[#f0f7ff] p-8 rounded-[2.5rem] border border-blue-100 shadow-sm"> <div class="flex items-center gap-4 mb-6"> <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white"> ${renderComponent($$result2, "MessageSquare", MessageSquare, { "size": 20 })} </div> <h3 class="text-xl font-black text-[#004a99] uppercase leading-tight">Cotizar <br> este producto</h3> </div> <form class="space-y-3"> <input type="text" placeholder="Nombre completo" class="w-full p-4 rounded-xl border border-blue-100 text-sm font-bold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"> <input type="email" placeholder="E-mail" class="w-full p-4 rounded-xl border border-blue-100 text-sm font-bold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"> <textarea placeholder="Cuéntanos tu requerimiento" rows="4" class="w-full p-4 rounded-xl border border-blue-100 text-sm font-bold placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20"></textarea> <button class="w-full bg-[#2563eb] text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
Enviar Solicitud
</button> </form> </div> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/user/Desktop/synapse-engineering/src/pages/productos/celdas-media-tension.astro", void 0);

const $$file = "C:/Users/user/Desktop/synapse-engineering/src/pages/productos/celdas-media-tension.astro";
const $$url = "/productos/celdas-media-tension";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CeldasMediaTension,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
