// products.ts
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sunshine Bouquet",
    price: "$29.99",
    image: "/flowers/flower1.jpg",
  },
  {
    id: 2,
    name: "Romantic Roses",
    price: "$39.99",
    image: "/flowers/flower2.jpg",
  },
  {
    id: 3,
    name: "Spring Bliss",
    price: "$24.99",
    image: "/flowers/flower3.jpg",
  },
];
