import AppBar from '@material-ui/core/AppBar/AppBar';
import Box from '@material-ui/core/Box/Box';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import './App.css';
import { OperationAnswer } from './components/OperationAnswer';
import { OperationQuestion } from './components/OperationQuestion';
import { BinaryOperation, Operation, Operator } from './services/operation';

const useStyles = makeStyles(theme => ({
  grid: {
    flexGrow: 1,
  },
  answer: {
    padding: theme.spacing(1),
  },
}));

function randomNumberInRange(from: number, to: number): number {
  if (from > to) {
    [from, to] = [to, from];
  }
  return from + Math.round(Math.random() * (to - from))
}

function randomOperation(): Operation {
  const operators = [Operator.Plus, Operator.Minus, Operator.Obelus, Operator.Times];
  const operator = operators[randomNumberInRange(0, 1)];
  const x = randomNumberInRange(1, 10);
  const y = randomNumberInRange(1, 10);
  return new BinaryOperation(x, y, operator);
}

function repeat(x: number): number[] {
  const xs = [];
  for (let i = 0; i < x; i++) {
    xs.push(i);
  }
  return xs;
}

export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Complémentaires
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container className={classes.grid} justify="center" spacing={0}>
          {repeat(20).map(v => (
            <Grid item key={v} xs={6}>
              <Box className={classes.answer}>
                <OperationAnswer operation={randomOperation()} answer={100} />
              </Box>
            </Grid>
          ))}
          <Grid item key="question"><OperationQuestion operation={randomOperation()} /></Grid>
        </Grid>
      </main>
    </>
  );
}
