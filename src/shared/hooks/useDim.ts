import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { dimState } from 'shared/states/dimState';

export default function useDim(isOpen: boolean) {
  const [, setDimState] = useRecoilState(dimState);
  useEffect(() => {
    setDimState(isOpen);
    return () => setDimState(false);
  }, [isOpen]);
}
