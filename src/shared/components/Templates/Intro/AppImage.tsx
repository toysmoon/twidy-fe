import Image from 'shared/components/Image';

export default function AppImage() {
  return (
    <div className="p-10 relative w-full flex justify-center">
      <Image
        src={'/images/intro/screen.png'}
        alt="Picture of the author"
        layout={'intrinsic'}
        width={334}
        height={671}
      />
    </div>
  );
}
