import React from 'react';

interface IMoreProps {
  onClick: () => void;
  classNames?: string;
}

export default function More({ onClick, classNames, ...props }: IMoreProps) {
  const wrapperClassNames =
    'flex justify-center items-center gap-0.5 absolute top-6 right-6' +
    (classNames ?? '');

  const dotClassNames = 'w-1 h-1 rounded-full bg-gray-300';

  return (
    <div onClick={onClick} className={wrapperClassNames} {...props}>
      <div className={dotClassNames} />
      <div className={dotClassNames} />
      <div className={dotClassNames} />
    </div>
  );
}
