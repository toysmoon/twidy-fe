interface IHeaderButton {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function HeaderButton({
  label,
  onClick,
  disabled = false,
}: IHeaderButton) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex flex-col justify-center items-center py-2 px-5 bg-opacity-20 bg-white rounded-2xl font-pretendard font-bold text-lg leading-5 text-white"
    >
      {label}
    </button>
  );
}
