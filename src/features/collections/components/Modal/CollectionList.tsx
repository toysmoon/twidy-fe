import cn from 'classnames';
import useCollecitonQuery from 'features/collections/queries/useCollectionQuery';
import { Collection } from 'features/collections/types';
import { FC } from 'react';
import { AddCircle } from 'shared/components/Icons';
import Modal, { IModalProps } from 'shared/components/Modal';
import FolderItem from './FolderItem';

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
  const headerClass = cn(
    'w-full',
    'h-16',
    'bg-white',
    'border-t',
    'flex',
    'justify-center',
    'items-center',
    'relative',
    'rounded-t-2xl',
    'border-none'
  );

  const titleClass = cn('font-roboto', 'font-bold text-xl leading-6');

  return (
    <Modal isOpen={isOpen} onClose={onClose} useMinHeight>
      <div className={headerClass}>
        <h2 className={titleClass}>Save this tweet in</h2>
        <div className={cn('absolute right-5')} onClick={onCreateFolder}>
          <AddCircle />
        </div>
      </div>
      <div className="relative modal-body-height-50">
        <ul>
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
