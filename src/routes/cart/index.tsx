import logo from '~/assets/images/logo.png';
import CartItem from './cart-item';

function Cart() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex justify-center mb-10">
        <img src={logo} className="h-24" />
      </div>

      <CartItem />
      <CartItem />

      <div className="flex justify-between my-10 px-10">
        <span className="font-bold text-xl">Subtotal</span>
        <span className="font-bold text-xl">455 /-</span>
      </div>
    </div>
  );
}

export default Cart;

