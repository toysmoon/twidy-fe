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
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path
        d="M10.3165 10.3165C9.14813 9.14814 7.23948 9.13913 6.2024 10.4254C2.79196 14.6552 0.671615 19.8054 0.134827 25.2555C-0.500122 31.7023 1.1199 38.1698 4.71885 43.556C8.31781 48.9422 13.673 52.9139 19.872 54.7943C26.071 56.6748 32.7303 56.3476 38.7151 53.8686C44.7 51.3896 49.6401 46.9121 52.6938 41.1991C55.7475 35.4861 56.7258 28.8909 55.462 22.5375C54.1982 16.184 50.7705 10.4653 45.763 6.35571C41.5296 2.88147 36.3886 0.739029 30.9861 0.159637C29.3432 -0.016552 28 1.33943 28 2.99171C28 4.64398 29.3456 5.96251 30.9826 6.18634C34.9978 6.73533 38.8046 8.38551 41.9672 10.9809C45.9046 14.2123 48.5998 18.709 49.5935 23.7048C50.5873 28.7006 49.818 33.8863 47.4169 38.3785C45.0158 42.8707 41.1313 46.3914 36.4254 48.3407C31.7195 50.2899 26.4832 50.5472 21.6089 49.0686C16.7346 47.59 12.5238 44.467 9.69388 40.2318C6.86399 35.9965 5.59016 30.9111 6.08943 25.842C6.49044 21.7705 8.01538 17.9118 10.4664 14.6844C11.4657 13.3686 11.4848 11.4848 10.3165 10.3165Z"
        fill="url(#paint0_linear_2220_31793)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2220_31793"
          x1="28"
          y1="28"
          x2="38.64"
          y2="1.26524e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
