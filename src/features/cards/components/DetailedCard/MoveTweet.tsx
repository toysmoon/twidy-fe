import CollectionList from 'features/collections/components/Modal/CollectionList';
import addCollectionMutation from 'features/collections/queries/addCollectionMutation';
import { PostCollection } from 'features/collections/types';
import { useCallback, useState } from 'react';
import CreateFolder from 'shared/components/Modal/CreateFolder';

interface IMoveTweetProps {
  collectionId: number;
  onSubmit: (collectionId: number) => Promise<void>;
  onClose: () => void;
}

export default function MoveTweet({
  collectionId,
  onClose,
  onSubmit,
}: IMoveTweetProps) {
  const [isCollectionSelect, setCollectionSelect] = useState(true);
  const { mutateAsync: addCollection, isLoading } = addCollectionMutation();

  const submitCreateFolder = useCallback(async (pc: PostCollection) => {
    await addCollection(pc);
    setCollectionSelect(true);
  }, []);

  return (
    <>
      <CollectionList
        filterCollection={(c) => c.collectionId !== collectionId}
        isOpen={isCollectionSelect}
        onSelectFolder={(c) => onSubmit(c.collectionId)}
        onCreateFolder={() => setCollectionSelect(false)}
        onClose={onClose}
      />
      <CreateFolder
        isLoading={isLoading}
        isOpen={!isCollectionSelect}
        onSelectFolder={submitCreateFolder}
        onClose={() => setCollectionSelect(true)}
      />
    </>
  );
}
