import getSetting, { Setting } from 'features/users/api/getSetting';
import putSetting from 'features/users/api/putSetting';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useSettingQuery(userId?: string) {
  return useQuery(['setting', userId], () => getSetting(userId), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
}

export function useMutateSetting() {
  const queryClient = useQueryClient();

  return useMutation(
    (setting: Partial<Setting>) => putSetting({ ...setting }),
    {
      onSuccess: (setting) => {
        queryClient.invalidateQueries(['setting', setting.userId]);
        return queryClient.invalidateQueries(['profile', { twidyUser: true }]);
      },
    }
  );
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
