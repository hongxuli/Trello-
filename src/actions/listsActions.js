import { CONSTANTS } from "../actions";
import uuid from "uuidv4";

export const addList = (title, boardID) => {
  return (dispatch, getState) => {
    // const boardID = getState().activeBoard;
    const id = uuid();
    dispatch({
      type: CONSTANTS.ADD_LIST,
      payload: { title, boardID, id },
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type,
  boardID
) => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    dispatch({
      type: CONSTANTS.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
        boardID,
      },
    });
  };
};

export const editTitle = (listID, newTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle,
    },
  };
};

// export const deletCards = (cardIDs) =>{
//    return (dispatch) => {
//      cardIDs.forEach((cardID) => {
//        dispatch({
//          type: CONSTANTS.DELETE_CARD,
//          payload: cardID,
//        });
//      });
//    };
// }

export const deleteList = (listID) => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    const cardsObj = getState().cards; //{}
    const cardsArray = Object.keys(cardsObj); //[]
    let cardIDs = []; //cards id list
    cardsArray.forEach((cardID) => {
      if (cardsObj[cardID]["list"] === listID) {
        cardIDs.push(cardID);
      }
    });

    return dispatch({
      type: CONSTANTS.DELETE_LIST,
      payload: {
        listID,
        boardID,
        cardIDs,
      },
    });

    // dipatch(deletCards(cardIDs));
  };;;
};

export const deleteLists = () =>{
  return (dispatch,getState)=>{
    
  }
}