import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { Logo } from 'shared/components/Icons';
import { colors } from 'shared/styles';
import PageMore from '../PageMore';
import { headerClass } from './LowHeader';

export default function PageHeader() {
  const router = useRouter();
  const moveHome = useCallback(() => router.push('/'), [router]);

  return (
    <div className={headerClass}>
      <Logo onClick={moveHome} color={colors.white} width={40} height={40} />
      <div className="flex gap-2">
        <PageMore />
      </div>
    </div>
  );
}
