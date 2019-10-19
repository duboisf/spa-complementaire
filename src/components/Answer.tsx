import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import TextField from '@material-ui/core/TextField/TextField';
import React, { ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textfield: {
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },
    },
}));

interface Props extends Readonly<{
}> { }

const Answer = (props: Props) => {
    const classes = useStyles();
    const onInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
    }
    return (
        <Grid container alignItems="center" spacing={2}>
            <Grid item xs={6}>
                <TextField className={classes.textfield} type="number" onChange={onInput} variant="outlined" />
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </Grid>
        </Grid>
    )
}

export default Answer;
