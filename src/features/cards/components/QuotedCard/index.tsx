import Card from 'features/cards/types/Card';
import Avatar from '../LikedCardList/TwitterUser/Avatar';

interface Props {
  card: Card;
}

export default function QuotedCard({ card }: Props) {
  return (
    <div className="rounded-xl border border-gray6 p-4">
      <div className="pb-2 flex items-center">
        <Avatar src={card.author.profile_image_url} />
        <p className="pl-2 font-bold text-sm">{card.author.name}</p>
        <p className="pl-1 text-xs text-gray3">{`@${card.author.username}`}</p>
      </div>
      <p className="text-base leading-5 whitespace-pre-wrap">{card.text}</p>
    </div>
  );
}
