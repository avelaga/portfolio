import About from './About';
import { pageMeta } from '../lib/meta';

export const metadata = pageMeta({
  title: 'About',
  description: 'Creative and software engineer in Austin, TX.',
  image: '/og/about.jpg',
  path: '/about',
});

export default About;
