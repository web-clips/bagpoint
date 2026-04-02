import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryTopbar from '../components/CategoryTopbar';
import ProductCard from '../components/ProductCard';
import { categoryMeta } from '../data/products';
import { fetchBrandsByCategory, fetchProductsByCategory } from '../api/products';
import { ChevronDownIcon } from '../components/Icons';
import BrandFilter from '../components/BrandFilter';

function CategoryPage() {
  const { slug } = useParams();
  const meta = categoryMeta[slug];
  const [brand, setBrand] = useState('all');
  const [brands, setBrands] = useState(['all']);
  const [products, setProducts] = useState([]);
  const [openBrands, setOpenBrands] = useState(false);

  useEffect(() => {
    if (!meta) return;
    fetchBrandsByCategory(slug).then((items) => {
      setBrands(items);
      setBrand('all');
    });
  }, [slug, meta]);

  useEffect(() => {
    if (!meta) return;
    fetchProductsByCategory(slug, brand).then(setProducts);
  }, [slug, brand, meta]);

  const currentBrandLabel = useMemo(() => {
    if (brand === 'all') return 'Бренд';
    return brand;
  }, [brand]);

  if (!meta) {
    return <div className="simple-message">Категория не найдена.</div>;
  }

  return (
    <div className="category-page">
      <CategoryTopbar title={meta.title.toUpperCase()} />

      {meta.allowBrandFilter ? (
        <div className="category-controls">
          <div className="brands-wrap">
            <div className="brands-row">
              {brands.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`brand-pill ${brand === item ? 'is-active' : ''}`}
                  onClick={() => setBrand(item)}
                >
                  {item === 'all' ? 'Все бренды' : item}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="product-grid product-grid--category">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
