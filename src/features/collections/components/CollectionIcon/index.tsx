import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from 'shared/styles';
import React from 'react';
import { Collection } from 'features/collections/types';
import { Lock } from 'shared/components/Icons';

interface ICollectionIconProps {
  collections: Collection;
  hasBorder?: boolean;
}

export default function CollectionIcon({
  collections,
  hasBorder = false,
}: ICollectionIconProps) {
  const { emoji, color, isPrivate } = collections;

  return (
    <Icon bgColor={color} hasBorder={hasBorder}>
      {emoji}
      {isPrivate && <LockIcon />}
    </Icon>
  );
}

const LockIcon = () => (
  <Ellipse>
    <Lock />
  </Ellipse>
);

const Ellipse = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 18px;
  height: 18px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.gray1};
`;

const IconBorder = css`
  border: solid 1px ${colors.white};
`;

const Icon = styled.div<{ bgColor: string; hasBorder: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;

  background-color: ${(p) => p.bgColor};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;

  ${(p) => p.hasBorder && IconBorder}
`;
