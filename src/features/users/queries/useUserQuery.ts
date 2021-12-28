import { useQuery } from 'react-query';
import getUser from 'shared/api/auth/getUser';
import { User } from 'shared/api/types';
import getProfile from '../api/getProfile';

export function useUserByIdQuery(userId: string, initialData?: User) {
  return useQuery(['profile', userId], () => getProfile(userId), {
    initialData,
  });
}

export default function useUserQuery() {
  const { data: user } = useQuery(
    ['profile', { twidyUser: true }],
    () => getUser(),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return user;
}
