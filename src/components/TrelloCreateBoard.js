import React from 'react'
import Modal from './public/Modal';
import TextField from "@material-ui/core/TextField";
import Button from './public/TrelloButton';
import {useDispatch} from 'react-redux';
import  "../asset/trelloCreateBoard.scss";
import { addBoard } from '../actions';
const ModalInside = ({...props}) => {
  const {modalHandlerClose} = props
  const [InputText, setInputText] = React.useState('')
  const dispatch = useDispatch();
  const inputHandler = (e)=>{
    setInputText(e.target.value)
  }
  const createHandler =()=>{
      dispatch(addBoard(InputText));
      modalHandlerClose()
  }
  return (
    <div className="modalInside__cotainer">
      <div className="modalInside__input">
        <TextField
          id="outlined-full-width"
          label="board title"
          style={{ margin: 4 }}
          placeholder="Add title for board"
          // helperText="Full width!"
          autoComplete="off"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onInput={inputHandler}
        />
      </div>
      <div className="modalInside__button">
        <Button children={"create board"} onClick={createHandler}></Button>
      </div>
    </div>
  );
};


function TrelloCreateBoard({...props}) {
    return <Modal {...props} children={<ModalInside {...props}/>}></Modal>;
}

export default TrelloCreateBoard
