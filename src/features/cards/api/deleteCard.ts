import client from 'shared/api/client';

export default async function deleteCard(cardId: number) {
  const response = await client.delete<null>(`/card/${cardId}`);
  return response.data;
}
