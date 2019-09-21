import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Portfolio = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: 'auto', marginTop: '100px' }}>
      <Grid justify='center' container>
        <img
          style={{ width: '100%', maxWidth: '700px' }}
          src='portfolio_images/Inventory_app.JPG'
          alt='Inventory App'
        />
        <Grid style={{ background: '#e6e6e6', maxWidth: '700px' }} md={12} item>
          <Typography
            style={{ textAlign: 'center', marginTop: '30px' }}
            variant='h2'
          >
            Inventory App
          </Typography>
          <Typography
            style={{ fontSize: '1.4rem', marginTop: '30px', margin: '15px' }}
          >
            My biggest project to date utilizing as many techniques and
            technologies that I could, built using the MERN stack. The FrontEnd
            is built using React, React-Redux w/ thunk middleware, React-Router
            with authentication checking, and material-ui for design. Backend
            server is built on top of Express, passwords hashed in database with
            bcryptjs and tracked with jsonwebtokens, validation utilizing
            express validator, and mongodb/mongoose for database management.
            Hosted on heroku.
          </Typography>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: '100px' }} justify='center' container>
        <img
          style={{ width: '100%', maxWidth: '700px' }}
          src='portfolio_images/ChocoNov_Website.png'
          alt='duck'
        />
        <Grid style={{ background: '#e6e6e6', maxWidth: '700px' }} md={12} item>
          <Typography
            style={{ textAlign: 'center', marginTop: '30px' }}
            variant='h2'
          >
            Digital Artist Portfolio
          </Typography>
          <Typography
            style={{ fontSize: '1.4rem', marginTop: '30px', margin: '15px' }}
          >
            My first freelance project a portfolio website for a twitch
            streamer/digital artists. Built using the MERN stack. Uses
            ReactStrap as an intro to Bootstrap components for styling and
            React-Router for routing.. Email form runs server side sent through
            an online api to request commissions of the artists. Hosted on
            heroku.
          </Typography>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: '100px' }} justify='center' container>
        <img
          style={{ width: '100%', maxWidth: '700px' }}
          src='portfolio_images/Voting_App.JPG'
          alt='Voting App'
        />
        <Grid style={{ background: '#e6e6e6', maxWidth: '700px' }} md={12} item>
          <Typography
            style={{ textAlign: 'center', marginTop: '30px' }}
            variant='h2'
          >
            Voting App
          </Typography>
          <Typography
            style={{ fontSize: '1.4rem', marginTop: '30px', margin: '15px' }}
          >
            A fullstack voting appliation built using the MERN stack. The Create
            pages form adds more fields as the last field available is used. I
            prevent multiple votes through setting id values in localstorage and
            checking them. The database Results page is updated in real-time for
            user convenience. Styled with Material-UI. Hosted on heroku.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
