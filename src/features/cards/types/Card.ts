import { Author, Media, Refer } from 'shared/api/types';

type Card = {
  tweetId: string;
  text: string;
  url: string;
  author: Author;
  media?: Media[];
  refers?: Refer[];
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
