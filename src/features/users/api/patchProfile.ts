import client from 'shared/api/client';

export default async function patchProfile() {
  const response = await client.patch<null>(`/auth/profile`);
  return response.data;
}
