import { Link, NavLink } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { BagIcon, HeartIcon } from './Icons';

function Header() {
  const cartItems = useCartStore((state) => state.items);
  const favoriteItems = useFavoritesStore((state) => state.items);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="site-logo">Bag Point</Link>

        <nav className="site-nav">
          <NavLink to="/favorites" className="icon-link" aria-label="Избранное">
            <HeartIcon />
            {favoriteItems.length > 0 ? <span className="icon-count">{favoriteItems.length}</span> : null}
          </NavLink>
          <NavLink to="/cart" className="icon-link" aria-label="Корзина">
            <BagIcon />
            {cartItems.length > 0 ? <span className="icon-count">{cartItems.length}</span> : null}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
