import CollectionList from 'features/collections/components/CollectionList';
import CollectionListSkeleton from 'features/collections/components/CollectionListSkeleton';
import { getProfileByUserName } from 'features/users/api/getProfile';
import getSetting, { Setting } from 'features/users/api/getSetting';
import ProfileView from 'features/users/components/ProfileView';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { redirectUser } from 'pages/_app';
import React from 'react';
import { User } from 'shared/api/types';
import Boundary from 'shared/components/Boundary';
import EmptyLayout from 'shared/components/Templates/Layout/EmptyLayout';

export default function UserPage({
  data: initialData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const user = initialData.user as User;
  const setting = initialData.setting as Setting;
  const userId = user.userId;

  const handleClickCollection = (collectionId: number) => {
    router.push(`/${user.name}/collections/${collectionId}`);
  };

  return (
    <EmptyLayout color={setting.theme}>
      <ProfileMeta
        name={user.name}
        theme={setting.theme}
        image={user.profileImageUrl}
      />
      <ProfileView user={user} />
      <Boundary pending={<CollectionListSkeleton />}>
        <CollectionList
          userId={userId}
          onClickCollection={handleClickCollection}
        />
      </Boundary>
      <TwidyFooter />
    </EmptyLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userName = ctx.query.userName as string;
  const user = await getProfileByUserName(userName);
  if (!user) {
    redirectUser(ctx, '/404');
    return { props: {} };
  }

  const setting = await getSetting(user.userId);
  return { props: { data: { user, setting } } };
};

type ProfileMetaProps = {
  name: string;
  theme: string;
  image: string;
};

function ProfileMeta({ name, theme, image }: ProfileMetaProps) {
  const title = `${name}'s Twidy`;
  const imageUrl = `/api/og?name=${name}&theme=${theme}&image=${encodeURIComponent(
    image
  )}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={imageUrl} key="image" />
    </Head>
  );
}

function TwidyFooter() {
  return (
    <div className="w-full flex justify-center items-center flex-col pt-10">
      <p className="text-white font-bold">This page is made by</p>
      <div className="flex items-center pt-2">
        <FooterIcon />
        <FooterText />
      </div>
    </div>
  );
}

function FooterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.14203 6.71036C0.974402 4.79439 2.39171 3.10531 4.30768 2.93769L6.55644 2.74095C7.41685 2.66567 8.26879 2.95907 8.90039 3.54818L9.83559 4.42047L15.7531 3.90276C17.9085 3.71418 19.8088 5.30866 19.9973 7.46412L20.5854 14.1856C20.774 16.3411 19.1795 18.2413 17.024 18.4299L6.18288 19.3784C4.02742 19.567 2.1272 17.9725 1.93862 15.817L1.35056 9.0955L1.34781 9.0625L1.14203 6.71036ZM11.3522 15.543C2.55929 11.4513 7.85599 5.97402 10.7993 9.22397C13.0147 5.52266 19.1821 9.99701 11.3522 15.543Z"
        fill="white"
      />
    </svg>
  );
}

function FooterText() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="59"
      height="20"
      viewBox="0 0 59 20"
      fill="none"
      className="pl-2"
    >
      <path
        d="M7.47339 13.4212C8.38773 13.4761 8.8449 13.888 8.8449 14.6569C8.8449 15.1374 8.66067 15.4944 8.2922 15.7278C7.92374 15.9612 7.39834 16.0574 6.716 16.0162L6.14283 15.975C4.91462 15.8789 3.97981 15.5082 3.33841 14.8628C2.71066 14.2038 2.39678 13.2908 2.39678 12.1237V8.47841H1.80314C0.7114 8.47841 0.165527 8.02532 0.165527 7.11915C0.165527 6.2267 0.7114 5.78048 1.80314 5.78048H2.39678V4.4418C2.39678 3.92006 2.56054 3.50816 2.88807 3.20611C3.21559 2.89032 3.65911 2.73242 4.21863 2.73242C4.77815 2.73242 5.22167 2.89032 5.54919 3.20611C5.87672 3.50816 6.04048 3.92006 6.04048 4.4418V5.78048H7.16634C8.25809 5.78048 8.80396 6.2267 8.80396 7.11915C8.80396 8.02532 8.25809 8.47841 7.16634 8.47841H6.04048V12.4326C6.04048 12.6935 6.11554 12.9132 6.26565 13.0917C6.42941 13.2702 6.63412 13.3663 6.87976 13.38L7.47339 13.4212Z"
        fill="white"
      />
      <path
        d="M24.5196 6.60494C24.6561 6.26169 24.8471 6.00769 25.0928 5.84293C25.3521 5.66444 25.6318 5.5752 25.9321 5.5752C26.3824 5.5752 26.785 5.73309 27.1398 6.04888C27.4946 6.35094 27.672 6.72165 27.672 7.16101C27.672 7.36696 27.6174 7.5935 27.5083 7.84064L24.1921 14.9871C24.042 15.3303 23.81 15.5981 23.4961 15.7903C23.1959 15.9688 22.8615 16.058 22.4931 16.058C22.1246 16.058 21.7903 15.9688 21.49 15.7903C21.1898 15.5981 20.9646 15.3303 20.8145 14.9871L18.8698 10.6416L17.048 14.9871C16.9115 15.3303 16.6864 15.5981 16.3725 15.7903C16.0722 15.9688 15.7379 16.058 15.3694 16.058C15.001 16.058 14.6598 15.9688 14.3459 15.7903C14.0457 15.5981 13.8137 15.3303 13.6499 14.9871L10.3542 7.84064C10.2587 7.63469 10.2109 7.41501 10.2109 7.1816C10.2109 6.72851 10.3952 6.35094 10.7636 6.04888C11.1457 5.73309 11.5688 5.5752 12.0328 5.5752C12.3603 5.5752 12.6537 5.66444 12.913 5.84293C13.1859 6.00769 13.3906 6.26856 13.5271 6.62554L15.4718 11.383L17.4574 6.64613C17.5939 6.30288 17.8054 6.04201 18.092 5.86352C18.3786 5.68503 18.6856 5.59579 19.0131 5.59579C19.3407 5.59579 19.6477 5.68503 19.9343 5.86352C20.2209 6.04201 20.4324 6.30288 20.5689 6.64613L22.6159 11.4036L24.5196 6.60494Z"
        fill="white"
      />
      <path
        d="M31.4084 16.0369C30.8898 16.0369 30.4531 15.8996 30.0983 15.625C29.7572 15.3367 29.5866 14.9111 29.5866 14.3482V7.2635C29.5866 6.70057 29.7572 6.2818 30.0983 6.0072C30.4531 5.71887 30.8898 5.57471 31.4084 5.57471C31.927 5.57471 32.3569 5.71887 32.698 6.0072C33.0529 6.2818 33.2303 6.70057 33.2303 7.2635V14.3482C33.2303 14.9111 33.0529 15.3367 32.698 15.625C32.3569 15.8996 31.927 16.0369 31.4084 16.0369ZM31.4084 4.13306C30.7943 4.13306 30.303 3.97517 29.9346 3.65938C29.5798 3.32986 29.4023 2.89737 29.4023 2.3619C29.4023 1.82643 29.5798 1.4008 29.9346 1.08501C30.303 0.769223 30.7943 0.611328 31.4084 0.611328C32.0089 0.611328 32.4933 0.769223 32.8618 1.08501C33.2303 1.4008 33.4145 1.82643 33.4145 2.3619C33.4145 2.89737 33.2303 3.32986 32.8618 3.65938C32.507 3.97517 32.0225 4.13306 31.4084 4.13306Z"
        fill="white"
      />
      <path
        d="M44.4805 1.29053C45.0264 1.29053 45.4699 1.44842 45.8111 1.76421C46.1659 2.06627 46.3433 2.45757 46.3433 2.93812V14.3477C46.3433 14.8695 46.1796 15.2814 45.852 15.5834C45.5245 15.8855 45.0878 16.0365 44.5419 16.0365C44.037 16.0365 43.6208 15.9061 43.2933 15.6452C42.9794 15.3706 42.802 14.9999 42.761 14.5331C42.4744 15.0136 42.0514 15.3912 41.4919 15.6658C40.946 15.9404 40.3387 16.0777 39.67 16.0777C38.8103 16.0777 38.0392 15.858 37.3569 15.4187C36.6882 14.9656 36.1628 14.334 35.7807 13.5239C35.3986 12.7139 35.2075 11.7871 35.2075 10.7436C35.2075 9.70013 35.3917 8.78709 35.7602 8.00448C36.1423 7.20814 36.6677 6.59716 37.3364 6.17153C38.0188 5.7459 38.7966 5.53309 39.67 5.53309C40.3114 5.53309 40.8982 5.66352 41.4305 5.92439C41.9763 6.18526 42.3994 6.53537 42.6996 6.97473V2.87634C42.6996 2.39579 42.8566 2.01135 43.1704 1.72302C43.498 1.43469 43.9347 1.29053 44.4805 1.29053ZM40.7754 13.3386C41.4168 13.3386 41.9081 13.1189 42.2493 12.6795C42.5904 12.2402 42.761 11.6086 42.761 10.7848C42.761 9.97473 42.5904 9.35688 42.2493 8.93125C41.9081 8.49189 41.4168 8.27221 40.7754 8.27221C40.1477 8.27221 39.6632 8.48503 39.322 8.91066C38.9809 9.33629 38.8103 9.94727 38.8103 10.7436C38.8103 11.5674 38.9809 12.2058 39.322 12.6589C39.6768 13.112 40.1613 13.3386 40.7754 13.3386Z"
        fill="white"
      />
      <path
        d="M55.7861 6.60494C55.9362 6.26169 56.1409 6.00769 56.4002 5.84293C56.6595 5.67817 56.9461 5.59579 57.2599 5.59579C57.7103 5.59579 58.1129 5.74682 58.4677 6.04888C58.8225 6.35094 58.9999 6.71478 58.9999 7.14041C58.9999 7.37382 58.9453 7.60037 58.8361 7.82004L53.4115 18.756C53.2478 19.0992 53.0294 19.3532 52.7565 19.518C52.4972 19.6827 52.2106 19.7651 51.8967 19.7651C51.4464 19.7651 51.0438 19.6141 50.689 19.312C50.3478 19.0237 50.1772 18.6667 50.1772 18.2411C50.1772 18.0077 50.2387 17.7674 50.3615 17.5203L51.692 14.8223L48.2121 7.82004C48.1029 7.57291 48.0483 7.35323 48.0483 7.16101C48.0483 6.72165 48.2394 6.35094 48.6215 6.04888C49.0036 5.73309 49.4335 5.5752 49.9111 5.5752C50.2387 5.5752 50.5389 5.66444 50.8118 5.84293C51.0984 6.00769 51.3167 6.26169 51.4669 6.60494L53.6367 11.3418L55.7861 6.60494Z"
        fill="white"
      />
    </svg>
  );
}
