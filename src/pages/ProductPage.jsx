import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductMediaSlider from '../components/ProductMediaSlider';
import { fetchProductById } from '../api/products';
import { formatPrice } from '../utils/formatPrice';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.items);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favoriteItems = useFavoritesStore((state) => state.items);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) {
    return <div className="simple-message">Товар не найден.</div>;
  }

  const inCart = cartItems.some((item) => item.id === product.id);
  const inFavorites = favoriteItems.some((item) => item.id === product.id);

  return (
    <div className="product-page">
      <button type="button" className="back-link" onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <div className="product-detail-card">
        <ProductMediaSlider images={product.images} alt={product.name} badge={product.badge} />
        <div className="product-detail-card__content">
          <div className="product-card__brand">{product.brand}</div>
          <h1>{product.name}</h1>
          <div className="product-detail-card__id">ID: {product.id}</div>
          <div className="product-detail-card__price">{formatPrice(product.price)}</div>
          <p>{product.description}</p>
          <div className="product-detail-card__actions">
            <button type="button" className="soft-button" onClick={() => toggleFavorite(product)}>
              {inFavorites ? 'Убрать из избранного' : 'В избранное'}
            </button>
            <button type="button" className="dark-button" onClick={() => addToCart(product)} disabled={inCart}>
              {inCart ? 'Уже в корзине' : 'Добавить в корзину'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
