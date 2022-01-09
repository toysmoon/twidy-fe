import client from 'shared/api/client';
import { Setting } from './getSetting';

export default async function putSetting(props: Partial<Setting>) {
  const { regDttm, modDttm, ...setting } = props;
  const response = await client.patch<Setting>(`/setting`, setting);

  return response.data;
}
