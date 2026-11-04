import Portraits from './Portraits';
import { pageMeta } from '../lib/meta';

export const metadata = pageMeta({
  title: 'Portrait Work',
  description: 'A selection of commissioned and personal portrait work.',
  image: '/og/portraits.jpg',
  path: '/portraits',
});

export default Portraits;
