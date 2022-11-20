import { FC, useCallback } from 'react';
import { Spinner } from '../Icons';

interface IButtonProps {
  type?: 'basic' | 'ghost' | 'disabled' | 'confirm';
  label: string;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<IButtonProps> = ({ type = 'basic', label, onClick, disabled = false, loading = false }) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  if (loading) {
    return (
      <button
        disabled={disabled}
        className={`px-5 py-2 h-9 rounded-full text-white font-nunito font-extrabold text-base ${buttonColor[type]}`}
      >
        <div className="animate-spin">
          <Spinner />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`px-5 py-2 h-9 rounded-full text-white font-nunito font-extrabold text-base ${
        disabled ? buttonColor.disabled : buttonColor[type]
      }`}
    >
      {label}
    </button>
  );
};

const buttonColor = {
  basic: 'bg-primary',
  confirm: 'bg-gray1',
  ghost: 'bg-white opacity-20',
  disabled: 'bg-gray5',
};

export default Button;
