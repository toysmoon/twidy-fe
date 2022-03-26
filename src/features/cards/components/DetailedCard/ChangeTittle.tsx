import type Card from 'features/cards/types/Card';
import React, { FC, useCallback, useState } from 'react';
import Input from 'shared/components/Form/Input';
import Modal from 'shared/components/Modal';
import ModalButton from 'shared/components/Modal/ModalButton';

export interface IChangeTitleProps {
  card: Card;
  onSave: (title: string) => void;
  onClose: () => void;
}

const ChangeTitle: FC<IChangeTitleProps> = ({ card, onSave, onClose }) => {
  const [title, setTitle] = useState(card.title);
  const handleSave = useCallback(() => onSave(title), [title]);

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="pt-5">
        <div className="px-5 pb-10 flex flex-col gap-5">
          <Input
            value={title}
            onChange={setTitle}
            placeholder="Add title to this tweet"
          />
          <div className="font-pretendard leading-5 whitespace-pre-wrap">
            {card.text}
          </div>
        </div>
      </div>
      <div className="relative h-28">
        <ModalButton onClick={handleSave} label="Save" />
      </div>
    </Modal>
  );
};

export default ChangeTitle;
