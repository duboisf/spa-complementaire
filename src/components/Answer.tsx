import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const useStyles = makeStyles(() => ({
  form: {
    boxSizing: 'border-box',
    fontFamily: 'Monospace',
    fontSize: '3rem',
    width: '4ch',
  },
  textfield: {
    '& input': {
      fontFamily: 'Monospace',
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
      <TextField
        className={classes.textfield}
        type="number" onChange={onInput}
        variant="standard"
        value={answer} />
    </form>
  )
}

export default Answer;
