import React, { useCallback, useState } from 'react';
import { More } from 'shared/components/Icons';
import UserMenu from './UserMenu';

export default function PageMore() {
  const [isShowMenu, setShowMenu] = useState(false);
  const toggle = useCallback(() => setShowMenu(!isShowMenu), [isShowMenu]);

  return (
    <div className="w-10 h-10 relative">
      <More onClick={toggle} />
      {isShowMenu && <UserMenu onClose={toggle} />}
    </div>
  );
}
