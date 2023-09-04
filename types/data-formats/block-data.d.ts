import {BlockToolData} from '../tools';
import {BlockId} from './block-id';
import {BlockTuneData} from "../block-tunes/block-tune-data";

/**
 * Tool's saved data
 */
export interface SavedData {
  id: BlockId;
  tool: string;
  data: BlockToolData;
  tunes: BlockTuneData[];
  time: number;
}

/**
 * Tool's data after validation
 */
export interface ValidatedData {
  id?: BlockId;
  tool?: string;
  data?: BlockToolData;
  time?: number;
  isValid: boolean;
}
