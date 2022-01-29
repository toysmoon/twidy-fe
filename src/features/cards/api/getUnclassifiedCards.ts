import client from 'shared/api/client';
import { Author, Media } from 'shared/api/types';
import { CardResponse } from './getCards';

export default async function getUnclassifiedCards() {
  const response = await client.get<{ data: CardResponse[] }>('/auth/likes');
  const cards = response.data.data;

  if (!Array.isArray(cards)) {
    throw response;
  }

  return cards.map(({ author, media, ...card }) => ({
    author: JSON.parse(author) as Author,
    media: JSON.parse(media) as Media[],
    ...card,
    isSaved: false,
  }));
}
