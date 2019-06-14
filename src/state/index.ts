import { combineReducers, createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reasonReducer } from './reasons';
import { binReducer } from './bin';

const state = {
  bin: binReducer,
  reasons: reasonReducer
};

const rootReducer = combineReducers(state);

const middlewares = [thunk] as Middleware[];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type AppState = ReturnType<typeof rootReducer>