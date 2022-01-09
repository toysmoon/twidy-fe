interface ISettingItemProps {
  title: string;
  description?: string | React.ReactNode;
  right?: React.ReactNode;
  onClick?: () => void;
}

export default function SettingItem({
  title,
  description,
  right,
  onClick,
}: ISettingItemProps) {
  return (
    <li
      onClick={onClick}
      className="py-5 flex justify-between border-b border-white border-opacity-10"
    >
      <div>
        <p className="font-bold text-white text-base leading-5">{title}</p>
        {description && (
          <p className="text-gray4 text-sm leading-4">{description}</p>
        )}
      </div>
      {right}
    </li>
  );
}
