import Box from '@material-ui/core/Box/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Operation as Op, operatorToString } from '../services/operation';
import Grid from '@material-ui/core/Grid/Grid';
import { Container } from '@material-ui/core';

interface ExpressionProps extends Readonly<{ operation: Op, answer?: number }> { }

const useExpressionStyle = makeStyles(theme => ({
  root: {
    fontFamily: 'Monospace',
  },
  box3ch: {
    width: '3ch',
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  operator: {
    textAlign: 'center',
  },
  answer: {
    borderRadius: theme.spacing(1) / 2,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'right',
    width: '6ch',
  },
  correct: {
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
  },
  incorrect: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
}));

export const Expression = (props: ExpressionProps) => {
  const isCorrect = props.operation.output() === props.answer;
  const cls = useExpressionStyle();
  const answerBackground = isCorrect ? cls.correct : cls.incorrect;
  const op = props.operation;
  const operator = operatorToString(op.operator);
  return (
    <Grid container style={{height: '100%'}} justify="center" alignItems="center">
      <Grid item className={cls.box3ch}>
        {op.x}
      </Grid>
      <Grid item className={cls.box3ch}>
        {operator}
      </Grid>
      <Grid item className={cls.box3ch}>
        {op.y}
      </Grid>
      <Grid item className={cls.box3ch}>
        =
      </Grid>
       {props.answer !== undefined &&
         <Grid xs item className={`${cls.answer} ${answerBackground} ${cls.box3ch}`}>
           {props.answer}
         </Grid>
       }
    </Grid>
  );
}
