import { FC } from 'react';

export interface IModalButtonProps {
  label: string;
  isLoading?: boolean;
  onClick: () => void;
}

const ModalButton: FC<IModalButtonProps> = ({ onClick, label, isLoading }) => {
  if (isLoading) {
    return (
      <div className="absolute bottom-10 left-0 right-0 px-5">
        <button className="w-full h-16 rounded-full bg-primary">
          <label className="font-bold text-xl text-center text-white">
            loading...
          </label>
        </button>
      </div>
    );
  }

  return (
    <div className="absolute bottom-10 left-0 right-0 px-5">
      <button onClick={onClick} className="w-full h-16 rounded-full bg-primary">
        <label className="font-bold text-xl text-center text-white">
          {label}
        </label>
      </button>
    </div>
  );
};

export default ModalButton;
