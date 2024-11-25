import {createBrowserRouter, RouterProvider} from 'react-router';

import Cart from './cart';
import Home from './home';
import AppLayout from './layout';
import Calendar from './calendar';

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
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
