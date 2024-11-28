import {Link, useLocation} from 'react-router';
import {useAppSelector} from '~/redux/hooks';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';

function Header() {
  const {pathname} = useLocation();

  const isPlacingOrder = useAppSelector((state) => state.order.isPlacingOrder);
  const cartProductsCount = useAppSelector((state) =>
    state.cart.products.reduce((acc, p) => acc + p.quantity, 0),
  );

  return (
    <div className="py-2 px-3 flex justify-between gap-2">
      <span>
        {pathname !== '/' && (
          <Link to="/">
            <md-icon-button disabled={isPlacingOrder || undefined}>
              <md-icon>arrow_back</md-icon>
            </md-icon-button>
          </Link>
        )}
      </span>
      <span>
        <Link to="/cart" onClick={(e) => isPlacingOrder && e.preventDefault()}>
          <span className="relative">
            <md-icon-button disabled={isPlacingOrder || undefined}>
              <md-icon>shopping_cart</md-icon>
            </md-icon-button>
            {cartProductsCount !== 0 && (
              <span className="absolute -top-4 right-0 bg-green-400 text-xs p-1 rounded-full h-5 w-5 flex justify-center items-center">
                {cartProductsCount}
              </span>
            )}
          </span>
        </Link>
        <Link to="/profile">
          <md-icon-button disabled={isPlacingOrder || undefined}>
            <md-icon>account_circle</md-icon>
          </md-icon-button>
        </Link>
      </span>
    </div>
  );
}

export default Header;
