import { create } from "zustand";

import { Product } from "@lib/types";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  decreaseQuantity: (id: string) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product) => {
    console.log("Adding to cart:", product);

    const existingItem = get().items.find((item) => item.id === product.id);
    if (existingItem) {
      set({
        items: get().items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ items: [...get().items, { ...product, quantity: 1 }] });
    }
  },
  removeFromCart: (id: string) => {
    set({ items: get().items.filter((item) => item.id !== id) });
  },
  clearCart: () => set({ items: [] }),
  decreaseQuantity: (id: string) => {
    const existing = get().items.find((item) => item.id === id);
    if (existing && existing.quantity > 1) {
      set({
        items: get().items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      });
    } else {
      set({ items: get().items.filter((item) => item.id !== id) });
    }
  },
}));
