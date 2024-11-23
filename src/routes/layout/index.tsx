import {Outlet} from 'react-router';
import Marquee from './marquee';
import Header from './header';

function AppLayout() {
  return (
    <div className="h-screen w-screen bg-green-200">
      <div className="flex flex-col max-w-5xl bg-white h-screen m-auto shadow-xl">
        <Marquee />
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
