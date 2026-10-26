import Hi from './Hi';
import { pageMeta } from '../lib/meta';

export const metadata = pageMeta({
  title: 'Say hi',
  description: 'Press a button and an LED lights up on my real desk in Austin.',
  image: '/og/hi.jpg',
  path: '/hi',
});

export default Hi;
