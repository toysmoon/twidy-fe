import createCollection from 'features/collections/api/postCollection';
import { PostCollection } from 'features/collections/types';
import React, { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { User } from 'shared/api/types';
import CreateFolder from 'shared/components/Modal/CreateFolder';
import { userState } from 'shared/states/userState';

export default function AddCollection() {
  const user = useRecoilValue(userState) as User;
  const [isCreateFolderOpen, setCreateFolderOpen] = useState(false);

  const handleOpen = useCallback(() => setCreateFolderOpen(true), []);
  const handleClose = useCallback(() => setCreateFolderOpen(false), []);
  const handleSumbit = useCallback(async (c: PostCollection) => {
    await createCollection(user.userId, c);
    handleClose();
  }, []);

  const containerClass =
    'font-roboto font-bold text-lg leading-6 text-white w-full h-20 box-border border-dashed border-2 border-gray-300 cursor-pointer rounded-2xl flex justify-center items-center';

  return (
    <>
      <div onClick={handleOpen} className={containerClass}>
        {'+ New collection'}
      </div>
      <CreateFolder
        isOpen={isCreateFolderOpen}
        onSelectFolder={handleSumbit}
        onClose={handleClose}
      />
    </>
  );
}
