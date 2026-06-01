import { atom, map, computed } from 'nanostores';

export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  sku: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

// Estado del carrito como un mapa de objetos
export const $cart = map<Record<number, CartItem>>({});

// Función profesional para agregar productos
export function addToCart(product: Product) {
  const currentCart = $cart.get();
  const existingItem = currentCart[product.id];

  if (existingItem) {
    $cart.setKey(product.id, { 
      ...existingItem, 
      quantity: existingItem.quantity + 1 
    });
  } else {
    $cart.setKey(product.id, { product, quantity: 1 });
  }

  // Guardado persistente
  localStorage.setItem('cart', JSON.stringify($cart.get()));
  alert(`${product.name} agregado al carrito`);
}

// Cálculos reactivos para el resumen
export const $subtotal = computed($cart, (items) => {
  return Object.values(items).reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
});

export const $igv = computed($subtotal, (sub) => sub * 0.18);
export const $cartTotal = computed([$subtotal, $igv], (sub, igv) => sub + igv);

// Inicialización desde localStorage (solo en cliente)
if (typeof window !== 'undefined') {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    try {
      $cart.set(JSON.parse(savedCart));
    } catch (e) {
      console.error("Error al cargar carrito:", e);
    }
  }
}