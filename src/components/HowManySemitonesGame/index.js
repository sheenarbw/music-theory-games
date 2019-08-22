import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./actions.js";
import { randomNotes } from "../../helpers.js";

class DumbHowManySemitonesGame extends React.Component {
  render() {
    return (
      <div>
        HowManySemitonesGame
        <br />
        firstNote: {this.props.firstNote}
        <br />
        secondNote: {this.props.secondNote}
        <br />
        answer: {this.props.answer}
      </div>
    );
  }

  componentDidMount() {
    this.props.onReset();
  }
}

const mapStateToProps = state => {
  return state.HowManySemitonesGame;
};

const mapDispatchToProps = dispatch => {
  return {
    onReset: () => {
      let notes = randomNotes(2);

      dispatch(
        actionCreators.reset({ firstNote: notes[0], secondNote: notes[1] })
      );
    }
  };
};

const HowManySemitonesGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbHowManySemitonesGame);

export default HowManySemitonesGame;
