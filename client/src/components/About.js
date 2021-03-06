import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SkillsList from './SkillsList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    maxWidth: '1920px',
    margin: 'auto'
  },
  paperWrapper: {
    background: '#e6e6e6',
    boxShadow: 'none',
    paddingTop: 50,
    paddingBottom: 50
  },
  paper: {
    background: '#e6e6e6',
    boxShadow: 'none',
    padding: theme.spacing(2),
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    }
  },
  paper2: {
    background: '#e6e6e6',
    boxShadow: 'none',
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  paperExpansion: {
    '&:before': {
      height: 0
    }
  },
  typographyTitle: {
    marginLeft: 75,
    [theme.breakpoints.down('sm')]: {
      margin: 'auto'
    }
  },
  typographyP1: {
    fontSize: '1.4rem',
    marginTop: 50,
    marginLeft: 75,
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
      marginLeft: 'auto'
    }
  },
  typographyP2: {
    fontSize: '1.4rem',
    marginTop: 50,
    marginLeft: 75,
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
      marginLeft: 'auto',
      marginBottom: 50
    }
  },
  skillsList: {
    marginTop: 50
  }
});

export const About = props => {
  const { classes } = props;

  return (
    <Paper className={classes.paperWrapper} square={true}>
      <Grid classes={{ container: classes.container }} container>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <Typography className={classes.typographyTitle} variant='h2'>
              About
            </Typography>
            <Typography className={classes.typographyP1}>
              Hi I'm Zane, a Fullstack Developer. I relocated here from Oklahoma
              for better career opportunities and I've been studying ever since.
              Outside of development I enjoy cooking new dishes and hiking with
              a small group of friends. Learning is my passion and programming
              has been the best outlet I could have found, always looking for
              that next best answer, practicing that new library, or sifting
              through documentation for better understanding.
            </Typography>
            <Typography className={classes.typographyP2}>
              Highly focused and always ready for a new challenge, I keep going
              till the job is done and I'm satisfied with the results. Taking
              pride in my work no matter the project. Developing always leads to
              problem-solving, and problem-solving is the most interactive way
              to learn.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper2}>
            <div style={{ display: 'inline' }}>
              <Typography
                id='skill-text'
                style={{ display: 'inline' }}
                variant='h2'
              >
                Skills
              </Typography>
            </div>
            <div className={classes.skillsList}>
              <SkillsList />
              <Typography style={{ marginTop: '25px' }}>
                For all skills check out my{' '}
                <a
                  href='/Zane Campbell Resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  resume here
                </a>
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(About);
