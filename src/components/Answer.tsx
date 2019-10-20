import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const useStyles = makeStyles(theme => ({
    textfield: {
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
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
        <form onSubmit={onSubmit}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        className={classes.textfield}
                        type="number" onChange={onInput}
                        variant="outlined"
                        value={answer} />
                </Grid>
            </Grid>
        </form>
    )
}

export default Answer;
