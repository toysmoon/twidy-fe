import ColorPicker, {
  COLLECTION_COLOR,
} from 'features/cards/components/ColorPicker';
import SelectIcon from 'features/collections/components/SelectIcon';
import { PostCollection } from 'features/collections/types';
import React, { FC, useCallback, useState } from 'react';
import Input from 'shared/components/Form/Input';
import PrivateInput from 'shared/components/Form/Input/PrivateInput';
import ModalButton from 'shared/components/Modal/ModalButton';
import useDim from 'shared/hooks/useDim';
import useToast from 'shared/hooks/useToast';
import Modal, { IModalProps } from '../';

interface ICreateFolder extends IModalProps {
  tweet?: string;
  onSelectFolder: (pc: PostCollection) => Promise<void>;
}

const CreateFolder: FC<ICreateFolder> = ({
  isOpen,
  isLoading,
  onClose = () => {},
  tweet = '',
  onSelectFolder,
}) => {
  useDim(isOpen);
  const toast = useToast();
  const [icon, setIcon] = useState('✨');
  const [folderName, setFolderName] = useState('');
  const [color, setColor] = useState<COLLECTION_COLOR>(COLLECTION_COLOR.HEART);
  const [isPrivate, setPrivate] = useState(false);

  const reset = useCallback(() => {
    setIcon('✨');
    setFolderName('');
    setColor(COLLECTION_COLOR.HEART);
    setPrivate(false);
  }, []);

  const handleSumbit = useCallback(async () => {
    await onSelectFolder({ name: folderName, color, emoji: icon, isPrivate });
    toast('New collection has been created!');
    reset();
  }, [icon, color, isPrivate, folderName, toast]);

  const handleClose = useCallback(async () => {
    reset();
    onClose();
  }, [onClose, reset]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} useMinHeight>
      <div className="px-5">
        <SelectIcon icon={icon} onChange={setIcon} color={color} />
        <Input
          value={folderName}
          onChange={setFolderName}
          maxLength={50}
          placeholder="Type collection name"
        />
        <ColorPicker color={color} onChange={setColor} />
        {tweet && (
          <p className="my-8 mx-5 font-pretendard text-base leading-5 max-line-3 max-h-16">
            {tweet}
          </p>
        )}
      </div>
      <div className="w-full h-52 relative">
        <div className="w-full h-1px bg-gray6" />
        <PrivateInput isPrivate={isPrivate} onChange={setPrivate} />
        <ModalButton
          onClick={handleSumbit}
          label="Create collection"
          isLoading={isLoading}
        />
      </div>
    </Modal>
  );
};

export default CreateFolder;
