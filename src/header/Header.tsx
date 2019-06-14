import React from 'react';
import AtomSVG from '../svg/AtomSVG';
import './Header.scss';

const Header: React.FC = ({ children }) => {
  return (
    <header className="Header">
      <AtomSVG className="Header__icon" />
      <h1 className="Header__title">Procon</h1>
      <div className="Header__buttons">
        { children }
      </div>
    </header>
  );
}

export default Header;
