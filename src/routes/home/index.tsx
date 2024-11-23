import Flicking from '@egjs/react-flicking';
import logo from '~/assets/images/logo.png';
import '@egjs/react-flicking/dist/flicking.css';

function Home() {
  return (
    <div className="flex-1">
      <div className="flex justify-center">
        <img src={logo} className="h-24" />
      </div>

      <Flicking circular>
        <div className="w-2/4 p-2">
          <div className="aspect-square w-full bg-blue-200 flex justify-center items-center rounded-md">
            1
          </div>
        </div>
        <div className="w-2/4 p-2">
          <div className="aspect-square w-full bg-green-200 flex justify-center items-center rounded-md">
            2
          </div>
        </div>
        <div className="w-2/4 p-2">
          <div className="aspect-square w-full bg-orange-200 flex justify-center items-center rounded-md">
            3
          </div>
        </div>
      </Flicking>
    </div>
  );
}

export default Home;
