import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
 heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Homepage({ Categories }) {
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
