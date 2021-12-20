import React from 'react';
import Logo from 'shared/components/Icons/Logo';
import Twidy from 'shared/components/Icons/Twidy';

export default function IntroTitle() {
  return (
    <div className="w-full h-16 flex justify-center items-center">
      <Logo />
      <Twidy />
    </div>
  );
}
