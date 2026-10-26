import Portfolio from './Portfolio';
import { pageMeta } from '../lib/meta';

export const metadata = pageMeta({
  title: 'Photography Portfolio',
  description: 'Selected film photographs: people and the rooms they live in.',
  image: '/og/portfolio.jpg',
  path: '/portfolio',
});

export default Portfolio;
