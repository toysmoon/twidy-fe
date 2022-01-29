import React, { FC } from 'react';

interface INameProps {}

const Name: FC<INameProps> = ({ children }) => (
  <span className="font-bold text-sm leading-4 text-black">{children}</span>
);

export default React.memo(Name);
