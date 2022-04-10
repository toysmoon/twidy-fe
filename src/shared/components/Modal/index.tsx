import classNames from 'classnames';
import React, { ReactNode } from 'react';
import useModal from 'shared/hooks/useModal';
import Portal from '../Portal';
import ModalHeader from './ModalHeader';

export interface IModalProps {
  isOpen: boolean;
  isLoading?: boolean;
  useMinHeight?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  useMinHeight = false,
  children,
}: IModalProps) => {
  const modalClass = useModal(isOpen, { useMinHeight });

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(overlayClass)}>
        <div className={classNames(backgroundClass)} onClick={onClose} />
        {/* background div floats on top of overlay
          as a sibling of modal div, onClick closes modal 
          */}
        <div className={classNames(defaultModalClass, modalClass)}>
          <div className="overflow-y-auto w-full">{children}</div>
        </div>
      </div>
    </Portal>
  );
};

const overlayClass = [
  'fixed',
  'top-0',
  'left-0',
  'right-0',
  'bottom-0',
  'flex',
  'items-center',
  'justify-start',
  'flex-col-reverse',
  'z-40',
];

const backgroundClass = [
  'absolute',
  'top-0',
  'bottom-0',
  'left-0',
  'right-0',
  'bg-black',
  'bg-opacity-50',
];

const defaultModalClass = [
  'relative',
  'bg-white',
  'rounded-t-3xl',
  'max-w-xl',
  'max-height-70',
  'flex',
  'w-full',
];

export default Modal;

Modal.Header = ModalHeader;
