import { ImageResponse } from '@vercel/og';
import { NextApiRequest } from 'next';

export const config = {
  runtime: 'experimental-edge',
};

export default function (req: NextApiRequest) {
  try {
    const { searchParams } = new URL(req.url as string);
    const name = searchParams.get('name');
    const theme = searchParams.get('theme');
    const image = searchParams.get('image');

    return new ImageResponse(
      (
        <div
          tw="flex flex-col fixed inset-0 justify-center items-center gap-10"
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: colorList[theme as string],
          }}
        >
          <div
            tw="w-52 h-52 bg-gray6 rounded-full overflow-hidden box-content"
            style={{ display: 'flex', border: '10px solid #fff' }}
          >
            <img tw="w-52 h-52" src={image as string} />
          </div>
          <h1 tw="font-nunito font-extrabold text-8xl" style={{ color: '#F5F5F7' }}>
            {name}
          </h1>
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

const colorList: Record<string, string> = {
  black: '#000000',
  violet: '#745aff',
  twitter: '#1da1f2',
  mint: '#00c2b7',
  orange: '#ff9f1c',
  heart: '#ff508f',
  yellow: '#ffdc23',
};
