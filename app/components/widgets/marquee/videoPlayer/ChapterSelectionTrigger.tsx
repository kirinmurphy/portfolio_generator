import React from 'react';

import { 
  MSG_VIDEO_PLAYER_CURRENT_CHAPTER_LABEL, 
  MSG_VIDEO_PLAYER_NEXT_CHAPTER_LABEL 
} from "../../../utils/dictionary";

import { FormattedVideoChapterProps } from "../../../types/widgets";

import { Dropdown } from "../../Dropdown";
import { Ellipticizer } from "../../Ellipticizer";

interface Props {
  chapters:FormattedVideoChapterProps[];
  activeChapter: FormattedVideoChapterProps;
  activeChapterIndex: number;
  updatePlayerTime: (arg0:number) => void;
}

export function ChapterSelectionTrigger ({ 
  chapters, 
  activeChapter, 
  activeChapterIndex, 
  updatePlayerTime }: Props): JSX.Element {

  return (
    <>
      <Dropdown 
        orientation="above"
        title={
          <Ellipticizer width={'200px'}>{activeChapter?.title || ' '}</Ellipticizer>
        }
        content={chapters.map((chapter, index) => {
          const isActive = index === activeChapterIndex;
          const isNext = index === activeChapterIndex + 1;
          const hasTitle = !!chapter.title;
          
          return hasTitle ? (
            <div key={index} className="dropdown-item"
              data-is-active={isActive}
              data-is-next={isNext}
              onClick={() => updatePlayerTime(chapter.startTime) }>
              <span className="position">
                {isActive && `${MSG_VIDEO_PLAYER_CURRENT_CHAPTER_LABEL}:`}
                {isNext && `${MSG_VIDEO_PLAYER_NEXT_CHAPTER_LABEL}:`}
              </span>
              {chapter.title}
            </div>
          ) : <></>;
        })}
      />

      <style jsx>{`
        .position {
          margin-right:.5rem;
          text-transform:uppercase;
          font-size:var(--fontSize-small);
          font-weight:bold;
          color:var(--textcolor-dark);
        }

        .dropdown-item:hover .position {
          color:var(--textcolor-inverted);
        }

        .dropdown-item[data-is-active="true"] {
          background:var(--textcolor-inverted);
        }
      `}</style> 
    </>
  );  
}