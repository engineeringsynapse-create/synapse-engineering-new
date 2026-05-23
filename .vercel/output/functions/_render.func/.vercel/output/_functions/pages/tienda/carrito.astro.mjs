import { Q as createComponent, $ as renderComponent, a6 as renderTemplate, Z as maybeRenderHead } from '../../chunks/astro/server_BdknY_pA.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_4AqNXpvm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Carrito = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Carrito de Pedidos | Synapse Engineering", "description": "Finaliza tu compra" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-6 py-12 mt-10"> <h1 class="text-3xl font-black text-[#001529] uppercase mb-10 tracking-tighter">
Resumen de la orden
</h1> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12"> <div id="cart-items-list" class="lg:col-span-2 space-y-4"></div> <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl h-fit"> <h2 class="text-xl font-black mb-6 uppercase text-[#001529]">Total a Pagar</h2> <div class="space-y-4 text-sm font-bold"> <div class="flex justify-between text-slate-500"><span>Subtotal:</span> <span id="full-subtotal">S/ 0.00</span></div> <div class="flex justify-between text-slate-500"><span>IGV (18%):</span> <span id="full-tax">S/ 0.00</span></div> <div class="flex justify-between text-lg pt-4 border-t border-slate-100 text-[#001529]"><span>Total Final:</span> <span id="full-total">S/ 0.00</span></div> </div> <div class="mt-8"> <p class="text-[10px] font-bold text-slate-400 uppercase mb-3">Aceptamos los medios de pagos</p> <div class="flex gap-2 mb-6"> <div class="bg-slate-50 border border-slate-100 px-2 py-1 rounded text-[10px] font-bold">VISA</div> <div class="bg-slate-50 border border-slate-100 px-2 py-1 rounded text-[10px] font-bold">MASTERCARD</div> <div class="bg-slate-50 border border-slate-100 px-2 py-1 rounded text-[10px] font-bold">PAYPAL</div> </div> <button class="w-full bg-[#001529] text-white py-4 rounded-xl font-black uppercase hover:bg-blue-900 transition-all">
Procesar Compra
</button> </div> </div> </div> </main> ` })} `;
}, "C:/Users/user/Desktop/synapse-engineering/src/pages/tienda/carrito.astro", void 0);

const $$file = "C:/Users/user/Desktop/synapse-engineering/src/pages/tienda/carrito.astro";
const $$url = "/tienda/carrito";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carrito,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
