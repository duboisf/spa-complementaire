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
import { BinaryOperation, Operation, Operator, randOp, randNumInRange } from './lib/operation';

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
    height: '3em',
    lineHeight: 'normal',
    paddingLeft: theme.spacing(2),
  },
}));

interface AnsweredOperation extends Readonly<{
  operation: Operation,
  answer: number,
}> { }

const fillerOperation: AnsweredOperation = {
  operation: new BinaryOperation(1, 1, Operator.Plus),
  answer: 1
}

const PlusMinus = [Operator.Plus, Operator.Minus];

export default function App() {
  const cls = useStyles();
  const [operation, setOperation] = useState(randOp(PlusMinus, 5, 10));
  const [maxAnswers, setMaxAnswers] = useState(0);
  const [answers, setAnswers] = useState(
    Array(0).fill(1).map(() => ({ operation: randOp(PlusMinus, 5, 10), answer: randNumInRange(10) }))
  );
  const [correctCount, setCorrectCount] = useState(0);
  const giveAnswer = (answer: number) => {
    const answeredOp = { operation, answer };
    setAnswers([...answers, answeredOp]);
    if (operation.output() === answer) {
      setOperation(randOp(PlusMinus, 5, 10));
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
                  <Grid item className={cls.stats}>
                    <Grid container item className={cls.stats} alignContent="stretch">
                        Total: {correctCount}/{answers.length}
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
