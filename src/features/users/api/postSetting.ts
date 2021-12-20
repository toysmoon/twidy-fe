import client from 'shared/api/client';
import { Setting } from './getSetting';

export default async function postSetting(setting: Partial<Setting>) {
  const response = await client.post<Setting>(`/setting`, setting);

  return response.data;
}
