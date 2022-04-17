import classNames from 'classnames';
import { FC } from 'react';
import { Check } from 'shared/components/Icons';

interface IColorPicker {
  color: COLLECTION_COLOR;
  onChange: (color: COLLECTION_COLOR) => void;
}

const ColorPicker: FC<IColorPicker> = ({ color, onChange }) => {
  const colorItemClass =
    'w-8 h-8 rounded-full shrink-0 flex justify-center items-center';

  return (
    <div className="my-8 flex justify-center gap-4 overflow-scroll hide-scrollbar">
      <div
        onClick={() => onChange(COLLECTION_COLOR.HEART)}
        className={classNames(colorItemClass, 'bg-heart')}
      >
        {color == COLLECTION_COLOR.HEART && <Check />}
      </div>
      <div
        onClick={() => onChange(COLLECTION_COLOR.YELLOW)}
        className={classNames(colorItemClass, 'bg-yellow')}
      >
        {color == COLLECTION_COLOR.YELLOW && <Check />}
      </div>
      <div
        onClick={() => onChange(COLLECTION_COLOR.MINT)}
        className={classNames(colorItemClass, 'bg-mint')}
      >
        {color == COLLECTION_COLOR.MINT && <Check />}
      </div>
      <div
        onClick={() => onChange(COLLECTION_COLOR.TWITTER)}
        className={classNames(colorItemClass, 'bg-twitter')}
      >
        {color == COLLECTION_COLOR.TWITTER && <Check />}
      </div>
      <div
        onClick={() => onChange(COLLECTION_COLOR.VIOLET)}
        className={classNames(colorItemClass, 'bg-violet')}
      >
        {color == COLLECTION_COLOR.VIOLET && <Check />}
      </div>
      <div
        onClick={() => onChange(COLLECTION_COLOR.BLACK)}
        className={classNames(colorItemClass, 'bg-black')}
      >
        {color == COLLECTION_COLOR.BLACK && <Check />}
      </div>
      <div
        onClick={() => onChange(COLLECTION_COLOR.GRAY)}
        className={classNames(colorItemClass, 'bg-gray5')}
      >
        {color == COLLECTION_COLOR.GRAY && <Check />}
      </div>
    </div>
  );
};

export enum COLLECTION_COLOR {
  HEART = 'heart',
  YELLOW = 'yellow',
  MINT = 'mint',
  TWITTER = 'twitter',
  VIOLET = 'violet',
  BLACK = 'black',
  ORANGE = 'orange',
  GRAY = 'gray5',
}

export default ColorPicker;
