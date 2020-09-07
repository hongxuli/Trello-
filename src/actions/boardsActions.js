import { CONSTANTS } from "../actions";
import uuid from "uuidv4";

export const setActiveBoard = (id) => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: id,
  };
};

export const addBoard = (title) => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: { title, id },
  };
};


// export const deleteLists = (listIDs) =>{
//   return (dispatch)=>{

//     listIDs.forEach(listID => {
//         dispatch({
//       type:CONSTANTS.DELETE_LIST,
//       payload: listID
//     })
//     });
  
//   }
// }

export const deleteBoard = (boardID) =>{

  return  (dispatch,getState) =>{
    const boards = getState().boards // []
    const listIDs = boards[boardID].lists; // [] list id list
    const cardsObj = getState().cards; //{}
    const cardsArray = Object.keys(cardsObj); //[]
    let cardIDs = []; //cards id list
    listIDs.forEach(listID =>{
       cardsArray.forEach((cardID) => {
         if (cardsObj[cardID]["list"] === listID) {
           cardIDs.push(cardID);
         }
       });
    })
   
    return dispatch({
         type: CONSTANTS.DELETE_BOARD,
         payload: { boardID, listIDs, cardIDs },
       });

    // dispatch(deleteLists(listIDs));

    // dispatch({
    //   type: CONSTANTS.DELETE_CARD,
    //   payload: cardIDs,
    // });

  }
  


}