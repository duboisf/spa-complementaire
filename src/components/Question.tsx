import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Operation, operatorToString } from '../services/operation';
import Part from './Part';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'Monospace',
    textAlign: 'center',
  },
}));

interface Props extends Readonly<{
  operation: Operation
}> { }

export const Question = (props: Props) => {
  const classes = useStyles();
  const { operation } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4}>
        <Part value={operation.x} />
      </Grid>
      <Grid item xs={2}>
        <Part value={operatorToString(operation.operator)} />
      </Grid>
      <Grid item xs={4}>
        <Part value={operation.y} />
      </Grid>
      <Grid item xs={2}>
        <Part value="=" />
      </Grid>
    </Grid>
  );
}
