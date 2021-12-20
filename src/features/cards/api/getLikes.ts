import client, { DefaultResponse } from 'shared/api/client';

export default async function getLikes(): Promise<boolean> {
  const response = await client.post<DefaultResponse>('/auth/likes');
  return response.data.code === 3;
}
