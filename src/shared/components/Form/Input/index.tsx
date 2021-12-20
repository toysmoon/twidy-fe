import styled from '@emotion/styled';
import { ChangeEvent, FC, useCallback } from 'react';
import { colors } from 'shared/styles';

export interface IInputProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
}

const Input: FC<IInputProps> = ({ value, onChange, placeholder }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
    []
  );

  return (
    <StyledInput
      data-testid="input"
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  padding: 16px 20px;
  box-sizing: border-box;

  border: none;
  border-radius: 12px;
  background-color: ${colors.gray6};

  :focus-visible {
    outline: none;
  }

  font-family: Roboto;
  font-size: 16px;
  line-height: 22px;

  ::placeholder {
    color: ${colors.gray4};
  }
`;

export default Input;
