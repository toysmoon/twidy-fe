import AddCollection from 'features/collections/components/AddCollection';
import CollectionItem from 'features/collections/components/CollectionItem';
import Skeleton from 'features/collections/components/Skeleton';
import useCollecitonQuery from 'features/collections/queries/useCollectionQuery';
import Profile from 'features/users/components/Profile';
import ProfileSkeleton from 'features/users/components/Profile/ProfileSkeleton';
import useUserQuery from 'features/users/queries/useUserQuery';
import React, { Suspense } from 'react';
import LikeTab from 'shared/components/LikeTab';
import Layout from '../Layout';

export default function Folders() {
  return (
    <Layout>
      <Suspense fallback={ProfileSkeleton}>
        <Profile />
      </Suspense>
      <LikeTab isCollections />
      <Suspense fallback={Skeleton}>
        <CollectionList />
      </Suspense>
    </Layout>
  );
}

function CollectionList() {
  const user = useUserQuery();
  const collections = useCollecitonQuery(user!.userId);

  return (
    <div className="p-4 flex flex-col gap-3">
      {collections.map((c) => (
        <CollectionItem data={c} key={c.collectionId} />
      ))}
      <AddCollection />
    </div>
  );
}
