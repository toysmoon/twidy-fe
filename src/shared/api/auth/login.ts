import client from '../client';

interface LoginResponse {
  code: number;
  msg: string;
  data: string;
}

export default async function login() {
  const response = await client.post<LoginResponse>('/auth/login');
  return response.data;
}
