import { useMutateSetting } from 'features/settings/queries/useSettingQuery';
import registerUser from 'features/users/api/registerUser';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import EmptyLayout from 'shared/components/Templates/Layout/EmptyLayout';

export default function LoadingPage() {
  const router = useRouter();
  const { mutateAsync: postSetting } = useMutateSetting();

  const handleClick = useCallback(
    async (isChecked: boolean) => {
      try {
        const user = await registerUser();
        await postSetting({
          userId: user.data.userId,
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
    },
    [router, postSetting]
  );

  return (
    <EmptyLayout>
      <div className="fixed inset-0 flex flex-col justify-between items-center">
        <div className="h-full flex justify-center items-center flex-col">
          <div className="h-16 flex justify-center items-center">
            <img src="/images/intro/sync_twitter.png" alt="explain sync" className="h-16" />
          </div>
          <h1 className="mt-8 text-white text-center text-2xl font-bold whitespace-pre-line">{`Do you want to sync\ntwitter and twidy?`}</h1>
          <p className="font-pretendard text-base leading-5 text-white pt-2 px-12 text-center opacity-60">
            When you sync, all twidy activity will be reflected in your twitter account.
          </p>
        </div>
        <div className="w-full p-4 flex justify-center items-center gap-4 pb-10">
          <button onClick={() => handleClick(false)} className="w-full h-12 bg-black rounded-full font-bold text-white">
            No, thanks
          </button>
          <button onClick={() => handleClick(true)} className="w-full h-12 bg-white rounded-full font-bold">
            Continue
          </button>
        </div>
      </div>
    </EmptyLayout>
  );
}
