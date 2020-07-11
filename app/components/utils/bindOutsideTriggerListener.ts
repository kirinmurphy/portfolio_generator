

import { 
  bindTriggerOverride, 
  triggerOverrideCallbackType,
  GenericRefTypeUntilIFigureOutTheCommonDenominator
} from './bindTriggerOverride';

export const bindOutsideTriggerListener = (
  ref:GenericRefTypeUntilIFigureOutTheCommonDenominator, 
  callback:triggerOverrideCallbackType) => {
  
    bindTriggerOverride({ 
    eventType: 'mousedown', 
    ref: ref, 
    condition: ({ ref, event }) => {
      return !ref.current.contains(event.target);
    }, 
    conditionalCallback: callback
  });
};
