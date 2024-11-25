import Flower from '~/assets/svgs/flower';
import AddToCart from '~/components/add-to-cart';

function CartItem() {
  return (
    <div className="bg-green-200 px-5 py-10 flex items-center">
      <div className="relative aspect-square bg-blue-200 w-1/2 md:w-1/4 rounded-md">
        <span className="absolute -bottom-8 -right-8">
          <Flower />
        </span>
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-around gap-5">
        <div>
          <h6 className="font-extrabold md:text-xl">Product name</h6>
          <p className="font-bold text-sm md:text-lg">499 /-</p>
        </div>

        <AddToCart count={1} onIncrement={() => {}} onDecrement={() => {}} />
      </div>
    </div>
  );
}

export default CartItem;
