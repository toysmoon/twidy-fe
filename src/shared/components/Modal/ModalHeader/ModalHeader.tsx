import cn from 'classnames';
import { ReactNode } from 'react';
import Button from 'shared/components/Button';
import ArrowBack from 'shared/components/Icons/ArrowBack';

interface ModalTypeAProps {
  title: string;
}

export default function ModalHeader({ title }: ModalTypeAProps) {
  return (
    <div className={cn(headerClass, 'justify-center')}>
      <h2 className={titleClass}>{title}</h2>
    </div>
  );
}

interface ModalHeaderTypeBProps {
  left: string | ReactNode;
  right?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

ModalHeader.TypeB = function ({
  left,
  right,
  loading,
  disabled = false,
  onClick = () => {},
}: ModalHeaderTypeBProps) {
  return (
    <div className={cn(headerClass, 'justify-between')}>
      {typeof left === 'string' ? (
        <p className="font-bold text-lg">{left}</p>
      ) : (
        left
      )}
      {right && (
        <Button
          loading={loading}
          label={right}
          disabled={disabled}
          onClick={onClick}
        />
      )}
    </div>
  );
};

interface ModalHeaderTypeCProps {
  left: string | ReactNode;
  right?: string;
  disabled?: boolean;
  loading?: boolean;
  onCancel: () => void;
  onClick?: () => void;
}

ModalHeader.TypeC = function ({
  left,
  onCancel,
  ...props
}: ModalHeaderTypeCProps) {
  return (
    <ModalHeader.TypeB
      left={
        <div className="flex gap-1 items-center">
          <ArrowBack onClick={onCancel} />
          {typeof left === 'string' ? (
            <p className="font-bold text-lg">{left}</p>
          ) : (
            left
          )}
        </div>
      }
      {...props}
    />
  );
};

const headerClass = cn(
  'w-full',
  'h-modal-header',
  'px-5',
  'py-4',
  'bg-white',
  'border-t',
  'flex',
  'items-center',
  'relative',
  'rounded-t-2xl',
  'border-none'
);

const titleClass = cn('font-pretendard', 'font-bold text-base');
