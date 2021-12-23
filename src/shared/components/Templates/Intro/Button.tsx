import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import login from 'shared/api/auth/login';
import Twitter from 'shared/components/Icons/Twitter';
import { colors } from 'shared/styles';

export default function Button() {
  const router = useRouter();

  const handleClick = useCallback(async () => {
    const result = await login();
    if (result.code === 2) {
      router.push('/');
    } else {
      router.push(result.data);
    }
  }, [router]);

  return (
    <div className="fixed w-full max-w-xl h-40 bottom-0 bg-gradient-to-t from-black to-transparent flex flex-col-reverse pb-6 px-5">
      <button
        onClick={handleClick}
        className="w-full h-20 bg-white rounded-full flex justify-center items-center"
      >
        <Twitter color={colors.twitter} />
        <label className="font-bold text-xl leading-5 text-twitter ml-3">
          Sign in to get started
        </label>
      </button>
    </div>
  );
}
