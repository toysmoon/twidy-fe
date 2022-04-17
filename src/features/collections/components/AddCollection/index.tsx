import addCollectionMutation from 'features/collections/queries/addCollectionMutation';
import { PostCollection } from 'features/collections/types';
import React, { useCallback, useState } from 'react';
import CreateFolder from 'shared/components/Modal/CreateFolder';

export default function AddCollection() {
  const [isCreateFolderOpen, setCreateFolderOpen] = useState(false);
  const { mutateAsync: addCollection, isLoading } = addCollectionMutation();

  const handleOpen = useCallback(() => setCreateFolderOpen(true), []);
  const handleClose = useCallback(() => setCreateFolderOpen(false), []);
  const handleSumbit = useCallback(async (c: PostCollection) => {
    await addCollection(c);
    handleClose();
  }, []);

  const containerClass =
    'font-pretendard font-bold text-lg leading-6 text-white w-full h-20 box-border border-dashed border-2 border-gray-300 cursor-pointer rounded-2xl flex justify-center items-center';

  return (
    <>
      <div onClick={handleOpen} className={containerClass}>
        {'+ New collection'}
      </div>
      <CreateFolder
        card={null}
        isOpen={isCreateFolderOpen}
        isLoading={isLoading}
        onSelectFolder={handleSumbit}
        onClose={handleClose}
      />
    </>
  );
}
