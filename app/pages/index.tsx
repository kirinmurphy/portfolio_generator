import portfolioData from '../viewModel/portfolioData';

import { Layout } from '../components/Layout';
import { Portfolio } from '../components/portfolio/Portfolio';
import { PortfolioAnimator } from '../components/portfolio/PortfolioAnimator';

const Page = () => {
  if (typeof(Window) !== 'undefined') {
    const currentBrowser = window.navigator.userAgent;
    const isIE = /MSIE/.test(currentBrowser);
    if ( isIE ) { window.document.location.href = '/unsupported'; }
  }
  
  return (
    <Layout>
      <PortfolioAnimator>
        <Portfolio portfolioData={portfolioData} />
      </PortfolioAnimator>
    </Layout>
  );
};

// export async function getStaticProps() {
//   const res = await fetch(`${server}/api/projects`);
//   const portfolioData = await res.json();

//   return {
//     props: {
//       portfolioData,
//     },
//   }
// }



// getStaticProps = () => {

// };

// Page.getInitialProps = async ({ res, req }) => {
//   console.log('eee', req.headers['user-agent']);
//   return {};
// };

export default Page;
