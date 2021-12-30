import AddCollection from 'features/collections/components/AddCollection';
import CollectionItem from 'features/collections/components/CollectionItem';
import CollectionListSkeleton from 'features/collections/components/CollectionListSkeleton';
import useCollecitonQuery from 'features/collections/queries/useCollectionQuery';
import Profile from 'features/users/components/Profile';
import ProfileSkeleton from 'features/users/components/Profile/ProfileSkeleton';
import React from 'react';
import Boundary from 'shared/components/Boundary';
import LikeTab from 'shared/components/LikeTab';
import Layout from '../Layout';

export default function Folders() {
  return (
    <Layout>
      <Boundary fallback={<ProfileSkeleton />}>
        <Profile />
      </Boundary>
      <LikeTab isCollections />
      <Boundary fallback={<CollectionListSkeleton />}>
        <CollectionList />
      </Boundary>
    </Layout>
  );
}

function CollectionList() {
  const collections = useCollecitonQuery();

  return (
    <div className="p-4 flex flex-col gap-3">
      {collections.map((c) => (
        <CollectionItem data={c} key={c.collectionId} />
      ))}
      <AddCollection />
    </div>
  );
}
