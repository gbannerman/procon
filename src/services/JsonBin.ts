import axios from 'axios';
import { ProconBin } from '../models/ProconBin';

const instance = axios.create({
  baseURL: 'https://api.jsonbin.io/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'secret-key': process.env.REACT_APP_API_BIN_KEY,
    'collection-id': '5d00d8bec8ef78426778efff'
  }
});

export async function getBin(id: string) {
  const response = await instance.get(`b/${id}/latest`);
  return response.data as ProconBin;
}