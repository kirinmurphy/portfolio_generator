import portfolioData from '../../viewModel/portfolioData';

import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(portfolioData);
};