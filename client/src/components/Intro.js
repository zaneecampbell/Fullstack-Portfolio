import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {}
});

const Intro = props => {
  const { classes } = props;
  return (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: '300',
        position: 'absolute',
        left: 0,
        right: 0,
        top: '25%',
        margin: 'auto',
        maxWidth: '500px'
      }}
    >
      <img style={{ maxWidth: '200px', textAlign: 'center' }} src='/me.png' />
      <Typography
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: '300'
        }}
      >
        Hi, My name is Zane. I'm a Fullstack Web Developer with a focus on the
        MERN stack!
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Intro);

// Add Portfolio picture
