import React from 'react';
import { Item, Nav, Ul } from './style';

export default function MockTab() {
  return (
    <Nav>
      <Ul>
        {tablist.map((tab, i) => (
          <Item key={`tabitem-${tab}`} isSelected={i === 0}>
            {tab}
          </Item>
        ))}
      </Ul>
    </Nav>
  );
}

enum TAB_ITEM {
  MY_LIKES = 'MY LIKES',
  SAVED = 'SAVED',
}

const tablist: TAB_ITEM[] = [TAB_ITEM.MY_LIKES, TAB_ITEM.SAVED];
