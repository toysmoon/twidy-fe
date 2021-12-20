import { TopRight } from 'features/collections/components/Icons';
import React from 'react';

interface IViewTweet {
  link: string;
}

export default function ViewTweet({ link }: IViewTweet) {
  return (
    <a
      className="mt-5 mb-3 py-3 px-5 bg-primary rounded-full flex justify-center items-center"
      href={link}
      target="_blank"
    >
      <span className="pr-2 font-roboto font-bold leading-5 text-white">
        View tweet
      </span>
      <div className={'pb-0.5'}>
        <TopRight size={14} />
      </div>
    </a>
  );
}
