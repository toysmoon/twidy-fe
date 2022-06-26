import getSetting from 'features/users/api/getSetting';
import useUserQuery, { useMutateUpdateProfile } from 'features/users/queries/useUserQuery';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Boundary from 'shared/components/Boundary';
import EmptyLayout from 'shared/components/Templates/Layout/EmptyLayout';

export default function LoadingPage() {
  return (
    <Boundary pending={<Loading />}>
      <CheckUser />
    </Boundary>
  );
}

function CheckUser() {
  const user = useUserQuery();
  const userId = user?.userId;
  const { mutateAsync: patchProfile } = useMutateUpdateProfile();
  const { data: setting, isLoading } = useQuery(['setting', userId], () => (userId ? getSetting(userId) : null));

  useEffect(() => {
    if (isLoading) {
      return;
    }

    patchProfile(setting);
  }, [setting, isLoading]);

  return <Loading />;
}

function Loading() {
  return (
    <EmptyLayout>
      <div className="fixed top-1/3 w-full flex flex-col justify-center items-center">
        <LoadingIcon />
        <p className="text-white text-lg mt-10">Almost done..</p>
      </div>
    </EmptyLayout>
  );
}

export function LoadingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      className="animate-spin"
    >
      <path
        d="M18.4223 18.4223C16.3359 16.336 12.9277 16.3199 11.0757 18.6168C4.98565 26.17 1.19931 35.3668 0.240763 45.0991C-0.893075 56.6112 1.99982 68.1603 8.42652 77.7785C14.8532 87.3968 24.4161 94.4891 35.4858 97.847C46.5554 101.205 58.447 100.621 69.1342 96.194C79.8214 91.7672 88.6431 83.7717 94.0961 73.5698C99.5491 63.368 101.296 51.591 99.0393 40.2455C96.7825 28.9 90.6617 18.688 81.7197 11.3495C74.1601 5.14548 64.9796 1.31969 55.3323 0.285065C52.3987 -0.0295563 50 2.39185 50 5.34233C50 8.29282 52.4028 10.6473 55.3261 11.047C62.4962 12.0274 69.294 14.9741 74.9414 19.6088C81.9725 25.3792 86.7854 33.4089 88.5599 42.33C90.3344 51.251 88.9608 60.5113 84.673 68.5331C80.3853 76.5549 73.4488 82.8418 65.0453 86.3226C56.6419 89.8035 47.2915 90.2628 38.5874 87.6224C29.8832 84.9821 22.3639 79.4053 17.3105 71.8424C12.2571 64.2795 9.98243 55.1984 10.874 46.1464C11.5901 38.8759 14.3132 31.9854 18.69 26.2222C20.4744 23.8725 20.5086 20.5086 18.4223 18.4223Z"
        fill="url(#paint0_linear_538_12509)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_538_12509"
          x1="50"
          y1="50"
          x2="69"
          y2="2.25936e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1DA1F2" />
          <stop offset="1" stopColor="#1DA1F2" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
