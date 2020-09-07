import { CONSTANTS } from "../actions";



const initialState = [];

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD: {
      return [...state, `board-${action.payload.id}`];
    }
    case CONSTANTS.DELETE_BOARD:{
      const {boardID} = action.payload
      const newState = state;
      const index = newState.indexOf(boardID);  
      if (index > -1) {
        newState.splice(index,1);
        return [...newState]
      }else{
        return state;
      }
    }
    default:
      return state;
  }
};

export default boardOrderReducer;
