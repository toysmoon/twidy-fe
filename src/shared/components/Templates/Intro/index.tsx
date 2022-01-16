import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import login from 'shared/api/auth/login';
import AppImage from './AppImage';
import Button from './Button';
import CardList from './CardList';
import Header from './Header';
import Terms from './Terms';
import Title from './Title';

export default function Intro() {
  const router = useRouter();

  const handleClick = useCallback(async () => {
    const result = await login();
    if (result.code === 0) {
      router.push('/login');
    } else {
      router.push(result.data);
    }
  }, [router]);

  return (
    <div className="fixed top-0 bottom-0 max-w-xl w-full overflow-scroll bg-gray1">
      <Header onClick={handleClick} />
      <Title
        title={'Tidy up\nliked tweets!'}
        detail="Search, categorize and share your liked tweets through Twidy!"
      />
      <Button onClick={handleClick} />
      <AppImage />
      <CardList cards={cardList} />
      <Terms />
    </div>
  );
}

const cardList = [
  {
    title: 'Categorize',
    detail: 'Categorize your messy tweets in your own collection.',
    icon: '/images/intro/categorize.png',
    color: 'bg-twitter',
  },
  {
    title: 'Search',
    detail: 'Easily search your liked or collected tweets.',
    icon: '/images/intro/search.png',
    color: 'bg-orange',
  },
  {
    title: 'Share',
    detail: 'Share your own collection to your followers.',
    icon: '/images/intro/share.png',
    color: 'bg-mint',
  },
];
