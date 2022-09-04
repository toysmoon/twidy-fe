import { COLLECTION_COLOR } from 'features/cards/components/ColorPicker';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Check } from 'shared/components/Icons';
import Modal from 'shared/components/Modal';
import { themeState } from 'shared/states/themeState';

interface props {
  open: boolean;
  onClose: () => void;
  onSubmit: (c: COLLECTION_COLOR) => void;
}

export default function ChangeTheme({ open, onSubmit, onClose }: props) {
  const theme = useRecoilValue(themeState);
  const [color, setColor] = useState<COLLECTION_COLOR>(
    theme as COLLECTION_COLOR
  );

  const centerClass =
    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';
  return (
    <Modal isOpen={open} onClose={onClose}>
      <Modal.Header.TypeB
        left="Select Color"
        right="Apply"
        onClick={() => onSubmit(color)}
      />
      <div className="p-4 flex flex-wrap justify-between">
        <div
          onClick={() => setColor(COLLECTION_COLOR.BLACK)}
          className="pb-4 px-4 w-24"
        >
          <div
            className={`h-16 w-16 rounded-full relative border-4 ${
              color === COLLECTION_COLOR.BLACK ? 'border-black' : 'border-white'
            }`}
          >
            <div
              className={`${centerClass} w-12 h-12 p-2 bg-black rounded-full`}
            />
            {color === COLLECTION_COLOR.BLACK && (
              <div className={centerClass}>
                <Check />
              </div>
            )}
          </div>
          <p className="pt-2 text-center break-all">Air Black</p>
        </div>
        <div
          onClick={() => setColor(COLLECTION_COLOR.TWITTER)}
          className="pb-4 px-4 w-24"
        >
          <div
            className={`h-16 w-16 rounded-full relative border-4 ${
              color === COLLECTION_COLOR.TWITTER
                ? 'border-twitter'
                : 'border-white'
            }`}
          >
            <div
              className={`${centerClass} w-12 h-12 p-2 bg-twitter rounded-full`}
            />
            {color === COLLECTION_COLOR.TWITTER && (
              <div className={centerClass}>
                <Check />
              </div>
            )}
          </div>
          <p className="pt-2 text-center break-all">Twitter Blue</p>
        </div>
        <div
          onClick={() => setColor(COLLECTION_COLOR.VIOLET)}
          className="pb-4 px-4 w-24"
        >
          <div
            className={`h-16 w-16 rounded-full relative border-4 ${
              color === COLLECTION_COLOR.VIOLET
                ? 'border-violet'
                : 'border-white'
            }`}
          >
            <div
              className={`${centerClass} w-12 h-12 p-2 bg-violet rounded-full`}
            />
            {color === COLLECTION_COLOR.VIOLET && (
              <div className={centerClass}>
                <Check />
              </div>
            )}
          </div>
          <p className="pt-2 text-center break-all">Lucid Purple</p>
        </div>
        <div
          onClick={() => setColor(COLLECTION_COLOR.MINT)}
          className="pb-4 px-4 w-24"
        >
          <div
            className={`h-16 w-16 rounded-full relative border-4 ${
              color === COLLECTION_COLOR.MINT ? 'border-mint' : 'border-white'
            }`}
          >
            <div
              className={`${centerClass} w-12 h-12 p-2 bg-mint rounded-full`}
            />
            {color === COLLECTION_COLOR.MINT && (
              <div className={centerClass}>
                <Check />
              </div>
            )}
          </div>
          <p className="pt-2 text-center break-all">Mint Green</p>
        </div>
        <div
          onClick={() => setColor(COLLECTION_COLOR.HEART)}
          className="pb-4 px-4 w-24"
        >
          <div
            className={`h-16 w-16 rounded-full relative border-4 ${
              color === COLLECTION_COLOR.HEART ? 'border-heart' : 'border-white'
            }`}
          >
            <div
              className={`${centerClass} w-12 h-12 p-2 bg-heart rounded-full`}
            />
            {color === COLLECTION_COLOR.HEART && (
              <div className={centerClass}>
                <Check />
              </div>
            )}
          </div>
          <p className="pt-2 text-center break-all">Strawberry Pink</p>
        </div>
        <div
          onClick={() => setColor(COLLECTION_COLOR.ORANGE)}
          className="pb-4 px-4 w-24"
        >
          <div
            className={`h-16 w-16 rounded-full relative border-4 ${
              color === COLLECTION_COLOR.ORANGE
                ? 'border-orange'
                : 'border-white'
            }`}
          >
            <div
              className={`${centerClass} w-12 h-12 p-2 bg-orange rounded-full`}
            />
            {color === COLLECTION_COLOR.ORANGE && (
              <div className={centerClass}>
                <Check />
              </div>
            )}
          </div>
          <p className="pt-2 text-center break-all">Yummy Orange</p>
        </div>
      </div>
    </Modal>
  );
}
