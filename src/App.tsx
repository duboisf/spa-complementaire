import AppBar from '@material-ui/core/AppBar/AppBar';
import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import React, { useEffect, useState } from 'react';
import './App.css';

const useStyles = makeStyles(theme => ({
  grid: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  toolbar: {
    ...theme.mixins.toolbar,
  }
}));

const x = Math.round(Math.random() * 5);
const y = Math.round(Math.random() * 5);

export default function App() {
  const classes = useStyles();
  const recognition: SpeechRecognition = new (window as any).webkitSpeechRecognition();
  const [equation, setEquation] = useState(`${x} + ${y}`);
  const [answer, setAnswer] = useState("");
  let result = "nope!";
  console.log(`answer: ${answer}`)
  console.log(parseInt(answer));
  console.log(x + y);
  if (parseInt(answer) === x + y) {
    result = "yes!";
  }
  useEffect(() => {
    recognition.lang = 'fr-CA';
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      setAnswer(event.results[event.resultIndex][0].transcript);
    }
    recognition.start();
    return () => {
      recognition.stop();
    }
  }, [])
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            Complémentaires
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
      <Grid container className={classes.grid} justify="center" >
        <Grid item>
          <Typography variant="body1">
            {equation} = {answer}? {result}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
