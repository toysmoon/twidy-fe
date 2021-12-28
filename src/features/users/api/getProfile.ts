import client from 'shared/api/client';
import { User } from 'shared/api/types';

export default async function getProfile(userId: string): Promise<User> {
  const response = await client.get<User>(`/user/${userId}`);

  if (response.data.code) {
    throw response;
  }

  return response.data;
}

export async function getProfileByName(name: string) {
  const response = await client.get<User>(`/user`, { params: { name } });
  return response.data;
}
