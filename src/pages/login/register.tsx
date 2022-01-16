import postSetting from 'features/users/api/postSetting';
import useUserQuery from 'features/users/queries/useUserQuery';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import Toggle from 'shared/components/Form/Toggle';
import EmptyLayout from 'shared/components/Templates/Layout/EmptyLayout';

export default function LoadingPage() {
  const router = useRouter();
  const user = useUserQuery();
  const [isChecked, setChecked] = useState(true);

  const handleClick = useCallback(async () => {
    try {
      await postSetting({
        userId: user?.userId,
        language: 'en',
        theme: 'black',
        autoDelete: isChecked,
        status: 'Y',
      });
    } catch (e) {
      console.log(e);
    } finally {
      router.replace('/');
    }
  }, [isChecked, router, user]);

  return (
    <EmptyLayout>
      <div className="fixed inset-0 flex flex-col justify-between items-center">
        <h1 className="mt-16 text-white text-center text-2xl font-bold">
          Let’s organize your <br /> liked tweets with Twidy!
        </h1>
        <div>
          <TwidyIcon />
        </div>
        <div className="w-full p-4 flex flex-col justify-center items-center">
          <div className="px-2 w-full flex justify-between">
            <div>
              <p className="text-sm text-white">Sync twidy with Twitter</p>
              <p className="text-xs text-gray-500">What is synchronization?</p>
            </div>
            <Toggle
              isChecked={isChecked}
              onClick={() => setChecked(!isChecked)}
            />
          </div>
          <button
            onClick={handleClick}
            className="w-full h-16 bg-white rounded-full mt-6 mb-4 font-bold"
          >
            Start organizing your likes
          </button>
          <p className="text-gray-500 text-xs pb-4">
            By logging in you accept the Privacy and Terms.
          </p>
        </div>
      </div>
    </EmptyLayout>
  );
}

function TwidyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="148"
      height="138"
      viewBox="0 0 148 138"
      fill="none"
    >
      <rect
        x="61.3779"
        y="23.8423"
        width="97.2182"
        height="77.7183"
        rx="24.7797"
        transform="rotate(27 61.3779 23.8423)"
        fill="#00C2B7"
      />
      <rect
        x="43.9668"
        y="28.5459"
        width="97.2182"
        height="77.7183"
        rx="24.7797"
        transform="rotate(13 43.9668 28.5459)"
        fill="#FF9533"
      />
      <rect
        x="32.6753"
        y="29.1113"
        width="97.2182"
        height="77.7183"
        rx="22.527"
        transform="rotate(6 32.6753 29.1113)"
        fill="#FF508F"
      />
      <rect
        x="21.5894"
        y="29.4741"
        width="97.2182"
        height="77.7183"
        rx="20.2743"
        fill="#745AFF"
      />
      <rect
        x="29.9727"
        y="42.2446"
        width="54.0649"
        height="47.3068"
        transform="rotate(-5 29.9727 42.2446)"
        fill="#1D1D1F"
      />
      <path
        d="M65.5336 84.8269C18.3579 67.6989 43.1938 37.0727 59.8332 52.4997C69.5849 32.419 103.398 52.704 65.5336 84.8269Z"
        fill="url(#paint0_radial_960_31616)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.91311 43.8968C7.18478 34.0949 13.7297 24.7478 23.5315 23.0195L35.0359 20.991C39.4377 20.2148 43.962 21.3431 47.4839 24.0954L52.6983 28.1703L82.9724 22.8321C93.9995 20.8878 104.515 28.2508 106.459 39.2779L112.523 73.6643C114.467 84.6914 107.104 95.2069 96.0768 97.1512L40.6148 106.931C29.5877 108.875 19.0723 101.512 17.1279 90.485L12.4337 63.8631L8.91311 43.8968ZM65.5338 84.8267C18.3581 67.6986 43.1939 37.0724 59.8333 52.4995C69.5851 32.4187 103.398 52.7038 65.5338 84.8267Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_960_31616"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(50.6367 59.9868) rotate(34.1186) scale(25.8877 22.6811)"
        >
          <stop stopColor="white" stopOpacity="0.6" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
