import { useRecoilValue } from 'recoil';
import useScrollLock from 'shared/hooks/useScrollLock';
import { dimState } from 'shared/states/dimState';

export default function Dim() {
  const isOpen = useRecoilValue(dimState);
  useScrollLock(isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={
        'fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-10'
      }
    />
  );
}
