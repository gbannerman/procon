import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root: React.FC = () => {

  return (
    <Router>
      <Route path="/:id" component={App}></Route>
      <Route path="/" exact component={App}></Route>
    </Router>
  );
}

export default Root;
