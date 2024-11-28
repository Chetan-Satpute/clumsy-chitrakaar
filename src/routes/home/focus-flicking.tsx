import Flicking from '@egjs/react-flicking';
import {useRef, useState} from 'react';
import homeVideo2 from '~/assets/videos/home-2.mp4';
import homeVideo3 from '~/assets/videos/home-3.mp4';
import homeVideo4 from '~/assets/videos/home-4.mp4';

function FocusFlicking() {
  const flickingRef = useRef<Flicking>(null);

  const [trigger, setTrigger] = useState(false);

  const currentPanelIndex = flickingRef.current?.index;

  return (
    <Flicking ref={flickingRef} circular onChanged={() => setTrigger(!trigger)}>
      <div className="w-3/4 lg:w-1/2">
        <div
          className={
            'aspect-square transition w-full bg-blue-200 flex justify-center items-center rounded-md overflow-hidden' +
            (currentPanelIndex && currentPanelIndex !== 0 ? ' scale-90' : '')
          }
        >
          <video autoPlay className="w-full h-full" muted loop>
            <source src={homeVideo2} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="w-3/4 lg:w-1/2">
        <div
          className={
            'aspect-square transition w-full bg-green-200 flex justify-center items-center rounded-md overflow-hidden' +
            (flickingRef.current?.index !== 1 ? ' scale-90' : '')
          }
        >
          <video autoPlay className="w-full h-full" muted loop>
            <source src={homeVideo3} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="w-3/4 lg:w-1/2">
        <div
          className={
            'aspect-square transition w-full bg-orange-200 flex justify-center items-center rounded-md overflow-hidden' +
            (flickingRef.current?.index !== 2 ? ' scale-90' : '')
          }
        >
          <video autoPlay className="w-full h-full" muted loop>
            <source src={homeVideo4} type="video/mp4" />
          </video>
        </div>
      </div>
    </Flicking>
  );
}

export default FocusFlicking;
