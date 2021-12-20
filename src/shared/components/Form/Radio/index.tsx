import classNames from 'classnames';
import { FC } from 'react';

interface IRadioElemnt {
  checked: boolean;
}

interface IRadioProps extends IRadioElemnt {
  onChange: (checked: boolean) => void;
}

const Radio: FC<IRadioProps> = ({ checked, onChange }) => {
  const checkedStyle = checked
    ? 'bg-twitter justify-end'
    : 'bg-gray5 justify-start';

  const wrapperClass = classNames(
    'w-14 h-8 px-1 box-border rounded-full flex items-center',
    checkedStyle
  );

  return (
    <div onClick={() => onChange(!checked)} className={wrapperClass}>
      <div className="w-6 h-6 rounded-xl bg-white shadow-md" />
    </div>
  );
};

// box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);

export default Radio;
