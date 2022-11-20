interface Props {
  size: number;
}

export default function Spacer({ size }: Props) {
  return <div style={{ width: '100%', height: `${size}px` }} />;
}
