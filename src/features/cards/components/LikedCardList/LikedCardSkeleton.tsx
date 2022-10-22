import cn from 'classnames';

export default function LikedCardSkeleton() {
  const bgColor = ['bg-gray-200', 'rounded-full'];

  return (
    <div className={'p-5 my-3 mx-4 relative bg-white rounded-2xl'}>
      <div className={cn('animate-pulse')}>
        <div className={cn('pb-2.5', 'flex', 'items-center')}>
          <div className={cn('w-8', 'h-8', bgColor)} />
          <div className="flex flex-col h-8 ml-2 gap-1">
            <div className={cn('w-16', 'h-3', bgColor)} />
            <div className={cn('w-10', 'h-3', bgColor)} />
          </div>
        </div>
        <div className={cn('w-full', 'h-4', 'mb-1', bgColor)} />
        <div className={cn('w-full', 'h-4', 'mb-1', bgColor)} />
        <div className={cn('w-6/12', 'h-4', 'mb-1', bgColor)} />
        <div className={cn('mt-5 flex items-center justify-between')}>
          <div className={cn('w-20', 'h-5', bgColor)} />
          <div className={cn('w-20', 'h-9', 'ml-2.5', bgColor)} />
        </div>
      </div>
    </div>
  );
}
