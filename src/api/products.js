import { categoryMeta, products } from '../data/products';

export async function fetchProductsByCategory(category, brand = 'all') {
  let filtered = products.filter((item) => item.category === category);

  if (categoryMeta[category]?.allowBrandFilter && brand !== 'all') {
    filtered = filtered.filter((item) => item.brand === brand);
  }

  return filtered;
}

export async function fetchProductById(id) {
  return products.find((item) => item.id === id);
}

export async function fetchBrandsByCategory(category) {
  if (!categoryMeta[category]?.allowBrandFilter) return ['all'];
  const brands = [...new Set(products.filter((item) => item.category === category).map((item) => item.brand))];
  return ['all', ...brands];
}
