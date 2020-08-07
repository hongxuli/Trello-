import React, { PureComponent } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
// import TrelloCreate from "./TrelloCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import Routes from "../routes";
import { sort } from "../actions";
import TrelloBoard from './TrelloBoard';
import Routes from '../routes';

class App extends React.Component {

  render(){
    return <Routes />;
  }
      
  
    
  
}

export default App;
