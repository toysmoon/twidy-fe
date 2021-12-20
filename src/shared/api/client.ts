import axios from 'axios';

const client = axios.create({});
const isDevelopment = process.env.NODE_ENV === 'development';
client.defaults.baseURL = isDevelopment
  ? 'http://localhost:3000/api'
  : 'https://twidy.app/api';

client.defaults.withCredentials = true;

export default client;

export type DefaultResponse = {
  code: number;
  msg: string;
  data: null;
};
