import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';

function Header() {
  return (
    <div className="py-2 px-3 flex justify-end gap-2">
      <md-icon-button>
        <md-icon>shopping_cart</md-icon>
      </md-icon-button>
      <md-icon-button>
        <md-icon>account_circle</md-icon>
      </md-icon-button>
    </div>
  );
}

export default Header;
