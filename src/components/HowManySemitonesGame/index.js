import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./actions.js";

import { randomNotes, noteDistance, notes } from "../../helpers.js";
import { BigNoteCard, SmallNoteCard } from "../widgets/NoteCards.js";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function RevealSemitoneDistance(props) {
  return (
    <Grid container>
      {notes.map((note, index) => (
        <SmallNoteCard title={index} titleBgColor="primary.main">
          {note.join(" / ")}
        </SmallNoteCard>
      ))}
    </Grid>
  );
}

class DumbHowManySemitonesGame extends React.Component {
  render() {
    const correctAnswerUp = noteDistance(
      this.props.firstNote,
      this.props.secondNote
    );

    return (
      <Paper>
        <Grid container>
          <Grid container>
            <Grid item>
              <Typography>
                How many semi-tones are there between the following:
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <BigNoteCard>{this.props.firstNote}</BigNoteCard>
            </Grid>
            <Grid item>
              <BigNoteCard>{this.props.secondNote}</BigNoteCard>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <TextField
                id="answer"
                label="Number of semitones up"
                value={this.props.answerUp}
                onChange={event => {
                  this.props.handleUpdateAnswerUp({
                    answer: event.target.value
                  });
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="answer"
                label="Number of semitones down"
                value={this.props.answerDown}
                onChange={event => {
                  console.log(arguments);
                  this.props.handleUpdateAnswerDown({
                    answer: event.target.value
                  });
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.props.handleSubmit}
              >
                Ok
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                onClick={this.props.handleReveal}
              >
                I give up
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.props.handleReset}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
          {this.props.submittedAnswerUp ? (
            <React.Fragment>
              {correctAnswerUp === this.props.submittedAnswerUp ? (
                <React.Fragment>
                  <Typography>Yay! You got it</Typography>
                  <RevealSemitoneDistance />
                </React.Fragment>
              ) : (
                <Typography>Oh no! wrong answer!</Typography>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment />
          )}

          {this.props.revealAnswer ? (
            <RevealSemitoneDistance />
          ) : (
            <React.Fragment />
          )}
        </Grid>
      </Paper>
    );
  }

  componentDidMount() {
    this.props.handleReset();
  }
}

const mapStateToProps = state => {
  return {
    ...state.HowManySemitonesGame
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleReset: () => {
      let notes = randomNotes(2);

      dispatch(
        actionCreators.reset({ firstNote: notes[0], secondNote: notes[1] })
      );
    },

    handleUpdateAnswerUp: ({ answer }) => {
      if (isNaN(parseInt(answer))) return; // @Ruddy: is this a good place for input validation?
      dispatch(actionCreators.updateAnswerUp({ answer }));
    },

    handleUpdateAnswerDown: ({ answer }) => {
      if (isNaN(parseInt(answer))) return;
      dispatch(actionCreators.updateAnswerDown({ answer }));
    },

    handleSubmit: () => {
      dispatch(actionCreators.submit());
    },

    handleReveal: () => {
      dispatch(actionCreators.reveal());
    }
  };
};

const HowManySemitonesGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbHowManySemitonesGame);

export default HowManySemitonesGame;
