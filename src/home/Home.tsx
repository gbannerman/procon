import React, { SyntheticEvent } from 'react';
import ReasonColumn from '../reasons/ReasonColumn';
import { Reason } from '../models/Reason';
import Header from '../header/Header';
import ThumbsUpSVG from '../svg/ThumbsUpSVG';
import ThumbsDownSVG from '../svg/ThumbsDownSVG';
import './Home.scss';
import SaveSVG from '../svg/SaveSVG';

export interface HomeProps {
  pros: Reason[];
  cons: Reason[];
  addPro: (pro: Reason) => void;
  addCon: (pro: Reason) => void;
  decisionValue: string;
  onDecisionValueChange: (e: SyntheticEvent) => void;
  onHeaderSaveClick: () => void;
}

const Home: React.FC<HomeProps> = ({ pros, cons, addPro, addCon, decisionValue, onDecisionValueChange, onHeaderSaveClick }) => {

  return (
    <div className="Home">
      <Header>
        <button className="Header__save-button" onClick={onHeaderSaveClick}><SaveSVG className="Header__icon"></SaveSVG></button>
      </Header>
      <div className="Home__content">
        <div className="Home__content__decision">
          <input type="text" placeholder="Should I order a pizza tonight?" value={decisionValue} onChange={onDecisionValueChange} />
        </div>
        <div className="Home__content__pros-cons-container">
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

export default Home;
