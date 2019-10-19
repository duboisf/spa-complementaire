import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Operation } from '../services/operation';
import { Question } from './Question';
import Part from './Part';

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: 'Monospace',
        textAlign: 'center',
        backgroundColor: theme.palette.primary.light,
    },
    correct: {
        backgroundColor: 'green',
    },
    wrong: {
        backgroundColor: 'red',
    },
}));

interface Props extends Readonly<{
    operation: Operation
    answer: number
}> { }

export const PreviousAnswer = (props: Props) => {
    const classes = useStyles();
    const { operation, answer } = props;
    const colorClass = operation.output() === answer ? classes.correct : classes.wrong;
    return (
        <Grid container className={classes.root}>
            <Grid item xs={8}>
                <Question operation={operation} />
            </Grid>
            <Grid item className={colorClass} xs={4}>
                <Part value={answer} />
            </Grid>
        </Grid>
    );
}
