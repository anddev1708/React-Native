import { BACK, TOGGLE_DRAWER } from './Types';

export function back() {
  return { type: BACK };
}

export function toggleDrawer() {
  return { type: TOGGLE_DRAWER };
}