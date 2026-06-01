import { map, computed } from 'nanostores';

export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  sku: string; // Asegúrate de incluir el SKU
};

// 1. Intentar cargar del localStorage al iniciar
const storedCart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || '{}') : {};

export const $cart = map<Record<number, { product: Product; quantity: number }>>(storedCart);

// 2. Guardar automáticamente cada vez que el carrito cambie
$cart.subscribe((items) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(items));
  }
});

// Cálculos (estos ya los tienes bien)
export const $cartTotal = computed($cart, (items) => {
  return Object.values(items).reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
});

export const $subtotal = computed($cartTotal, (total) => total / 1.18);
export const $igv = computed($cartTotal, (total) => total - (total / 1.18));

export function addToCart(product: Product) {
  const cart = $cart.get();
  const current = cart[product.id] || { product, quantity: 0 };
  $cart.setKey(product.id, { ...current, quantity: current.quantity + 1 });
}