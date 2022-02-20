import React from 'react';
import Mail from 'shared/components/Icons/Mail';
import Twitter from 'shared/components/Icons/Twitter';

export default function Terms() {
  const detailClass = 'font-roboto text-xs flex items-center text-gray3 my-1';

  return (
    <div className="w-full py-5 px-8 box-border border-t border-t-gray3">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="font-roboto font-bold text-sm leading-4 text-white">
            Team Maeum
          </p>
          <p className={detailClass}>South Korea’s tweeter bums</p>
        </div>
        <div className="flex gap-3">
          <a href="https://twitter.com/twidy_official" target="_blank">
            <Twitter color="#828282" />
          </a>
          <a href="mailto:twidy.official@gmail.com">
            <Mail color="#828282" />
          </a>
        </div>
      </div>
      <p className={detailClass}>
        By clicking Get started and using Twidy you agree to Terms of Service,
        Privacy Policy and that you are above the age of 16.
      </p>
    </div>
  );
}
