import { categoryCards } from '../data/products';
import CategoryCard from '../components/CategoryCard';

function HomePage() {
  return (
    <div className="home-page">
      {/* <section className="home-hero">
        <div className="home-hero__eyebrow">Bag Point</div>
        <h1>Премиальный каталог для заказа через WhatsApp</h1>
        <p>Сумки, Smeg, Dyson, украшения, аксессуары и детские товары — в аккуратном мобильном формате без лишних шагов.</p>
      </section> */}

      <section className="category-grid">
        {categoryCards.map((item, index) => (
          <CategoryCard key={item.slug} item={item} index={index} />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
