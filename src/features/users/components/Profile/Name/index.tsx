import React, { FC } from 'react';

interface INameProps {}

const Name: FC<INameProps> = ({ children }) => (
  <h1 className="font-extrabold text-2xl text-white mt-5 mb-1">{children}</h1>
);

export default React.memo(Name);
