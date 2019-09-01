function fullname(action) {
  return `${action}-HowManySemiTonesGame`;
}

export const actions = {
  RESET: fullname("RESET"),
  UPDATE_ANSWER_UP: fullname("UPDATE_ANSWER_UP"),
  UPDATE_ANSWER_DOWN: fullname("UPDATE_ANSWER_DOWN"),
  SUBMIT: fullname("SUBMIT"),
  REVEAL: fullname("REVEAL")
};

export const actionCreators = {
  reset: ({ firstNote, secondNote }) => {
    return {
      type: actions.RESET,
      firstNote,
      secondNote
    };
  },

  updateAnswerUp: ({ answer }) => {
    return {
      type: actions.UPDATE_ANSWER_UP,
      answer
    };
  },

  updateAnswerDown: ({ answer }) => {
    return {
      type: actions.UPDATE_ANSWER_DOWN,
      answer
    };
  },

  submit: () => {
    return { type: actions.SUBMIT };
  },

  reveal: () => {
    return { type: actions.REVEAL };
  }
};
