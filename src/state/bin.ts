import { ProconBin } from '../models/ProconBin';
import { createAction, ActionsUnion } from './stateUtils';
import { getBin } from '../services/JsonBin';
import { Dispatch } from 'redux';
import { ReasonActions } from './reasons';

export enum ActionTypes {
  BIN_LOADED = 'procon/bin/BIN_LOADED',
  SET_QUESTION = 'procon/bin/SET_QUESTION'
}

export const BinActions = {
  binLoaded: (bin: ProconBin) => createAction(ActionTypes.BIN_LOADED, bin),
  setQuestion: (question: string) => createAction(ActionTypes.SET_QUESTION, question)
}

export const BinOperations = {
  loadBin: (id: string) => ((dispatch: Dispatch) => getBin(id)
    .then((bin) =>  {
      dispatch(BinActions.binLoaded({ ...bin, id }));
      dispatch(ReasonActions.setPros(bin.pros));
      dispatch(ReasonActions.setCons(bin.cons));
    })
  )
}

export type BinActions = ActionsUnion<typeof BinActions>
export type BinOperations = ActionsUnion<typeof BinOperations>

export interface BinState {
  id: string;
  question: string;
}

const initialState: BinState = {
  id: '',
  question: ''
}

export const binReducer = (state = initialState, action: BinActions): BinState => {
  switch (action.type) {
    case ActionTypes.BIN_LOADED:
      return action.payload;
    case ActionTypes.SET_QUESTION:
      return {
        ...state,
        question: action.payload
      }
    default: return state;
  }
}