import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reasonReducer } from './reasons';
import { binReducer } from './bin';

const state = {
  bin: binReducer,
  reasons: reasonReducer
};

const rootReducer = combineReducers(state);

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppState = ReturnType<typeof rootReducer>