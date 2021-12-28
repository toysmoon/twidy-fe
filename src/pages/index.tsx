import LikedCardList, {
  CardListsSkeleton,
} from 'features/cards/components/LikedCardList';
import CardType from 'features/cards/types/Card';
import Profile from 'features/users/components/Profile';
import ProfileSkeleton from 'features/users/components/Profile/ProfileSkeleton';
import { NextPage } from 'next';
import React, { Suspense, useState } from 'react';
import LikeTab from 'shared/components/LikeTab';
import HomeModals from 'shared/components/Modal/HomeModals';
import Layout from 'shared/components/Templates/Layout';

const Page: NextPage<{}> = () => {
  const [card, setCard] = useState<CardType | null>(null);
  const closeModal = () => setCard(null);

  return (
    <Layout>
      <Suspense fallback={<ProfileSkeleton />}>
        <Profile />
      </Suspense>
      <LikeTab />
      <Suspense fallback={<CardListsSkeleton />}>
        <LikedCardList onClickCard={setCard} />
      </Suspense>
      <Suspense fallback={<div />}>
        <HomeModals card={card} onClose={closeModal} />
      </Suspense>
    </Layout>
  );
};

export default Page;
