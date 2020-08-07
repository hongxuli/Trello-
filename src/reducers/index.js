import {combineReducers} from 'redux'
import  listsReducer  from "./listsReducer";
import boardsReducer from "./boardsReducer";
import cardsReducer from "./cardsReducer";
import boardOrderReducer from "./boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer";



export default combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
  boards: boardsReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer,
});