import cn from 'classnames';
import { getGridClass } from 'features/cards/components/Thumbnail';
import { Media } from 'shared/api/types';
import Image from 'shared/components/Image';

type Props = {
  images: Media[];
};

export default function MultiImageThumbnail({ images }: Props) {
  return (
    <div className="relative mt-4 overflow-hidden">
      <div className="pb-50-percent" />
      <div className="grid grid-cols-2 grid-rows-2 gap-0.5 absolute inset-0 rounded-md overflow-hidden">
        {images.map((image, i) => (
          <div key={`thumb-image-${i}`} className={cn(getGridClass(images.length, i), 'relative')}>
            <Image src={image.url ?? image.preview_image_url} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
