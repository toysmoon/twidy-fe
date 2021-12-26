import classNames from 'classnames';
import React, { FC } from 'react';
import useModal from 'shared/hooks/useModal';
import Portal from '../Portal';
import ModalDim from './ModalDim';

export interface IModalProps {
  isOpen: boolean;
  isLoading?: boolean;
  useMinHeight?: boolean;
  onClose?: () => void;
}

const Modal: FC<IModalProps> = ({
  isOpen,
  onClose,
  useMinHeight = false,
  children,
}) => {
  const modalClass = useModal(isOpen, { useMinHeight });

  return (
    <Portal>
      {isOpen && <ModalDim onClose={onClose} />}
      <div className={classNames(defaultModalClass, modalClass)}>
        {children}
      </div>
    </Portal>
  );
};

const defaultModalClass = [
  'max-w-xl',
  'mx-auto',
  'fixed',
  'left-0',
  'right-0',
  'z-50',
  'bg-white',
  'rounded-t-3xl',
  'transition-all',
];

export default Modal;
