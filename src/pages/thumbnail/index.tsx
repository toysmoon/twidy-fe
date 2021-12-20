import { useRouter } from 'next/router';
import EmptyLayout from 'shared/components/Templates/Layout/EmptyLayout';

export default function () {
  const { query } = useRouter();
  const name = query.name as string;
  const theme = query.theme as string;

  return (
    <EmptyLayout color={theme}>
      <div className="flex fixed inset-0 px-24 justify-between items-center">
        <div>
          <div className="flex items-center">
            <TwidyIcon />
            <p className="text-white text-6xl pl-5">Twidy</p>
          </div>
          <p className="text-white text-9xl font-extrabold">{name}</p>
        </div>
        <div className="w-52 h-52 bg-white rounded-full"></div>
      </div>
    </EmptyLayout>
  );
}

export function TwidyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.51799 14.7992C2.14831 10.5738 5.274 6.84876 9.49941 6.47908L14.4587 6.0452C16.3563 5.87919 18.2351 6.52624 19.628 7.82545L21.6902 9.74894L34.741 8.60715C39.4945 8.19127 43.6852 11.7077 44.1011 16.4612L45.398 31.2846C45.8139 36.0382 42.2975 40.2289 37.5439 40.6448L13.6352 42.7365C8.88162 43.1524 4.69094 39.636 4.27506 34.8824L3.27103 23.4063L3.27101 23.4063L2.51799 14.7992ZM25.0353 34.278C5.64386 25.2544 17.325 13.175 23.816 20.3423C28.7018 12.1796 42.3032 22.0472 25.0353 34.278Z"
        fill="white"
      />
    </svg>
  );
}
