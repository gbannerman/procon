import { Reason } from '../models/Reason';
import { createAction, ActionsUnion } from './stateUtils';

export enum ActionTypes {
  ADD_PRO = 'procon/reasons/ADD_PRO',
  ADD_CON = 'procon/reasons/ADD_CON'
}

export const ReasonActions = {
  addPro: (pro: Reason) => createAction(ActionTypes.ADD_PRO, pro),
  addCon: (con: Reason) => createAction(ActionTypes.ADD_CON, con)
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
    case ActionTypes.ADD_CON:
      return {
        ...state,
        cons: [...state.cons, action.payload]
      }
    default: return state;
  }
}