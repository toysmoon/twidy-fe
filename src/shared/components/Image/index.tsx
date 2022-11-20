import NextImage from 'next/image';

export default function Image(props: any) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (props.width) {
    return <NextImage {...props} unoptimized={isDevelopment} />;
  }

  return <NextImage {...props} fill={true} unoptimized={isDevelopment} className="object-cover" />;
}
