import client from 'shared/api/client';

export default async function getSetting(userId?: string) {
  if (!userId) {
    return {
      theme: 'black',
    };
  }

  const response = await client.get<Setting>(`/setting/${userId}`);
  return response.data;
}

export type Setting = {
  settingId: number;
  userId: string;
  language: string;
  theme: string;
  autoDelete: boolean;
  status: string;
  regDttm: string;
  modDttm: string;
};
