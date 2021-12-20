import { useRouter } from 'next/router';
import React from 'react';
import ArrowBack from 'shared/components/Icons/ArrowBack';
import { colors } from 'shared/styles';
import HeaderButton from '../HeaderButton';
import { headerClass } from './LowHeader';

export interface ISaveProps {
  onApply: () => void;
}

export default function SaveHeader({ onApply }: ISaveProps) {
  const router = useRouter();

  return (
    <div className={headerClass}>
      <ArrowBack onClick={router.back} color={colors.white} />
      <HeaderButton label="Apply" onClick={onApply} />
    </div>
  );
}
