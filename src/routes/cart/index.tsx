import logo from '~/assets/images/logo.png';
import {useAppSelector} from '~/redux/hooks';
import CartItem from './cart-item';
import ShoppingBagSpeed from '~/assets/svgs/shopping-bag-speed';
import products from '~/data/products';
import SignInWithGoogle from '~/components/sign-in-with-google';
import {useNavigate, Link} from 'react-router';
import {useDispatch} from 'react-redux';
import {saveOrderCart} from '~/redux/order/slice';

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartProducts = useAppSelector((state) => state.cart.products);
  const cartSubTotal = useAppSelector((state) =>
    state.cart.products.reduce((acc, p) => acc + p.price * p.quantity, 0),
  );
  const isSignedIn = useAppSelector((state) => state.user.profile !== null);

  const cartItems = cartProducts.map((cartProduct) => (
    <CartItem key={cartProduct.id} cartProduct={cartProduct} />
  ));

  const productsNotInCart = products.filter(
    (product) => !cartProducts.find((p) => p.id === product.id),
  );

  const otherProductItems = productsNotInCart.map((product) => (
    <CartItem key={product.id} cartProduct={{...product, quantity: 0}} />
  ));

  const handleCheckoutClick = () => {
    dispatch(saveOrderCart(cartProducts));
    navigate('/address');
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="flex justify-center mb-10">
        <Link to="/">
          <img src={logo} className="h-24" />
        </Link>
      </div>

      {cartItems.length ? (
        <>
          {cartItems}

          <div className="flex justify-between my-10 px-10">
            <span className="font-bold text-xl">Subtotal</span>
            <span className="font-bold text-xl">{cartSubTotal} /-</span>
          </div>

          {isSignedIn ? (
            <div className="flex justify-center my-10 px-5">
              <md-filled-button
                trailing-icon
                class="w-full max-w-sm"
                onClick={handleCheckoutClick}
              >
                Checkout
                <md-icon slot="icon">shopping_cart_checkout</md-icon>
              </md-filled-button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 my-10">
              <SignInWithGoogle />
              <span className="font-semibold text-sm flex items-center gap-2 text-blue-500">
                <md-icon>info</md-icon> Sign in to place your order!
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center gap-5 mb-10">
          <ShoppingBagSpeed className="h-40 w-40 text-neutral-200" />
          <p className="text-xl font-bold text-neutral-400">Cart empty!</p>
        </div>
      )}

      {otherProductItems.length !== 0 && (
        <div>
          <h4 className="text-xl text-center font-extrabold mb-5">
            Other Products
          </h4>

          {otherProductItems}
        </div>
      )}
    </div>
  );
}

export default Cart;
