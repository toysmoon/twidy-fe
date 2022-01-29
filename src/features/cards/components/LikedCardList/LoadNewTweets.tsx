import { useRefreshCardList } from 'features/cards/queries/useUnclassifiedQuery';
import { ArrowCircle } from 'shared/components/Icons';

export default function LoadNewTweets() {
  const handleRefetch = useRefreshCardList();

  return (
    <div
      onClick={handleRefetch}
      className="p-5 my-3 mx-4  bg-white rounded-2xl flex flex-col items-center gap-2"
    >
      <div className="">
        <ArrowCircle />
      </div>
      Load new tweets
    </div>
  );
}
