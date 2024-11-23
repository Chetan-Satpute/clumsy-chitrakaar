import {Outlet} from 'react-router';
import Marquee from './marquee';

function AppLayout() {
  return (
    <div className="h-screen w-screen bg-green-200">
      <div className="max-w-5xl bg-white h-screen m-auto shadow-xl">
        <Marquee />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
