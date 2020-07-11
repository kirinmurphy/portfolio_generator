import React from 'react';

import { SkillsetProps } from '../types/portfolio';

import { breakpointMobile, breakpointDesktop } from '../css/cssVariables';
import { Markdownizer } from '../widgets/Markdownizer';
import { SkillsetFeaturedProject } from './SkillsetFeaturedProject';

interface Props {
  skillset: SkillsetProps;
};

export const Skillset:React.FC<Props> = ({ skillset }) => {
  const {
    title,
    intro,
    featured
  } = skillset;

  return (
    <>
      <div className="skillset">
        <header>
          <h2>{title}</h2>
        </header>

        <div className="content">
          {intro && (
            <div className="intro panel panel--inverted">
              <Markdownizer source={intro} />
            </div>
          )}

          {featured && (
            <ul className="skillset-featured-projects"
              featured-count={featured.length}>

              {featured.map((skillsetProject, index) => (
                <li key={index}>
                  <SkillsetFeaturedProject featured={skillsetProject} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      <style jsx>{`
        h2 {
          font-size:var(--fontSize-title-big);
        }

        .intro {
          font-size:var(--fontSize-bump);
          margin-bottom:var(--paragraph-bottom-margin);
        }

        li {
          width:100%;
        }

        ul {
          list-style-type: none;
          margin:0;
          padding:0;
        }

        ul[featured-count="4"] li {
          height:var(--height-skillsetFeaturedItem-4);
        }

        ul[featured-count="6"] li,
        ul[featured-count="6"] li {
          height:var(--height-skillsetFeaturedItem-6);
        }

        li {
          margin-bottom:1rem;
        }

        @media(min-width:${breakpointMobile}) {
          ul {
            display:flex;
            flex-wrap:wrap;
          }

          li {
            width:49%;
            margin-right:2%;
          }

          li:nth-child(2n) {
            margin-right:0;
          }

          .skillset :global([data-featured-project="festivalmode"] img) {
            transform:translateY(-20px);
          }
        }

        @media(min-width:${breakpointDesktop}) {
          ul[featured-count="4"] li {
            width:24%;
            margin-right:1.333%;
          }
    
          ul[featured-count="3"] li,
          ul[featured-count="6"] li {
            width:32%;
            margin-right:2%;
          }
  
          ul[featured-count="4"] li:last-of-type,
          ul[featured-count="6"] li:nth-of-type(3n),
          ul[featured-count="6"] li:nth-of-type(3n) {
            margin-right:0;
          }

          .skillset :global([data-featured-project="festivalmode"] img) {
            transform:translateY(0);
          }
        }
      `}
      </style>
    </>
  );
};
