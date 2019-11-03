import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Operation as Op, opToString } from '../lib/operation';

interface ExpressionProps extends Readonly<{ operation: Op, answer?: number }> { }

const useExpressionStyle = makeStyles(theme => ({
  root: {
    fontFamily: 'Monospace',
    lineHeight: 'normal',
  },
  box3ch: {
    width: '3ch',
    textAlign: 'center',
  },
  operator: {
    textAlign: 'center',
  },
  answer: {
    borderRadius: 4,
    textAlign: 'center',
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
  const operator = opToString(op.operator);
  return (
    <Grid container style={{height: '100%'}} justify="center" alignItems="center" alignContent="center" wrap="nowrap">
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
