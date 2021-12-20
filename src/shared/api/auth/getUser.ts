import { NextPageContext } from 'next';
import client from '../client';
import { User } from '../types';

type UserError = {
  code: number;
  msg: string;
  data: string;
};

export default async function getUser(ctx?: NextPageContext): Promise<User> {
  const cookie = ctx?.req?.headers?.cookie ?? {};
  const response = await client.get<User | UserError>('/auth/user', {
    headers: { cookie },
  });

  const error = response.data as UserError;
  if (error.data) {
    throw error.data;
  }

  const result = response.data as User;
  return result;
}
