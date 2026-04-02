import { useCartStore } from '../store/useCartStore';
import { formatPrice } from '../utils/formatPrice';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import EmptyState from '../components/EmptyState';

function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const increaseQuantity = useCartStore((s) => s.increaseQuantity);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!items.length) {
    return (
      <EmptyState
        icon="👜"
        title="Корзина пока пуста"
        text="Добавьте товары в корзину, и вы сможете отправить готовую заявку менеджеру в WhatsApp."
      />
    );
  }

  // const total = items.reduce((sum, item) => sum + item.price, 0);
  const totalItems = items.length;

  return (
    <div className="cart-page">
      <div className="section-intro">
        <div className="section-intro__eyebrow">Заказ</div>
        <h1>Корзина</h1>
        <p className="cart-page__subtitle">
          В корзине {totalItems} {totalItems === 1 ? 'товар' : totalItems < 5 ? 'товара' : 'товаров'}
        </p>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {items.map((item) => (
            <article key={item.id} className="cart-card">
              <img src={item.images?.[0]} alt={item.name} className="cart-card__image" />

              <div className="cart-card__content">
                <div className="cart-card__top">
                  <div className="product-card__brand">{item.brand}</div>

                  <button
                    className="cart-card__remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>

                <h3>{item.name}</h3>

                <div className="cart-card__meta">
                  <span>ID: {item.id}</span>
                </div>

                <div className="cart-card__bottom">
                  <div className="qty">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <div className="cart-card__price">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="summary-card">
          <div className="summary-card__eyebrow">Оформление</div>

          <h2>Ваш заказ</h2>

          <div className="summary-card__info">
            <div className="summary-card__row">
              <span>Товары</span>
              <strong>{totalItems}</strong>
            </div>

            <div className="summary-card__row">
              <span>Сумма</span>
              <strong>{formatPrice(total)}</strong>
            </div>
          </div>

          <div className="summary-card__hint">
            После нажатия откроется WhatsApp с готовым сообщением для менеджера.
          </div>

          <div className="summary-card__total">{formatPrice(total)}</div>

          <a
            href={buildWhatsAppUrl(items)}
            target="_blank"
            rel="noreferrer"
            className="dark-button summary-card__button"
          >
            Перейти в WhatsApp
          </a>

          <button
            type="button"
            className="soft-button summary-card__button summary-card__button--ghost"
            onClick={clearCart}
          >
            Очистить корзину
          </button>
        </aside>
      </div>
    </div>
  );
}

export default CartPage;