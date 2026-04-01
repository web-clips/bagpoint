import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist(
    (set) => ({
      items: [],
      toggleFavorite: (product) =>
        set((state) => {
          const exists = state.items.some((item) => item.id === product.id);
          if (exists) {
            return { items: state.items.filter((item) => item.id !== product.id) };
          }
          return { items: [...state.items, product] };
        })
    }),
    { name: 'bag-point-favorites' }
  )
);
