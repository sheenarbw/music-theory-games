import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    width: 100,
    margin: 10
  },

  title: {
    fontSize: 50,
    textAlign: "center"
  }
});

export function BigNoteCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" component="h2" className={classes.title}>
          {props.children}
        </Typography>
      </CardContent>
    </Card>
  );
}
