import {createBrowserRouter, RouterProvider} from 'react-router';

import Cart from './cart';
import Home from './home';
import AppLayout from './layout';
import Calendar from './calendar';
import Address from './address';
import Payment from './payment';

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
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
