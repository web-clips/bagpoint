import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function BrandFilter({ brands, brand, setBrand }) {
  const [openBrands, setOpenBrands] = useState(false);
  const [search, setSearch] = useState('');
  const filterRef = useRef(null);

  const currentBrandLabel = brand === 'all' ? 'Все бренды' : brand;

  const filteredBrands = useMemo(() => {
    return brands.filter((item) => {
      const label = item === 'all' ? 'Все бренды' : item;
      return label.toLowerCase().includes(search.toLowerCase());
    });
  }, [brands, search]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpenBrands(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="brand-filter" ref={filterRef}>
      <button
        type="button"
        className={`filter-trigger ${openBrands ? 'is-open' : ''}`}
        onClick={() => setOpenBrands((value) => !value)}
      >
        <span>{currentBrandLabel}</span>
        <span className={`filter-arrow ${openBrands ? 'is-open' : ''}`}>⌄</span>
      </button>

      <AnimatePresence>
        {openBrands && (
          <motion.div
            className="brand-dropdown"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            <div className="brand-search-wrap">
              <input
                type="text"
                placeholder="Поиск бренда"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="brand-search"
              />
            </div>

            <div className="brand-options-list">
              {filteredBrands.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`brand-option ${brand === item ? 'is-active' : ''}`}
                  onClick={() => {
                    setBrand(item);
                    setOpenBrands(false);
                    setSearch('');
                  }}
                >
                  {item === 'all' ? 'Все бренды' : item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BrandFilter;