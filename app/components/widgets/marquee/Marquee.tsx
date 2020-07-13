import React from 'react';

import { MarqueeProps } from '../../types/widgets';

import { SlideshowPopup } from './SlideshowPopup';
import { VideoPlayer } from './videoPlayer/VideoPlayer';

export function hasMarqueeContent (marquee: MarqueeProps, projectUrl?: string): boolean {
  if ( !marquee ) { return false; }
  const { type, images, video } = marquee;
  const hasImages = type === 'slideshow' && !!images && !!images.length;
  const hasIframe = type === 'iframe' && !!projectUrl;
  const hasVideo = type === 'video' && !!video && !!video.sources.length;
  return hasIframe || hasImages || hasVideo;
}

interface Props {
  marquee: MarqueeProps;
  iframeUrl?: string;
}

export function Marquee ({ marquee, iframeUrl }: Props): JSX.Element {
  const { type, images, video } = marquee;
  return (
    <>
      <section>
        {type === 'iframe' && <iframe src={iframeUrl} />}
        {type === 'slideshow' && <SlideshowPopup images={images} />}
        {type === 'video' && <VideoPlayer video={video} />}
      </section>
      
      <style jsx>{`
        section {
          position:absolute;
          top:4px;
          left:4px;
          right:4px;
          bottom:4px;
        }
        
        iframe {
          position: absolute;
          left:calc(-12.5% + 1px);
          top:calc(-12.5% + 1px);
          width:125%;
          height:125%;
          transform:scale(0.8);
        }
      `}</style>
    </>
  );
}
