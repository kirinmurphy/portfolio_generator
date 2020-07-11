import { useState, useRef } from 'react';

import { MSG_OPEN_IN_NEW_WINDOW } from '../utils/dictionary';
import { bindTriggerOverride } from '../utils/bindTriggerOverride';

import { Popup } from '../widgets/Popup';
import { 
  openActiveImageInNewWindow, 
  ExpandoClicker
} from '../widgets/marquee/ExpandoClicker';

export const AssetActive = ({}) => {
  const [activeAssetUrl, setActiveAssetUrl] = useState<string>('');
  const activeAssetRef = useRef<HTMLDivElement>(null);
  
  const assetIsPdf = activeAssetUrl?.split('.')[1] === 'pdf';

  // Hijack links in markdown that link to assets
  bindTriggerOverride({ 
    eventType: 'click', 
    ref: activeAssetRef, 
    condition: ({ eventData }) => {
      return triggeredElementLinksToAsset(eventData.triggeredHref);
    },
    conditionalCallback: (eventData) => {
      setActiveAssetUrl(eventData.triggeredHref);
    }
  });

  return (
    <>
      <div ref={activeAssetRef} className="uses-expando-trigger">
        {!!activeAssetUrl && (
          <Popup closeAction={() => { setActiveAssetUrl(''); }}>
            {assetIsPdf ? <embed src={activeAssetUrl} /> : <></>}
            {!assetIsPdf ? <img src={activeAssetUrl} />: <></>}

            <ExpandoClicker 
              buttonText={MSG_OPEN_IN_NEW_WINDOW}
              clickCallback={openActiveImageInNewWindow} 
              assetUrl={activeAssetUrl}
            />
          </Popup>
        )}
      </div>
      <style jsx>{`
        div { 
          position:relative;
          text-align:center;
        }  

        img { 
          margin-top:4rem;
          max-width:100%; 
        }

        embed {
          position:absolute; 
          top:0; left:0; 
          width:100%;
          height:100%;
        }
      `}</style>    
    </>
  );
};

function triggeredElementLinksToAsset(triggeredHref: string) {
  const validFileExtensions = ["pdf", "jpg", "jpeg", "gif", "png"]; 
  const urlParts = triggeredHref?.split('.');
  return urlParts?.length > 1 && validFileExtensions.includes(urlParts[urlParts.length-1]);
};
