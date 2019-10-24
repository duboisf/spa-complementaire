import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput/OutlinedInput';

const useStyles = makeStyles(() => ({
  form: {
    fontFamily: 'monospace',
    fontSize: '3rem',
    boxSizing: 'border-box',
    width: '4ch',
  },
  textfield: {
    fontFamily: 'monospace',
    fontSize: '3rem',
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
