import {AddressFormData} from '~/routes/address/schema';
import {OrderProduct} from './types';
import {createSlice} from '@reduxjs/toolkit';
import {
  saveOrderCartReducer,
  saveOrderAddressReducer,
  setPlacingOrderReducer,
} from './reducers';

export interface OrderSlice {
  cart: OrderProduct[] | null;
  address: Required<AddressFormData> | null;
  paymentProof: string | null;
  isPlacingOrder: boolean;
}

const initialState: OrderSlice = {
  cart: null,
  address: null,
  paymentProof: null,
  isPlacingOrder: false,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    saveOrderCart: saveOrderCartReducer,
    saveOrderAddress: saveOrderAddressReducer,
    setPlacingOrder: setPlacingOrderReducer,
  },
});

export const {saveOrderAddress, saveOrderCart, setPlacingOrder} =
  orderSlice.actions;
