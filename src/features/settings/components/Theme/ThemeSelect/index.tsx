import cn from 'classnames';
import React from 'react';
import { colors } from 'shared/styles';

interface IThemeSelect {
  value: string;
  onChange: (color: string) => void;
}

export default function ThemeSelect({ onChange }: IThemeSelect) {
  const wrapperCn = cn(
    'h-24',
    'flex',
    'flex-nowrap',
    'gap-8',
    'pt-5',
    'px-6',
    'overflow-x-auto',
    'hide-scrollbar'
  );

  return (
    <div
      className={cn(
        'absolute bottom-0',
        'w-full max-w-xl h-40',
        'flex flex-col-reverse',
        'bg-gradient-to-b from-transparent to-black'
      )}
    >
      <div className={wrapperCn}>
        {colorList.map(({ value }) => (
          <div
            key={`color-${value}`}
            onClick={() => onChange(value)}
            className={`w-10 h-10 bg-${value} border-4 border-white rounded-full shrink-0`}
          />
        ))}
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
