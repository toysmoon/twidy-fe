import { atom } from 'recoil';

const toastState = atom({
  key: 'toastState',
  default: {
    open: false,
    message: '',
  },
});

export { toastState };
