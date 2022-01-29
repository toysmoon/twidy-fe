import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { dimState } from 'shared/states/dimState';

export default function useDim(isOpen: boolean) {
  const [dimCount, setDimState] = useRecoilState(dimState);

  useEffect(() => {
    if (isOpen) {
      setDimState(dimCount + 1);
    } else if (dimCount > 0) {
      setDimState(dimCount - 1);
    }
    return () => {
      isOpen && dimCount > 0 && setDimState(dimCount - 1);
    };
  }, [isOpen]);
}
