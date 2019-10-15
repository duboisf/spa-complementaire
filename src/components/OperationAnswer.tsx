import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import { Operation, operatorToString } from '../services/operation';

const useStyles = makeStyles(theme => ({
    box: {
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

const Part = (props: Readonly<{ value: number | string }>) => {
    return (
        <Box>
            <Typography variant="h4">{props.value}</Typography>
        </Box>
    )
}

export const OperationAnswer = (props: Props) => {
    const classes = useStyles();
    const { operation, answer } = props;
    const colorClass = operation.output() === answer ? classes.correct : classes.wrong;
    return (
        <Box className={classes.box}>
            <Grid container>
                <Grid item key={0}  xs={3}>
                    <Part value={operation.x} />
                </Grid>
                <Grid item key={1} xs={1}>
                    <Part value={operatorToString(operation.operator)} />
                </Grid>
                <Grid item key={2} xs={3}>
                    <Part value={operation.y} />
                </Grid>
                <Grid item key={3} xs={1}>
                    <Part value="=" />
                </Grid>
                <Grid item key={4} xs={4}>
                    <Box className={colorClass}>
                        <Part value={answer} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
