import { Setting } from 'features/users/api/getSetting';

export type TweetResponse = {
  author: string;
  folderId: number;
  media: string;
  modDttm: string;
  regDttm: string;
  status: string;
  text: string;
  title: string;
  tweetId: string;
  url: string;
  userId: string;
};

export type Author = {
  name: string;
  screenName: string;
  miniProfileImageURLHttps: string;
};

export enum MEDIA_TYPE {
  photo = 'photo',
  video = 'video',
  gif = 'animated_gif',
  poll = 'poll',
  place = 'place',
  quote = 'quote',
}

export type Media = {
  displayURL?: string;
  expandedURL?: string;
  mediaURLHttps: string;
  type: MEDIA_TYPE;
};

export type Tweet = {
  author: Author;
  media: Media[];
  folderId: number;
  modDttm: string;
  regDttm: string;
  status: string;
  text: string;
  title: string;
  tweetId: string;
  url: string;
  userId: string;
  isSaved?: boolean;
};

export type User = {
  userId: string;
  name: string;
  session: null;
  accessToken: null;
  status: string;
  regDttm: string;
  modDttm: string;
  setting?: Setting;
  code?: number;
};

export type Error = {
  code: number;
  msg: string;
  data: string;
};
