import client from 'shared/api/client';
import { Collection } from '../types';

export default async function getCollections(
  userId: string,
  isPrivate?: boolean
) {
  const response = await client.get<Collection[]>('/collection', {
    params: { userId, isPrivate },
  });
  return response.data;
}
