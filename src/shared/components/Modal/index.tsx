import styled from '@emotion/styled';
import React, { FC } from 'react';
import useModal from 'shared/hooks/useModal';
import { colors } from 'shared/styles';
import Portal from '../Portal';
import CreateFolder from './CreateFolder';
import Emoji from './Emoji';
import ModalDim from './ModalDim';
export { default as SaveTweet } from './SaveTweet';
export { CreateFolder, Emoji };

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
  const modalClass = useModal(isOpen);

  return (
    <Portal>
      {isOpen && <ModalDim onClose={onClose} />}
      <Container className={modalClass} useMinHeight={useMinHeight}>
        {children}
      </Container>
    </Portal>
  );
};

export default Modal;

const Container = styled.div<{ useMinHeight: boolean }>`
  ${(p) => (p.useMinHeight ? 'height: 70vh' : '')};

  max-width: 480px;
  margin: 0 auto;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  background: ${colors.white};
  border-radius: 20px 20px 0px 0px;

  transition: bottom 200ms ease-out, opacity 200ms ease-out;

  &.open {
    opacity: 1;
    bottom: 0;
  }

  &.close {
    opacity: 0.5;
    bottom: -600px;
  }

  display: flex;
  flex-direction: column;
`;
