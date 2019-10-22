import Box from '@material-ui/core/Box/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Operation as Op, operatorToString } from '../services/operation';

const useSpanStyle = makeStyles(() => ({
  root: {
    width: '3ch',
  },
  alignRight: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  }
}));

const Span3ch = (props: Readonly<{ centered?: boolean, value: string | number }>) => {
  const cls = useSpanStyle();
  const alignment = props.centered ? cls.center : cls.alignRight;
  return <span className={`${cls.root} ${alignment}`}>{props.value}</span>;
}

interface ExpressionProps extends Readonly<{ operation: Op, answer?: number }> { }

const useExpressionStyle = makeStyles({
  root: {
    fontFamily: 'Monospace',
    '& span': {
      display: 'inline-block',
    },
  },
  operator: {
    textAlign: 'center',
  },
  equals: {
    width: '1ch',
    textAlign: 'left',
  },
  answer: {
    display: 'inline-block',
  },
  correct: {
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
  },
  incorrect: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
  checkIcon: {
    color: 'green',
  },
  crossIcon: {
    color: 'red',
  }
});

export const Expression = (props: ExpressionProps) => {
  const isCorrect = props.operation.output() === props.answer;
  const cls = useExpressionStyle();
  const answerBackground = isCorrect ? cls.correct : cls.incorrect;
  const op = props.operation;
  const operator = operatorToString(op.operator);
  return (
    <Box className={cls.root}>
      <Span3ch value={op.x} />
      <Span3ch value={operator} centered />
      <Span3ch value={op.y} />
      <Span3ch value="=" centered />
      {props.answer !== undefined &&
        <Box className={`${cls.answer} ${answerBackground}`}>
          <Span3ch value={props.answer} centered />
        </Box>
      }
    </Box>
  );
}
