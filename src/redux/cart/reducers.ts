import {PayloadAction} from '@reduxjs/toolkit';
import {Product} from '~/data/products';
import {CartSlice} from './slice';

export function addProductToCartReducer(
  state: CartSlice,
  action: PayloadAction<Product>,
) {
  const product = action.payload;

  const cartProduct = state.products.find((p) => p.id === product.id);
  if (cartProduct) {
    cartProduct.quantity++;
  } else {
    state.products.push({...product, quantity: 1});
  }
}

export function removeProductFromCartReducer(
  state: CartSlice,
  action: PayloadAction<Product>,
) {
  const product = action.payload;

  const cartProduct = state.products.find((p) => p.id === product.id);

  if (!cartProduct) {
    return state;
  }

  if (cartProduct.quantity === 1) {
    state.products = state.products.filter((p) => p.id !== product.id);
  } else {
    cartProduct.quantity--;
  }
}
