const mockProducts = [
  {
    id: 1,
    name: "Espresso",
    price: 45000,
    description: "Cà phê Espresso đậm đà, được pha từ hạt cà phê Arabica cao cấp nhập khẩu từ Ý",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80",
    category: "hot-coffee",
    isNew: false,
    discount: 0.1
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 55000,
    description: "Sự kết hợp hoàn hảo giữa Espresso, sữa nóng và foam mịn màng",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    category: "hot-coffee",
    isNew: false,
    discount: 0.1
  },
  {
    id: 3,
    name: "Latte",
    price: 55000,
    description: "Cà phê Latte mềm mại với nhiều sữa, phù hợp cho người mới uống cà phê",
    image: "https://images.unsplash.com/photo-1570968992193-fd9536d196f2?auto=format&fit=crop&w=800&q=80",
    category: "hot-coffee",
    isNew: false,
    discount: 0.1
  },
  {
    id: 4,
    name: "Americano",
    price: 50000,
    description: "Espresso pha loãng với nước nóng, hương vị cà phê thuần khiết",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    category: "hot-coffee",
    isNew: false,
    discount: 0.3
  },
  {
    id: 5,
    name: "Mocha",
    price: 60000,
    description: "Sự kết hợp tuyệt vời giữa cà phê, chocolate và sữa tươi",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80",
    category: "hot-coffee",
    isNew: true,
    discount: 0.2
  },
  {
    id: 6,
    name: "Cold Brew",
    price: 65000,
    description: "Cà phê ủ lạnh 24h, êm mượt, ít acid, thơm ngọt tự nhiên",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    category: "cold-coffee",
    isNew: true,
    discount: 0.2
  },
  {
    id: 7,
    name: "Iced Latte",
    price: 60000,
    description: "Phiên bản lạnh của Latte cổ điển, hoàn hảo cho mùa hè",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b5c7fa69?auto=format&fit=crop&w=800&q=80",
    category: "cold-coffee",
    isNew: false,
    discount: 0.2
  },
  {
    id: 8,
    name: "Caramel Macchiato",
    price: 70000,
    description: "Latte thơm ngon với caramel ngọt ngào và vanilla",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80",
    category: "special",
    isNew: true,
    discount: 0.2
  }
];

export default mockProducts;