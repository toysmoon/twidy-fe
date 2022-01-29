import { atom } from 'recoil';

const dimState = atom({
  key: 'dimState',
  default: 0,
});

export { dimState };
