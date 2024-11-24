import Flicking from '@egjs/react-flicking';
import logo from '~/assets/images/logo.png';
import Flower from '~/assets/svgs/flower';
import Item from './item';
import FocusFlicking from './focus-flicking';
import Instagram from '~/assets/svgs/instagram';
import Whatsapp from '~/assets/svgs/whatsapp';

import '@material/web/icon/icon.js';
import '@egjs/react-flicking/dist/flicking.css';

function Home() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex justify-center">
        <img src={logo} className="h-24" />
      </div>

      <Flicking circular>
        <div className="w-3/4 lg:w-1/2 p-2">
          <div className="aspect-square w-full bg-blue-200 flex justify-center items-center rounded-md">
            1
          </div>
        </div>
        <div className="w-3/4 lg:w-1/2 p-2">
          <div className="aspect-square w-full bg-green-200 flex justify-center items-center rounded-md">
            2
          </div>
        </div>
        <div className="w-3/4 lg:w-1/2 p-2">
          <div className="aspect-square w-full bg-orange-200 flex justify-center items-center rounded-md">
            3
          </div>
        </div>
      </Flicking>

      <div className="mx-5 my-10 bg-green-200 p-3">
        <h6 className="font-bold text-center text-sm mb-2">
          Website & Products Overall Information
        </h6>
        <p className="text-center text-sm font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="relative mt-24 mb-10 bg-green-200 py-5 flex justify-end px-5">
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
        <h4 className="text-xl text-center font-extrabold mb-5">
          Our Products
        </h4>

        <div className="flex flex-wrap justify-around gap-5">
          <Item />
          <Item />
          <Item />
        </div>
      </div>

      <div className="bg-green-400 h-4 mb-3" />

      <div className="relative bg-green-400 mb-10 pt-10 h-4/6">
        <div className="h-full overflow-auto z-10 no-scrollbar">
          <div className="z-10 sticky align-right top-0 h-full w-3/4 ml-auto rounded-md bg-orange-200"></div>
          <div className="z-10 sticky align-right top-0 h-full w-3/4 ml-auto rounded-md bg-green-200"></div>
        </div>
        <div className="absolute bg-white bottom-0 left-0 w-full h-1/6 z-0" />
        <h5 className="z-20 font-bold absolute top-[20%] left-0 text-sm md:text-lg w-1/2 pl-2 lg:px-5">
          Customised Calendars
        </h5>
        <p className="absolute z-20 top-[40%] left-0 font-extrabold w-1/2 text-base md:text-xl text-left pl-2 lg:px-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <h4 className="text-xl text-center font-extrabold mb-5">
        Get ready for the gifting season
      </h4>

      <FocusFlicking />

      <div className="mx-5 my-10 bg-green-300 p-3">
        <h6 className="font-bold text-center text-sm mb-2">
          Website & Products Overall Information
        </h6>
        <p className="text-center text-sm font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="bg-green-200 p-2 flex justify-around gap-2 flex-wrap">
        <span className="flex gap-2 items-center">
          <Instagram className="h-5 w-5" />
          <span className="text-xs underline font-semibold">
            clumsy_chitrakaar
          </span>
        </span>
        <span className="flex gap-2 items-center">
          <Whatsapp className="h-5 w-5" />
          <span className="text-xs underline font-semibold">7038512750</span>
        </span>
        <span className="flex gap-2 items-center">
          <md-icon class="font-light">mail</md-icon>
          <span className="text-xs underline font-semibold">
            pallavis5199@gmail.com
          </span>
        </span>
      </div>
    </div>
  );
}

export default Home;
