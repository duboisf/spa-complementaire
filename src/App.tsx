import AppBar from '@material-ui/core/AppBar/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import React, { useState } from 'react';
import './App.css';
import Answer from './components/Answer';
import { PreviousAnswer } from './components/PreviousAnswer';
import { Question } from './components/Question';
import { BinaryOperation, Operation, Operator } from './services/operation';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  answer: {
    fontFamily: 'Monospace',
    textAlign: 'center'
  },
  textfield: {
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
}));

function randNumInRange(from: number, to: number): number {
  if (from > to) {
    [from, to] = [to, from];
  }
  return from + Math.round(Math.random() * (to - from))
}

function randomOperation(): Operation {
  const operators = [Operator.Plus, Operator.Minus, Operator.Obelus, Operator.Times];
  const operator = operators[randNumInRange(0, 1)];
  const x = randNumInRange(1, 10);
  const y = randNumInRange(1, 10);
  return new BinaryOperation(x, y, operator);
}

class AnsweredOperation {
  constructor(readonly operation: Operation, readonly answer: number) { }
}

export default function App() {
  const classes = useStyles();
  const [operation, setOperation] = useState(randomOperation());
  const [answers, setAnswers] = useState([] as AnsweredOperation[]);
  const giveAnswer = (answer: number) => {
    const answeredOp = new AnsweredOperation(operation, answer);
    setAnswers([...answers, answeredOp]);
    if (operation.output() === answer) {
      setOperation(randomOperation());
    }
  }
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
      <main style={{margin: 5}}>
        <Grid container className={classes.root} spacing={2}>
          {answers.map((answer, i) => (
            <Grid item key={i} className={classes.answer} xs={6}>
              <PreviousAnswer operation={answer.operation} answer={answer.answer} />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item key="question" lg={4} sm={6} xs={12}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={7}>
                    <Question operation={operation} />
                  </Grid>
                  <Grid item xs={5}>
                    <Answer giveAnswer={giveAnswer} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
