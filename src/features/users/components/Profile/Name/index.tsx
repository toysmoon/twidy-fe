import React, { FC } from 'react';

interface INameProps {}

const Name: FC<INameProps> = ({ children }) => (
  <h1 className="font-nunito font-extrabold text-2xl text-white px-10 text-center">{children}</h1>
);

export default React.memo(Name);
