import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const exists = state.items.some((item) => item.id === product.id);
          if (exists) return state;
          return { items: [...state.items, product] };
        }),
      removeFromCart: (id) =>
        set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
      clearCart: () => set({ items: [] })
    }),
    { name: 'bag-point-cart' }
  )
);
