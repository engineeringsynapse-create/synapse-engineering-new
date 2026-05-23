import { atom, map, computed } from 'nanostores';

export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
};

// Mapa para guardar productos y sus cantidades
export const $cart = map<Record<number, { product: Product; quantity: number }>>({});

// Cálculo automático de totales
export const $cartTotal = computed($cart, (items) => {
  return Object.values(items).reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
});

export const $subtotal = computed($cartTotal, (total) => total / 1.18); // Asumiendo 18% IGV
export const $igv = computed($cartTotal, (total) => total - (total / 1.18));

export function addToCart(product: Product) {
  const cart = $cart.get();
  const current = cart[product.id] || { product, quantity: 0 };
  $cart.setKey(product.id, { ...current, quantity: current.quantity + 1 });
}