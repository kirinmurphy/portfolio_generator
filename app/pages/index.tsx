import React from 'react'; 

import portfolioData from '../viewModel/portfolioData';

import { Layout } from '../components/Layout';
import { Portfolio } from '../components/portfolio/Portfolio';
import { PortfolioAnimator } from '../components/portfolio/PortfolioAnimator';

export default function Page (): JSX.Element {  
  return (
    <Layout>
      <PortfolioAnimator>
        <Portfolio portfolioData={portfolioData} />
      </PortfolioAnimator>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${server}/api/projects`);
//   const portfolioData = await res.json();

//   return {
//     props: {
//       portfolioData,
//     },
//   }
// }

// Page.getInitialProps = async ({ res, req }) => {
//   console.log('eee', req.headers['user-agent']);
//   return {};
// };

