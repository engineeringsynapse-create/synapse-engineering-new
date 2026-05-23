import{$ as o,a,c as r,b as c}from"./CartDrawer.astro_astro_type_script_index_0_lang.BgzOjxEC.js";const l=document.getElementById("cart-items-list"),d=document.getElementById("full-subtotal"),n=document.getElementById("full-tax"),i=document.getElementById("full-total");o.subscribe(t=>{const s=Object.values(t);s.length===0?l.innerHTML='<p class="text-slate-500 font-bold p-10 text-center border-2 border-dashed border-slate-100 rounded-3xl">Tu carrito está vacío.</p>':l.innerHTML=s.map(e=>`
        <div class="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div class="w-20 h-20 bg-slate-100 rounded-xl flex items-center justify-center">Img</div>
          <div class="flex-1">
            <h3 class="font-black text-slate-800">${e.product.name}</h3>
            <p class="text-blue-600 font-bold text-sm">Código: ${e.product.sku}</p>
          </div>
          <p class="font-black text-[#001529]">S/ ${e.product.price.toFixed(2)}</p>
        </div>
      `).join("")});a.subscribe(t=>i.innerText=`S/ ${t.toFixed(2)}`);r.subscribe(t=>d.innerText=`S/ ${t.toFixed(2)}`);c.subscribe(t=>n.innerText=`S/ ${t.toFixed(2)}`);
