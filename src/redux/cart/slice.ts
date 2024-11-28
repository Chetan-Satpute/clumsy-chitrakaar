import {createSlice} from '@reduxjs/toolkit';
import {CartProduct} from './types';
import {
  addProductToCartReducer,
  emptyCartReducer,
  removeProductFromCartReducer,
  loadCartReducer,
} from './reducers';

export interface CartSlice {
  products: CartProduct[];
}

const initialState: CartSlice = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: addProductToCartReducer,
    emptyCart: emptyCartReducer,
    removeProductFromCart: removeProductFromCartReducer,
    loadCart: loadCartReducer,
  },
});

export const {addProductToCart, emptyCart, removeProductFromCart, loadCart} =
  cartSlice.actions;
