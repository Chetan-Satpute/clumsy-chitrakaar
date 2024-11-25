import '@material/web/icon/icon.js';
import '@material/web/button/filled-button.js';

interface AddToCartProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function AddToCart(props: AddToCartProps) {
  const {count, onIncrement, onDecrement} = props;

  if (count === 0) {
    return (
      <md-filled-button trailing-icon onClick={onIncrement}>
        Add to cart
        <md-icon slot="icon">shopping_cart</md-icon>
      </md-filled-button>
    );
  }

  const countText = count.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-2 bg-white rounded-full">
      <span>
        <md-icon-button onClick={onDecrement}>
          <md-icon>remove</md-icon>
        </md-icon-button>
      </span>
      <span className="font-extrabold">{countText}</span>
      <span>
        <md-icon-button onClick={onIncrement}>
          <md-icon>add</md-icon>
        </md-icon-button>
      </span>
    </div>
  );
}

export default AddToCart;
