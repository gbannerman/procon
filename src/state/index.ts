import { combineReducers } from 'redux';
import { reasonReducer } from './reasons';

const state = {
  reasons: reasonReducer
};

export const rootReducer = combineReducers(state);

export type AppState = ReturnType<typeof rootReducer>