import styled from '@emotion/styled';
import { FC } from 'react';
import { Check } from 'shared/components/Icons';

interface IColorPicker {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: FC<IColorPicker> = ({ color, onChange }) => {
  return (
    <Wrapper>
      {colorList.map((c) => (
        <Item key={c} color={c} onClick={() => onChange(c)}>
          {color == c && <Check />}
        </Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  gap: 15px;

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(p) => p.color};
  border-radius: 50%;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const colorList = [
  '#FF508F',
  '#FFDC23',
  '#00C2B7',
  '#1DA1F2',
  '#745AFF',
  '#1D1D1F',
  '#E0E0E0',
];

export default ColorPicker;
