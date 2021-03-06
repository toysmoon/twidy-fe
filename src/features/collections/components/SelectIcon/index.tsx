import React, { FC, useCallback, useState } from 'react';
import { Edit } from 'shared/components/Icons';
import Emoji from 'shared/components/Modal/Emoji';
import TwitterEmoji from 'shared/components/TwitterEmoji';

interface IFolderIconProps {
  icon: string;
  color: string;
  onChange: (icon: string) => void;
}

const SelectIcon: FC<IFolderIconProps> = ({ icon, color, onChange }) => {
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleEdit = useCallback(() => setOpenEmoji(true), []);
  const handleClose = useCallback(() => setOpenEmoji(false), []);
  const handleSelect = useCallback(
    (emoji: string) => {
      handleClose();
      onChange(emoji);
    },
    [onChange]
  );

  return (
    <div className="flex justify-center items-center mt-4 mb-6 mx-auto">
      <div
        className={`w-16 h-16 relative rounded-full flex justify-center items-center text-3xl bg-${color}`}
      >
        <TwitterEmoji value={icon} size={32} />
        <div
          onClick={handleEdit}
          className="w-6 h-6 rounded-full bg-gray1 absolute -right-1 -bottom-1 flex justify-center items-center"
        >
          <Edit />
        </div>
      </div>
      <Emoji isOpen={openEmoji} onSelect={handleSelect} onClose={handleClose} />
    </div>
  );
};

export default SelectIcon;
