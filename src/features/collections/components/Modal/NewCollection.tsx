import PlusIcon from './PlusIcon';

export default function NewCollection({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex py-5 mx-5 items-center justify-between border-b border-gray6"
    >
      <div className="flex items-center">
        <div
          className={`w-6 h-6 shrink-0 rounded-full relative flex justify-center items-center text-base bg-gray6`}
        >
          <PlusIcon />
        </div>
        <p className="font-bold text-base leading-5 text-gray4 ml-2 mr-1">
          New Collection
        </p>
      </div>
    </div>
  );
}
