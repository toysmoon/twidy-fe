import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import getUser from 'shared/api/auth/getUser';
import { User } from 'shared/api/types';
import getProfile from '../api/getProfile';
import patchProfile from '../api/patchProfile';

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

export function useUserByIdQuery(userId: string, initialData?: User) {
  return useQuery(['profile', userId], () => getProfile(userId), {
    initialData,
  });
}

export function useMutateUpdateProfile() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(() => patchProfile(), {
    onSuccess: async (_, setting?: any) => {
      await queryClient.invalidateQueries(['profile', { twidyUser: true }]);

      if (setting) {
        router.replace('/');
      } else {
        router.replace('/login/register');
      }
    },
  });
}
