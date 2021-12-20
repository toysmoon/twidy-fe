import { atom } from 'recoil';

const dimState = atom({
  key: 'dimState',
  default: false,
});

export { dimState };
