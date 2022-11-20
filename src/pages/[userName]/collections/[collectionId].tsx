import Card from 'features/cards/components/Card';
import { useGlobalCardViewMode } from 'features/cards/hooks/useGlobalCard';
import useCardsQuery from 'features/cards/queries/useCardsQuery';
import CollectionTitle from 'features/collections/components/CollectionTitle';
import { useCollectionQueryById } from 'features/collections/queries/useCollectionQuery';
import { getProfileByUserName } from 'features/users/api/getProfile';
import getSetting, { Setting } from 'features/users/api/getSetting';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { redirectUser } from 'pages/_app';
import React from 'react';
import { User } from 'shared/api/types';
import LowLayout from 'shared/components/Templates/Layout/LowLayout';

export default function CollectionPage({ data: initialData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  useGlobalCardViewMode();

  const router = useRouter();
  const collectionId = Number(router.query.collectionId);

  const user = initialData.user as User;
  const setting = initialData.setting as Setting;
  const userId = user.userId;

  const collections = useCollectionQueryById(userId);
  const collection = collections?.find(c => c.collectionId === collectionId);
  const { cards } = useCardsQuery(collection?.collectionId);

  if (!collection) {
    return null;
  }

  return (
    <LowLayout color={setting.theme}>
      <CollectionTitle collection={collection} />
      {cards.map((card, i) => (
        <Card key={i} card={card} isViewMode />
      ))}
    </LowLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const userName = ctx.query.userName as string;
  const user = await getProfileByUserName(userName);
  if (!user) {
    redirectUser(ctx, '/404');
    return { props: {} };
  }

  const setting = await getSetting(user.userId);
  return { props: { data: { user, setting } } };
};
