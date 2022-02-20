import { useRouter } from 'next/router';
import React from 'react';
import ArrowBack from 'shared/components/Icons/ArrowBack';
import { colors } from 'shared/styles';
import HeaderButton from '../HeaderButton';

export interface ISaveProps {
  onApply: () => void;
  isLoading?: boolean;
}

export default function SaveHeader({ onApply, isLoading }: ISaveProps) {
  const router = useRouter();

  return (
    <div className="h-14 pt-3 px-4 flex justify-between items-center">
      <ArrowBack onClick={router.back} color={colors.white} />
      <HeaderButton label="Apply" onClick={onApply} disabled={isLoading} />
    </div>
  );
}
