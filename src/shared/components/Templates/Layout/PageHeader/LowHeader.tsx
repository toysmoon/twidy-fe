import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import ArrowBack from 'shared/components/Icons/ArrowBack';
import { colors } from 'shared/styles';

export interface ILowHeader {
  RightButton?: ReactNode;
  color?: string;
}

export const headerClass = 'h-14 pt-3 px-4 flex justify-between items-center';

export default function LowHeader({ RightButton }: ILowHeader) {
  const router = useRouter();

  return (
    <div className={headerClass}>
      <ArrowBack onClick={router.back} color={colors.white} />
      {RightButton}
    </div>
  );
}
