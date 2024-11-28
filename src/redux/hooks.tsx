import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadCart} from './cart/slice';
import type {AppDispatch, RootState} from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

const CART_PERSIST_KEY = 'CART_PERSIST_KEY';
export function usePersistCart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const load = useCallback(() => {
    if (cart.products.length) return;

    const cartData = localStorage.getItem(CART_PERSIST_KEY);
    if (cartData === null) return;

    dispatch(loadCart(JSON.parse(cartData)));
  }, [cart, dispatch]);

  useEffect(() => {
    load();
  }, [dispatch, load]);

  useEffect(() => {
    if (cart.products.length) {
      localStorage.setItem(CART_PERSIST_KEY, JSON.stringify(cart));
    }
  }, [cart]);
}
