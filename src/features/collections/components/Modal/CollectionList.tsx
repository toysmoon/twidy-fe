import useCollecitonQuery from 'features/collections/queries/useCollectionQuery';
import { Collection } from 'features/collections/types';
import { FC } from 'react';
import Modal, { IModalProps } from 'shared/components/Modal';
import FolderItem from './FolderItem';
import NewCollection from './NewCollection';

interface IFolderList extends IModalProps {
  filterCollection?: (collection: Collection) => boolean;
  onSelectFolder: (f: Collection) => void;
  onCreateFolder: () => void;
}

const FolderList: FC<IFolderList> = ({
  isOpen,
  onClose,
  onSelectFolder,
  onCreateFolder,
  filterCollection = () => true,
}) => {
  const collections = useCollecitonQuery();

  return (
    <Modal isOpen={isOpen} onClose={onClose} useMinHeight>
      <Modal.Header title="Save this tweet in" />
      <div className="relative modal-body-height-50">
        <ul>
          <NewCollection onClick={onCreateFolder} />
          {collections.filter(filterCollection).map((c) => (
            <FolderItem
              key={c.collectionId}
              folder={c}
              onClick={() => onSelectFolder(c)}
            />
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default FolderList;
