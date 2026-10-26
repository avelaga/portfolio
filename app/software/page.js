import { redirect } from 'next/navigation';

// V2's Software page became The World Misses You's project page
export default function Software() {
  redirect('/the-world-misses-you');
}
