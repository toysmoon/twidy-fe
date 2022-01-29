import client from 'shared/api/client';
import { Collection } from '../types';

type CollectionResonse = {
  code: number;
  data: Collection;
};

export default async function putCollections(collections: Collection[]) {
  const requests = collections.map((collection) =>
    client.patch<CollectionResonse>('/collection', collection)
  );

  return await Promise.all(requests);
}
