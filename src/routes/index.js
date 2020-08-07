import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom';
import TrelloBoard from '../components/TrelloBoard';
import Home from "../components/Home";

const AppRouter =  ()=> {
    return (
    <Router>
       
      <Route path="/" exact component={Home}></Route>
      <Route path="/:boardID"  component={TrelloBoard}></Route>
      
    </Router>
    );
}

export default AppRouter;