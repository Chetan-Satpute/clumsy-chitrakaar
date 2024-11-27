import {useEffect, useState} from 'react';
import Orders from '~/assets/svgs/orders';
import SignInWithGoogle from '~/components/sign-in-with-google';
import {getOrders, signOut} from '~/firebase/app';
import {useAppSelector} from '~/redux/hooks';
import {Order} from '~/redux/order/types';
import '@material/web/button/text-button.js';
import {Link} from 'react-router';
import CartItem from '../cart/cart-item';

function Profile() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'some-unique-id',
      cart: [
        {
          id: 'product-a',
          name: 'Product A',
          price: 499,
          quantity: 2,
        },
      ],
      address: {
        firstName: 'Chetan',
        lastName: 'Satpute',
        email: 'chetan.satpute2002@gmail.com',
        contactNumber: '7898607428',
        country: 'India',
        state: 'Madhya Pradesh',
        city: 'Betul',
        postalCode: '460001',
        address: 'Patel Ward',
      },
      status: 'Payment verification is in progress',
    },
  ]);
  const [status, setStatus] = useState<'pending' | 'loaded' | 'errored'>(
    'loaded',
  );

  const profile = useAppSelector((state) => state.user.profile);

  const loadOrders = async () => {
    if (!profile) return;

    try {
      if (status === 'pending') {
        const userOrders = await getOrders(profile);
        setOrders(userOrders);
        setStatus('loaded');
      }
    } catch (error) {
      console.error(error);
      setStatus('errored');
    }
  };

  useEffect(() => {
    // loadOrders();
  }, []);

  if (profile === null) {
    return (
      <div className="flex-1 overflow-auto flex flex-col justify-center items-center">
        <Orders className="h-40 w-40 text-green-200" />
        <p className="text-xl font-bold text-neutral-400 mb-10">
          Sign in to view orders
        </p>
        <SignInWithGoogle />
      </div>
    );
  }

  const orderItems = orders.map((order) => (
    <div className="w-full rounded-md bg-green-200 px-1 py-2">
      <p className="font-semibold text-sm px-2 mb-2">#{order.id}</p>
      {order.cart.map((item) => (
        <div key={item.id} className="px-2 flex justify-between">
          <p className="font-sm font-thin">
            {item.name} (<span>{item.price}/-</span>)
          </p>

          <span>X {item.quantity}</span>
        </div>
      ))}

      <p className="font-bold text-sm px-2 my-2">Deliver to</p>
      <div className="px-2">
        <p className="text-sm">
          {order.address.firstName} {order.address.lastName}
        </p>
        <p className="text-xs mb-2">{order.address.email}</p>
        <p className="text-sm">{order.address.address}</p>
        <p className="text-sm">
          {order.address.city}, {order.address.postalCode}
        </p>
        <p className="text-sm mb-2">
          {order.address.state}, {order.address.country}
        </p>
        <p className="text-sm">{order.address.contactNumber}</p>
      </div>

      <p className="text-center font-bold mt-2">{order.status}</p>
    </div>
  ));

  return (
    <div className="flex-1 overflow-auto px-5 md:px-10 py-10">
      <div className="bg-green-200 p-2 rounded-md">
        <p className="text-center text-xl font-bold mb-2">
          {profile.displayName}
        </p>
        <p className="text-center text-sm">{profile.email}</p>

        <md-text-button
          trailing-icon
          class="w-full max-w-sm mt-5"
          onClick={signOut}
        >
          Logout
          <md-icon slot="icon">logout</md-icon>
        </md-text-button>
      </div>

      <h6 className="text-lg font-bold my-5">Your orders</h6>
      {status === 'pending' && (
        <div className="flex flex-col gap-3">
          <div className="h-20 w-full rounded-md bg-gray-200 animate-pulse"></div>
          <div className="h-20 w-full rounded-md bg-gray-200 animate-pulse"></div>
        </div>
      )}

      {status === 'loaded' && orders.length === 0 ? (
        <>
          <div className="flex flex-col justify-center items-center">
            <Orders className="h-40 w-40 text-green-200" />
            <p className="text-xl font-bold text-neutral-400 mb-10">
              No orders yet!
            </p>
          </div>
          <div className="flex flex-col items-center my-10 px-5 gap-5">
            <Link to="/cart" className="w-full max-w-sm">
              <md-filled-button trailing-icon class="w-full max-w-sm">
                Get items in cart
                <md-icon slot="icon">shopping_cart</md-icon>
              </md-filled-button>
            </Link>
            <Link to="/" className="w-full max-w-sm">
              <md-outlined-button trailing-icon class="w-full max-w-sm">
                Back to home
              </md-outlined-button>
            </Link>
          </div>
        </>
      ) : (
        <>{orderItems}</>
      )}
    </div>
  );
}

export default Profile;
