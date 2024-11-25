import Flicking from '@egjs/react-flicking';
import logo from '~/assets/images/logo.png';
import Flower from '~/assets/svgs/flower';
import '@material/web/button/filled-button.js';
import {Navigate, useParams} from 'react-router';
import {useMemo} from 'react';
import products from '~/data/products';
import AddToCart from '~/components/add-to-cart';
import {useAppDispatch, useAppSelector} from '~/redux/hooks';
import {addProductToCart, removeProductFromCart} from '~/redux/cart/slice';

function Calendar() {
  const params = useParams();
  const productId = params.id;

  const dispatch = useAppDispatch();
  const cartProduct = useAppSelector((state) =>
    state.cart.products.find((p) => p.id === productId),
  );

  const product = useMemo(() => {
    if (!productId) {
      return undefined;
    }

    return products.find((p) => p.id === productId);
  }, [productId]);

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex-1 overflow-auto">
      <div className="flex justify-center mb-10">
        <img src={logo} className="h-24" />
      </div>

      <div className="relative bg-green-200 pt-10 z-10">
        <div className="w-6/12 md:w-6/12">
          <Flicking circular>
            <div className="aspect-square z-10 w-full bg-blue-300 flex justify-center items-center rounded-md">
              1
            </div>
            <div className="aspect-square z-10 w-full bg-green-300 flex justify-center items-center rounded-md">
              2
            </div>
            <div className="aspect-square z-10 w-full bg-orange-300 flex justify-center items-center rounded-md">
              3
            </div>
          </Flicking>
        </div>

        <div className="absolute w-full bg-white h-20 bottom-0 left-0" />

        <div className="absolute w-5/12 md:w-5/12 bg-white h-full top-0 right-0 flex flex-col justify-center items-center gap-5 overflow-hidden">
          <div>
            <h6 className="text-center font-extrabold">{product.name}</h6>
            <p className="text-center font-bold">{product.price} /-</p>
          </div>

          <AddToCart
            count={cartProduct?.quantity || 0}
            onIncrement={() => dispatch(addProductToCart(product))}
            onDecrement={() => dispatch(removeProductFromCart(product))}
          />

          <div className="absolute z-0 -left-5 top-3">
            <Flower />
          </div>
        </div>

        <div className="absolute z-30 left-[44%] md:left-[48%] bottom-11">
          <Flower />
        </div>
      </div>

      <div className="mx-5 my-10 bg-green-200 p-3">
        <h6 className="font-bold text-center text-sm mb-2">
          Website & Products Overall Information
        </h6>
        <p className="text-center text-sm font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="mt-4 max-w-md m-auto">
          <div className="flex justify-between">
            <span className="font-normal text-sm">Height</span>
            <span className="font-semibold text-sm">20cm</span>
          </div>
          <div className="flex justify-between">
            <span className="font-normal text-sm">Width</span>
            <span className="font-semibold text-sm">20cm</span>
          </div>
          <div className="flex justify-between">
            <span className="font-normal text-sm">Dimensions</span>
            <span className="font-semibold text-sm">20cm</span>
          </div>
          <div className="flex justify-between">
            <span className="font-normal text-sm">Material</span>
            <span className="font-semibold text-sm">wood & paper</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
