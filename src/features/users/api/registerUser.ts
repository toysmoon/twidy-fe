import client from 'shared/api/client';

export default async function registerUser() {
  const response = await client.post(`/auth/register`);
  return response.data;
}
