import CollectionIcon from 'features/collections/components/CollectionIcon';
import { Collection } from 'features/collections/types';
import React from 'react';

interface ICollectionTitleProps {
  collection: Collection;
}

export default function CollectionTitle({ collection }: ICollectionTitleProps) {
  return (
    <div className="flex flex-col justify-center items-center -mt-1 mx-10 mb-10 overflow-hidden">
      <CollectionIcon collections={collection} hasBorder />
      <h2 className="font-bold text-2xl leading-6 text-center text-white mt-5 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
        {collection.name}
      </h2>
      <p className="text-sm leading-4 text-center text-white opacity-50">{`${
        collection.count ?? 0
      } tweets`}</p>
    </div>
  );
}
