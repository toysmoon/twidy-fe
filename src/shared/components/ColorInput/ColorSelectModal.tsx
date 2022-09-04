import { COLLECTION_COLOR } from 'features/cards/components/ColorPicker';
import { Check } from '../Icons';
import Modal from '../Modal';

interface props {
  open: boolean;
  color: COLLECTION_COLOR;
  onClose: () => void;
  onChange: (c: COLLECTION_COLOR) => void;
}

export default function ColorSelectModal({
  open,
  onChange,
  onClose,
  color,
}: props) {
  const centerClass =
    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';
  return (
    <Modal isOpen={open}>
      <Modal.Header.TypeC left="Select Color" onCancel={onClose} />
      <div className="p-4 grid grid-cols-4 justify-between">
        <div
          onClick={() => onChange(COLLECTION_COLOR.BLACK)}
          className="flex flex-col items-center pb-4"
        >
          <div
            className={`h-12 w-12 rounded-full relative border-4 ${
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
          <p
            className={`w-12 pt-2 text-center text-caption-tiny break-words ${
              color === COLLECTION_COLOR.BLACK ? 'text-gray1' : 'text-gray3'
            }`}
          >
            Air Black
          </p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.TWITTER)}
          className="flex flex-col items-center pb-4"
        >
          <div
            className={`h-12 w-12 rounded-full relative border-4 ${
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
          <p
            className={`w-12 pt-2 text-center text-caption-tiny break-words ${
              color === COLLECTION_COLOR.TWITTER ? 'text-gray1' : 'text-gray3'
            }`}
          >
            Twitter Blue
          </p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.VIOLET)}
          className="flex flex-col items-center pb-4"
        >
          <div
            className={`h-12 w-12 rounded-full relative border-4 ${
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
          <p
            className={`w-12 pt-2 text-center text-caption-tiny break-words ${
              color === COLLECTION_COLOR.VIOLET ? 'text-gray1' : 'text-gray3'
            }`}
          >
            Lucid Purple
          </p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.MINT)}
          className="flex flex-col items-center pb-4"
        >
          <div
            className={`h-12 w-12 rounded-full relative border-4 ${
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
          <p
            className={`w-12 pt-2 text-center text-caption-tiny break-words ${
              color === COLLECTION_COLOR.MINT ? 'text-gray1' : 'text-gray3'
            }`}
          >
            Mint Green
          </p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.HEART)}
          className="flex flex-col items-center pb-4"
        >
          <div
            className={`h-12 w-12 rounded-full relative border-4 ${
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
          <p
            className={`w-12 pt-2 text-center text-caption-tiny break-words ${
              color === COLLECTION_COLOR.HEART ? 'text-gray1' : 'text-gray3'
            }`}
          >
            Strawberry Pink
          </p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.ORANGE)}
          className="flex flex-col items-center pb-4"
        >
          <div
            className={`h-12 w-12 rounded-full relative border-4 ${
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
          <p
            className={`w-12 pt-2 text-center text-caption-tiny break-words ${
              color === COLLECTION_COLOR.ORANGE ? 'text-gray1' : 'text-gray3'
            }`}
          >
            Yummy Orange
          </p>
        </div>
      </div>
    </Modal>
  );
}
