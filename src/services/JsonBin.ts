import axios from 'axios';
import { ProconBin } from '../models/ProconBin';

const instance = axios.create({
  baseURL: 'https://api.jsonbin.io/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'secret-key': process.env.REACT_APP_BIN_API_KEY,
    'collection-id': '5d00d8bec8ef78426778efff'
  }
});

interface CreateBinResponse {
  success: boolean;
  id: string;
  data: ProconBin;
}

interface UpdateBinResponse {
  success: boolean;
  parentId: string;
  data: ProconBin;
  version: number;
}

const getSaveableBin = (bin: ProconBin) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let { id, ...saveableBin } = bin;
  return saveableBin; 
}

export async function getBin(id: string) {
  const response = await instance.get<ProconBin>(`b/${id}/latest`);
  return response.data;
}

export async function createBin(bin: ProconBin) {
  const response = await instance.post<CreateBinResponse>('b', getSaveableBin(bin));
  return {...response.data.data, id: response.data.id};
}

export async function updateBin(bin: ProconBin) {
  const response = await instance.put<UpdateBinResponse>(`b/${bin.id}`, getSaveableBin(bin));
  return {...response.data.data, id: response.data.parentId};
}