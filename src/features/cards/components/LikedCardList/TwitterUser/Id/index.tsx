import React, { FC } from 'react';

interface IIdProps {
  id: string;
}

const Id: FC<IIdProps> = ({ id }) => (
  <span className="text-xs leading-4 text-gray3">{`@${id}`}</span>
);

export default React.memo(Id);
