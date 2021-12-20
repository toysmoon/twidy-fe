import {
  tabItemByLInk,
  linkByTabItem,
  TAB_ITEM,
} from 'shared/components/LikeTab';
import LINK from 'shared/constants/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export default function useLikeTab() {
  const router = useRouter();
  const { pathname } = router;

  const selectedTab = useMemo(() => tabItemByLInk[pathname as LINK], [
    pathname,
  ]);

  const onChangeTab = useCallback(
    (tab: TAB_ITEM) => router.replace(linkByTabItem[tab]),
    [router]
  );

  return { selectedTab, onChangeTab };
}
