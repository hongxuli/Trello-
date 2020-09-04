import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Store from './store'

import Board from "./pages/Board";
import HomePage from './pages/Home.js';

import * as serviceWorker from './serviceWorker';
import { PersistGate } from "redux-persist/integration/react";
import { HashRouter as Router, Route } from "react-router-dom";

import './index.css'
const { persistor, store } = Store();


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
          <Route path="/"  exact component={HomePage}></Route>
          <Route path="/:boardID" exact component={Board}></Route>
        {/* <Route path="/register" exact component={Register}></Route> */}
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
