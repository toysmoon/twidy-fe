import cn from 'classnames';
import React from 'react';
import { colors } from 'shared/styles';
import { Background, ColorButton, ColorWrapper } from './style';

interface IThemeSelect {
  value: string;
  onChange: (color: string) => void;
}

export default function ThemeSelect({ value, onChange }: IThemeSelect) {
  const wrapperCn = cn(
    'flex',
    'flex-nowrap',
    'gap-8',
    'pt-5',
    'px-6',
    'overflow-x-auto'
  );

  const color = colorList.find((item) => item.value === value)?.color;

  return (
    <div className={cn('absolute', 'bottom-0', 'left-0', 'right-0')}>
      <Background color={color} />
      <div>
        <ColorWrapper color={color} className={wrapperCn}>
          {colorList.map(({ color, value }) => (
            <ColorButton
              key={`color-${value}`}
              color={color}
              onClick={() => onChange(value)}
            />
          ))}
        </ColorWrapper>
      </div>
    </div>
  );
}

const colorList = [
  { value: 'black', color: colors.black },
  { value: 'violet', color: colors.violet },
  { value: 'twitter', color: colors.twitter },
  { value: 'mint', color: colors.mint },
  { value: 'orange', color: colors.orange },
  { value: 'heart', color: colors.heart },
  { value: 'yellow', color: colors.yellow },
];
