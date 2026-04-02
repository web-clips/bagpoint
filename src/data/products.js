export const categoryCards = [
  {
    slug: 'bags',
    title: 'Сумки',
    button: 'Смотреть',
    image: '/categories/bag.png'
  },
  {
    slug: 'smeg',
    title: 'Smeg',
    button: 'Смотреть',
    image: '/categories/smeg.png'
  },
  {
    slug: 'dyson',
    title: 'Dyson',
    button: 'Смотреть',
    image: '/categories/dyson.png'
  },
  {
    slug: 'jewelry',
    title: 'Украшения',
    button: 'Смотреть',
    image: '/categories/jewerly.png'
  },
  // {
  //   slug: 'accessories',
  //   title: 'Аксессуары',
  //   button: 'Смотреть',
  //   image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80'
  // },
  // {
  //   slug: 'vacuum',
  //   title: 'Роботы-пылесосы',
  //   button: 'Смотреть',
  //   image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80'
  // },
  // {
  //   slug: 'baby',
  //   title: 'Mamas & Papas',
  //   button: 'Смотреть',
  //   image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1200&q=80'
  // },
  // {
  //   slug: 'carters',
  //   title: 'Carter’s',
  //   button: 'Смотреть',
  //   image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80'
  // }
];

export const categoryMeta = {
  bags: { title: 'Сумки', allowBrandFilter: true },
  smeg: { title: 'Smeg', allowBrandFilter: false },
  dyson: { title: 'Dyson', allowBrandFilter: false },
  jewelry: { title: 'Украшения', allowBrandFilter: false },
  accessories: { title: 'Аксессуары', allowBrandFilter: false },
  vacuum: { title: 'Роботы-пылесосы', allowBrandFilter: false },
  baby: { title: 'Mamas & Papas', allowBrandFilter: false },
  carters: { title: 'Carter’s', allowBrandFilter: false }
};

