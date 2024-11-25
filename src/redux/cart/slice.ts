import {createSlice} from '@reduxjs/toolkit';
import {CartProduct} from './types';
import {
  addProductToCartReducer,
  removeProductFromCartReducer,
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
    removeProductFromCart: removeProductFromCartReducer,
  },
});

export const {addProductToCart, removeProductFromCart} = cartSlice.actions;
