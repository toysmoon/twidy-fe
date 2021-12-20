import { useQuery } from 'react-query';
import { User } from 'shared/api/types';
import getProfile from '../api/getProfile';

export default function useUserQuery(userId: string, initialData: User) {
  return useQuery(['profile', userId], () => getProfile(userId), {
    initialData,
  });
}
