import ProductCard from '../components/ProductCard';
import EmptyState from '../components/EmptyState';
import { useFavoritesStore } from '../store/useFavoritesStore';

function FavoritesPage() {
  const items = useFavoritesStore((state) => state.items);

  if (!items.length) {
    return (
      <EmptyState
        icon="♡"
        title="Избранное пока пусто"
        text="Сохраняйте понравившиеся товары, чтобы позже быстро вернуться к ним."
      />
    );
  }

  return (
    <div className="favorites-page">
      <div className="section-intro">
        <div className="section-intro__eyebrow">Сохранённое</div>
        <h1>Избранное</h1>
      </div>
      <div className="product-grid product-grid--category">
        {items.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
