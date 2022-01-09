import getSetting from 'features/users/api/getSetting';
import putSetting from 'features/users/api/putSetting';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useSettingQuery(userId?: string) {
  return useQuery(['setting', userId], () => getSetting(userId), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
}

export function useMutateTheme(userId: string) {
  const queryClient = useQueryClient();
  const { data: setting } = useSettingQuery(userId);

  return useMutation((theme: string) => putSetting({ ...setting, theme }), {
    onSuccess: () => {
      queryClient.invalidateQueries(['setting', userId]);
    },
  });
}

export function useMutateAutoDelete(userId?: string) {
  const queryClient = useQueryClient();
  const { data: setting } = useSettingQuery(userId);

  return useMutation(
    (autoDelete: boolean) => putSetting({ ...setting, autoDelete }),
    {
      onSuccess: () => queryClient.invalidateQueries(['setting', userId]),
    }
  );
}
