export default function ProfileSkeleton() {
  return (
    <div className="flex flex-col items-center pt-16 pb-10 animate-pulse">
      <div className="w-16 h-16 rounded-full bg-white opacity-30" />
      <div className="mt-6 w-48 h-5 rounded-full bg-white opacity-30" />
      <div className="mt-3 w-36 h-3 rounded-full bg-white opacity-30" />
    </div>
  );
}