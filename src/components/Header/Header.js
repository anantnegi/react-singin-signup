import React from 'react';
import CONSTANT from '../../constant.js';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link, AppBar, IconButton, Button, Typography, Toolbar }from '@material-ui/core';
import Drawer from '../Drawer/Drawer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>    	
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Drawer />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {CONSTANT.WEBSITE_NAME}
          </Typography>
          <Typography variant="h6" className={classes.root}>
	          <Link href="signup" color="inherit" variant="body2">Sign up</Link>          
	          <Link href="signin" color="inherit" variant="body2">Login</Link>          
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
