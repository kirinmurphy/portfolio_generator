const LAST_VIEWED_TIMESTAMP_KEY = 'kmPortfolioTimestamp';

// @FIX - This will break if it gets fired before getTimeSinceLastVisit gets called 
export const storeCurrentVisitTimestamp = (sessionStorage: Storage) => {
  const timestamp = new Date().getTime();
  sessionStorage.setItem(LAST_VIEWED_TIMESTAMP_KEY, JSON.stringify(timestamp));
};

export const wasLastVisitEarlierThan = (sessionStorage: Storage, delay: number): boolean => {
  const timeSinceLastVisit = getTimeSinceLastVisit(sessionStorage); 
  return timeSinceLastVisit === null || timeSinceLastVisit > delay;
};

function getTimeSinceLastVisit (sessionStorage: Storage): ( number | null ) {
  const lastVisit = sessionStorage.getItem(LAST_VIEWED_TIMESTAMP_KEY);
  if ( !!lastVisit ) { console.log(new Date().getTime() - parseInt(lastVisit)); }
  return !lastVisit ? null : new Date().getTime() - parseInt(lastVisit);
};
