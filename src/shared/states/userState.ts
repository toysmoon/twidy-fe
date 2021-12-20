import { User } from 'shared/api/types';
import { atom } from 'recoil';

const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export { userState };
