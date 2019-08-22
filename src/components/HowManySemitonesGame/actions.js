function fullname(action) {
  return `HowManySemitonesGame-${action}`;
}

export const actions = {
  RESET: fullname("RESET")
};

export const actionCreators = {
  reset: ({ firstNote, secondNote }) => {
    return {
      type: actions.RESET,
      firstNote,
      secondNote
    };
  }
};
