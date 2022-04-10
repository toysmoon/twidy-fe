import { FC } from 'react';

interface IButtonProps {
  type?: 'basic' | 'ghost' | 'disabled';
  label: string;
  loading?: boolean;
  onClick: () => void;
}

const Button: FC<IButtonProps> = ({
  type = 'basic',
  label,
  onClick,
  loading = false,
}) => {
  if (loading) {
    return (
      <button
        onClick={onClick}
        className={`px-5 py-2 h-9 rounded-full text-white font-nunito font-extrabold text-base ${buttonColor[type]}`}
      >
        'loading...'
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 h-9 rounded-full text-white font-nunito font-extrabold text-base ${buttonColor[type]}`}
    >
      {label}
    </button>
  );
};

const buttonColor = {
  basic: 'bg-primary',
  ghost: 'bg-white opacity-20',
  disabled: 'bg-gray5',
};

export default Button;
