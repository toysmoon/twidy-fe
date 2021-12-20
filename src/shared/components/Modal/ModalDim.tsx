interface IDim {
  onClose?: () => void;
}

export default function ModalDim({ onClose = () => {} }: IDim) {
  return <div onClick={onClose} className="fixed inset-0 z-40" />;
}
