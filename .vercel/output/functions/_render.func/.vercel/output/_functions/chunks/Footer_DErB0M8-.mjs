import { Q as createComponent, Z as maybeRenderHead, $ as renderComponent, B as addAttribute, a6 as renderTemplate, O as createAstro } from './astro/server_BdknY_pA.mjs';
import 'kleur/colors';
/* empty css                            */
import { forwardRef, createElement } from 'react';

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      ...rest
    }, ref) => {
      return createElement(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowUp = createLucideIcon("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Bot = createLucideIcon("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Facebook = createLucideIcon("Facebook", [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Instagram = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Linkedin = createLucideIcon("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Mail = createLucideIcon("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const MapPin = createLucideIcon("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Menu = createLucideIcon("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ShoppingCart = createLucideIcon("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Zap = createLucideIcon("Zap", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);

const $$Astro = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navbar;
  const pathname = Astro2.url.pathname;
  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };
  const activeClass = "text-blue-600";
  const inactiveClass = "text-slate-700 hover:text-blue-600 transition-colors";
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="fixed top-0 left-0 w-full z-[1000]"> <div id="top-bar" class="bg-[#003d6b] text-white py-2 text-[11px] font-medium hidden md:block w-full border-b border-[#004e89]"> <div class="container mx-auto px-6 flex justify-between items-center"> <div class="flex gap-6"> <div class="flex items-center gap-2"> ${renderComponent($$result, "MapPin", MapPin, { "size": 14, "class": "text-cyan-400" })} Calle Luis Carranza 2174, Lima
</div> <div class="flex items-center gap-2"> ${renderComponent($$result, "Mail", Mail, { "size": 14, "class": "text-cyan-400" })} gerencia@synapse.com.pe
</div> </div> <div class="flex items-center gap-4"> ${renderComponent($$result, "Facebook", Facebook, { "size": 14, "class": "hover:text-cyan-400 cursor-pointer transition-colors" })} ${renderComponent($$result, "Linkedin", Linkedin, { "size": 14, "class": "hover:text-cyan-400 cursor-pointer transition-colors" })} ${renderComponent($$result, "Instagram", Instagram, { "size": 14, "class": "hover:text-cyan-400 cursor-pointer transition-colors" })} <button class="bg-cyan-500 hover:bg-cyan-400 text-white px-3 py-1 rounded font-black uppercase ml-4 tracking-tighter transition-colors">
Brochure 2026
</button> </div> </div> </div> <nav class="bg-white border-b border-slate-100 py-4 w-full shadow-sm relative"> <div class="container mx-auto px-6 flex justify-between items-center"> <a href="/" class="flex items-center gap-3 group"> <div class="w-10 h-10 bg-[#005596] flex items-center justify-center rounded-lg"> ${renderComponent($$result, "Zap", Zap, { "size": 24, "class": "text-white", "fill": "white" })} </div> <div> <h1 class="text-xl font-black text-[#005596] leading-none uppercase tracking-tighter">
Synapse Engineering
</h1> <p class="text-[9px] text-slate-500 font-bold tracking-widest uppercase">
Tableros Eléctricos | Celdas | Automatización
</p> </div> </a> <div class="hidden lg:flex items-center gap-8 text-[13px] font-bold uppercase"> <a href="/"${addAttribute(isActive("/") ? activeClass : inactiveClass, "class")}>INICIO</a> <a href="/empresa"${addAttribute(isActive("/empresa") ? activeClass : inactiveClass, "class")}>LA EMPRESA</a> <a href="/productos"${addAttribute(isActive("/productos") ? activeClass : inactiveClass, "class")}>PRODUCTOS</a> <a href="/disenos"${addAttribute(isActive("/disenos") ? activeClass : inactiveClass, "class")}>DISEÑOS</a> <a href="/clientes"${addAttribute(isActive("/clientes") ? activeClass : inactiveClass, "class")}>CLIENTES</a> <a href="/contacto"${addAttribute(isActive("/contacto") ? activeClass : inactiveClass, "class")}>CONTACTO</a> <a href="/tienda"${addAttribute(isActive("/tienda") ? activeClass : inactiveClass, "class")}>TIENDA</a> <a href="/soporte-ia"${addAttribute(isActive("/soporte-ia") ? "text-cyan-500 flex items-center gap-2" : "text-slate-700 hover:text-cyan-500 transition-colors flex items-center gap-2", "class")}> <span class="relative flex h-2 w-2"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span> </span>
SOPORTE IA
</a> <a href="/tienda/carrito" class="relative text-slate-700 hover:text-blue-600 transition-colors"> ${renderComponent($$result, "ShoppingCart", ShoppingCart, { "size": 20 })} <span id="cart-count" class="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] font-black rounded-full h-4 w-4 flex items-center justify-center hidden">0</span> </a> </div> <div class="flex items-center gap-4"> <a href="https://wa.me/51971444230" target="_blank" class="hidden sm:flex items-center gap-3 bg-slate-50 p-2 rounded-full pr-6 border border-slate-100 hover:shadow-md transition-all"> <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white"> ${renderComponent($$result, "Phone", Phone, { "size": 18 })} </div> <div class="leading-none"> <p class="text-[10px] text-slate-400 font-bold uppercase">WhatsApp</p> <p class="text-sm font-black text-slate-800">971 444 230</p> </div> </a> <button id="mobile-menu-button" class="lg:hidden text-[#001529] focus:outline-none p-2 flex items-center justify-center relative z-[1100]"> <span class="hamburger-icon block">${renderComponent($$result, "Menu", Menu, { "size": 28 })}</span> <span class="close-icon hidden">${renderComponent($$result, "X", X, { "size": 28 })}</span> </button> </div> </div> <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl lg:hidden"> <div class="flex flex-col p-6 gap-6 font-bold uppercase"> <a href="/"${addAttribute(isActive("/") ? activeClass : inactiveClass, "class")}>INICIO</a> <a href="/empresa"${addAttribute(isActive("/empresa") ? activeClass : inactiveClass, "class")}>LA EMPRESA</a> <a href="/productos"${addAttribute(isActive("/productos") ? activeClass : inactiveClass, "class")}>PRODUCTOS</a> <a href="/disenos"${addAttribute(isActive("/disenos") ? activeClass : inactiveClass, "class")}>DISEÑOS</a> <a href="/clientes"${addAttribute(isActive("/clientes") ? activeClass : inactiveClass, "class")}>CLIENTES</a> <a href="/contacto"${addAttribute(isActive("/contacto") ? activeClass : inactiveClass, "class")}>CONTACTO</a> <a href="/tienda"${addAttribute(isActive("/tienda") ? activeClass : inactiveClass, "class")}>TIENDA</a> <a href="/soporte-ia"${addAttribute(`flex items-center gap-3 p-4 rounded-xl justify-center ${isActive("/soporte-ia") ? "bg-cyan-100 text-cyan-700" : "bg-cyan-50/50 text-cyan-600 border border-cyan-100"}`, "class")}> ${renderComponent($$result, "Bot", Bot, { "size": 20 })} Soporte IA Online
</a> <a href="/tienda/carrito" class="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-100 text-slate-700 hover:bg-slate-50"> ${renderComponent($$result, "ShoppingCart", ShoppingCart, { "size": 20 })} Ver Carrito
</a> <hr class="border-slate-100"> <a href="https://wa.me/51971444230" class="flex items-center gap-3 text-blue-600"> ${renderComponent($$result, "Phone", Phone, { "size": 20 })} 971 444 230
</a> </div> </div> </nav> </header> <div class="h-[80px] md:h-[125px]"></div>  `;
}, "C:/Users/user/Desktop/synapse-engineering/src/components/shared/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#0f172a] text-white pt-24 pb-12"> <div class="container mx-auto px-6"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20"> <div class="col-span-1 lg:col-span-1"> <div class="flex items-center gap-3 mb-8"> <div class="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-lg"> ${renderComponent($$result, "Zap", Zap, { "size": 22, "fill": "white" })} </div> <h4 class="text-xl font-black uppercase tracking-tighter">Synapse Engineering</h4> </div> <p class="text-slate-400 text-sm leading-relaxed mb-8">
Diseño, fabricación y automatización de tableros eléctricos de alta gama. Ingeniería que redefine la eficiencia industrial en el Perú.
</p> <div class="flex gap-4"> <a href="#" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg">${renderComponent($$result, "Linkedin", Linkedin, { "size": 18 })}</a> <a href="#" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg">${renderComponent($$result, "Facebook", Facebook, { "size": 18 })}</a> <a href="#" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg">${renderComponent($$result, "Instagram", Instagram, { "size": 18 })}</a> </div> </div> <div> <h5 class="font-black text-xs uppercase tracking-[0.2em] text-blue-400 mb-8">Plataforma</h5> <ul class="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-tighter"> <li><a href="/" class="hover:text-white transition-colors">Inicio</a></li> <li><a href="#empresa" class="hover:text-white transition-colors">La Empresa</a></li> <li><a href="#productos" class="hover:text-white transition-colors">Catálogo Técnico</a></li> <li><a href="#contacto" class="hover:text-white transition-colors">Contacto</a></li> </ul> </div> <div> <h5 class="font-black text-xs uppercase tracking-[0.2em] text-blue-400 mb-8">Especialidades</h5> <ul class="space-y-4 text-slate-400 text-sm font-medium"> <li>Tableros de Distribución</li> <li>Celdas de Media Tensión</li> <li>Centros de Control de Motores</li> <li>Automatización de Procesos</li> <li>Sistemas de Transferencia</li> </ul> </div> <div> <h5 class="font-black text-xs uppercase tracking-[0.2em] text-blue-400 mb-8">Normativas</h5> <div class="grid grid-cols-2 gap-3 opacity-40 grayscale"> <div class="bg-white/10 p-4 rounded-xl flex items-center justify-center font-black text-[9px]">ISO 9001</div> <div class="bg-white/10 p-4 rounded-xl flex items-center justify-center font-black text-[9px]">IEC 61439</div> <div class="bg-white/10 p-4 rounded-xl flex items-center justify-center font-black text-[9px]">CNE PERÚ</div> <div class="bg-white/10 p-4 rounded-xl flex items-center justify-center font-black text-[9px]">IEEE</div> </div> </div> </div> <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6"> <p class="text-slate-500 text-[10px] font-black uppercase tracking-widest">
© 2026 Synapse Engineering S.A.C. - Todos los derechos reservados
</p> <div class="flex gap-6"> <a href="#inicio" class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-all"> ${renderComponent($$result, "ArrowUp", ArrowUp, { "size": 18 })} </a> </div> </div> </div> </footer>`;
}, "C:/Users/user/Desktop/synapse-engineering/src/components/shared/Footer.astro", void 0);

export { $$Footer as $, Mail as M, Phone as P, ShoppingCart as S, X, Zap as Z, $$Navbar as a, MapPin as b, Menu as c, createLucideIcon as d };
