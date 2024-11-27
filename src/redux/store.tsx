import {configureStore} from '@reduxjs/toolkit';
import {cartSlice} from './cart/slice';
import {userSlice} from './user/slice';
import {orderSlice} from './order/slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
