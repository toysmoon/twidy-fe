import React from 'react';
import Twitter from 'shared/components/Icons/Twitter';
import { colors } from 'shared/styles';

export default function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-10 mx-auto w-50 h-14 bg-white rounded-full flex justify-center items-center"
    >
      <Twitter color={colors.black} />
      <label className="font-nunito font-black text-lg leading-5 text-black ml-3">
        Sign In
      </label>
      <style jsx>{`
        button {
        }
      `}</style>
    </button>
  );
}
