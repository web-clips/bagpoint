import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { formatPrice } from '../utils/formatPrice';
import ProductMediaSlider from './ProductMediaSlider';

function ProductCard({ product, index = 0 }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.items);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favoriteItems = useFavoritesStore((state) => state.items);

  const inCart = cartItems.some((item) => item.id === product.id);
  const inFavorites = favoriteItems.some((item) => item.id === product.id);

  return (
    <Link to={`/product/${product.id}`}>
      <motion.article
        className="product-card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
      >
        <div className="product-card__media-link">
          <ProductMediaSlider images={product.images} alt={product.name} badge={product.badge} />
        </div>

        <div className="product-card__content">
          <div className="product-card__top">
            <div className="product-card__title-box">
              <div className="product-card__brand">{product.brand}</div>
            </div>
            <button
              type="button"
              className={`favorite-circle ${inFavorites ? 'is-active' : ''}`}
              onClick={() => toggleFavorite(product)}
              aria-label={inFavorites ? 'Убрать из избранного' : 'Добавить в избранное'}
            >
              ♥
            </button>
          </div>

          <div className="product-card__meta">ID: {product.id}</div>
          <div className="product-card__price">{formatPrice(product.price)}</div>

          <div className="product-card__actions">
            {/* <button type="button" className="soft-button" onClick={() => toggleFavorite(product)}>
            {inFavorites ? 'В избранном' : 'В избранное'}
          </button> */}
            <button type="button" className="dark-button" onClick={() => addToCart(product)} disabled={inCart}>
              {inCart ? 'Уже в корзине' : 'В корзину'}
            </button>
          </div>
        </div>
      </motion.article>
    </Link >
  );
}

export default ProductCard;
