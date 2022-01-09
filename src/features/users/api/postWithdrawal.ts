import client from 'shared/api/client';

export default async function postWithdrawal(): Promise<void> {
  await client.post<void>(`/auth/withdrawal`);
  return;
}
