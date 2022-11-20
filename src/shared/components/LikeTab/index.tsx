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
  const tablistClass = classNames('flex gap-6');

  return (
    <nav className="mx-4 pt-4">
      <ul className={tablistClass}>
        {tablist.map(tab => (
          <li
            key={`tab-item-${tab}`}
            onClick={() => router.replace(linkByTabItem[tab])}
            className={classNames(selectedTab !== tab && 'opacity-50', 'text-h3 text-white')}
          >
            {tab}
            {selectedTab === tab && (
              <div
                className={classNames(
                  selectedTab === tab ? 'bg-white' : 'bg-transparent',
                  'w-full h-1 mt-3 rounded-full'
                )}
              />
            )}
          </li>
        ))}
      </ul>
      <div className="bg-white opacity-50 w-full h-1px -mt-1px" />
    </nav>
  );
}

const tablist: TAB_ITEM[] = [TAB_ITEM.MY_LIKES, TAB_ITEM.SAVED];
