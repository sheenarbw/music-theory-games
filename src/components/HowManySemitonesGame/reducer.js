import { actions } from "./actions.js";

const initialState = {
  firstNote: null,
  secondNote: null,
  answerUp: "",
  answerDown: "",
  submittedAnswerUp: "",
  revealAnswer: false
};

function HowManySemitonesGame(state = initialState, action) {
  switch (action.type) {
    case actions.RESET:
      return {
        ...initialState,
        firstNote: action.firstNote,
        secondNote: action.secondNote
      };
    case actions.UPDATE_ANSWER_UP:
      return {
        ...state,
        answerUp: parseInt(action.answer),
        answerDown: 12 - parseInt(action.answer)
      };
    case actions.UPDATE_ANSWER_DOWN:
      return {
        ...state,
        answerDown: parseInt(action.answer),
        answerUp: 12 - parseInt(action.answer)
      };
    case actions.SUBMIT:
      return {
        ...state,
        submittedAnswerUp: state.answerUp
      };
    default:
      return state;
  }
}

export default HowManySemitonesGame;
