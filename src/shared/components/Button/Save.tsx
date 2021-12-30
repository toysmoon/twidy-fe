import { FC } from 'react';

interface ISaveProps {
  onClick: () => void;
}

const Save: FC<ISaveProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-24 h-10 rounded-full text-white bg-primary font-bold"
    >
      SAVE
    </button>
  );
};

export default Save;
