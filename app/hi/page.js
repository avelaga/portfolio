import Hi from './Hi';
import { pageMeta } from '../lib/meta';

export const metadata = pageMeta({
  title: 'Say hi',
  description: 'Click this button to light up an LED at my desk and say hi.',
  image: '/og/hi.jpg',
  path: '/hi',
});

export default Hi;
