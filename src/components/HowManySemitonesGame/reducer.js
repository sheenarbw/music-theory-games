import { actions } from "./actions.js";

const initialState = {
  firstNote: null,
  secondNote: null,
  answer: null
};

function HowManySemitonesGame(state = initialState, action) {
  switch (action.type) {
    case actions.RESET:
      return {
        ...state,
        firstNote: action.firstNote,
        secondNote: action.secondNote,
        answer: ""
      };
    default:
      return state;
  }
}

export default HowManySemitonesGame;
