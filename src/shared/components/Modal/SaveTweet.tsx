import type Card from 'features/cards/types/Card';
import { Collection } from 'features/collections/types';
import React, { FC, useState } from 'react';
import Input from 'shared/components/Form/Input';
import ArrowBack from 'shared/components/Icons/ArrowBack';
import ModalButton from 'shared/components/Modal/ModalButton';
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

const SaveTweet: FC<ISaveTweetProps> = ({
  isOpen,
  card,
  collection,
  onSave,
  onClose,
}) => {
  if (!card || !collection) {
    return null;
  }

  const { emoji, color } = collection;
  const [title, setTitle] = useState('');
  const handleSave = () => onSave({ collection, card, title });

  return (
    <Modal isOpen={isOpen} useMinHeight onClose={onClose}>
      <div>
        <div className="w-full h-18 bg-white rounded-t-2xl flex justify-center items-center relative">
          <div onClick={onClose} className="absolute left-6 top-6">
            <ArrowBack />
          </div>
          <div className="flex items-center">
            <div
              className={`w-8 h-8 mr-3 flex justify-center items-center rounded-full bg-${color}`}
            >
              <TwitterEmoji value={emoji} />
            </div>
            <h2 className="font-bold text-lg leading-5 text-black">
              {collection.name}
            </h2>
          </div>
        </div>
        <div className="px-5 flex flex-col gap-5">
          <Input
            value={title}
            onChange={setTitle}
            placeholder="Add title to this tweet"
            maxLength={20}
          />
          <div className="text-base whitespace-pre-wrap pb-32">
            {card?.text}
          </div>
        </div>
      </div>
      <ModalButton onClick={handleSave} label="Save" />
    </Modal>
  );
};

export default SaveTweet;
