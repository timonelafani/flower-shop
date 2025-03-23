import { create } from "zustand";

import { Product } from "@lib/types";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  decreaseQuantity: (id: number) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product) => {
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
  removeFromCart: (id) => {
    set({ items: get().items.filter((item) => item.id !== id) });
  },
  clearCart: () => set({ items: [] }),
  decreaseQuantity: (id: number) => {
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
