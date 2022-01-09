import client from 'shared/api/client';

export default async function postLogout(): Promise<void> {
  await client.post<void>(`/auth/logout`);
  return;
}
