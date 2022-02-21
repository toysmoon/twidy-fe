import TwitterEmoji from '../TwitterEmoji';

export default function GoogleForm() {
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSccBfkNbu3ps_Q5KBHAPKQuGCnxVpW01DDJFACVcVQxAQoeEg/viewform?usp=sf_link';
  return (
    <a href={formUrl} target="_blank">
      <div className="fixed bottom-6 right-2 w-14 h-14 rounded-full bg-white flex justify-center items-center drop-shadow-xl text-2xl">
        <TwitterEmoji value="💬" size={30} />
      </div>
    </a>
  );
}
