import { containerDefaultClass } from '../CollectionItem';

export default function Skeleton() {
  return (
    <div className="flex p-4 flex-col gap-3">
      <div className={containerDefaultClass.join(' ')}>
        <div
          className={
            'w-12 h-12 bg-gray-100 animate-pulse rounded-full flex-shrink-0'
          }
        />
        <div className={'pl-3 w-full flex flex-col gap-1'}>
          <div className={'w-3/4 h-5 bg-gray-100 animate-pulse rounded-full'} />
          <div className={'w-2/5 h-4 bg-gray-100 animate-pulse rounded-full'} />
        </div>
      </div>
      <div className={containerDefaultClass.join(' ')}>
        <div
          className={
            'w-12 h-12 bg-gray-100 animate-pulse rounded-full flex-shrink-0'
          }
        />
        <div className={'pl-3 w-full flex flex-col gap-1'}>
          <div className={'w-3/4 h-5 bg-gray-100 animate-pulse rounded-full'} />
          <div className={'w-2/5 h-4 bg-gray-100 animate-pulse rounded-full'} />
        </div>
      </div>
      <div className={containerDefaultClass.join(' ')}>
        <div
          className={
            'w-12 h-12 bg-gray-100 animate-pulse rounded-full flex-shrink-0'
          }
        />
        <div className={'pl-3 w-full flex flex-col gap-1'}>
          <div className={'w-3/4 h-5 bg-gray-100 animate-pulse rounded-full'} />
          <div className={'w-2/5 h-4 bg-gray-100 animate-pulse rounded-full'} />
        </div>
      </div>
    </div>
  );
}
