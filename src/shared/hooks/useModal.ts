import classNames from 'classnames';

interface UseModalOptions {
  useMinHeight?: boolean;
}

const useModal = (
  isOpen: boolean,
  { useMinHeight = false }: UseModalOptions
) => {
  return classNames(
    isOpen ? 'bottom-0 opacity-100' : '-bottom-full opacity-0',
    useMinHeight && 'min-height-50'
  );
};

export default useModal;
