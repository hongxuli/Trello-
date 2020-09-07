import React from 'react'
import { connect } from "react-redux";
import TrelloForm from "./public/TrelloForm";
import TrelloOpenForm from "./public/TrelloOpenForm";
import { addList, addCard } from "../actions";
import TrelloButton from "./public/TrelloButton";
import "../asset/trelloCreate.scss";





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
      formOpen: false,
      text:''
    });
  };
  handlerInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddList = () => {
    const { dispatch, boardID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ''
      })
      dispatch(addList(text, boardID));
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
        return (
          <div className="TrelloCreate__container">
            {this.state.formOpen ? (
              <div className="TrelloCreate__createList__open">
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
              </div>
            ) : (
              <div className="TrelloCreate__createList__close">
                <TrelloOpenForm list={list} onClick={this.openForm}>
                  {list ? "Add another list" : "Add another card"}
                </TrelloOpenForm>
              </div>
            )}
          </div>
        );
      
    }


}


export default connect()(TrelloCreate);
