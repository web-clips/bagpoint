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
    price: 235000,
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
    price: 195000,
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
    price: 185000,
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
    price: 420000,
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
    price: 490000,
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
    price: 350000,
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
    price: 265000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
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
    price: 298000,
    badge: 'Popular',
    images: [
      'https://i.pinimg.com/1200x/e5/f6/e9/e5f6e9a9d34c187e435cf176723f8d7d.jpg',
      'https://i.pinimg.com/736x/63/25/ed/6325ed281093f79b33a447dcc511db6d.jpg',
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
];
