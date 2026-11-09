import Pebble from './Pebble';
import { pageMeta } from '../lib/meta';

export const metadata = pageMeta({
  title: 'Pebble',
  description: 'A minimal blog tool I built to run without a server or a monthly bill. It runs a client’s blog today.',
  image: '/og/pebble.jpg',
  path: '/pebble',
});

export default Pebble;
