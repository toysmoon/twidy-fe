import React, { FC } from 'react';

interface INameProps {}

const Name: FC<INameProps> = ({ children }) => <h1 className="text-h1 text-white">{children}</h1>;

export default React.memo(Name);
