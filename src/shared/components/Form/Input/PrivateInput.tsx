import { FC } from 'react';
import Radio from 'shared/components/Form/Radio';

interface IPrivateInputProps {
  isPrivate: boolean;
  onChange: (isPrivate: boolean) => void;
}

const PrivateInput: FC<IPrivateInputProps> = ({ isPrivate, onChange }) => {
  return (
    <div className="flex justify-between items-center h-10">
      <div className="font-bold text-base flex items-center h-5">Private</div>
      <Radio checked={isPrivate} onChange={onChange} />
    </div>
  );
};

export default PrivateInput;
