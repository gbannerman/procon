import { SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../state';
import { ActionWithPayload } from '../state/stateUtils';

export const useReduxInput = (selector: (state: AppState) => string, updateAction: (payload: string) => ActionWithPayload<string, string>) => {
  const state = useSelector(selector);
  const dispatch = useDispatch();

  return {
    value: state,
    setValue: (value: string) => dispatch(updateAction(value)),
    reset: () => dispatch(updateAction),
    bind: {
      value: state,
      onChange: (e: SyntheticEvent) => {
        dispatch(updateAction((e.target as HTMLInputElement).value));
      }
    }
  };
};