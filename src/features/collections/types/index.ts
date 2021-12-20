export type Collection = {
  collectionId: number;
  color: string;
  emoji: string;
  isPrivate: boolean;
  modDttm: string;
  name: string;
  regDttm: string;
  status: string;
  userId: string;
  ordVal: number;
  count?: number;
};

export type PostCollection = {
  name: string;
  color: string;
  emoji: string;
  isPrivate: boolean;
};
