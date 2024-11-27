import {CartProduct} from '../cart/types';

export type OrderProduct = Pick<
  CartProduct,
  'id' | 'name' | 'price' | 'quantity'
>;
