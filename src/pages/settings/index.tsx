import React from 'react';
import { useRecoilValue } from 'recoil';
import LowLayout from 'shared/components/Templates/Layout/LowLayout';
import { userState } from 'shared/states/userState';

export default function SettingTheme() {
  const user = useRecoilValue(userState);

  if (!user) {
    return null;
  }

  return <LowLayout>Test</LowLayout>;
}
