import {AddressFormData} from '~/routes/address/schema';
import {CartProduct} from '../cart/types';

export type OrderProduct = Pick<
  CartProduct,
  'id' | 'name' | 'price' | 'quantity'
>;

export interface Order {
  id?: string;
  cart: OrderProduct[];
  address: Required<AddressFormData>;
  paymentProof?: string[];
  user?: {
    uid: string;
    email: string;
  };
  status: string;
}
