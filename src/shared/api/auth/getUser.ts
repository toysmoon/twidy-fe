import { NextPageContext } from 'next';
import client from '../client';
import { User } from '../types';

type UserResponse = {
  code: 0 | -101 | -100;
  data: User | string;
  msg: string;
};

export default async function getUser(ctx?: NextPageContext): Promise<User> {
  const cookie = ctx?.req?.headers?.cookie ?? {};
  const { data: response } = await client.get<UserResponse>('/auth/user', {
    headers: { cookie },
  });

  if (typeof response.data === 'string') {
    throw response;
  }

  return response.data;
}
