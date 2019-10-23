import AppBar from '@material-ui/core/AppBar/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import React, { useState } from 'react';
import './App.css';
import Answer from './components/Answer';
import { Expression } from './components/Expression';
import { BinaryOperation, Operation, Operator } from './services/operation';
import Container from '@material-ui/core/Container/Container';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  previousAnswer: {
    textAlign: 'center'
  },
  question: {
    fontSize: '3rem',
  },
  stats: {
    fontSize: '1rem',
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

interface AnsweredOperation extends Readonly<{
  operation: Operation,
  answer: number,
}> { }

export default function App() {
  const cls = useStyles();
  const [operation, setOperation] = useState(randomOperation());
  const [answers, setAnswers] = useState([
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
    { operation: randomOperation(), answer: randNumInRange(0, 10) },
  ] as AnsweredOperation[]);
  const [correctCount, setCorrectCount] = useState(0);
  const giveAnswer = (answer: number) => {
    const answeredOp = { operation, answer };
    setAnswers([...answers, answeredOp]);
    if (operation.output() === answer) {
      setOperation(randomOperation());
      setCorrectCount(correctCount + 1);
    }
  }
  return (
    <div>
      <CssBaseline />
      <AppBar className={cls.appBar} position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Complémentaires
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container>
          <Grid container item>
            <Grid item xs={12}>
              <Paper>
                <Grid container item xs={12} justify="center" alignItems="stretch" className={cls.question} spacing={0}>
                  <Grid item>
                    <Expression operation={operation} />
                  </Grid>
                  <Grid item>
                    <Answer giveAnswer={giveAnswer} />
                  </Grid>
                  <Grid container item className={cls.stats} alignContent="center" xs={2}>
                    Total: {correctCount}/{answers.length}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid container item alignItems="center" spacing={2}>
            {answers.map((answer, i) => (
              <Grid item key={i} className={cls.previousAnswer}>
                <Paper>
                  <Expression operation={answer.operation} answer={answer.answer} />
                </Paper>
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
