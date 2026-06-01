import { map, computed } from 'nanostores';

export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  sku: string;
};

// Función para obtener el estado inicial de forma segura
const getStoredCart = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  }
  return {};
};

export const $cart = map<Record<number, { product: Product; quantity: number }>>(getStoredCart());

// Suscripción para persistir en localStorage
$cart.subscribe((items) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(items));
  }
});

// Cálculos
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