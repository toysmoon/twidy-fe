import classNames from 'classnames';
import Image from 'shared/components/Image';

interface ICard {
  color: string;
  title: string;
  detail: string;
  icon: string;
}

export default function CardList({ cards }: { cards: ICard[] }) {
  return (
    <div className="flex flex-col gap-6 mx-10 mb-20">
      {cards.map((c, i) => (
        <Card key={`card-${i}`} {...c} />
      ))}
    </div>
  );
}

function Card({ color, title, detail, icon }: ICard) {
  return (
    <div className={classNames('p-7 rounded-3xl bg-white', 'flex')}>
      <div
        className={`w-12 h-12 relative bg-${color} rounded-full p-3 mr-4 shrink-0`}
      >
        <div className="relative w-full h-full">
          <Image src={icon} layout={'fill'} quality={100} />
        </div>
      </div>
      <div>
        <p className="font-nunito font-extrabold text-xl leading-7 mb-1 text-gray1">
          {title}
        </p>
        <p className="font-roboto text-base text-gray3 leading-5">{detail}</p>
      </div>
    </div>
  );
}
