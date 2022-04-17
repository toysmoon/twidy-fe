import { COLLECTION_COLOR } from 'features/cards/components/ColorPicker';
import QuotedCard from 'features/cards/components/QuotedCard';
import Card from 'features/cards/types/Card';
import SelectIcon from 'features/collections/components/SelectIcon';
import { PostCollection } from 'features/collections/types';
import React, { FC, useCallback, useState } from 'react';
import ColorInput from 'shared/components/ColorInput';
import Input from 'shared/components/Form/Input';
import PrivateInput from 'shared/components/Form/Input/PrivateInput';
import useDim from 'shared/hooks/useDim';
import useToast from 'shared/hooks/useToast';
import Modal, { IModalProps } from '../';

interface ICreateFolder extends IModalProps {
  card: Card | null;
  onSelectFolder: (pc: PostCollection) => Promise<void>;
}

const CreateFolder: FC<ICreateFolder> = ({
  isOpen,
  isLoading,
  onClose = () => {},
  card,
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
      <Modal.Header.TypeC
        left="New Collection"
        right="Create"
        loading={isLoading}
        onClick={handleSumbit}
        onCancel={handleClose}
      />
      <div className="px-5">
        <SelectIcon icon={icon} onChange={setIcon} color={color} />
        <Input
          value={folderName}
          onChange={setFolderName}
          maxLength={50}
          placeholder="Collection name"
        />
        <div className="h-4 w-full" />
        <ColorInput value={color} onChange={setColor} />
        <div className="my-2 w-full border border-gray6" />
        <PrivateInput isPrivate={isPrivate} onChange={setPrivate} />
        <div className="my-4">{card && <QuotedCard card={card} />}</div>
      </div>
      <div className="w-full h-1px bg-gray6" />
    </Modal>
  );
};

export default CreateFolder;
