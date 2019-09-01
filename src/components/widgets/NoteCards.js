import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";

import { makeStyles } from "@material-ui/core/styles";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
  bigCard: {
    width: 150,
    margin: 10
  },

  bigTitle: {
    fontSize: 50,
    textAlign: "center"
  },

  smallCard: {
    width: 80,
    margin: 2
  },

  smallTitle: {
    fontSize: 20,
    textAlign: "center"
  }
});

export function BigNoteCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.bigCard}>
      <CardContent>
        <Typography variant="h3" component="h2" className={classes.bigTitle}>
          {props.children}
        </Typography>
      </CardContent>
    </Card>
  );
}

export function SmallNoteCard(props) {
  const classes = useStyles();

  const { title, titleBgColor } = props;
  return (
    <Card className={classes.smallCard}>
      {title !== undefined && (
        <Box bgcolor={titleBgColor}>
          <CardHeader
            title={title}
            titleTypographyProps={{ className: classes.smallTitle }}
          />
        </Box>
      )}
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.smallTitle}>
          {props.children}
        </Typography>
      </CardContent>
    </Card>
  );
}
