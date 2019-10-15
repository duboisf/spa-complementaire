import Card from '@material-ui/core/Card/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import { Operation } from '../services/operation';
import TextField from '@material-ui/core/TextField/TextField';
import Grid from '@material-ui/core/Grid/Grid';

const useStyles = makeStyles(theme => ({
    card: {
        fontFamily: 'Monospace',
        textAlign: 'center',
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
}> { }

export const OperationQuestion = (props: Props) => {
    const classes = useStyles();
    const { operation, } = props;
    return (
        <Card className={classes.card}>
            <Grid container>
                <Grid item key={0}>
                    <Typography variant="h2">
                        {operation.toString()} =
                    </Typography>
                </Grid>
                <Grid item key={1}>
                    <TextField></TextField>
                </Grid>
            </Grid>
        </Card>
    );
}
