import { Reason } from '../models/Reason';
import { createAction, ActionsUnion } from './stateUtils';

export enum ActionTypes {
  ADD_PRO = 'procon/reasons/ADD_PRO',
  SET_PROS = 'procon/reasons/SET_PROS',
  ADD_CON = 'procon/reasons/ADD_CON',
  SET_CONS = 'procon/reasons/SET_CONS'
}

export const ReasonActions = {
  addPro: (pro: Reason) => createAction(ActionTypes.ADD_PRO, pro),
  setPros: (pros: Reason[]) => createAction(ActionTypes.SET_PROS, pros),
  addCon: (con: Reason) => createAction(ActionTypes.ADD_CON, con),
  setCons: (cons: Reason[]) => createAction(ActionTypes.SET_CONS, cons)
}

export type ReasonActions = ActionsUnion<typeof ReasonActions>

export interface ReasonState {
  pros: Reason[];
  cons: Reason[];
}

const initialState: ReasonState = {
  pros: [],
  cons: []
}

export const reasonReducer = (state = initialState, action: ReasonActions): ReasonState => {
  switch (action.type) {
    case ActionTypes.ADD_PRO:
      return {
        ...state,
        pros: [...state.pros, action.payload]
      }
    case ActionTypes.SET_PROS:
      return {
        ...state,
        pros: action.payload
      }
    case ActionTypes.ADD_CON:
      return {
        ...state,
        cons: [...state.cons, action.payload]
      }
    case ActionTypes.SET_CONS:
      return {
        ...state,
        cons: action.payload
      }
    default: return state;
  }
}