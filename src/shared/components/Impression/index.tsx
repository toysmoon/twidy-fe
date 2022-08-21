import { useImpressionArea } from 'shared/hooks/useImpressionArea';

type Props = {
  onDisplay: () => void;
};

export default function Impression({ onDisplay }: Props) {
  const targetRef = useImpressionArea({ onDisplay });
  return <div ref={targetRef} />;
}
