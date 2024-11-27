import {PayloadAction} from '@reduxjs/toolkit';
import {OrderSlice} from './slice';
import {AddressFormData} from '~/routes/address/schema';
import {CartProduct} from '../cart/types';
import {OrderProduct} from './types';

export function saveOrderCartReducer(
  state: OrderSlice,
  action: PayloadAction<CartProduct[]>,
) {
  const cartProducts = action.payload;
  const orderProducts: OrderProduct[] = cartProducts.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  }));

  state.cart = orderProducts;
}

export function saveOrderAddressReducer(
  state: OrderSlice,
  action: PayloadAction<Required<AddressFormData>>,
) {
  state.address = action.payload;
}
