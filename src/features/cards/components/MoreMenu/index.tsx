import cn from 'classnames';
import React, { useMemo } from 'react';
import Modal from 'shared/components/Modal';
import MenuItem from './MenuItem';

export interface IMoreMenu {
  onClose: () => void;
  onClick: (step: number) => void;
  onDelete: () => void;
}

export default function MoreMenu({ onClose, onClick, onDelete }: IMoreMenu) {
  const menuList = useMemo(
    () => [
      { label: 'Edit or add title for this tweet', onClick: () => onClick(3) },
      { label: 'Move this tweet to other folder', onClick: () => onClick(4) },
      { label: 'Delete this tweet', onClick: onDelete, isWarning: true },
    ],
    []
  );

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="p-5">
        <ul className={cn('flex', 'flex-col', 'gap-2.5')}>
          {menuList.map(({ label, onClick, isWarning }, i) => (
            <MenuItem
              key={i}
              label={label}
              onClick={onClick}
              isWarning={isWarning}
            />
          ))}
        </ul>
      </div>
    </Modal>
  );
}
