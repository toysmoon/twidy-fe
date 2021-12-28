import client from 'shared/api/client';
import { Author, Media } from 'shared/api/types';
import { CardResponse } from './getCards';

export default async function getUnclassifiedCards() {
  const response = await client.get<CardResponse[]>('/auth/likes');

  if (!Array.isArray(response.data)) {
    throw response;
  }

  const data = response.data.map(({ author, media, ...card }) => ({
    author: JSON.parse(author) as Author,
    media: JSON.parse(media) as Media[],
    ...card,
    isSaved: false,
  }));

  return data;
}
