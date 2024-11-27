import {AddressFormData} from '~/routes/address/schema';
import {OrderProduct} from './types';
import {createSlice} from '@reduxjs/toolkit';
import {saveOrderCartReducer, saveOrderAddressReducer} from './reducers';

export interface OrderSlice {
  cart: OrderProduct[] | null;
  address: Required<AddressFormData> | null;
  paymentProof: string | null;
}

const initialState: OrderSlice = {
  cart: null,
  address: null,
  paymentProof: null,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    saveOrderCart: saveOrderCartReducer,
    saveOrderAddress: saveOrderAddressReducer,
  },
});

export const {saveOrderAddress, saveOrderCart} = orderSlice.actions;
