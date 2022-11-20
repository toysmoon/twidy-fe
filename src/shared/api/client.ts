import axios from 'axios';

const client = axios.create({});
client.defaults.baseURL = 'https://api.twidy.app';

client.defaults.withCredentials = true;

export default client;

export type DefaultResponse = {
  code: number;
  msg: string;
  data: null;
};
