import React, { FC } from 'react';

interface INameProps {}

const Name: FC<INameProps> = ({ children }) => (
  <span className="font-apple font-bold text-sm leading-4 text-black mr-1 ml-3">
    {children}
  </span>
);

export default React.memo(Name);
