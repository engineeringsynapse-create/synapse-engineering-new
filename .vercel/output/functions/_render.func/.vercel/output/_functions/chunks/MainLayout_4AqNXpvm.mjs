import { Q as createComponent, Z as maybeRenderHead, a6 as renderTemplate, B as addAttribute, a1 as renderHead, a4 as renderSlot, $ as renderComponent, O as createAstro } from './astro/server_BdknY_pA.mjs';
import 'kleur/colors';
/* empty css                            */
import 'clsx';

const $$CartDrawer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cart-drawer" class="fixed inset-y-0 right-0 z-[9999] w-full max-w-sm bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out p-6 overflow-y-auto border-l border-slate-100"> <div class="flex justify-between items-center mb-8"> <h2 class="text-xl font-black text-slate-900 uppercase tracking-tighter">Tu Carrito</h2> <button id="close-cart" class="text-slate-400 hover:text-blue-600 transition-colors font-bold uppercase text-xs">Cerrar</button> </div> <div id="cart-items" class="space-y-6"></div> <div class="mt-8 border-t border-slate-100 pt-6 space-y-3"> <div class="flex justify-between text-sm text-slate-500"> <span>Subtotal:</span> <span id="sub-total">S/ 0.00</span> </div> <div class="flex justify-between text-sm text-slate-500"> <span>IGV (18%):</span> <span id="tax-total">S/ 0.00</span> </div> <div class="flex justify-between text-xl font-black mt-2 text-slate-900"> <span>Total:</span> <span id="cart-total">S/ 0.00</span> </div> <a href="/checkout" class="block w-full bg-[#001529] text-white py-4 mt-6 rounded-2xl font-black uppercase text-center hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
Procesar Compra
</a> </div> </div> `;
}, "C:/Users/user/Desktop/synapse-engineering/src/components/shared/CartDrawer.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Synapse Engineering</title><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap" rel="stylesheet">${renderHead()}</head> <body> <div class="grain-overlay" style="pointer-events: none;"></div> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "CartDrawer", $$CartDrawer, {})} <div id="ai-chat-widget" class="fixed bottom-6 right-6 z-[2000] pointer-events-none group"></div>  </body> </html> `;
}, "C:/Users/user/Desktop/synapse-engineering/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
