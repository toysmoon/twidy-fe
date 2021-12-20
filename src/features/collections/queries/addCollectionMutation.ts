import { useMutation, useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { userState } from 'shared/states/userState';
import postCollection from '../api/postCollection';
import { PostCollection } from '../types';
import useCollecitonQuery from './useCollectionQuery';

export default function addCollectionMutation() {
  const queryClient = useQueryClient();
  const user = useRecoilValue(userState);
  const userId = user?.userId ?? '';
  const collections = useCollecitonQuery();

  return useMutation(
    ['collection', user?.userId],
    (pc: PostCollection) => postCollection(userId, pc),
    {
      onSuccess: (collection) => {
        queryClient.setQueryData(
          ['collection', user?.userId],
          [...collections, collection]
        );
      },
      onSettled: () => {
        queryClient.invalidateQueries(['collection', user?.userId]);
      },
    }
  );
}
