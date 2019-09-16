import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    color: 'white',
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '300',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '25%',
    margin: 'auto',
    maxWidth: '700px'
  }
});

const Intro = props => {
  const { classes } = props;
  return (
    <Typography classes={{ root: classes.root }}>
      <div>
        <img style={{ maxWidth: '200px', textAlign: 'center' }} src='/me.png' />
      </div>
      Hi, My name is Zane. I'm a Fullstack Web Developer with a focus on the
      MERN stack!
    </Typography>
  );
};

export default withStyles(styles)(Intro);

// Add Portfolio picture
