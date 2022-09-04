import classNames from 'classnames';
import { useRouter } from 'next/router';
import LINK from 'shared/constants/link';

export enum TAB_ITEM {
  MY_LIKES = 'My likes',
  SAVED = 'Collection',
}

export const tabItemByLInk = {
  [LINK.ROOT]: TAB_ITEM.MY_LIKES,
  [LINK.COLLECTIONS]: TAB_ITEM.SAVED,
};

export const linkByTabItem = {
  [TAB_ITEM.MY_LIKES]: LINK.ROOT,
  [TAB_ITEM.SAVED]: LINK.COLLECTIONS,
};

interface ILikeTab {
  isCollections?: boolean;
}

export default function LikeTab({ isCollections }: ILikeTab) {
  const router = useRouter();
  const selectedTab = isCollections ? TAB_ITEM.SAVED : TAB_ITEM.MY_LIKES;
  const tablistClass = classNames(
    'h-10 flex justify-center items-center rounded-full p-1 bg-tab'
  );

  return (
    <nav className="flex justify-center my-5">
      <ul className={tablistClass}>
        {tablist.map((tab) => (
          <li
            key={`tabitem-${tab}`}
            onClick={() => router.replace(linkByTabItem[tab])}
            className={classNames(
              selectedTab === tab ? 'bg-white' : 'bg-transparent',
              'w-28 h-8 flex justify-center items-center rounded-full text-h4'
            )}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const tablist: TAB_ITEM[] = [TAB_ITEM.MY_LIKES, TAB_ITEM.SAVED];
