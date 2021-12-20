import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

const serverUrl = process.env.SERVER_URL;

export default (req: NextApiRequest, res: NextApiResponse) =>
  httpProxyMiddleware(req, res, {
    target: serverUrl,
    changeOrigin: true,
    pathRewrite: [{ patternStr: '^/api', replaceStr: '' }],
  });
