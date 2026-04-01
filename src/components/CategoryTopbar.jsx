import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { BackIcon, BagIcon } from './Icons';

function CategoryTopbar({ title }) {
  const navigate = useNavigate();
  const count = useCartStore((state) => state.items.length);

  return (
    <div className="category-topbar">
      <button type="button" className="icon-link icon-link--ghost" onClick={() => navigate(-1)} aria-label="Назад">
        <BackIcon />
      </button>
      <div className="category-topbar__title">{title}</div>
      {/* <button type="button" className="icon-link" onClick={() => navigate('/cart')} aria-label="Корзина">
        <BagIcon />
        {count > 0 ? <span className="icon-count">{count}</span> : null}
      </button> */}
    </div>
  );
}

export default CategoryTopbar;
