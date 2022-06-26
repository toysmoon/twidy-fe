import getTweet from 'features/cards/api/getTweet';
import { useQuery } from 'react-query';
import { Refer } from 'shared/api/types';
import CardThumbnail from 'shared/components/Thumbnail';
import Twit from './Twit';
import TwitterUser from './TwitterUser';

export default function ReferDetail({ refer }: { refer: Refer }) {
  const { data: card } = useQuery(['twit', 'detail', refer.id], () => getTweet(refer.id), {
    suspense: true,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  if (!card) {
    return null;
  }

  const { author, text, media, url } = card;
  const isHaveMedia = media && media.length > 0;

  return (
    <div className="mt-3 p-4 relative bg-white rounded-2xl border">
      <article>
        <TwitterUser
          profileImage={author.profile_image_url}
          twitterId={author.username}
          name={author.name}
          url={url}
          hideLogo
        />
        <Twit twit={text} />
        {isHaveMedia && <CardThumbnail images={media} tweetUrl={card.url} />}
      </article>
    </div>
  );
}
