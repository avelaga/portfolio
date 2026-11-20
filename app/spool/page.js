import Spool from './Spool';
import { pageMeta } from '../lib/meta';

export const metadata = pageMeta({
  title: 'Spool',
  description: 'A calm, self-hosted viewer for my film photography archive, running on a Raspberry Pi next to the NAS that holds it.',
  image: '/og/spool.jpg',
  path: '/spool',
});

export default Spool;
