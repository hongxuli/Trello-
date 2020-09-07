import { CONSTANTS } from "../actions";

const initialState = {
  // "card-0": {
  //   text: "test",
  //   id: 'card-0',
  //   list: "list-0"
  // },
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;

      const newCard = {
        text,
        id: `card-${id}`,
        list: listID,
      };

      return { ...state, [`card-${id}`]: newCard };
    }
    case CONSTANTS.EDIT_CARD: {
      const { id, newText } = action.payload;
      const card = state[id];
      card.text = newText;
      return { ...state, [`card-${id}`]: card };
    }

    case CONSTANTS.DELETE_CARD: {
      const { cardID } = action.payload;
      let newState = {...state};
      delete newState[cardID];
      return newState;
    }

    case CONSTANTS.DELETE_BOARD: {
      const { cardIDs } = action.payload;
      let newState = {...state};
      cardIDs.forEach((cardID) => {
        delete newState[cardID];
      });
      return newState;
    }

    case CONSTANTS.DELETE_LIST:{
      const {cardIDs}  = action.payload
      let newState = {...state}
      cardIDs.forEach(cardID => {
        delete newState[cardID]
      });

      return newState
    }

    default:
      return state;
  }
};

export default cardsReducer;