export const products = [
  {
    id: 'VLT-001',
    category: 'bags',
    brand: 'Valentino',
    price: 24990,
    badge: 'HIT',
    images: [
      'https://i.pinimg.com/1200x/e5/26/5a/e5265aba9a6086d9473391cc89aec9ff.jpg',
      'https://i.pinimg.com/1200x/71/0a/78/710a78554e348c687e81a6339679f31c.jpg'
    ],
    description: 'Легендарная модель с мягкой геометрией и золотой фурнитурой.'
  },
  {
    id: 'VLT-002',
    category: 'bags',
    brand: 'Valentino',
    price: 28690,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/a3/97/d7/a397d76f6fa664335aeae19d4782b676.jpg',
      'https://i.pinimg.com/1200x/34/be/f9/34bef9f32c794d795318df758e0bbbb8.jpg',
      'https://i.pinimg.com/1200x/48/25/10/482510f016c9011bec437a8cf5abe02b.jpg'
    ],
    description: 'Узнаваемая модель с выразительным силуэтом.'
  },
  {
    id: 'VLT-003',
    category: 'bags',
    brand: 'Valentino',
    price: 26990,
    badge: 'Best seller',
    images: [
      'https://i.pinimg.com/736x/05/36/94/0536943d1b75acf961219ecc2ff657d1.jpg'
    ],
    description: 'Вместительная сумка на каждый день и в поездки.'
  },
  {
    id: 'VLT-004',
    category: 'bags',
    brand: 'Valentino',
    price: 24990,
    badge: 'Premium',
    images: [
      'https://i.pinimg.com/1200x/b3/3b/3b/b33b3be5d6b96d20b0705e69bc8beb0e.jpg',
      'https://i.pinimg.com/1200x/9e/5d/b7/9e5db7d3120255c75acb566acf0f567d.jpg'
    ],
    description: 'Статусная модель с чистой архитектурной формой.'
  },
  {
    id: 'VLT-005',
    category: 'bags',
    brand: 'Valentino',
    price: 24990,
    badge: 'Icon',
    images: [
      'https://i.pinimg.com/736x/20/71/78/207178e799ecbc8a5a2a30f4cbb3a388.jpg',
      'https://i.pinimg.com/736x/93/a5/77/93a5777ddc899e6e23927d88984d75df.jpg',
      'https://i.pinimg.com/1200x/35/48/29/354829bb09cf479575fd4dfa7a107849.jpg'
    ],
    description: 'Икона вечернего и повседневного luxury-гардероба.'
  },
  {
    id: 'VLT-006',
    category: 'bags',
    brand: 'Valentino',
    price: 33690,
    badge: 'Top',
    images: [
      'https://i.pinimg.com/1200x/9e/ad/bd/9eadbd1cdf7b116643abf0f0902de9d8.jpg',
      'https://i.pinimg.com/1200x/5d/1b/90/5d1b90e40578dbc56e0b74a9b373e050.jpg',
      'https://i.pinimg.com/1200x/34/a8/b0/34a8b07da31649def08fbe1ef1ad5cba.jpg',
      'https://i.pinimg.com/1200x/6b/4d/c5/6b4dc5ce1b35c648d09f5a889b0ab210.jpg'
    ],
    description: 'Жёсткая форма и контрастный характер в одном силуэте.'
  },
  {
    id: 'VLT-007',
    category: 'bags',
    brand: 'Valentino',
    price: 24690,
    badge: 'Hot',
    images: [
      'https://i.pinimg.com/1200x/f6/ea/54/f6ea547abb44e2b466f972cc373e089a.jpg',
      'https://i.pinimg.com/1200x/7e/1c/79/7e1c790835b6a1a250dc54311bfbd5e6.jpg',
      'https://i.pinimg.com/1200x/ce/d3/b0/ced3b094efe0cb60bb946ee0e855a995.jpg'
    ],
    description: 'Выразительная сумка с фирменным мотивом GG.'
  },
  {
    id: 'VLT-008',
    category: 'bags',
    brand: 'Valentino',
    price: 23690,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/48/cc/de/48ccde701e6d42795252d20313875d34.jpg',
      'https://i.pinimg.com/736x/94/11/4f/94114fda88f5bbd9001a9ed8350de2ac.jpg',
      'https://i.pinimg.com/1200x/b2/92/b3/b292b3092d2018a5debc01a87b21c508.jpg',
      'https://i.pinimg.com/736x/c9/77/d6/c977d6ea37376fac08cfd1f6f95a5baa.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'VLT-009',
    category: 'bags',
    brand: 'Valentino',
    price: 34690,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/4e/d9/ba/4ed9baf20a946f46090bbd111f379ef2.jpg',
      'https://i.pinimg.com/1200x/69/42/9d/69429d9a3320dd5f1792560e70fe7496.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'VLT-010',
    category: 'bags',
    brand: 'Valentino',
    price: 24690,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/d7/c7/c9/d7c7c9e82f587394d446051ba150a426.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'PRADA-001',
    category: 'bags',
    brand: 'Prada',
    price: 28990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/92/01/e9/9201e9dd6d5b64362bc463ffedc5f6a2.jpg',
      'https://i.pinimg.com/1200x/a0/dd/d9/a0ddd9351112490cab3568b714641e05.jpg',
      'https://i.pinimg.com/1200x/cc/bf/d8/ccbfd877e315ec43025c61c61697f769.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'PRADA-002',
    category: 'bags',
    brand: 'Prada',
    price: 26990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/db/02/e7/db02e78512fd05bc12406e903b59abea.jpg',
      'https://i.pinimg.com/1200x/e8/b9/72/e8b972d80ac6a9043838fff52dda5e3f.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'PRADA-003',
    category: 'bags',
    brand: 'Prada',
    price: 23790,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/64/96/fb/6496fb4f4e2d198e1d675fe75ffd1fe5.jpg',
      'https://i.pinimg.com/1200x/ba/c6/e9/bac6e9c7bf563ef6caf6d4ac2671c714.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'PRADA-004',
    category: 'bags',
    brand: 'Prada',
    price: 26990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/d8/56/12/d856120186269bd9f0d7bbdb8e51639d.jpg',
      'https://i.pinimg.com/1200x/2f/b6/2e/2fb62e69fdf27867555945a945688b2d.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'PRADA-005',
    category: 'bags',
    brand: 'Prada',
    price: 24990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/1d/1e/cb/1d1ecbf1b1dba32b2c998db149ebc345.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'PRADA-006',
    category: 'bags',
    brand: 'Prada',
    price: 27990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/29/ac/6d/29ac6d8dbfe66d534ff9e62ddc66479c.jpg',
      'https://i.pinimg.com/1200x/61/d2/bd/61d2bd98d46b43d68f150e08f49a8761.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'PRADA-007',
    category: 'bags',
    brand: 'Prada',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/96/b8/b3/96b8b3e76ba1e0acc145e051f18ab942.jpg',
      'https://i.pinimg.com/1200x/80/37/53/803753fb783940ca90b50d751a3f28ac.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-001',
    category: 'bags',
    brand: 'MIUMIU',
    price: 29990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/f9/57/7d/f9577dc0d81bd713295f768a54c8b080.jpg',
      'https://i.pinimg.com/1200x/f9/ef/f2/f9eff2de921052cea66bc867aa44332d.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-002',
    category: 'bags',
    brand: 'MIUMIU',
    price: 31990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/d8/9d/a6/d89da6239e7e5ba1b90909a939cf0df8.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-003',
    category: 'bags',
    brand: 'MIUMIU',
    price: 32990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/35/09/c4/3509c4d460a2b479978620f1e11c029b.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-004',
    category: 'bags',
    brand: 'MIUMIU',
    price: 29990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/4f/1a/f9/4f1af90a90fbb807e5f1600f504f4489.jpg',
      'https://i.pinimg.com/1200x/21/21/77/212177a760c80e5790f4256d3d702c57.jpg',
      'https://i.pinimg.com/736x/be/3a/82/be3a82999086334dd3d1fb40adf5510b.jpg',
      'https://i.pinimg.com/736x/d1/b7/00/d1b70025342066f83b30afb8b8516178.jpg',
      'https://i.pinimg.com/736x/f5/94/7f/f5947fe6433dc2dfe9cbe4602068a651.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-005',
    category: 'bags',
    brand: 'MIUMIU',
    price: 27990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/4b/88/cb/4b88cbfe5534418953fd3bccb5db2da3.jpg',
      'https://i.pinimg.com/736x/4b/12/cf/4b12cfb2cdcfbfb90d471bcb53c0882b.jpg',
      'https://i.pinimg.com/1200x/47/cc/09/47cc09164834a5160ad5dea1b9ad9feb.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-006',
    category: 'bags',
    brand: 'MIUMIU',
    price: 20990,
    badge: 'Popular',
    images: [
      'https://cdn.imweb.me/thumbnail/20260106/f6491038885fb.jpeg',
      'https://cdn.imweb.me/thumbnail/20251210/9d3d73362332d.jpeg',
      'https://cdn.imweb.me/thumbnail/20251210/383dd2d6af08e.jpeg',
      'https://cdn.imweb.me/thumbnail/20251210/6e716c8d19705.jpeg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-007',
    category: 'bags',
    brand: 'MIUMIU',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/5c/b3/99/5cb399a6c993f09fd74de4be3ffc0c37.jpg',
      'https://i.pinimg.com/736x/7b/3d/d8/7b3dd86388a3932c98bc05f8e8eb89e5.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-008',
    category: 'bags',
    brand: 'MIUMIU',
    price: 21990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/0d/d6/fd/0dd6fd9d985d5c21af2bea5c8712b2d2.jpg',
      'https://i.pinimg.com/736x/24/90/93/249093f92ba58b29e6ddf9e4a63096e9.jpg',
      'https://i.pinimg.com/1200x/e3/9d/e0/e39de05387d93a0cf4e7f7e98d9facff.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-009',
    category: 'bags',
    brand: 'MIUMIU',
    price: 29990,
    badge: 'Popular',
    images: [
      'https://cdn.imweb.me/thumbnail/20251217/a962233ea36c1.jpeg',
      'https://cdn.imweb.me/thumbnail/20251210/654e26d73acfc.jpeg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-010',
    category: 'bags',
    brand: 'MIUMIU',
    price: 21990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/cc/99/89/cc9989704c4e453b30f6b4f1d7040116.jpg',
      'https://i.pinimg.com/736x/be/96/54/be9654f9fb1d704de2d3c7548f0057ec.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-011',
    category: 'bags',
    brand: 'MIUMIU',
    price: 24990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/3e/15/11/3e151126e4b36a25b797f173bece8698.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-012',
    category: 'bags',
    brand: 'MIUMIU',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/86/39/e1/8639e10c803025a629811439319d6058.jpg',
      'https://i.pinimg.com/736x/d1/72/b0/d172b08f2d5ad077ef8e612f3d42ef4f.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-013',
    category: 'bags',
    brand: 'MIUMIU',
    price: 19990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/e5/f6/e9/e5f6e9a9d34c187e435cf176723f8d7d.jpg',
      'https://i.pinimg.com/736x/63/25/ed/6325ed281093f79b33a447dcc511db6d.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-014',
    category: 'bags',
    brand: 'MIUMIU',
    price: 24990,
    badge: 'Popular',
    images: [
      'https://cdn.imweb.me/thumbnail/20251216/a6fc74731f108.jpeg',
      'https://cdn.imweb.me/thumbnail/20251216/f815f25a48943.jpeg',
      'https://cdn.imweb.me/thumbnail/20251216/5fed8809f4342.jpeg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-015',
    category: 'bags',
    brand: 'MIUMIU',
    price: 27990,
    badge: 'Popular',
    images: [
      'https://cdn.imweb.me/thumbnail/20251211/3f41828eda6d7.jpeg',
      'https://cdn.imweb.me/thumbnail/20251210/d3d85c01d1f9a.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/0c6cb141e1df8.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/5e196279b30b8.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/ba69b594cc53a.jpeg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-016',
    category: 'bags',
    brand: 'MIUMIU',
    price: 24990,
    badge: 'Popular',
    images: [
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/2cf8e5ccaa62f.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/fad89e2d0818d.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/daf2d82c77f56.jpeg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-017',
    category: 'bags',
    brand: 'MIUMIU',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/ac5837e3c212f.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/cfeaafb38a308.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/bf681c5f66822.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/853109118584f.jpeg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-018',
    category: 'bags',
    brand: 'MIUMIU',
    price: 20990,
    badge: 'Popular',
    images: [
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/ae1093aae445a.jpeg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-019',
    category: 'bags',
    brand: 'MIUMIU',
    price: 20990,
    badge: 'Popular',
    images: [
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/61c0e5d9ee491.jpeg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-020',
    category: 'bags',
    brand: 'MIUMIU',
    price: 20990,
    badge: 'Popular',
    images: [
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/83588b61d17de.jpeg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-021',
    category: 'bags',
    brand: 'MIUMIU',
    price: 26990,
    badge: 'Popular',
    images: [
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/91f86e22ea1ac.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/dba002f3fe883.jpeg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-022',
    category: 'bags',
    brand: 'MIUMIU',
    price: 26990,
    badge: 'Popular',
    images: [
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/3157d0d6ed5c6.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/e2c339c4e1fff.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/26c5d08510b88.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/738e40abe9fbf.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/455ce88446f55.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/21176c9141b7e.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/f1484327d9be9.jpeg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-023',
    category: 'bags',
    brand: 'MIUMIU',
    price: 26990,
    badge: 'Popular',
    images: [
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/4c47b77c2fcf0.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/c5009cb6f15b5.jpeg'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-024',
    category: 'bags',
    brand: 'MIUMIU',
    price: 26990,
    badge: 'Popular',
    images: [
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/9d06d11fb5833.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/909eba2ff2347.jpeg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MIU-025',
    category: 'bags',
    brand: 'MIUMIU',
    price: 26990,
    badge: 'Popular',
    images: [
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/64f09e6cde878.jpeg',
      'https://cdn-optimized.imweb.me/upload/S202509197480190126c4f/c8f474fcd65e6.jpeg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MK-001',
    category: 'bags',
    brand: 'Michael Kors',
    price: 23990,
    badge: 'Popular',
    images: [
      'http://fashionessential.in/wp-content/uploads/2024/10/16-2.jpg',
      'https://assets-jiocdn.ajio.com/medias/sys_master/root/20221117/dMsq/63766b0bf997ddfdbd825c20/-473Wx593H-410343204-001-MODEL.jpg',
      'https://assets-jiocdn.ajio.com/medias/sys_master/root/20221117/tCP6/63764766f997ddfdbd818a8d/-473Wx593H-410343204-230-MODEL4.jpg',
      'https://assets-jiocdn.ajio.com/medias/sys_master/root/20221117/HxFr/637668b1aeb269659c9a73ff/-473Wx593H-410343204-001-MODEL4.jpg',

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MK-002',
    category: 'bags',
    brand: 'Michael Kors',
    price: 28990,
    badge: 'Popular',
    images: [
      'https://michaelkors.scene7.com/is/image/MichaelKors/35S5G2ZT3T-0230_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/35S5G2ZT3T-0230_4?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/35S5S2ZT3T-1999_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/35S5S2ZT3T-1999_4?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/35S5S2ZT3T-0001_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/35S5S2ZT3T-0001_4?$pdplarge$'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MK-003',
    category: 'bags',
    brand: 'Michael Kors',
    price: 31990,
    badge: 'Popular',
    images: [
      'https://st-cdn.tsum.com/sig/3443944afb82ced65fd16c95152e4842/width/800/i/49/c6/47/e7/976c0949-276a-4303-9b3e-415ece2d703f.jpg',
      'https://st-cdn.tsum.com/sig/811b4d3b9a5a6650c32b3f88c69e9bfc/width/800/i/49/c6/47/e7/804cb845-7202-11f0-b80d-b4969139ea48.jpg',
      'https://img01.ztat.net/article/spp-media-p1/34ad2ba2da0b46caaa2d529f801540b0/e3eb44a4e0834ae7aba6d9eaf22a5641.jpg?imwidth=1800&filter=packshot',
      'https://img01.ztat.net/article/spp-media-p1/7789dbd1184d4f3a818131881c03065b/5d0712fa1f134dd69b0909e19af6a994.jpg?imwidth=762&filter=packshot',
      'https://img01.ztat.net/article/spp-media-p1/8a24ef708d584428bc2c6a5cfe09697e/926cf5532bd647a2852964d0afb3fc7d.jpg?imwidth=1800&filter=packshot'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MK-004',
    category: 'bags',
    brand: 'Michael Kors',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://img01.ztat.net/article/spp-media-p1/a4b320db1fbf46199a4c0a7099a2b220/5dac990438b24062b18ca041b4316cc2.jpg?imwidth=1800&filter=packshot',
      'https://img01.ztat.net/article/spp-media-p1/c82f081a57094597ac4f16131b1655d4/b1a605553409401a9a69fd88bd8f639a.jpg?imwidth=1800',
      'https://img01.ztat.net/article/spp-media-p1/227dc2f4d8e94015a54aeda497b6b119/6a08295e38c34b10b9ab3f8656bf7975.jpg?imwidth=1800&filter=packshot',
      'https://img01.ztat.net/article/spp-media-p1/82cc30d3e1ba40d4b47aa400ce056430/25424de8e1924e329eec7348468b9697.jpg?imwidth=1800'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MK-005',
    category: 'bags',
    brand: 'Michael Kors',
    price: 29990,
    badge: 'Popular',
    images: [
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5ANXS3S-0201_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5ANXS3S-1027_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5ANXS3S-0001_1?$pdplarge$'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },

  {
    id: 'MK-006',
    category: 'bags',
    brand: 'Michael Kors',
    price: 31990,
    badge: 'Popular',
    images: [
      'https://michaelkors.scene7.com/is/image/MichaelKors/30S3GR0T3B-1546_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30S3GR0T3B-1546_4?$pdplarge$',
      'https://cdn.mall.adeptmind.ai/http%253A%252F%252Fmichaelkors.scene7.com%252Fis%252Fimage%252FMichaelKors%252F30S3GR0T3B-1335_IS%253F%2524productMain%2524_large.webp',

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MK-007',
    category: 'bags',
    brand: 'Michael Kors',
    price: 33990,
    badge: 'Popular',
    images: [
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5SNXT3L-0001_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5SNXT3L-9123_1?$pdplarge$'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },

  {
    id: 'MK-008',
    category: 'bags',
    brand: 'Michael Kors',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://michaelkors.scene7.com/is/image/MichaelKors/30S2G7HL3L-0230_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30S2G7HL3L-0230_4?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30S2G7HL3B-1546_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30S2G7HL3B-1546_4?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30S2G7HL3B-1335_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30S2G7HL3B-1335_4?$pdplarge$'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MK-009',
    category: 'bags',
    brand: 'Michael Kors',
    price: 24990,
    badge: 'Popular',
    images: [
      'https://michaelkors.scene7.com/is/image/MichaelKors/32S5GYTC5B-1546_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/32S5GYTC5B-1546_4?$pdplarge$',
      'https://cdn-images.farfetch-contents.com/28/45/51/20/28455120_57820991_1000.jpg',
      'https://cdn-images.farfetch-contents.com/28/45/51/20/28455120_57821093_1000.jpg',
      'https://michaelkors.scene7.com/is/image/MichaelKors/32S5SYTC5V-2277_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/32S5SYTC5V-2277_4?$pdplarge$'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MK-010',
    category: 'bags',
    brand: 'Michael Kors',
    price: 28990,
    badge: 'Popular',
    images: [
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F3G8KT7B-2137_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F3G8KT7B-2137_4?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F3G8KT7L-9123_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F3G8KT7L-9123_4?$pdplarge$',
      'https://a.lmcdn.ru/img600x866/M/P/MP002XW14PPH_21541282_1_v1_2x.jpg',
      'https://a.lmcdn.ru/img600x866/M/P/MP002XW14PPH_21543785_9_v2_2x.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MK-011',
    category: 'bags',
    brand: 'Michael Kors',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://assets-jiocdn.ajio.com/medias/sys_master/root/20201228/lBQi/5fe9f568f997dd8c17b1ad64/-473Wx593H-410276118-vanillaacrn-MODEL.jpg',
      'https://assets-jiocdn.ajio.com/medias/sys_master/root/20201228/Xaqi/5fe9fd4aaeb2694fd301a683/-473Wx593H-410276118-vanillaacrn-MODEL2.jpg',
      'https://assets-jiocdn.ajio.com/medias/sys_master/root/20201228/z1se/5fe9f5e0aeb2694fd3018ae4/-473Wx593H-410276118-brnacorn-MODEL.jpg',
      'https://assets-jiocdn.ajio.com/medias/sys_master/root/20201228/XnR3/5fea010bf997dd8c17b1e63a/-473Wx593H-410276118-brnacorn-MODEL2.jpg',
      'https://assets-jiocdn.ajio.com/medias/sys_master/root/20210622/jXqq/60d1ff1df997ddb312e912b4/-473Wx593H-410276118-266-MODEL.jpg',
      'https://assets-jiocdn.ajio.com/medias/sys_master/root/20210622/uOCA/60d1fffdf997ddb312e915de/-473Wx593H-410276118-266-MODEL2.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'MK-012',
    category: 'bags',
    brand: 'Michael Kors',
    price: 33990,
    badge: 'Popular',
    images: [
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5SU5T7T-0001_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5SU5T7T-0001_3?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5SU5T7T-0001_4?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5SU5T7T-1938_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5SU5T7T-1938_4?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5GU5T7T-1805_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5GU5T7T-1805_4?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5GU5T7T-0230_1?$pdplarge$',
      'https://michaelkors.scene7.com/is/image/MichaelKors/30F5GU5T7T-0230_4?$pdplarge$',

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LV-001',
    category: 'bags',
    brand: 'Louis Vuitton',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://nz.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-boulogne-pm--M12930_PM2_Front%20view.png?wid=2400&hei=2400',
      'https://nz.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-boulogne-pm--M12930_PM1_Side%20view.png?wid=2400&hei=2400',
      'https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-boulogne-pm--M12930_PM1_Back%20view.png?wid=2400&hei=2400'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LV-002',
    category: 'bags',
    brand: 'Louis Vuitton',
    price: 31990,
    badge: 'Popular',
    images: [
      'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-hobo-mm--M15209_PM2_Front%20view.png?wid=2400&hei=2400',
      'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-low-key-hobo-mm--M24856_PM2_Front%20view.png?wid=2400&hei=2400',
      'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-low-key-hobo-mm--M24974_PM2_Front%20view.png?wid=2400&hei=2400'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LV-003',
    category: 'bags',
    brand: 'Louis Vuitton',
    price: 20990,
    badge: 'Popular',
    images: [
      'https://nz.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-twist-mm--M21113_PM2_Front%20view.png?wid=2400&hei=2400',
      'https://nz.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-twist-mm--M21116_PM2_Front%20view.png?wid=2400&hei=2400',
      'https://nz.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-twist-mm--M21112_PM2_Front%20view.png?wid=2400&hei=2400'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LV-004',
    category: 'bags',
    brand: 'Louis Vuitton',
    price: 27990,
    badge: 'Popular',
    images: [
      'https://www.fashionphile.com/cdn/shop/files/8d78bd50815c38438fe78d692498fbb5.jpg?v=1764960101&width=1426',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LOEWE-001',
    category: 'bags',
    brand: 'Loewe',
    price: 26990,
    badge: 'Popular',
    images: [
      'https://durra-store.com/wp-content/uploads/2024/10/IMG_1448-860x857.jpg',
      'https://durra-store.com/wp-content/uploads/2024/10/IMG_1439-860x857.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LOEWE-002',
    category: 'bags',
    brand: 'Loewe',
    price: 24990,
    badge: 'Popular',
    images: [
      'https://cdn-images.farfetch-contents.com/27/04/22/69/27042269_57047279_1000.jpg',
      'https://cdn-images.farfetch-contents.com/27/04/22/69/27042269_57047277_1000.jpg',
      'https://img.vitkac.com/uploads/product_thumb/TORBA%20A538HHSX01%200-BLACK/lg/1.png',
      'https://img.vitkac.com/uploads/product_thumb/TORBA%20A538HHSX01%200-BLACK/lg/2.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LOEWE-003',
    category: 'bags',
    brand: 'Loewe',
    price: 24990,
    badge: 'Popular',
    images: [
      'https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_790/01/nm_4842104_100244_m',
      'https://walf.co/wp-content/uploads/2025/02/LOEWE-Flamenco-Leather-Messenger-Bag-green-1.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LOEWE-004',
    category: 'bags',
    brand: 'Loewe',
    price: 25990,
    badge: 'Popular',
    images: [
      'https://theclosetonlineshop.com/cdn/shop/files/Loewebag20288-3_1.jpg?v=1750161804&width=1445',
      'https://cdn.clothbase.com/uploads/cd2d6ada-acb8-4560-a2cc-044e5b982999/image.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LOEWE-005',
    category: 'bags',
    brand: 'Loewe',
    price: 22990,
    badge: 'Popular',
    images: [
      'https://cdn.clothbase.com/uploads/6f474be2-90e6-4829-b8f4-4891724073ee/P00755490.jpg',
      'https://cdn.clothbase.com/uploads/a4bd9482-4c4e-4d53-9ab1-e5bd15a44e5c/P00755490_d1.jpg',
      'https://cdn.clothbase.com/uploads/24886b1f-4421-4d10-bef8-5f7b66ed16dc/P00755490_d3.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LOEWE-006',
    category: 'bags',
    brand: 'Loewe',
    price: 19990,
    badge: 'Popular',
    images: [
      'https://static.cdn.oskelly.ru/product/1133281/item-966041a5-9a5e-4a98-a8e9-adad3aa651ad.jpg.webp',
      'https://static.cdn.oskelly.ru/product/1133281/item-a966abe2-e8c0-463d-bd5d-db80b13be31a.jpg.webp',
      'https://www.retyche.com/cdn/shop/files/RET_ECOMM_10.08.20241311.jpg?v=1728487446',

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LOEWE-007',
    category: 'bags',
    brand: 'Loewe',
    price: 24990,
    badge: 'Popular',
    images: [
      'https://www.loewe.com/dw/image/v2/BBPC_PRD/on/demandware.static/-/Sites-Loewe_master/default/dwa709d84a/images_rd/A411FC2X73/A411FC2X73-1100/A411FC2X73_1100_1F.jpg?sw=1200&q=100',

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LOEWE-008',
    category: 'bags',
    brand: 'Loewe',
    price: 21990,
    badge: 'Popular',
    images: [
      'https://www.loewe.com/dw/image/v2/BBPC_PRD/on/demandware.static/-/Sites-Loewe_master/default/dwca31ef16/images_rd/337.12.P57/337.12.P57-1100/337.12.P57_1100_1F.jpg?sw=1200&q=100',
      'https://www.loewe.com/dw/image/v2/BBPC_PRD/on/demandware.static/-/Sites-Loewe_master/default/dwe6d1a71a/images_rd/337.12.P57/337.12.P57-1100/337.12.P57_1100_1O.jpg?sw=1200&q=100'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'LOEWE-009',
    category: 'bags',
    brand: 'Loewe',
    price: 22580,
    badge: 'Popular',
    images: [
      'https://static.dropp.market/db7ecf23-9425-4072-885c-657b52a740f9_1_500.webp',
      'https://static.dropp.market/db7ecf23-9425-4072-885c-657b52a740f9_2_500.webp'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'DIOR-001',
    category: 'bags',
    brand: 'Dior',
    price: 19870,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/e6/62/c8/e662c8c6a10714871377613e7c4c1ee7.jpg',
      'https://i.pinimg.com/1200x/e0/fa/b5/e0fab56da3ee90ffa06092998aa2e1a7.jpg',
      'https://i.pinimg.com/1200x/c8/53/67/c8536746c089e9ba347c60dc514c1fef.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'DIOR-002',
    category: 'bags',
    brand: 'Dior',
    price: 18990,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/736x/2e/cc/ec/2eccec7ed89ca53dd2cdfec8430e8bdb.jpg',
      'https://i.pinimg.com/1200x/9c/df/0c/9cdf0cf9669645861213f5c63437d1b0.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'DIOR-003',
    category: 'bags',
    brand: 'Dior',
    price: 26990,
    badge: 'Popular',
    images: [
      'https://assets.christiandior.com/is/image/diorprod/1ESPO322LLGH00N_SBG_E01-3?$r9x10_raw$&crop=0,0,4000,5000&wid=1536&hei=1661&scale=0.8303&bfc=on&qlt=85',
      'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_3_LOOK_073_E19?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=1536&hei=1661&scale=0.8303&bfc=on&qlt=85',
      'https://www.highsnobiety.com/static-assets/dato/1715362383-dior-gravity-leather-bags-factory-bts-3.jpg?fp-x=0.5&fp-y=0.5&fit=crop&auto=compress%2Cformat&cs=srgb&ar=3000%3A1999&w=2880'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'DIOR-004',
    category: 'bags',
    brand: 'Dior',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://i.3dmodels.org/uploads/preorder/dior_30_montaigne_handbag/dior_30_montaigne_handbag_1000_0001.jpg',
      'https://bags-boutique.com/image/cache/webp/catalog/New%20folder/H10903/0-960x1280.webp'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'DIOR-005',
    category: 'bags',
    brand: 'Dior',
    price: 22990,
    badge: 'Popular',
    images: [
      'https://assets.christiandior.com/is/image/diorprod/S5232UHAGM900_E01-2?$default_GHC$&crop=327,157,1363,1690&wid=1536&hei=1661&scale=0.7265&bfc=on&qlt=85',
      'https://assets.christiandior.com/is/image/diorprod/S2381UTZQM928_E01?$default_GHC$&crop=304,156,1394,1692&wid=1536&hei=1661&scale=0.7265&bfc=on&qlt=85'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'DIOR-006',
    category: 'bags',
    brand: 'Dior',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://assets.christiandior.com/is/image/diorprod/M9334UTZQM928_SBG_E01?$r9x10_raw$&crop=0,0,4000,5000&wid=1536&hei=1661&scale=0.8303&bfc=on&qlt=85',
      'https://assets.christiandior.com/is/image/diorprod/M9334UTZQM928_SBG_E03?$r9x10_raw$&crop=0,0,4000,5000&wid=1536&hei=1661&scale=0.8303&bfc=on&qlt=85'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'DG-001',
    category: 'bags',
    brand: 'Dolce&Gabbana',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwac0216f9/images/zoom/BB7782B7321_8Z093_0.jpg',
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwe8357d62/images/zoom/BB7782B7321_8I399_0.jpg',
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw2dd50bf2/images/zoom/BB7782B7321_80076_0.jpg',
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwc3718008/images/zoom/BB7782B7321_80346_0.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'DG-002',
    category: 'bags',
    brand: 'Dolce&Gabbana',
    price: 26990,
    badge: 'Popular',
    images: [
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw82a31687/images/zoom/BB7337AW576_80441_0.jpg',
      'https://cdn-images.farfetch-contents.com/19/39/03/22/19390322_45254502_1000.jpg',
      'https://cdn-images.farfetch-contents.com/18/74/15/98/18741598_41033216_1000.jpg',
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw311d8680/images/zoom/BB7337AW576_80441_1.jpg',
      'https://cdn-images.farfetch-contents.com/18/74/15/98/18741598_41031528_1000.jpg',
      'https://cdn-images.farfetch-contents.com/19/39/03/22/19390322_45254501_1000.jpg',

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'DG-003',
    category: 'bags',
    brand: 'Dolce&Gabbana',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwac0216f9/images/zoom/BB7782B7321_8Z093_0.jpg',
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwe8357d62/images/zoom/BB7782B7321_8I399_0.jpg',
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw2dd50bf2/images/zoom/BB7782B7321_80076_0.jpg',
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwc3718008/images/zoom/BB7782B7321_80346_0.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'DG-004',
    category: 'bags',
    brand: 'Dolce&Gabbana',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwce8058f0/images/zoom/BB7598AW576_80999_0.jpg',
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwc15f7a2a/images/zoom/BB7598AW576_80999_1.jpg',
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwd3b720ee/images/zoom/BB7598AW576_80999_2.jpg',
      'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw35168cf2/images/zoom/BB7598AW576_80999_5.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'CH-001',
    category: 'bags',
    brand: 'Coach',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://cdn.poizon.com/pro-img/cut-img/20260316/de9e3c26e3314fcebce0ce435ca8e797.jpg?x-oss-process=image/format,webp',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'CH-002',
    category: 'bags',
    brand: 'Coach',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://www.secretsales.com/cdn-cgi/image/width=1280,height=1600,fit=contain,format=auto/https://media.secretsales.com/catalog/product/8/3/83d91788d09b4d2eb094edd3987b4866.jpg',
      'https://www.secretsales.com/cdn-cgi/image/width=1280,height=1600,fit=contain,format=auto/https://media.secretsales.com/catalog/product/a/c/ac546679959c4ff29aa6986d2c22b3a2.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'CH-003',
    category: 'bags',
    brand: 'Coach',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://coach.scene7.com/is/image/Coach/cw426_imxaq_a0?$desktopProduct$',
      'https://coach.scene7.com/is/image/Coach/cw426_imqrx_a0?$desktopProduct$',
      'https://coach.scene7.com/is/image/Coach/cw426_svpwh_a0?$desktopProduct$',
      'https://coach.scene7.com/is/image/Coach/cw426_imxu5_a0?$desktopProduct$'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'CH-004',
    category: 'bags',
    brand: 'Coach',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://a.lmcdn.ru/img600x866/M/P/MP002XW03BSI_12377703_1_v3.jpg',
      'https://a.lmcdn.ru/img600x866/M/P/MP002XW03BSI_12384269_9_v1_2x.jpg'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'CH-005',
    category: 'bags',
    brand: 'Coach',
    price: 20990,
    badge: 'Popular',
    images: [
      'https://s7d2.scene7.com/is/image/Coach/ch815_lhpj6_a0?fmt=jpeg&wid=1800&hei=1800',
      'https://s7d2.scene7.com/is/image/Coach/ch815_lhpj6_a3?fmt=jpeg&wid=1800&hei=1800',
      'https://s7d2.scene7.com/is/image/Coach/ch815_lhpj6_a92?fmt=jpeg&wid=1800&hei=1800'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'CH-006',
    category: 'bags',
    brand: 'Coach',
    price: 22990,
    badge: 'Popular',
    images: [
      'https://www.pinkorchard.com/cdn/shop/files/Coach-Payton-Hobo-Bag-In-Light-Violet-CE619-sviz-front_1800x1800.jpg?v=1745907220',
      'https://www.pinkorchard.com/cdn/shop/files/Coach-Payton-Hobo-Bag-In-Light-Violet-CE619-sviz-model_1800x1800.jpg?v=1745907220',
      'https://resources.cdn-kaspi.kz/img/m/p/h7a/h6a/83045731434526.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h22/h91/83045732155422.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hf3/h69/83045733990430.jpg?format=gallery-large'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'C&K-001',
    category: 'bags',
    brand: 'Charles & Keith',
    price: 22990,
    badge: 'Popular',
    images: [
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw25e8e9cb/images/hi-res/2025-L6-CK2-20782708-1-U4-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwd93c703b/images/hi-res/2025-L6-CK2-20782708-J8-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw76f2120a/images/hi-res/2025-L6-CK2-20782708-2-U5-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw1ee331eb/images/hi-res/2025-L6-CK2-20782708-J8-2.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwfd3d3ae3/images/hi-res/2025-L6-CK2-20782708-1-U4-2.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwc3f5a9be/images/hi-res/2025-L6-CK2-20782708-2-U5-2.jpg?sw=756&sh=1008'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'C&K-002',
    category: 'bags',
    brand: 'Charles & Keith',
    price: 25990,
    badge: 'Popular',
    images: [
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw3560dd56/images/hi-res/2024-L3-CK2-50782360-47-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw8eb187a6/images/hi-res/2025-L7-CK2-50782360-N9-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.co.id/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-id-products/default/dw82bea870/images/hi-res/2023-L2-CK2-50782047-5-68-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.co.id/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-id-products/default/dwffe81619/images/hi-res/2023-L2-CK2-50782047-5-68-3.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw9595c849/images/hi-res/2024-L3-CK2-50782360-47-6.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw01a9d464/images/hi-res/2025-L7-CK2-50782360-N9-6.jpg?sw=756&sh=1008'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'C&K-003',
    category: 'bags',
    brand: 'Charles & Keith',
    price: 22990,
    badge: 'Popular',
    images: [
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw44fc9d03/images/hi-res/2021-L6-CK2-80781610-1-01-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw7335627d/images/hi-res/2021-L6-CK2-80781610-1-01-2.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw07fcef35/images/hi-res/2021-L6-CK2-80781610-1-01-7.jpg?sw=756&sh=1008'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'C&K-004',
    category: 'bags',
    brand: 'Charles & Keith',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://www.charleskeith.co.th/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-th-products/default/dwc0bfc5a3/images/hi-res/2026-L2-CK2-10271696-01-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.co.th/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-th-products/default/dw786d51d4/images/hi-res/2026-L2-CK2-10271696-N5-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.co.th/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-th-products/default/dw81923bc9/images/hi-res/2026-L2-CK2-10271696-1-47-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.co.th/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-th-products/default/dw0bed2523/images/hi-res/2026-L2-CK2-10271696-01-6.jpg?sw=756&sh=1008',
      'https://www.charleskeith.co.th/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-th-products/default/dw3fb294aa/images/hi-res/2026-L2-CK2-10271696-01-3.jpg?sw=756&sh=1008'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'C&K-005',
    category: 'bags',
    brand: 'Charles & Keith',
    price: 24990,
    badge: 'Popular',
    images: [
      'https://www.charleskeith.co.th/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-th-products/default/dw95b35c77/images/hi-res/2025-L7-CK2-20671821-1-S6-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.co.th/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-th-products/default/dw55d23f5d/images/hi-res/2025-L7-CK2-20671821-1-S6-3.jpg?sw=756&sh=1008',
      'https://www.charleskeith.co.th/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-th-products/default/dw7703e982/images/hi-res/2025-L7-CK2-20671821-1-S6-7.jpg?sw=756&sh=1008',
      'https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/n/31/08e4398f-3fbb-47f5-a029-b930ebbd26e7.png'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'C&K-006',
    category: 'bags',
    brand: 'Charles & Keith',
    price: 22990,
    badge: 'Popular',
    images: [
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw00b351c9/images/hi-res/2025-L3-SL2-40681199-01-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw2f33f8d7/images/hi-res/2025-L3-SL2-40681199-47-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwf1670a32/images/hi-res/2025-L3-SL2-40681199-Q6-1.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw1c7a8500/images/hi-res/2025-L3-SL2-40681199-01-2.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwa54723a3/images/hi-res/2025-L3-SL2-40681199-47-2.jpg?sw=756&sh=1008',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw8dc00bcb/images/hi-res/2025-L3-SL2-40681199-Q6-2.jpg?sw=756&sh=1008'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'CHL-001',
    category: 'bags',
    brand: 'Chanel',
    price: 20990,
    badge: 'Popular',
    images: [
      'https://www.chanel.com/images/as///f_auto,q_auto:good,dpr_1.1/w_1600/-77887959.jpg',
      'https://backend.lombard-perspectiva.ru/storage/images/accessories/assets/50944fe9407de1a7d5d3cf100835398f_xxl.webp'

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'CHL-002',
    category: 'bags',
    brand: 'Chanel',
    price: 20990,
    badge: 'Popular',
    images: [
      'https://zfloos-production-storage.s3.eu-central-1.amazonaws.com/public/upload/companies/3478/products/0175434937168913f3b0e60d9_40604107.jpg',
      'https://scontent.fpwq4-1.fna.fbcdn.net/v/t39.30808-6/595441694_2367993490330595_6776387896572065966_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=TLxZUTSC_DAQ7kNvwFA5gmL&_nc_oc=AdpiNKsnCGMwOHEcURB0k2Cy9zixssdqUBxCukyZpl4m5dM8eltmJT7zodMNtQGLeVc&_nc_zt=23&_nc_ht=scontent.fpwq4-1.fna&_nc_gid=U8vVV_tD3JTpWzw0bRH9KQ&_nc_ss=7a389&oh=00_Af1JiFBdY1FDsfZ9FN3qbdyksEtpVlvvJkGXE7pBP9K94A&oe=69D40AB7',
      'https://scontent.fpwq4-1.fna.fbcdn.net/v/t39.30808-6/594424619_2367993766997234_1282873475794898332_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=5HLozmFf79sQ7kNvwGDKRhT&_nc_oc=AdouPOt667Z-rzvbxDcC7LuwjD2Giicwnx6WwyTzP5F3GU0cCGtnTa5MrouX34lMIIg&_nc_zt=23&_nc_ht=scontent.fpwq4-1.fna&_nc_gid=TgyZDiscddrs8pEzQum8zA&_nc_ss=7a389&oh=00_Af0RRsFVy9ggfMpJjo1n5A_Li0vpeebK2TaGPMHwP35J_A&oe=69D421D4'
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'CHL-003',
    category: 'bags',
    brand: 'Chanel',
    price: 22990,
    badge: 'Popular',
    images: [
      'https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/s/30/23dce5c9-c90f-42fe-9e1a-f8befddad380.JPG',
      'https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/s/30/16c1716c-79f6-4895-9586-525848ed6779.JPG',

    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'CHL-004',
    category: 'bags',
    brand: 'Chanel',
    price: 23990,
    badge: 'Popular',
    images: [
      'https://www.arrowhypereplica.com/uploads/176506/cart/resources/20251021/09285236-0CA5-2E2B-4A6D-D2A8783D7A63.jpg?x-oss-process=image/resize,m_lfit,w_1000',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'GUCCI-001',
    category: 'bags',
    brand: 'Gucci',
    price: 20990,
    badge: 'Popular',
    images: [
      'https://media.ppassage.com/media/webp/large/gucci_795113-KHNKG_0_67438.webp',
      'https://keeksdesignerhandbags.com/cdn/shop/files/1760113663121U7UNXAR26HGXUC3KE3LL_1800x1800.jpg?v=1774287245',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
{
    id: 'GUCCI-002',
    category: 'bags',
    brand: 'Gucci',
    price: 22990,
    badge: 'Popular',
    images: [
      'https://storage.yandexcloud.net/cdn-prod.viled.kz/v3/converted/compressed/383022QxkrC.webp',
      'https://storage.yandexcloud.net/cdn-prod.viled.kz/v3/converted/compressed/383022kIldj.webp',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
{
    id: 'GUCCI-003',
    category: 'bags',
    brand: 'Gucci',
    price: 24990,
    badge: 'Popular',
    images: [
      'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1741110386/837466_AAEAO_2718_001_093_0000_Light-gucci-softbit-maxi-shoulder-bag.jpg',
      'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1741110380/837466_AAEAO_1000_001_093_0000_Light-gucci-softbit-maxi-shoulder-bag.jpg',
    ],
    description: 'Компактная модель для городского luxury-образа.'
  },
  {
    id: 'SMEG-001',
    name: 'Smeg Kettle 50s',
    category: 'smeg',
    brand: 'Smeg',
    price: 179000,
    badge: 'Gift idea',
    images: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Чайник в ретро-эстетике для красивой кухни.'
  },
  {
    id: 'SMEG-002',
    name: 'Smeg Toaster',
    category: 'smeg',
    brand: 'Smeg',
    price: 159000,
    badge: 'Top pick',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Тостер с винтажной подачей и фирменной палитрой.'
  },
  {
    id: 'DYSON-001',
    name: 'Dyson Airwrap Complete',
    category: 'dyson',
    brand: 'Dyson',
    price: 335000,
    badge: 'Top',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Мультистайлер для премиальной укладки дома.'
  },
  {
    id: 'DYSON-002',
    name: 'Dyson Supersonic',
    category: 'dyson',
    brand: 'Dyson',
    price: 255000,
    badge: 'Best seller',
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Фен с мощным потоком воздуха и минималистичным дизайном.'
  },
  {
    id: 'JW-001',
    name: 'Diamond Ring',
    category: 'jewelry',
    brand: 'Luxury Jewelry',
    price: 520000,
    badge: 'Luxury',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588444650733-d53a58f8bb8b?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Кольцо с крупным камнем в изящной классической посадке.'
  },
  {
    id: 'JW-002',
    name: 'Pear Drop Earrings',
    category: 'jewelry',
    brand: 'Luxury Jewelry',
    price: 198000,
    badge: 'Gift',
    images: [
      'https://images.unsplash.com/photo-1588444650733-d53a58f8bb8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Серьги-капли для вечернего образа и подарка.'
  },
  {
    id: 'ACC-001',
    name: 'Cartier Sunglasses',
    category: 'accessories',
    brand: 'Cartier',
    price: 145000,
    badge: 'Luxury',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Солнцезащитные очки с дорогой и чистой подачей.'
  },
  {
    id: 'ACC-002',
    name: 'Rolex Style Watch',
    category: 'accessories',
    brand: 'Rolex',
    price: 610000,
    badge: 'Icon',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Часы как статусный аксессуар для повседневного образа.'
  },
  {
    id: 'VAC-001',
    name: 'Narwal Freo Z10',
    category: 'vacuum',
    brand: 'Narwal',
    price: 520000,
    badge: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Премиальный робот-пылесос с самоочисткой.'
  },
  {
    id: 'VAC-002',
    name: 'Robot Vacuum X Pro',
    category: 'vacuum',
    brand: 'Robot',
    price: 348000,
    badge: 'Smart',
    images: [
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Умный помощник для сухой и влажной уборки.'
  },
  {
    id: 'BABY-001',
    name: 'Ocarro Stroller',
    category: 'baby',
    brand: 'Mamas & Papas',
    price: 640000,
    badge: 'For family',
    images: [
      'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Премиальная коляска для города и путешествий.'
  },
  {
    id: 'BABY-002',
    name: 'Strada Travel Set',
    category: 'baby',
    brand: 'Mamas & Papas',
    price: 715000,
    badge: 'Travel',
    images: [
      'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Комплект для прогулок и поездок с ребёнком.'
  },
  {
    id: 'CR-001',
    name: 'Baby Set 5 pcs',
    category: 'carters',
    brand: 'Carter’s',
    price: 29000,
    badge: 'Soft',
    images: [
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Набор мягкой одежды для малыша на каждый день.'
  },
  {
    id: 'CR-002',
    name: 'Sleep & Play Pack',
    category: 'carters',
    brand: 'Carter’s',
    price: 24000,
    badge: 'Everyday',
    images: [
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Набор комбинезонов для дома и прогулок.'
  }
].map(item => ({
  ...item,
  price: Math.max(0, item.price - 5000)
}));
