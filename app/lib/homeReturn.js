// Where to put the visitor back on the home page when they return from a project
// page. Home saves its scroll position whenever a link leads off the page; the
// back link marks that it's returning, and Home restores the spot. Session-only.

const SPOT = 'v3-home-spot';
const RETURNING = 'v3-home-returning';

const read = (key) => { try { return sessionStorage.getItem(key); } catch { return null; } };
const write = (key, value) => { try { value === null ? sessionStorage.removeItem(key) : sessionStorage.setItem(key, value); } catch {} };

export const saveHomeSpot = (y, fromHero) => write(SPOT, JSON.stringify({ y, fromHero }));

export function readHomeSpot() {
  try { return JSON.parse(read(SPOT)); } catch { return null; }
}

export const markReturning = () => write(RETURNING, '1');

// The saved spot, if the visitor just came back via a back link (one use only)
export function takeReturnSpot() {
  if (read(RETURNING) !== '1') return null;
  write(RETURNING, null);
  return readHomeSpot();
}
