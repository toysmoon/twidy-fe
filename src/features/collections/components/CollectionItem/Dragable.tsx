import classNames from 'classnames';
import CollectionIcon from 'features/collections/components/CollectionIcon';
import { Collection } from 'features/collections/types';
import React, { useCallback } from 'react';
import { Delete, Menu } from 'shared/components/Icons';
import useDragable from 'shared/hooks/useDragable';
import { containerDefaultClass } from '.';

interface ICollection {
  id: number;
  index: number;
  data: Collection;
  move: (dragIndex: number, hoverIndex: number) => void;
  remove: (deleteIndex: number) => void;
}

export default function Dragable({
  data,
  id,
  index,
  move,
  remove,
}: ICollection) {
  const { name } = data;
  const { ref, isDragging, handlerId } = useDragable({
    id,
    index,
    move,
  });

  const handleDelete = useCallback(() => {
    if (confirm('Do you really wanna delete this collection?')) {
      remove(index);
    }
  }, [remove, index]);

  const containerClass = classNames(
    containerDefaultClass,
    isDragging ? 'opacity-50' : 'opacity-100'
  );

  const count = data.count ?? 0;
  const iconClass = 'h-6 shrink-0 ml-4';

  return (
    <div ref={ref} data-handler-id={handlerId} className={containerClass}>
      <CollectionIcon collections={data} />
      <div className="px-3 w-full">
        <p className="font-pretendard font-bold text-lg leading-5 m-0">
          {name}
        </p>
        <p className="font-pretendard text-sm leading-4 text-gray3 m-0">{`${count} tweets`}</p>
      </div>
      <div onClick={handleDelete} className={iconClass}>
        <Delete />
      </div>
      <div onClick={handleDelete} className={iconClass}>
        <Menu />
      </div>
    </div>
  );
}
