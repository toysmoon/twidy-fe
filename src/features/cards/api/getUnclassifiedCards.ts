import client from 'shared/api/client';
import { Author, Media, Refer } from 'shared/api/types';
import { CardResponse } from './getCards';

export default async function getUnclassifiedCards() {
  const response = await client.get<{ data: CardResponse[] }>('/auth/likes');
  const cards = response.data.data;

  if (!Array.isArray(cards)) {
    throw response;
  }

  return cards.map(({ author, media, ref, ...card }) => ({
    author: JSON.parse(author) as Author,
    media: JSON.parse(media) as Media[],
    refers: JSON.parse(ref) as Refer[],
    ...card,
    isSaved: false,
  }));
}
