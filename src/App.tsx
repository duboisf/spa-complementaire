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
    padding: theme.spacing(1),
  },
  question: {
    padding: theme.spacing(1),
  },
  answer: {
    fontFamily: 'Monospace',
    textAlign: 'center'
  }
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

class AnsweredOperation {
  constructor(readonly operation: Operation, readonly answer: number) { }
}

export default function App() {
  const classes = useStyles();
  const [operation, setOperation] = useState(randomOperation());
  const [answers, setAnswers] = useState([] as AnsweredOperation[]);
  const giveAnswer = (answer: number) => {
    answers.push(new AnsweredOperation(operation, answer));
    setAnswers(answers);
    setOperation(randomOperation());
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
      <main>
        <Grid container className={classes.root} spacing={2}>
          {answers.map((answer, i) => (
            <Grid item key={i} className={classes.answer} xs={6}>
              <PreviousAnswer operation={answer.operation} answer={answer.answer} />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item key="question" className={classes.question} lg={4} sm={6} xs={12}>
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
