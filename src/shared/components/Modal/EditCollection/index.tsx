import ColorPicker, {
  COLLECTION_COLOR,
} from 'features/cards/components/ColorPicker';
import SelectIcon from 'features/collections/components/SelectIcon';
import { Collection, PostCollection } from 'features/collections/types';
import React, { FC, useCallback, useState } from 'react';
import Input from 'shared/components/Form/Input';
import PrivateInput from 'shared/components/Form/Input/PrivateInput';
import ModalButton from 'shared/components/Modal/ModalButton';
import Modal, { IModalProps } from '../';

interface ICreateFolder extends IModalProps {
  collection: Collection;
  onSubmit: (pc: PostCollection) => void;
}

const EditCollection: FC<ICreateFolder> = ({
  isOpen,
  isLoading,
  onClose,
  collection,
  onSubmit,
}) => {
  const [icon, setIcon] = useState(collection.emoji);
  const [name, setName] = useState(collection.name);
  const [color, setColor] = useState<COLLECTION_COLOR>(
    collection.color as COLLECTION_COLOR
  );
  const [isPrivate, setPrivate] = useState(false);

  const handleSumbit = useCallback(() => {
    onSubmit({ name: name, color, emoji: icon, isPrivate });
  }, [icon, color, isPrivate, name]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} useMinHeight>
      <div className="px-5">
        <SelectIcon icon={icon} onChange={setIcon} color={color} />
        <Input value={name} onChange={setName} placeholder="Type folder name" />
        <ColorPicker color={color} onChange={setColor} />
      </div>
      <div className="w-full h-52 relative">
        <div className="w-full h-1px bg-gray6" />
        <PrivateInput isPrivate={isPrivate} onChange={setPrivate} />
        <ModalButton
          onClick={handleSumbit}
          label="Save collection"
          isLoading={isLoading}
        />
      </div>
    </Modal>
  );
};

export default EditCollection;
