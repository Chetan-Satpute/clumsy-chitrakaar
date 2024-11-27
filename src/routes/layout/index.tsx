import {Outlet} from 'react-router';
import Marquee from './marquee';
import Header from './header';
import Footer from './footer';
import {LinearProgress} from '@mui/material';
import {useAppSelector} from '~/redux/hooks';

function AppLayout() {
  const isPlacingOrder = useAppSelector((state) => state.order.isPlacingOrder);

  return (
    <div className="h-screen w-screen bg-green-200">
      <div className="flex flex-col max-w-5xl bg-white h-screen m-auto shadow-xl">
        <Marquee />
        {isPlacingOrder && <LinearProgress />}
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
