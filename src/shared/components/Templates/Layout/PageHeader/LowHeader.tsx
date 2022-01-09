import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import ArrowBack from 'shared/components/Icons/ArrowBack';
import { colors } from 'shared/styles';

export interface ILowHeader {
  RightButton?: ReactNode;
  color?: string;
  title?: string;
}

export default function LowHeader({ RightButton, title }: ILowHeader) {
  const router = useRouter();

  return (
    <div className="h-20 flex justify-center items-center relative">
      <div className="absolute inset-0 px-4 flex justify-between items-center">
        <ArrowBack onClick={router.back} color={colors.white} />
        {RightButton}
      </div>
      {title && (
        <h1 className="font-bold text-xl leading-6 text-white">{title}</h1>
      )}
    </div>
  );
}
