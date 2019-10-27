import { Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Container from '@material-ui/core/Container/Container';
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

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'monospace',
    flexGrow: 1,
  },
  appBar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  previousAnswer: {
    textAlign: 'center'
  },
  hidden: {
    visibility: 'hidden',
  },
  question: {
    fontFamily: `'Roboto Mono', monospace`,
    [theme.breakpoints.up('xs')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  stats: {
    fontSize: '0.7rem',
    height: '100%',
    paddingLeft: theme.spacing(2),
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

const fillerOperation: AnsweredOperation = {
  operation: new BinaryOperation(1, 1, Operator.Plus),
  answer: 1
}

export default function App() {
  const cls = useStyles();
  const [operation, setOperation] = useState(randomOperation());
  const [answers, setAnswers] = useState(
    Array(30).fill(1).map(() => ({ operation: randomOperation(), answer: randNumInRange(0, 10) }))
  );
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
    <div className={cls.root}>
      <CssBaseline />
      <AppBar className={cls.appBar} position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Complémentaires
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Grid container>
          <Grid container item justify="center">
            <Grid item>
              <Paper className={cls.question}>
                <Grid container wrap="nowrap">
                  <Grid item>
                    <Grid container justify="flex-end" wrap="nowrap">
                      <Grid item>
                        <Expression operation={operation} />
                      </Grid>
                      <Grid item>
                        <Answer giveAnswer={giveAnswer} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container className={cls.stats} alignContent="center">
                      <Grid item>
                        Total: {correctCount}/{answers.length}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid container item justify="center" spacing={2}>
            {answers.map((answer, i) => (
              <Grid item key={i} className={cls.previousAnswer}>
                <Paper style={{ padding: 8 }}>
                  <Expression operation={answer.operation} answer={answer.answer} />
                </Paper>
              </Grid>
            ))}
            {Array(12).fill(1).map(() => (
              <Grid item className={cls.hidden}>
                <Paper style={{ padding: 8 }}>
                  <Expression operation={fillerOperation.operation} answer={fillerOperation.answer} />
                </Paper>
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
