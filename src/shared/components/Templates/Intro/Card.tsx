import classNames from 'classnames';
import Image from 'shared/components/Image';

interface ICard {
  color: string;
  title: string;
  detail: string;
  icon: string;
}

export default function Card({ color, title, detail, icon }: ICard) {
  return (
    <div
      className={classNames(
        'h-48 box-border my-10 mx-6 p-7 relative rounded-3xl',
        `bg-${color}`
      )}
    >
      <p className="font-nunito font-extrabold text-3xl leading-10 m-0 text-white">
        {title}
      </p>
      <p className="font-roboto text-base leading-6 mt-2 mr-14">{detail}</p>
      <div className="absolute bottom-7 right-7 w-14 h-14">
        <Image src={icon} layout={'fill'} quality={100} />
      </div>
    </div>
  );
}
