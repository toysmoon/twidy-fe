import client from 'shared/api/client';
import { User } from 'shared/api/types';

type UserResponse = {
  code: 0 | -101 | -100;
  data: User | string;
  msg: string;
};

export default async function getProfile(userId: string): Promise<User> {
  const { data: response } = await client.get<UserResponse>(`/user`, {
    params: { userId },
  });

  if (typeof response.data === 'string') {
    throw response;
  }

  return response.data;
}

export async function getProfileByUserName(userName: string) {
  const response = await client.get<User>(`/user`, { params: { userName } });
  return response.data;
}
