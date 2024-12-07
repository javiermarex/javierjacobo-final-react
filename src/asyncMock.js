const products = [
  {
    id: "1",
    name: "Cemento Holcim",
    price: 500,
    category: "construccion",
    img: "/src/assets/cemento.jpg",
    stock: 100,
    description: "Cemento Holcim ideal para todo tipo de obras de construcción.",
    },
    {
      id: "2",
      name: "Bolsón de Arena",
      price: 300,
      category: "aridos",
      img: "/src/assets/arena.jpg",
      stock: 150,
      description: "Ladrillos comunes ideales para la construcción de paredes y estructuras.",
    },
    {
      id: "3",
      name: "Balde Plástico",
      price: 700,
      category: "herramientas",
      img: "/src/assets/balde-plastico.jpg",
      stock: 50,
      description: "Varilla de acero de alta resistencia para refuerzos estructurales.",
    },
    {
      id: "4",
      name: "Espuma Aluminizada",
      price: 1000,
      category: "aislantes",
      img: "/src/assets/espuma-aluminizada.jpg",
      stock: 30,
      description: "Hormigón elaborado de calidad para cimentaciones y estructuras.",
    },
    {
      id: "5",
      name: "Espuma Azul",
      price: 150,
      category: "aislantes",
      img: "/src/assets/espuma-azul.jpg",
      stock: 200,
      description: "Tierra fertilizada para jardines, huertas y obras de paisajismo.",
    },
    {
      id: "6",
      name: "Espuma Sola",
      price: 250,
      category: "aislantes",
      img: "/src/assets/espuma-sola.jpg",
      stock: 300,
      description: "Arena de construcción para mezclas de cemento, pisos y otras obras.",
    },
    {
      id: "7",
      name: "Hierro del 10",
      price: 400,
      category: "construccion",
      img: "/src/assets/hierro-10.jpg",
      stock: 120,
      description: "Grava de construcción ideal para drenajes, caminos y pavimentación.",
    },
    {
      id: "8",
      name: "Ladrillo Común",
      price: 450,
      category: "construccion",
      img: "/src/assets/ladrillo-comun.jpg",
      stock: 50,
      description: "Pintura exterior para darle color y protección a las paredes de la construcción.",
    },
    {
      id: "9",
      name: "Ladrillo Hueco",
      price: 600,
      category: "construccion",
      img: "/src/assets/ladrillo-hueco.jpg",
      stock: 70,
      description: "Madera para construcción de estructuras, techos y carpintería en obras.",
    },
    {id: "10",
    name: "Llana Metálica",
    price: 250,
    category: "herramientas",
    img: "/src/assets/llana-metalica.jpg",
    stock: 100,
    description: "Cemento Portland de alta resistencia y durabilidad, ideal para todo tipo de construcciones."
    },
    {
      id: "11",
      name: "Malla Sima",
      price: 800,
      category: "construccion",
      img: "/src/assets/malla-sima.jpg",
      stock: 150,
      description: "Ladrillos de alta calidad para construcción de paredes resistentes y duraderas."
    },
    {
      id: "12",
      name: "Masilla",
      price: 2000,
      category: "construccion",
      img: "/src/assets/masilla.jpg",
      stock: 50,
      description: "Vigas de acero para soportes estructurales, disponibles en diversas medidas."
    },
    {
      id: "13",
      name: "Membrana Líquida",
      price: 150,
      category: "aislantes",
      img: "/src/assets/membrana-liquida.jpg",
      stock: 200,
      description: "Varillas de hierro de alta resistencia para la construcción de estructuras de concreto."
    },
    {
      id: "14",
      name: "Pala Ancha",
      price: 100,
      category: "herramientas",
      img: "/src/assets/pala-ancha.jpg",
      stock: 500,
      description: "Arena de río para construcción, ideal para la mezcla de morteros y concretos."
    },
    {
      id: "15",
      name: "Bolsón de Piedras",
      price: 350,
      category: "aridos",
      img: "/src/assets/piedra.jpg",
      stock: 300,
      description: "Grava de alta calidad para el uso en la fabricación de concreto y cimentaciones."
    },
    {
      id: "16",
      name: "Pintura de Exterior",
      price: 500,
      category: "pinturas",
      img: "/src/assets/pintura-exterior.jpg",
      stock: 120,
      description: "Madera contrachapada de calidad superior para uso en carpintería y construcción."
    },
    {
      id: "17",
      name: "Tierra Fertil",
      price: 220,
      category: "aridos",
      img: "/src/assets/tierra-fertil.jpg",
      stock: 250,
      description: "Yeso de alta pureza para revestimientos interiores y acabados en obras de construcción."
    },
    {
      id: "18",
      name: "Tirante de Pino",
      price: 180,
      category: "construccion",
      img: "/src/assets/tirante.jpg",
      stock: 200,
      description: "Pintura acrílica de alta calidad para exteriores e interiores, con excelente cobertura."
    },
  ];
  
  
  // obtener todos los productos
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1500);
    });
  };
  
  // obtener los productos por categoria
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod)=> prod.category === categoryId));
      }, 1500);
    });
  }
  
  // obtener un solo producto por id
   export const getProductByID = (productId) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find((prod) => prod.id === productId));
        }, 1500);
      });
  };
  