import cn from 'classnames';

export default function LikedCardSkeleton() {
  const bgColor = ['bg-gray-200', 'rounded-full'];

  return (
    <div className={cn('p-5', 'm-4', 'bg-white', 'rounded-lg')}>
      <div className={cn('animate-pulse')}>
        <div className={cn('pb-2.5', 'flex', 'items-center')}>
          <div className={cn('w-5', 'h-5', bgColor)} />
          <div className={cn('w-20', 'h-4', 'ml-2.5', bgColor)} />
          <div className={cn('w-20', 'h-4', 'ml-2.5', bgColor)} />
        </div>
        <div className={cn('w-full', 'h-4', 'mb-1', bgColor)} />
        <div className={cn('w-full', 'h-4', 'mb-1', bgColor)} />
        <div className={cn('w-6/12', 'h-4', 'mb-1', bgColor)} />
        <div className={cn('mt-5 flex items-center justify-between')}>
          <div className={cn('w-20', 'h-5', bgColor)} />
          <div className={cn('w-24', 'h-10', 'ml-2.5', bgColor)} />
        </div>
      </div>
    </div>
  );
}
