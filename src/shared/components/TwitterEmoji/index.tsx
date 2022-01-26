import { Emoji, getEmojiDataFromNative } from 'emoji-mart';
import data from 'emoji-mart/data/twitter.json';

type TwitterEmojiProps = {
  value: string;
  size?: number;
};

export default function TwitterEmoji({ value, size = 20 }: TwitterEmojiProps) {
  return (
    <div>
      <Emoji
        emoji={getEmojiDataFromNative(value, 'twitter', data)}
        set={'twitter'}
        size={size}
      />
      <style jsx>{`
        div {
          width: ${size}px;
          height: ${size}px;
        }
      `}</style>
    </div>
  );
}
