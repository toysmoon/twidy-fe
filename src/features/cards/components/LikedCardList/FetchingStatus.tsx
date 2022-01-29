import { ArrowCircle } from 'shared/components/Icons';

export default function FetchingStatus() {
  return (
    <div className="p-5 my-3 mx-4  bg-white rounded-2xl flex flex-col items-center gap-2">
      <div className="animate-spin">
        <ArrowCircle />
      </div>
      fetching new tweets
    </div>
  );
}
