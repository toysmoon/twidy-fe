import styled from '@emotion/styled';
import { Collection } from 'features/collections/types';
import React, { FC } from 'react';
import { ArrowRight, Lock } from 'shared/components/Icons';
import { colors } from 'shared/styles';

const Container = styled.li`
  margin: 10px 20px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div<{ bgColor: string }>`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  border-radius: 50%;
  background-color: ${(p) => p.bgColor};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
`;

const Name = styled.p`
  width: 100%;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.black};

  margin: 0 14px;
`;

const Ellipse = styled.div`
  position: absolute;
  bottom: 0;
  right: -6px;

  width: 18px;
  height: 18px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.gray1};
`;

interface IFolderProps {
  folder: Collection;
  onClick: () => void;
}

const LockIcon = () => (
  <Ellipse>
    <Lock />
  </Ellipse>
);

const FolderItem: FC<IFolderProps> = ({ folder, onClick }) => {
  const { name, emoji, color, isPrivate } = folder;

  return (
    <Container onClick={onClick}>
      <Icon bgColor={color}>
        {emoji}
        {isPrivate && <LockIcon />}
      </Icon>
      <Name>{name}</Name>
      <ArrowRight />
    </Container>
  );
};

export default FolderItem;
