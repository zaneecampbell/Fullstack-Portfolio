import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Fragment>
        <Switch>{/* <Route exact path='/' component={Landing} /> */}</Switch>
      </Fragment>
    </Router>
  );
}

export default App;
