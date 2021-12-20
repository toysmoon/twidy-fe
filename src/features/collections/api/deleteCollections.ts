import client from 'shared/api/client';

export default async function deleteCollections(collectionIds: number[]) {
  if (collectionIds.length === 0) {
    return;
  }

  const requests = collectionIds.map((id) =>
    client.delete<null>(`/collection/${id}`)
  );

  return await Promise.all(requests);
}
