import Flower from '~/assets/svgs/flower';
import AddToCart from '~/components/add-to-cart';
import {addProductToCart, removeProductFromCart} from '~/redux/cart/slice';
import {CartProduct} from '~/redux/cart/types';
import {useAppDispatch} from '~/redux/hooks';

interface CartItemProps {
  cartProduct: CartProduct;
}

function CartItem(props: CartItemProps) {
  const {cartProduct} = props;

  const dispatch = useAppDispatch();

  return (
    <div className="bg-green-200 px-5 py-10 flex items-center">
      <div className="relative aspect-square bg-blue-200 w-1/2 md:w-1/4 rounded-md">
        <img src={cartProduct.primaryImage} className="object-fill" />
        <span className="absolute -bottom-8 -right-8">
          <Flower />
        </span>
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-around gap-5">
        <div className="w-full">
          <h6 className="font-extrabold text-center md:text-xl">
            {cartProduct.name}
          </h6>
          <p className="font-bold text-sm text-center md:text-lg">
            {cartProduct.price} /-
          </p>
        </div>

        <AddToCart
          count={cartProduct.quantity}
          onIncrement={() => dispatch(addProductToCart(cartProduct))}
          onDecrement={() => dispatch(removeProductFromCart(cartProduct))}
        />
      </div>
    </div>
  );
}

export default CartItem;
