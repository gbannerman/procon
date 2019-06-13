import React, { useEffect } from 'react';
import ReasonColumn from '../reasons/ReasonColumn';
import { Reason } from '../models/Reason';
import Header from '../header/Header';
import ThumbsUpSVG from '../svg/ThumbsUpSVG';
import ThumbsDownSVG from '../svg/ThumbsDownSVG';
import './App.scss';

import { useSelector, useDispatch } from 'react-redux'
import { ReasonActions } from '../state/reasons';
import { AppState } from '../state/index';
import { BinOperations, BinActions } from '../state/bin';
import { useReduxInput } from '../hooks/useReduxInput';
import { RouteComponentProps } from 'react-router';

interface AppParams { id: string }

const App: React.FC<RouteComponentProps<AppParams>> = ({ match }) => {
  const pros = useSelector((state: AppState) => state.reasons.pros);
  const cons = useSelector((state: AppState) => state.reasons.cons);
  const dispatch = useDispatch();

  const {
    bind: bindQuestionText
  } = useReduxInput((state: AppState) => state.bin.question, BinActions.setQuestion);

  const addPro = (pro: Reason) => {
    dispatch(ReasonActions.addPro({ ...pro, id: pros.length + 1 }));
  }

  const addCon = (con: Reason) => {
    dispatch(ReasonActions.addCon({ ...con, id: cons.length + 1 }));
  }

  useEffect(() => {
    if (match.params.id) {
      dispatch(BinOperations.loadBin(match.params.id));
    }
  }, [dispatch, match.params.id]);

  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <div className="App__content__decision">
          <input type="text" placeholder="Should I order a pizza tonight?" {...bindQuestionText} />
        </div>
        <div className="App__content__pros-cons-container">
          <ReasonColumn
            className= "pros"
            title="Pros"
            reasons={pros}
            formOnSubmit={addPro}
            formButtonIcon={<ThumbsUpSVG />}
          />
          <ReasonColumn
            className= "cons"
            title="Cons"
            reasons={cons}
            formOnSubmit={addCon}
            formButtonIcon={<ThumbsDownSVG />}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
