import React, { MouseEvent } from 'react';
import cn from 'classnames';

interface IMoreProps {
  onClick: (e: MouseEvent) => void;
  classNames?: string;
}

export default function MoreButton({
  onClick,
  classNames,
  ...props
}: IMoreProps) {
  const defaultClass = 'flex justify-center items-center gap-0.5 py-2 pl-2';
  const wrapperClassNames = cn(defaultClass, classNames);

  const dotClassNames = 'w-1 h-1 rounded-full bg-gray1';

  return (
    <div onClick={onClick} className={wrapperClassNames} {...props}>
      <div className={dotClassNames} />
      <div className={dotClassNames} />
      <div className={dotClassNames} />
    </div>
  );
}
