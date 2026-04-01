import { useCartStore } from '../store/useCartStore';
import { formatPrice } from '../utils/formatPrice';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import EmptyState from '../components/EmptyState';

function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  if (!items.length) {
    return (
      <EmptyState
        icon="👜"
        title="Корзина пока пуста"
        text="Добавьте товары в корзину, и вы сможете отправить готовую заявку менеджеру в WhatsApp."
      />
    );
  }

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <div className="section-intro">
        <div className="section-intro__eyebrow">Заказ</div>
        <h1>Корзина</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {items.map((item) => (
            <article key={item.id} className="cart-card">
              <img src={item.images?.[0]} alt={item.name} className="cart-card__image" />
              <div className="cart-card__content">
                <div className="product-card__brand">{item.brand}</div>
                <h3>{item.name}</h3>
                <p>ID: {item.id}</p>
                <strong>{formatPrice(item.price)}</strong>
              </div>
              <button type="button" className="soft-button" onClick={() => removeFromCart(item.id)}>Убрать</button>
            </article>
          ))}
        </div>

        <aside className="summary-card">
          <div className="summary-card__eyebrow">WhatsApp</div>
          <h2>Отправить заявку менеджеру</h2>
          <p>Все выбранные позиции соберутся в одно готовое сообщение с ID, названиями и ценами.</p>
          <div className="summary-card__total">{formatPrice(total)}</div>
          <a href={buildWhatsAppUrl(items)} target="_blank" rel="noreferrer" className="dark-button summary-card__button">
            Перейти в WhatsApp
          </a>
          <button type="button" className="soft-button summary-card__button" onClick={clearCart}>Очистить корзину</button>
        </aside>
      </div>
    </div>
  );
}

export default CartPage;
