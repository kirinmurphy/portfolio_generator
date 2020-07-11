import { useEffect } from 'react';

  // TSTODO - these are typed when useRef is initialized, but not sure a common denominator
export type GenericRefTypeUntilIFigureOutTheCommonDenominator = any;

interface eventDataProps {
  triggeredHref: string;
};

interface conditionProps {
  ref: GenericRefTypeUntilIFigureOutTheCommonDenominator;
  event: Event;
  eventData: eventDataProps;
};

export type triggerOverrideCallbackType = (arg0:eventDataProps) => void;

interface bindTriggerOverrideProps {
  eventType: 'click' | 'mousedown';
  ref: GenericRefTypeUntilIFigureOutTheCommonDenominator;  
  condition: (arg0: conditionProps) => boolean;
  conditionalCallback: triggerOverrideCallbackType;
};

export const bindTriggerOverride = (props: bindTriggerOverrideProps) => {
  const { eventType, ref, condition, conditionalCallback } = props;

  const eventCallback = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    
    const eventData = {
      triggeredHref: ref.current && target.closest('a')?.getAttribute('href')
    } as eventDataProps;

    if ( ref.current && condition({ ref, event, eventData }) ) {
      event.preventDefault();
      event.stopPropagation();
      conditionalCallback(eventData);
    }  
  };

  useEffect(() => {
    // ??? - what is the performance implication if there's a bunch of these on the page 
    document.addEventListener(eventType, eventCallback);
    return () => {
      document.removeEventListener(eventType, eventCallback);
    };
  }, [ref]);  
};

