import React from 'react';
import Twitter from 'shared/components/Icons/Twitter';
import { colors } from 'shared/styles';

export default function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-10 mx-auto w-50 h-14 rounded-full flex p-1"
    >
      <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
        <Twitter color={colors.black} />
        <label className="font-nunito font-black text-lg leading-5 text-black ml-3">
          Sign In
        </label>
      </div>
      <style jsx>{`
        button {
          animation: rainbow-button 2s infinite;
          transition: 0.125s ease;
        }
      `}</style>
    </button>
  );
}
