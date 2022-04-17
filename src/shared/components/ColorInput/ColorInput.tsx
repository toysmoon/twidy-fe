import { COLLECTION_COLOR } from 'features/cards/components/ColorPicker';
import { useCallback, useState } from 'react';
import { ArrowRight } from '../Icons';
import ColorSelectModal from './ColorSelectModal';

interface Props {
  value: COLLECTION_COLOR;
  onChange: (value: COLLECTION_COLOR) => void;
}

export default function ColorInput({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = useCallback(
    (value: COLLECTION_COLOR) => {
      onChange(value);
      setIsOpen(false);
    },
    [onChange, setIsOpen]
  );

  return (
    <>
      <div
        className="flex justify-between items-center h-10"
        onClick={() => setIsOpen(true)}
      >
        <p className="font-bold text-base text-gray1">Color</p>
        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full bg-${value}`} />
          <ArrowRight width={24} height={24} color="#A1A1A6" />
        </div>
      </div>
      <ColorSelectModal
        color={value}
        open={isOpen}
        onChange={handleChange}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
