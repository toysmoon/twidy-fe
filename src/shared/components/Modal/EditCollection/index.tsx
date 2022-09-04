import { COLLECTION_COLOR } from 'features/cards/components/ColorPicker';
import SelectIcon from 'features/collections/components/SelectIcon';
import { Collection, PostCollection } from 'features/collections/types';
import { FC, useCallback, useState } from 'react';
import ColorInput from 'shared/components/ColorInput';
import Input from 'shared/components/Form/Input';
import PrivateInput from 'shared/components/Form/Input/PrivateInput';
import useDim from 'shared/hooks/useDim';
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
  useDim(isOpen);
  const [icon, setIcon] = useState(collection.emoji);
  const [name, setName] = useState(collection.name);
  const [color, setColor] = useState<COLLECTION_COLOR>(
    collection.color as COLLECTION_COLOR
  );
  const [isPrivate, setPrivate] = useState(false);

  const handleSubmit = useCallback(() => {
    onSubmit({ name: name, color, emoji: icon, isPrivate });
  }, [icon, color, isPrivate, name]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} useMinHeight>
      <Modal.Header.TypeB
        left="Edit Collection"
        right="Done"
        loading={isLoading}
        onClick={handleSubmit}
      />
      k
      <div className="px-5">
        <SelectIcon icon={icon} onChange={setIcon} color={color} />
        <Input value={name} onChange={setName} placeholder="Type folder name" />
      </div>
      <div className="w-full mt-3 px-5 relative">
        <ColorInput value={color} onChange={setColor} />
        <div className="my-2 w-full border border-gray6" />
        <PrivateInput isPrivate={isPrivate} onChange={setPrivate} />
      </div>
    </Modal>
  );
};

export default EditCollection;
