const featuredProducts = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 120.00,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371570/02/sv01/fnd/IND/fmt/png/RS-X3-Puzzle-Unisex-Shoes"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 150.30,
    image: "https://m.media-amazon.com/images/I/41uMTGRMgYL._AC_UY1000_.jpg"
  },
    {
    id: 3,
    name: "Nike Air Force 1",
    price: 140.45,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/20547d52-3e1b-4c3d-b917-f0d7e0eb8bdf/custom-nike-air-force-1-low-by-you-shoes.png"
  },
    {
    id: 4,
    name: "Adidas NMD R1",
    price: 230.54,
    image: "https://m.media-amazon.com/images/I/51ogZpituaL._AC_UY1000_.jpg"
  },
    {
    id: 5,
    name: "Puma Suede XXI",
    price: 90.43,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv03/fnd/IND/fmt/png/Suede-Classic-XXI-Sneakers"
  },
    {
    id: 6,
    name: "Nike SB Dunk",
    price: 110.10,
    image: "https://www.superkicks.in/cdn/shop/files/1_0f042c7f-923b-4615-b0b2-09b9b68a9671.jpg?v=1746130640&width=1946"
  },
    {
    id: 7,
    name: "Reebok Club C 85",
    price: 130.00,
    image: "https://cdn.shopify.com/s/files/1/0862/7834/0912/files/100209021_SLC_eCom-tif.png?v=1736435432"
  },
    {
    id: 8,
    name: "Puma Future Rider",
    price: 120.50,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/397706/02/sv01/fnd/IND/fmt/png/Road-Rider-Pace-Setter-Sneakers"
  }
];

const newProducts = [
  {
    id: 9,
    name: "Nike Zoom Vemero 5",
    price: 110.50,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/24fd3181-aec3-4c83-85d1-c79960081cd1/NIKE+ZOOM+VOMERO+5.png"
  },
  {
    id: 10,
    name: "New Balance WRPD8",
    price: 75.45,
    image: "https://media.finishline.com/i/finishline/UWRPDHSD_320_P1"
  },
  {
    id: 11,
    name: "Puma RS-X Efekt",
    price: 90.00,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/390776/52/sv01/fnd/EEA/fmt/png/RS-X-Efekt-PRM-Sneakers"
  },
  {
    id: 12,
    name: "Puma Plexus Retro",
    price: 125.55,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/387325/01/sv01/fnd/KSA/fmt/png/"
  },
  {
    id: 13,
    name: "ASICS Gel-Kayano 30",
    price: 115.23,
    image: "https://gambol.in/cdn/shop/files/1_7e9cd5c5-0696-47ef-9d58-662f05e8902e.png?v=1719296388"
  },
  {
    id: 14,
    name: "Adidas Switch FWD",
    price: 120.50,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6fa68cdf3f614cbe8940962e5b994d79_9366/Switch_FWD_Running_Shoes_Black_ID1788_01_standard.jpg"
  },
  {
    id: 15,
    name: "Nike Motiva",
    price: 85.75,
    image: "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/1797b1ab-99e7-4391-ba94-899ebc9aecb9/interact-run-womens-road-running-shoes-H1pOJ6bG.png"
  },
  {
    id: 16,
    name: "New Balance 990v5",
    price: 68.68,
    image: "https://nb.scene7.com/is/image/NB/w990nv5_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600"
  }
];

const bestSellers =[
  {
    id: 17,
    name: "Nike Air Jordan 1",
    price: 100.50,
    image: "https://marketplace.mainstreet.co.in/cdn/shop/files/Artboard1_b5c676c5-1f5f-49ab-b410-a02b46b4bb40.png?v=1741785914&width=1946"
  },
  {
    id: 18,
    name: "Adidas Samba OG",
    price: 90.00,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4cdf2627c1a4438fa3cd68d15e23878c_9366/Samba_OG_Shoes_Black_IG1824_01_standard.jpg"
  },
  {
    id: 19,
    name: "Nike Air Max 90",
    price: 99.25,
    image: "https://www.superkicks.in/cdn/shop/products/am90blackgrey-1-1.jpg?v=1675958397"
  },
  {
    id: 20,
    name: "Converse Black Chuck",
    price: 95.70,
    image: "https://www.converse.in/media/catalog/product/1/6/162058_01_1.jpg"
  },
  {
    id: 21,
    name: "Reebok Classic Leather",
    price: 88.33,
    image: "https://www.superkicks.in/cdn/shop/files/4-2025-02-06T134218.322_fc2f77f4-f687-42a7-9e82-63395ec69ba3.jpg?v=1738829882"
  },
  {
    id: 22,
    name: "Vans OldSkool x Mule",
    price: 85.67,
    image: "https://www.coutie.com/cdn/shop/files/vans-old-skool-old-c-logo-custom-001_36409dac-ac8a-453a-aebf-f4e2794c7141.jpg?v=1721642771"
  },
  {
    id: 23,
    name: "Adidas Superstar",
    price: 90.00,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff60ebaf2553433694c97da7fed26528_9366/Superstar_II_Shoes_White_JI0124_01_standard.jpg"
  },
  {
    id: 24,
    name: "Nike Dunk Low",
    price: 115.55,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a6bacf33-44ca-432e-b307-4a25002d798f/NIKE+DUNK+LOW+RETRO+SE.png"
  }
]