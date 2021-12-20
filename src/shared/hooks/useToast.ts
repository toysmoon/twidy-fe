import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { toastState } from 'shared/states/toastState';

const useToast = () => {
  const [timeoutkey, setTimeoutkey] = useState<NodeJS.Timeout>();
  const [toast, setTosat] = useRecoilState(toastState);

  const open = useCallback(
    (message: string) => setTosat({ open: true, message }),
    [toast]
  );

  useEffect(() => {
    timeoutkey && clearTimeout(timeoutkey);
    setTimeoutkey(
      setTimeout(() => setTosat({ open: false, message: '' }), 1500)
    );
  }, [toast]);

  return open;
};

export default useToast;
