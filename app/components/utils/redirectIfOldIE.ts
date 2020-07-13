export function redirectIfOldIE (window: Window): void {
  if (typeof(Window) !== 'undefined') {
    const currentBrowser = window.navigator.userAgent;
    const isIE11 = /Trident\/7.0/.test(currentBrowser);
    const isEarlierIE = /MSIE/.test(currentBrowser);
    const isIE = isIE11 || isEarlierIE;
    if ( isIE ) { window.document.location.href = '/unsupported'; }
  }  
}
