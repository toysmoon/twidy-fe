import QuotedCard from 'features/cards/components/QuotedCard';
import type Card from 'features/cards/types/Card';
import { Collection } from 'features/collections/types';
import React, { FC, useCallback, useState } from 'react';
import Input from 'shared/components/Form/Input';
import Modal from '.';
import TwitterEmoji from '../TwitterEmoji';
import { ISubmitProps } from './HomeModals';

export interface ISaveTweetProps {
  isOpen: boolean;
  card?: Card | null;
  collection?: Collection;
  onSave: ({ collection, card, title }: ISubmitProps) => void;
  onClose: () => void;
}

const SaveTweet: FC<ISaveTweetProps> = ({ isOpen, card, collection, onSave, onClose }) => {
  if (!card || !collection) {
    return null;
  }

  const { emoji, color } = collection;
  const [title, setTitle] = useState('');
  const handleSave = () => onSave({ collection, card, title });
  const handleClose = useCallback(() => {
    setTitle('');
    onClose();
  }, [onClose, setTitle]);

  return (
    <Modal isOpen={isOpen} useMinHeight onClose={handleClose}>
      <Modal.Header.TypeC
        left={
          <div className="flex gap-1 items-center overflow-hidden">
            <div className={`w-6 h-6 bg-${color} rounded-full flex items-center justify-center shrink-0`}>
              <TwitterEmoji value={emoji} size={14} />
            </div>
            <p className="font-bold text-lg overflow-hidden text-ellipsis whitespace-nowrap mx-1">{collection.name}</p>
          </div>
        }
        right="Save"
        onClick={handleSave}
        onCancel={handleClose}
      />
      <div className="px-5 flex flex-col gap-4 pb-10">
        <Input value={title} onChange={setTitle} placeholder="Add title to this tweet" maxLength={50} />
        <QuotedCard card={card} />
      </div>
    </Modal>
  );
};

export default SaveTweet;
