import { Reason } from './Reason';

export interface ProconBin {
  id: string;
  question: string;
  pros: Reason[];
  cons: Reason[];
}