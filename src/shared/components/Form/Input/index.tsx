import { ChangeEvent, FC, useCallback } from 'react';

export interface IInputProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  maxLength?: number;
}

const Input: FC<IInputProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
}) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
    []
  );

  return (
    <input
      data-testid="input"
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full h-14 py-4 px-5 rounded-xl bg-gray6 focus:outline-none text-base placeholder:text-gary4"
    />
  );
};

export default Input;
