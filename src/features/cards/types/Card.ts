import { Author, Media } from 'shared/api/types';

type Card = {
  tweetId: string;
  text: string;
  url: string;
  author: Author;
  media?: Media[];
  status: string;
  regDttm: string;
  modDttm: string;
  cardId: number;
  userId: string;
  collectionId: number;
  title: string;
  isSaved: boolean;
};

export default Card;
