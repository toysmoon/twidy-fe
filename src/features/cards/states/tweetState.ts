import type Card from 'features/cards/types/Card';
import { atom } from 'recoil';

interface ICardState {
  open: boolean;
  isViewMode: boolean;
  card?: Card;
}

const cardState = atom<ICardState>({
  key: 'cardState',
  default: {
    open: false,
    isViewMode: false,
  },
});

export { cardState };
