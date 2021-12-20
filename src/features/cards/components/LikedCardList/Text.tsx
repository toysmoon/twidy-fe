import React, { FC } from 'react';

interface ITwitProps {}

const Twit: FC<ITwitProps> = ({ children }) => (
  <div className="mt-2">
    <span className="leading-5 text-black whitespace-pre-wrap">{children}</span>
  </div>
);

export default React.memo(Twit);
