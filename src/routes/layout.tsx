import {Outlet} from 'react-router';

function AppLayout() {
  return (
    <div className="h-screen w-screen bg-green-200">
      <div className="max-w-5xl bg-white h-screen m-auto shadow-xl">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
