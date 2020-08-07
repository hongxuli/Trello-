import React from 'react';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from "@material-ui/core/Card";
import Button  from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {addList, addCard} from '../actions';

class TrelloActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false,
      text: ""
    };
  }

  openForm = () => {
    this.setState({
      input: true
    });
  };
  closeForm = () => {
    this.setState({
      input: false
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
  openForm = () => {
    const { list } = this.props;
    const buttonTitle = list ? "Add list" : "Add card";
    const placeholder = list
      ? "input title for this list..."
      : "input title for this card...";
    return (
      <div>
        <Card style={styles.card}>
          <Textarea
            style={styles.textArea}
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            onChange={this.handlerInputChange}
          ></Textarea>
        </Card>
        <div style={styles.openFormButtonGroup}>
          {/* use onMouseDow because it trigger before onBlur, if use onClick, nothing happen */}
          <Button
            variant="contained"
            style={styles.button}
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
          >
            {buttonTitle}
          </Button>
          <Icon style={styles.close}>close</Icon>
        </div>
      </div>
    );
  };

  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };
  render() {
    return this.state.input ? this.openForm() : this.renderAddButton();
  }
}

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    // paddingLeft: 10
  },
  textArea: {
    resize: "none",
    width: "100%",
    outline: "none",
    border: "none",
    overflow: "hidden"
  },
  card: {
    minHeight: 85,
    minWidth: 272,
    padding: "6px 8px 2px"
  },
  button: {
    color: "white",
    backgroundColor: "#5aac44",
    cursor: 'pointer'

  },
  close:{
      marginLeft: 8,
      cursor: 'pointer'
  },
  openFormButtonGroup:{
      display: 'flex',
      alignItems: 'center',
      marginTop: 8,
      padding: 0
  }
};
export default connect()(TrelloActionButton);