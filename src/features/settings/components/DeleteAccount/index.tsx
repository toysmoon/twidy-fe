import postWithdrawal from 'features/users/api/postWithdrawal';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export default function DeleteAccount() {
  const router = useRouter();
  const handleDelete = useCallback(async () => {
    const confirmResult = confirm('Are you sure?');
    if (confirmResult) {
      await postWithdrawal();
      router.replace('/about');
    }
  }, [router]);

  return (
    <div
      onClick={handleDelete}
      className="fixed left-5 bottom-8 text-sm text-gray4"
    >
      or Delete account
    </div>
  );
}
