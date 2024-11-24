import Flicking from '@egjs/react-flicking';
import {useRef, useState} from 'react';

function FocusFlicking() {
  const flickingRef = useRef<Flicking>(null);

  const [trigger, setTrigger] = useState(false);

  const currentPanelIndex = flickingRef.current?.index;

  return (
    <Flicking ref={flickingRef} circular onChanged={() => setTrigger(!trigger)}>
      <div className="w-3/4 lg:w-1/2">
        <div
          className={
            'aspect-square transition w-full bg-blue-200 flex justify-center items-center rounded-md' +
            (currentPanelIndex && currentPanelIndex !== 0 ? ' scale-90' : '')
          }
        >
          1
        </div>
      </div>
      <div className="w-3/4 lg:w-1/2">
        <div
          className={
            'aspect-square transition w-full bg-green-200 flex justify-center items-center rounded-md' +
            (flickingRef.current?.index !== 1 ? ' scale-90' : '')
          }
        >
          2
        </div>
      </div>
      <div className="w-3/4 lg:w-1/2">
        <div
          className={
            'aspect-square transition w-full bg-orange-200 flex justify-center items-center rounded-md' +
            (flickingRef.current?.index !== 2 ? ' scale-90' : '')
          }
        >
          3
        </div>
      </div>
    </Flicking>
  );
}

export default FocusFlicking;