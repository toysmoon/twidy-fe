import React from 'react';
import cn from 'classnames';

interface IMoreProps {
  onClick: () => void;
  classNames?: string;
}

export default function MoreButton({
  onClick,
  classNames,
  ...props
}: IMoreProps) {
  const defaultClass = 'flex justify-center items-center gap-0.5';
  const wrapperClassNames = cn(defaultClass, classNames);

  const dotClassNames = 'w-1 h-1 rounded-full bg-gray-300';

  return (
    <div onClick={onClick} className={wrapperClassNames} {...props}>
      <div className={dotClassNames} />
      <div className={dotClassNames} />
      <div className={dotClassNames} />
    </div>
  );
}
