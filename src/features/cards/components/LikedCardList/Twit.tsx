import React from 'react';

interface ITwitProps {
  twit: string;
  useMaxLine?: boolean;
}

const Twit = ({ twit, useMaxLine = false }: ITwitProps) => {
  const maxLineClass = useMaxLine ? 'max-line-4' : '';

  return (
    <div className={`mt-2 overflow-hidden ${maxLineClass}`}>
      <p className="whitespace-pre-wrap " dangerouslySetInnerHTML={{ __html: renderTwit(twit) }} />
    </div>
  );
};

export default React.memo(Twit);

const renderTwit = (twit: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const hashtagRegex = /(#[^\s]+)/g;

  return twit
    .replace(urlRegex, url => `<a href=${url} target="_blank" class="underline text-blue-200">${url}</a>`)
    .replace(
      hashtagRegex,
      hashtag => `<a href="${getHashtagUrl(hashtag)}" target="_blank" class="underline text-blue-200">${hashtag}</a>`
    );
};

function getHashtagUrl(hashtag: string) {
  return `https://twitter.com/hashtag/${hashtag.substring(1)}`;
}
