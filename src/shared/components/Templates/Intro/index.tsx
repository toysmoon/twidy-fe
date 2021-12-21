import classNames from 'classnames';
import React from 'react';
import Image from 'shared/components/Image';
import IntroTitle from 'shared/components/Templates/Intro/IntroTitle';
import Button from './Button';
import Card from './Card';
import Section from './Section';
import Terms from './Terms';

export default function Intro() {
  return (
    <div className="fixed top-0 bottom-0 max-w-xl w-full overflow-scroll bg-gray1">
      {circles.map((c, i) => (
        <div
          key={`circle-${i}`}
          className={classNames(c, 'rounded-full absolute')}
        />
      ))}
      <div className="p-3 flex flex-col justify-center items-center absolute">
        <IntroTitle />
        <Section
          title={'Tidy up\nliked tweets!'}
          detail="Search, categorize and share your liked tweets through Twidy!"
        >
          <div className="p-10 relative w-full flex justify-center">
            <Image
              src={'/images/intro/screen.png'}
              alt="Picture of the author"
              layout={'intrinsic'}
              width={334}
              height={671}
            />
          </div>
          <div></div>
        </Section>
        <Section
          title="Here's how"
          detail="Search, categorize and share your liked tweets through Twidy!"
        >
          {cardList.map((c, i) => (
            <Card key={`card-${i}`} {...c} />
          ))}
        </Section>
        <Terms />
        <Button />
      </div>
    </div>
  );
}

const cardList = [
  {
    title: 'Categorize',
    detail: 'Categorize your messy liked tweets and make your own collection.',
    color: 'twitter',
    icon: '/images/intro/categorize.png',
  },
  {
    title: 'Search',
    detail: 'Easily search your liked or collected tweets.',
    color: 'heart',
    icon: '/images/intro/search.png',
  },
  {
    title: 'Share',
    detail: 'Share your own collection to your followers.',
    color: 'mint',
    icon: '/images/intro/share.png',
  },
];

const circles = [
  'bg-mint w-16 h-16 -top-5 left-8',
  'bg-twitter w-20 h-20 right-3 top-72',
  'bg-heart w-40 h-40 -left-8 top-96',
];
