import { NextApiRequest, NextApiResponse } from 'next';
import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`AWS_REGION:${process.env.AWS_REGION}`);

  // Start the browser with the AWS Lambda wrapper (chrome-aws-lambda)
  const browser = await puppeteer.launch(
    process.env.AWS_REGION
      ? {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless,
        }
      : {
          args: [],
          executablePath:
            '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          headless: true,
        }
  );

  // Create a page with the Open Graph image size best practise
  // 1200x630 is a good size for most social media sites
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900 });

  // Generate the full URL out of the given path (GET parameter)
  const name = req.query.name as string;
  const theme = req.query.theme as string;
  const image = req.query.image as string;
  const url = getThumnailUrl(name, theme, image);

  await page.goto(url, {
    timeout: 15 * 1000,
    waitUntil: 'networkidle0',
  });
  const data = await page.screenshot({
    type: 'png',
  });
  await browser.close();

  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');
  res.setHeader('Content-Type', 'image/png');
  res.end(data);
};

function getThumnailUrl(name: string, theme: string, image: string) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment ? 'http://localhost:3000' : 'https://twidy.app';
  return `${baseUrl}/thumbnail?name=${name}&theme=${theme}&image=${image}`;
}
