import { CONSTANTS } from "./index";
import uuid from "uuidv4";



export const addCard = (listID, text) => {
  const id = uuid()
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID,id }
  };
  // return (dispatch, getState)=>{
  //     const id  = uuid()
  //     dispatch({
  //         type: CONSTANTS.ADD_LIST,
  //         payload:{ title, id }
  //     })
  // }
};
export const editCard = (id, listID, newText) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, listID, newText }
  };
};

export const deleteCard = (cardID, listID) => {
  return (dispatch, getState)=>{
    return dispatch({
      type: CONSTANTS.DELETE_CARD,
      payload: { cardID, listID },
    })
}
  
}