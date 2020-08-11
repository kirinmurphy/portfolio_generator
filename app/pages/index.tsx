import React from 'react'; 

import portfolioData from '../viewModel/portfolioData';

import { Layout } from '../components/Layout';
import { Portfolio } from '../components/portfolio/Portfolio';
import { PortfolioAnimator } from '../components/portfolio/PortfolioAnimator';
import { LooseObject } from '../components/types/global';

interface Props {
  portfolioData: string;
}

export default function Page ({ portfolioData }: Props): JSX.Element { 
  return (
    <Layout>
      <PortfolioAnimator>
        <Portfolio portfolioData={JSON.parse(portfolioData)} />
      </PortfolioAnimator>
    </Layout>
  );
}


// ??? - https://dev.to/ryyppy/reason-records-nextjs-undefined-and-getstaticprops-5d46
export async function getStaticProps (): Promise<LooseObject> {
  return {
    props: {
      portfolioData: JSON.stringify(portfolioData)
    }
  }
}

// ??? - this was the first way I tried it, but it didn't work quite right on netlify :head-scratch:
// and you need the absolute path which is clumsy at best
// And in the next.js docs say otherwise too?
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
// "You should not fetch an API route from getStaticProps 
//   — instead, you can write the server-side code directly in getStaticProps."
// 
// export async function getStaticProps() {
//   const res = await fetch(`${server}/api/projects`);
//   const portfolioData = await res.json();

//   return {
//     props: {
//       portfolioData,
//     },
//   }
// }
