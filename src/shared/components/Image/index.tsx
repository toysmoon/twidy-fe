import NextImage from 'next/image';

export default function Image(props: any) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return <NextImage {...props} unoptimized={isDevelopment} />;
}
