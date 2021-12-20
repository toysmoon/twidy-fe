import styled from '@emotion/styled';
import React, { FC, useCallback, useState } from 'react';
import { Edit } from 'shared/components/Icons';
import { Emoji } from 'shared/components/Modal';
import { colors } from 'shared/styles';

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
    <Wrapper>
      <Icon color={color}>
        {icon}
        <EditButton onClick={handleEdit}>
          <Edit />
        </EditButton>
      </Icon>
      <Emoji isOpen={openEmoji} onSelect={handleSelect} onClose={handleClose} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto 20px;
`;

const Icon = styled.div`
  width: 64px;
  height: 64px;
  position: relative;

  border-radius: 50%;
  background-color: ${(p) => p.color};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 32px;
`;

const EditButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.gray1};

  position: absolute;
  right: -2px;
  bottom: -2px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SelectIcon;
