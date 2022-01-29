import classNames from 'classnames';
import React from 'react';

export default function MockTab() {
  return (
    <nav className="flex justify-center my-5">
      <ul className="h-10 flex justify-center items-center rounded-full p-1 bg-tab">
        {tablist.map((tab, i) => (
          <li
            key={`tabitem-${tab}`}
            className={classNames(
              i === 0 ? 'bg-white' : 'bg-transparent',
              'w-36 h-8 flex justify-center items-center rounded-full font-extrabold text-base leading-5 text-primary'
            )}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
}

enum TAB_ITEM {
  MY_LIKES = 'MY LIKES',
  SAVED = 'SAVED',
}

const tablist: TAB_ITEM[] = [TAB_ITEM.MY_LIKES, TAB_ITEM.SAVED];
