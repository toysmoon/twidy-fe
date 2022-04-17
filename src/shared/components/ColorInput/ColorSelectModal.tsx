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
      <div className="p-4 flex flex-wrap justify-between">
        <div
          onClick={() => onChange(COLLECTION_COLOR.BLACK)}
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
          <p className="pt-2 text-center break-all">Black</p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.TWITTER)}
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
          <p className="pt-2 text-center break-all">Blue</p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.VIOLET)}
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
          <p className="pt-2 text-center break-all">Violet</p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.MINT)}
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
          <p className="pt-2 text-center break-all">Mint</p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.HEART)}
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
          <p className="pt-2 text-center break-all">Pink</p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.ORANGE)}
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
          <p className="pt-2 text-center break-all">Orange</p>
        </div>
        <div
          onClick={() => onChange(COLLECTION_COLOR.YELLOW)}
          className="pb-4 px-4 w-24"
        >
          <div
            className={`h-16 w-16 rounded-full relative border-4 ${
              color === COLLECTION_COLOR.YELLOW
                ? 'border-yellow'
                : 'border-white'
            }`}
          >
            <div
              className={`${centerClass} w-12 h-12 p-2 bg-yellow rounded-full`}
            />
            {color === COLLECTION_COLOR.YELLOW && (
              <div className={centerClass}>
                <Check />
              </div>
            )}
          </div>
          <p className="pt-2 text-center break-all">Lemon</p>
        </div>
      </div>
    </Modal>
  );
}
