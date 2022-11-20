import { useRouter } from 'next/router';
import { Eye } from 'shared/components/Icons';
import PageMore from '../PageMore';

export default function PageHeader() {
  const router = useRouter();

  return (
    <div className="absolute top-6 right-2 flex items-center">
      <div
        onClick={() => router.push('/preview')}
        className="py-1 px-4 rounded-lg border border-white cursor-pointer flex items-center gap-2"
      >
        <Eye />
        <p className="text-white text-caption-bold pt-0.5">Preview</p>
      </div>
      <PageMore />
    </div>
  );
}
