import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { createBrowserHistory } from "history"
import { Button, Container, Typography, SwipeableDrawer } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
 heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Homepage() {
 const classes = useStyles();  
  return (
    <div>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Homepage
        </Typography>
      </Container>
    </div>
  );
}
