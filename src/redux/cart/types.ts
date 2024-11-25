import type {Product} from '~/data/products';

export interface CartProduct extends Product {
  quantity: number;
}
