import styled from '@emotion/styled';
import CollectionIcon from 'features/collections/components/CollectionIcon';
import { colors } from 'shared/styles';
import React from 'react';
import { Collection } from 'features/collections/types';

interface ICollectionTitleProps {
  collection: Collection;
}

export default function CollectionTitle({ collection }: ICollectionTitleProps) {
  return (
    <Container>
      <CollectionIcon collections={collection} hasBorder />
      <Title>{collection.name}</Title>
      <Count>{`${collection.count ?? 0} tweets`}</Count>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: -5px;
`;

const Title = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: ${colors.white};

  margin: 20px 0 2px;
`;

const Count = styled.p`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${colors.white};
  opacity: 0.5;

  margin: 0;
`;
