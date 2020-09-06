import { CONSTANTS } from "../actions";


const initialState = {
    'board-0':{
        id: 'board-0',
        lists:['list-0'],
        title: 'myboard'
    }
}
const boardsReducer = (state=initialState,action) =>{
    switch (action.type) {
      case CONSTANTS.DRAG_HAPPENED: {
        const {
          droppableIndexEnd,
          droppableIndexStart,
          type,
          boardId,
        } = action.payload;
        // test
        // const boardId = "board-0";
        const board = state[boardId];
        const lists = board.lists;
        if (type === "list") {
          const pulledOutList = lists.splice(droppableIndexStart, 1);
          lists.splice(droppableIndexEnd, 0, ...pulledOutList);
          board.lists = lists;
          return { ...state, [boardId]: board };
        }
        return state;
      }
      case CONSTANTS.ADD_LIST: {
        const { boardID, id } = action.payload;
        const board = state[boardID];
        const newListID = `list-${id}`;
        const newLists = [...board.lists, newListID];
        board.lists = newLists;
        return { ...state, [boardID]: board };
      }
      case CONSTANTS.DELETE_LIST: {
        const { listID, boardID } = action.payload;
        const board = state[boardID];
        const lists = board.lists;
        const newLists = lists.filter((id) => id !== listID);
        board.lists = newLists;
        return { ...state, [boardID]: board };
      }

      case CONSTANTS.ADD_BOARD: {
        const { title, id } = action.payload;
        const newID = `board-${id}`;
        const newBoard = {
          id: newID,
          title,
          lists: [],
        };

        return { ...state, [newID]: newBoard };
      }


      case CONSTANTS.DELETE_BOARD:{
        const id  = action.payload;
        const newState = state;
        delete newState[id];
        return {...newState}
      }

      default:
        return state;
    }
}

export default boardsReducer;