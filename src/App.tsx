import AppBar from '@material-ui/core/AppBar/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Paper from '@material-ui/core/Paper/Paper';
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid/Grid';

const styles = (theme: Theme) => createStyles({
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
});

interface Props extends WithStyles<typeof styles> { }

const App = ({ classes }: Props) => (
  <>
    <CssBaseline />
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
        <Paper>
          <Typography variant="body1">
            5 + 3 = ?
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </>
);

export default withStyles(styles)(App);
