import client from 'shared/api/client';
import { Collection, PostCollection } from '../types';

type CollectionResonse = {
  code: number;
  data: Collection;
};

export default async function postCollection(
  userId: string,
  collection: PostCollection
) {
  const response = await client.post<CollectionResonse>('/collection', {
    userId,
    ...collection,
  });

  return response.data.data;
}
