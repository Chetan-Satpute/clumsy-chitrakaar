import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {loadCart} from './slice';

export function usePersistCart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    const cartData = localStorage.getItem('CART_PERSIST_KEY');
    if (cartData === null) return;

    dispatch(loadCart(JSON.parse(cartData)));
  }, [dispatch]);

  useEffect(() => {
    if (cart.products.length) {
      localStorage.setItem('CART_PERSIST_KEY', JSON.stringify(cart));
    }
  }, [cart]);
}
