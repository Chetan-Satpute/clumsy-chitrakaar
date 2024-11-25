export interface Product {
  id: string;
  name: string;
  price: number;

  primaryImage: string;
  images: string[];
}

const products: Product[] = [
  {
    id: 'product-a',
    name: 'Product A',
    price: 499,

    primaryImage: '',
    images: [],
  },
  {
    id: 'product-b',
    name: 'Product B',
    price: 499,

    primaryImage: '',
    images: [],
  },
  {
    id: 'product-c',
    name: 'Product C',
    price: 499,

    primaryImage: '',
    images: [],
  },
];

export default products;
