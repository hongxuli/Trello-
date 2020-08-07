import React from 'react'
import { connect } from "react-redux";
import TrelloForm from "./TrelloForm";
import TrelloOpenForm from "./TrelloOpenForm";
import { addList, addCard } from "../actions";
import TrelloButton from "./TrelloButton";






class TrelloCreate extends React.Component {

    state = {
    formOpen: false,
    text: ""
  };

   openForm = () => {
    this.setState({
      formOpen: true
    });
  };
  closeForm = () => {
    this.setState({
      formOpen: false
    });
  };
  handlerInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ''
      })
      dispatch(addList(text));
    }
    return;
  };
  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
       this.setState({
         text: ""
       });
      dispatch(addCard(listID,text));
    }
    return;
  };


    render(){
        const { text } = this.state;
        const { list } = this.props;
        return this.state.formOpen ? (
          <TrelloForm
            text={text}
            onChange={this.handlerInputChange}
            closeForm={this.closeForm}
            list={list}
          >
            <TrelloButton
              onClick={list ? this.handleAddList : this.handleAddCard}
            >
              {list ? "Add List" : "Add Card"}
            </TrelloButton>
          </TrelloForm>
        ) : (
          <TrelloOpenForm list={list} onClick={this.openForm}>
            {list ? "Add another list" : "Add another card"}
          </TrelloOpenForm>
        );
    }


}


export default connect()(TrelloCreate);
