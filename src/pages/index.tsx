import updateCard from 'features/cards/api/updateCard';
import LikedCardList from 'features/cards/components/LikedCardList';
import CardType from 'features/cards/types/Card';
import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import LikeTab from 'shared/components/LikeTab';
import Profile from 'features/users/components/Profile';
import Layout from 'shared/components/Templates/Layout';
import HomeModals, { ISubmitProps } from 'shared/components/Modal/HomeModals';
import { userState } from 'shared/states/userState';
import { useSavedCardRemove } from 'features/cards/queries/useUnclassifiedQuery';

const Page: NextPage<{}> = () => {
  const user = useRecoilValue(userState);
  const [card, setCard] = useState<CardType | null>(null);
  const removeCardFromList = useSavedCardRemove();

  if (!user) {
    return null;
  }

  const handleClick = () => {};
  const closeModal = () => setCard(null);

  const submitTweet = useCallback(
    async ({ card, collection, title }: ISubmitProps) => {
      await updateCard({
        title,
        collectionId: collection.collectionId,
        cardId: card.cardId,
      });

      removeCardFromList(card.cardId);
      closeModal();
    },
    [removeCardFromList]
  );

  return (
    <Layout>
      <Profile
        src={'http://pbs.twimg.com/123'}
        name={user.name}
        onClick={handleClick}
      />
      <LikeTab />
      <LikedCardList onClickCard={setCard} />
      <HomeModals card={card} onSubmit={submitTweet} onClose={closeModal} />
    </Layout>
  );
};

export default Page;
