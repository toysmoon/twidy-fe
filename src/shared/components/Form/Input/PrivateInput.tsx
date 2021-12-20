import { FC } from 'react';
import Radio from 'shared/components/Form/Radio';
import { Lock } from 'shared/components/Icons';
import { colors } from 'shared/styles';

interface IPrivateInputProps {
  isPrivate: boolean;
  onChange: (isPrivate: boolean) => void;
}

const PrivateInput: FC<IPrivateInputProps> = ({ isPrivate, onChange }) => {
  const label = isPrivate ? 'private on' : 'private off';
  return (
    <div className="flex justify-between items-center m-5">
      <div className="font-bold text-base uppercase flex items-center h-5">
        <Lock width={20} height={20} color={colors.gray1} />
        {label}
      </div>
      <Radio checked={isPrivate} onChange={onChange} />
    </div>
  );
};

export default PrivateInput;
