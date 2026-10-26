import { redirect } from 'next/navigation';

// V2's single music page is split into one page per featured project; old links land on Indulgent
export default function Music() {
  redirect('/music/indulgent');
}
