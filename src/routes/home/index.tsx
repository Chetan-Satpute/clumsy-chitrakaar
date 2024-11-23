import Flicking from '@egjs/react-flicking';
import logo from '~/assets/images/logo.png';
import '@egjs/react-flicking/dist/flicking.css';
import Flower from '~/assets/svgs/flower';
import Item from './item';

function Home() {
  return (
    <div className="flex-1 overflow-auto">
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

      <div className="my-10">
        <p className="font-bold text-xl text-center mb-5">Handmade with Love</p>
        <div className="bg-green-200 p-5 mx-5 lg:mx-10">
          <p className="font-bold text-xs text-center">
            Website & Products Overall Information Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>

      <div className="relative mt-24 mb-10 bg-green-200 py-5 flex justify-end px-10">
        <div className="absolute top-0 left-0 w-5/12 bg-white h-full z-0" />
        <div className="absolute top-0 left-0 w-6/12 h-full z-20 flex justify-start items-center p-5">
          <p className="font-extrabold text-xl">
            Where art is more than just a vision.
          </p>
        </div>
        <div className="z-20 absolute -top-11 right-5">
          <Flower />
        </div>
        <div className="bg-blue-200 aspect-video w-5/6 rounded-md z-10"></div>
      </div>

      <div className="my-10 h-5 bg-green-300" />

      <div className="mb-10">
        <h4 className="text-xl text-center font-extrabold mb-5">Our Products</h4>

        <div className="flex flex-wrap justify-around gap-5">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}

export default Home;
