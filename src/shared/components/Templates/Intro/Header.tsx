import { Logo } from 'shared/components/Icons';
import Twidy from 'shared/components/Icons/Twidy';

export default function Header({ onClick }: { onClick: () => void }) {
  return (
    <div className="w-full h-16 flex justify-between items-center px-5 border-b border-b-gray3 fixed top-0 bg-gray1 z-10">
      <div className="flex items-center">
        <Logo />
        <Twidy />
      </div>
      <button
        onClick={onClick}
        className="w-19 h-8 font-nunito rounded-full bg-white text-sm text-gray1 font-bold"
      >
        Sign In
      </button>
    </div>
  );
}
