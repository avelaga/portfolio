import Portfolio from './Portfolio';
import { pageMeta } from '../lib/meta';

export const metadata = pageMeta({
  title: 'Photography Portfolio',
  description: 'Selected works spanning photo series, portraits, night, and architectural photography.',
  image: '/og/portfolio.jpg',
  path: '/portfolio',
});

export default Portfolio;
