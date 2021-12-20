import AddCollection from 'features/collections/components/AddCollection';
import CollectionItem from 'features/collections/components/CollectionItem';
import useCollecitonQuery from 'features/collections/queries/useCollectionQuery';
import Profile from 'features/users/components/Profile';
import React from 'react';
import { useRecoilValue } from 'recoil';
import LikeTab from 'shared/components/LikeTab';
import { userState } from 'shared/states/userState';
import Layout from '../Layout';

export default function Folders() {
  const user = useRecoilValue(userState);
  const collections = useCollecitonQuery();

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <Profile
        src={'http://pbs.twimg.com/123'}
        name={user.name}
        onClick={() => {}}
      />
      <LikeTab isCollections />
      <div className="p-4 flex flex-col gap-3">
        {collections.map((c) => (
          <CollectionItem data={c} key={c.collectionId} />
        ))}
        <AddCollection />
      </div>
    </Layout>
  );
}
