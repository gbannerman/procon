import React, { useEffect } from 'react';
import { Reason } from '../models/Reason';
import { useSelector, useDispatch } from 'react-redux'
import { ReasonActions } from '../state/reasons';
import { AppState } from '../state/index';
import { BinOperations, BinActions } from '../state/bin';
import { useReduxInput } from '../hooks/useReduxInput';
import { RouteComponentProps } from 'react-router';
import Home from './Home';
import './Home.scss';

interface HomeContainerParams { id: string }

const HomeContainer: React.FC<RouteComponentProps<HomeContainerParams>> = ({ match, history }) => {
  const pros = useSelector((state: AppState) => state.reasons.pros);
  const cons = useSelector((state: AppState) => state.reasons.cons);
  const binId = useSelector((state: AppState) => state.bin.id);
  const dispatch = useDispatch();

  const {
    value: decisionValue,
    bind: { onChange: onDecisionValueChange }
  } = useReduxInput((state: AppState) => state.bin.question, BinActions.setQuestion);

  const addPro = (pro: Reason) => {
    dispatch(ReasonActions.addPro({ ...pro, id: pros.length + 1 }));
  }

  const addCon = (con: Reason) => {
    dispatch(ReasonActions.addCon({ ...con, id: cons.length + 1 }));
  }

  const onHeaderSaveClick = () => {
    if (binId) {
      dispatch(BinOperations.updateBin({
        id: binId,
        question: decisionValue,
        pros,
        cons
      }));
    } else {
      dispatch(BinOperations.createBin({
        question: decisionValue,
        pros,
        cons
      }, history)); 
      // TODO: passing history here feels hacky
    }
  };

  useEffect(() => {
    if (match.params.id) {
      dispatch(BinOperations.loadBin(match.params.id));
    }
  }, [dispatch, match.params.id]);

  return (
    <Home
      pros={pros}
      cons={cons}
      addPro={addPro}
      addCon={addCon}
      decisionValue={decisionValue}
      onDecisionValueChange={onDecisionValueChange}
      onHeaderSaveClick={onHeaderSaveClick}
    />
  );
}

export default HomeContainer;
