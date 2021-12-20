import { Error } from 'shared/api/types';
import { atom } from 'recoil';

const errorState = atom<Error>({
  key: 'errorState',
  default: {
    code: 0,
    msg: '',
    data: '',
  },
});

export { errorState };
