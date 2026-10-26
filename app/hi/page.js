import Hi from './Hi';
import { pageMeta } from '../lib/meta';

export const metadata = pageMeta({
  title: 'Say hi',
  description: 'hi, welcome to my site. clicking this button runs an animation on the led strip at my desk',
  image: '/og/hi.jpg',
  path: '/hi',
});

export default Hi;
