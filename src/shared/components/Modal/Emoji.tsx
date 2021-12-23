import { BaseEmoji, Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import React, { FC } from 'react';
import ArrowBack from 'shared/components/Icons/ArrowBack';
import Modal from '.';

export interface IEmojiProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (emoji: string) => void;
}

const Emoji: FC<IEmojiProps> = ({ isOpen, onSelect, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <div>
        <div className="w-full h-18 bg-white rounded-t-3xl flex justify-center items-center relative">
          <div onClick={onClose} className="absolute left-6 top-6">
            <ArrowBack />
          </div>
          <div className="flex items-center">
            <h2 className="font-bold text-lg leading-5 text-black">
              Select folder emoji
            </h2>
          </div>
        </div>
        <div>
          <Picker
            set="twitter"
            showPreview={false}
            showSkinTones={false}
            onSelect={(emoji: BaseEmoji) => onSelect(emoji.native)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Emoji;
