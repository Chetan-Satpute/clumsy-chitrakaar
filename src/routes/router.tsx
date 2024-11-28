import {createBrowserRouter, RouterProvider} from 'react-router';
import {usePersistCart} from '~/redux/hooks';

import Cart from './cart';
import Home from './home';
import AppLayout from './layout';
import Calendar from './calendar';
import Address from './address';
import Payment from './payment';
import ThankYou from './thankyou';
import Profile from './profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'calendar/:id',
        element: <Calendar />,
      },
      {
        path: 'address',
        element: <Address />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'thank-you',
        element: <ThankYou />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

function AppRouter() {
  usePersistCart();
  return <RouterProvider router={router} />;
}

export default AppRouter;
