import React, { useState } from 'react';
import ReasonColumn from '../reasons/ReasonColumn';
import { Reason } from '../models/Reason';
import Header from '../header/Header';
import ThumbsUpSVG from '../svg/ThumbsUpSVG';
import ThumbsDownSVG from '../svg/ThumbsDownSVG';
import './App.scss';

const App: React.FC = () => {
  const [pros, setPros] = useState<Reason[]>([]);
  const [cons, setCons] = useState<Reason[]>([]);

  const addPro = (pro: Reason) => {
    setPros([...pros, { ...pro, id: pros.length + 1 }]);
  }

  const addCon = (con: Reason) => {
    setCons([...cons, { ...con, id: cons.length + 1 }]);
  }

  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <div className="App__content__decision">
          <input type="text" placeholder="Should I order a pizza tonight?" />
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
