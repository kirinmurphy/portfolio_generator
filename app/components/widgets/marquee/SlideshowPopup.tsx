import React, { useState } from 'react';

import { 
  MSG_OPEN_IN_NEW_WINDOW,
  MSG_FULL_SCREEN_VIEW
} from '../../utils/dictionary';

import { Popup } from '../Popup';
import { Slideshow } from './Slideshow';
import { openActiveImageInNewWindow } from './ExpandoClicker';

interface Props {
  images: string[];
};

export const SlideshowPopup: React.FC<Props> = ({ images }) => {
  const [showFullScreen, setFullScreenState] = useState<boolean>(false);

  return (
    <>
      <div className="slideshow-wrapper uses-expando-trigger">
        <Slideshow
          autoRotateDelay={5000}
          images={images}
          showSmallImageAtMaxWidth={true}
          expandoButtonText={MSG_FULL_SCREEN_VIEW}
          expandoClickCallback={() => setFullScreenState(true)}
        />
      </div>

      {showFullScreen && (
        <div className="slideshow-popup-wrapper uses-expando-trigger">
          <Popup closeAction={() => setFullScreenState(false)}>
            <Slideshow
              images={images}
              showSmallImageAtMaxWidth={false}
              expandoButtonText={MSG_OPEN_IN_NEW_WINDOW}
              expandoClickCallback={openActiveImageInNewWindow}
            />
          </Popup>
        </div>
      )}

      <style jsx>{`
        .slideshow-wrapper {
          position:absolute;
          top:0; left:0; right:0; bottom:0;
        }
      `}</style>
    </>
  )
};
