import Flicking from '@egjs/react-flicking';
import logo from '~/assets/images/logo.png';
import home1 from '~/assets/images/home-1.png';
import home2 from '~/assets/images/home-2.png';
import home3 from '~/assets/images/home-3.png';
import home4 from '~/assets/images/home-4.png';
import home8 from '~/assets/images/home-8.png';
import home9 from '~/assets/images/home-9.png';
import home10 from '~/assets/images/home-10.png';
import home11 from '~/assets/images/home-11.png';
import homeVideo1 from '~/assets/videos/home-1.mp4';
import Flower from '~/assets/svgs/flower';
import Item from './item';

import '@material/web/icon/icon.js';
import products from '~/data/products';
import {Link} from 'react-router';
import {useEffect, useRef} from 'react';

function Home() {
  const topCarouselRef = useRef<Flicking>(null);

  const productItems = products.map((product) => (
    <Link key={product.id} to={`/calendar/${product.id}`}>
      <Item product={product} />
    </Link>
  ));

  useEffect(() => {
    const id = setInterval(() => {
      topCarouselRef.current?.next();
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex-1 overflow-auto">
      <div className="flex justify-center">
        <img src={logo} className="h-24" />
      </div>

      <Flicking circular ref={topCarouselRef}>
        <div className="w-3/4 lg:w-1/2 p-2">
          <div className="aspect-square w-full bg-blue-200 flex justify-center items-center rounded-md overflow-hidden">
            <img src={home1} className="object-cover" />
          </div>
        </div>
        <div className="w-3/4 lg:w-1/2 p-2">
          <div className="aspect-square w-full bg-green-200 flex justify-center items-center rounded-md overflow-hidden">
            <img src={home2} className="object-cover" />
          </div>
        </div>
        <div className="w-3/4 lg:w-1/2 p-2">
          <div className="aspect-square w-full bg-orange-200 flex justify-center items-center rounded-md overflow-hidden">
            <img src={home3} className="object-cover" />
          </div>
        </div>
        <div className="w-3/4 lg:w-1/2 p-2">
          <div className="aspect-square w-full bg-orange-200 flex justify-center items-center rounded-md overflow-hidden">
            <img src={home4} className="object-cover" />
          </div>
        </div>
      </Flicking>

      <div className="mx-5 my-10 bg-green-200 p-3">
        <h6 className="font-bold text-center text-sm mb-2">
          Art That Blooms All Year Round
        </h6>
        <p className="text-center text-sm font-normal">
          Discover the artistry of Clumsy Chitrakaar through our exclusive
          Petals and Dreams calendar collection! Celebrate the harmony of nature
          and creativity with three captivating designs: a vibrant bouquet of
          flowers, a lush showcase of houseplants, and a minimalist floral
          elegance.
          <br />
          <br />
          Each calendar features intricate, hand-drawn illustrations, making it
          perfect for adding warmth and inspiration to your space or gifting to
          someone special. Explore the collection and let the charm of nature
          brighten your days year-round!
        </p>
      </div>

      <div className="relative mt-24 mb-10 bg-green-200 py-5 flex justify-end px-5">
        <div className="absolute top-0 left-0 w-5/12 bg-white h-full z-0" />
        <div className="absolute top-0 left-0 w-6/12 h-full z-20 flex justify-start items-start lg:p-5 lg:px-10">
          <p className="font-extrabold text-xl md:text-3xl lg:text-4xl -mt-1.5 md:mt-5 px-5">
            Where art is more than just a vision.
          </p>
        </div>
        <div className="z-20 absolute -top-11 right-5">
          <Flower />
        </div>
        <div className="bg-blue-200 aspect-video w-5/6 rounded-md z-10 overflow-hidden">
          <video autoPlay className="w-full h-full" muted loop>
            <source src={homeVideo1} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="my-10 h-5 bg-green-300" />

      <div className="mb-10">
        <h4 className="text-2xl text-center font-extrabold mb-5">
          Our Designs
        </h4>

        <div className="flex flex-wrap justify-around gap-5">
          {productItems}
        </div>
      </div>

      <div className="bg-green-400 h-4 mb-3" />

      <div className="relative bg-green-400 mb-10 pt-10 h-4/6 lg:h-5/6">
        <div className="h-full overflow-auto z-10 no-scrollbar">
          <div className="z-10 sticky align-right top-0 h-full w-5/6 md:w-4/6 ml-auto rounded-md bg-orange-200 overflow-hidden">
            <img src={home8} className="object-fill h-full w-full" />
          </div>
          <div className="z-10 sticky align-right top-0 h-full w-5/6 md:w-4/6 ml-auto rounded-md bg-green-200 overflow-hidden">
            <img src={home9} className="object-fill h-full w-full" />
          </div>
          <div className="z-10 sticky align-right top-0 h-full w-5/6 md:w-4/6 ml-auto rounded-md bg-green-200 overflow-hidden">
            <img src={home10} className="object-fill h-full w-full" />
          </div>
          <div className="z-10 sticky align-right top-0 h-full w-5/6 md:w-4/6 ml-auto rounded-md bg-green-200 overflow-hidden">
            <img src={home11} className="object-fill h-full w-full" />
          </div>
        </div>
        <div className="absolute bg-white bottom-0 left-0 w-full h-1/6 z-0" />
        <h5 className="z-20 font-bold absolute top-[15%] md:top-[15%] left-0 text-sm md:text-xl w-1/2 pl-2 md:px-10">
          A Calendar That Does It All
        </h5>
        <p className="absolute z-20 top-[25%] md:top-[25%] left-0 font-extrabold w-1/2 text-base md:text-xl text-left pl-2 md:px-10">
          <p className="text-3xl md:text-5xl mb-5 md:mb-10">Calendar.</p>
          <p className="text-3xl md:text-5xl mb-5 md:mb-10">Bookmark.</p>
          <p className="text-3xl md:text-5xl mb-5 md:mb-10">Frames.</p>
        </p>
      </div>

      {/* <h4 className="text-xl text-center font-extrabold mb-5">
        Get ready for the gifting season
      </h4> */}

      {/* <FocusFlicking /> */}

      <div className="mx-5 my-10 bg-green-300 p-3">
        <h6 className="font-bold text-center text-sm md:text-normal mb-2">
          Meet the Artist!
        </h6>
        <p className="text-center text-sm md:text-normal font-normal">
          Hi, I’m <span className="font-bold">Pallavi Sajjanshetty</span>, aka
          <span className="font-bold">Clumsy Chitrakaar</span>. I’m passionate
          about flowers and plants, and through my hand-drawn illustrations, I
          bring the beauty of nature to life. What started as a hobby quickly
          became a way to fuel my creativity (and it gets me my coffee).
          <br />
          From calendars to quirky creations, my art celebrates the everyday
          wonders around us because who wouldn’t want a bouquet that never wilts
          on their desk?
        </p>
      </div>
    </div>
  );
}

export default Home;
