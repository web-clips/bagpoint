import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function CategoryCard({ item, index }) {
  return (
    <Link to={`/category/${item.slug}`} onClick={(e) => {
      if (!item.isActive) {
        e.preventDefault(); // блокируем переход
        alert('Раздел в разработке')
      }
    }}>
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
        whileHover={{ y: -4, scale: 1.01 }}
        className={`category-card ${!item.isActive ? "card--disabled" : ""}`}
      >
        <img src={item.image} alt={item.title} className="category-card__image" />
        <div className="category-card__overlay" />
        <div className="category-card__content">
          <h2>{item.title}</h2>


        </div>
      </motion.article>
    </Link>
  );
}

export default CategoryCard;
