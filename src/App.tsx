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

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  previousAnswer: {
    textAlign: 'center'
  },
  question: {
    fontSize: '3rem',
  }
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
  const [answers, setAnswers] = useState([] as AnsweredOperation[]);
  const giveAnswer = (answer: number) => {
    const answeredOp = { operation, answer };
    setAnswers([answeredOp, ...answers]);
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
      <main style={{ margin: 5 }}>
        <Grid container className={cls.root} spacing={2}>

          <Grid container item xs={12} justify="center" alignItems="stretch" className={cls.question} spacing={2}>
            <Grid item>
              <Expression operation={operation} />
            </Grid>
            <Grid item xs={4}>
              <Answer giveAnswer={giveAnswer} />
            </Grid>
          </Grid>

          <Grid container item alignItems="center">
            {answers.map((answer, i) => (
              <Grid item key={i} className={cls.previousAnswer}>
                <Expression operation={answer.operation} answer={answer.answer} />
              </Grid>
            ))}
          </Grid>

        </Grid>
      </main>
    </>
  );
}
