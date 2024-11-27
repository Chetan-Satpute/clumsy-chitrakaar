import logo from '~/assets/images/logo.png';
import thankYou from '~/assets/images/thank-you.png';
import '@material/web/button/outlined-button.js';
import {Link} from 'react-router';

function ThankYou() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex justify-center">
        <img src={logo} className="h-24" />
      </div>

      <img src={thankYou} className="w-2/3 max-w-md m-auto" />

      <div className="flex flex-col items-center my-10 px-5 gap-5">
        <Link to="/profile" className="w-full max-w-sm">
          <md-filled-button trailing-icon class="w-full max-w-sm">
            View orders
            <md-icon slot="icon">orders</md-icon>
          </md-filled-button>
        </Link>
        <Link to="/" className="w-full max-w-sm">
          <md-outlined-button trailing-icon class="w-full max-w-sm">
            Back to home
          </md-outlined-button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
