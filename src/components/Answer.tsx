import OutlinedInput from '@material-ui/core/OutlinedInput/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const useStyles = makeStyles(theme => ({
  form: {
    fontFamily: 'monospace',
    boxSizing: 'border-box',
    [theme.breakpoints.up('xs')]: {
      maxWidth: '4rem',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '7rem',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '12rem',
    },
  },
  textfield: {
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
    '& input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },
}));

interface Props {
  giveAnswer(answer: number): void
}

const Answer = ({ giveAnswer }: Props) => {
  const classes = useStyles();
  const [answer, setAnswer] = useState<number | ''>('');
  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    const answer = parseInt(e.currentTarget.value);
    setAnswer(isNaN(answer) ? '' : answer);
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (answer !== '') {
      giveAnswer(answer);
    }
    setAnswer('');
    e.preventDefault();
  }
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <OutlinedInput
        className={classes.textfield}
        type="number" onChange={onInput}
        placeholder="???"
        labelWidth={0}
        value={answer} />
    </form>
  )
}

export default Answer;
