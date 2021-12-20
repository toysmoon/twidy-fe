import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import LINK from 'shared/constants/link';
import { colors } from 'shared/styles';

export enum TAB_ITEM {
  MY_LIKES = 'MY LIKES',
  SAVED = 'SAVED',
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

  return (
    <Nav>
      <Ul>
        {tablist.map((tab) => (
          <Item
            key={`tabitem-${tab}`}
            isSelected={selectedTab === tab}
            onClick={() => router.replace(linkByTabItem[tab])}
          >
            {tab}
          </Item>
        ))}
      </Ul>
    </Nav>
  );
}

const tablist: TAB_ITEM[] = [TAB_ITEM.MY_LIKES, TAB_ITEM.SAVED];

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Ul = styled.ul`
  width: 294px;
  height: 42px;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;

  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.15) 50%
  );
  border-radius: 100px;
`;

const Item = styled.li<{ isSelected: boolean }>`
  width: 143px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background-color: ${(p) => (p.isSelected ? colors.white : 'transparent')};

  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.gray1};
`;
