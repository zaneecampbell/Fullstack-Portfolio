import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Portfolio = () => {
  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: 'auto',
        marginBottom: '100px'
      }}
    >
      <Typography
        style={{
          textAlign: 'center',
          marginTop: '50px',
          marginBottom: '50px'
        }}
        variant='h2'
      >
        Portfolio
      </Typography>
      <section
        data-aos='fade-left'
        data-aos-offset='200'
        data-aos-duration='1000'
      >
        <Grid justify='center' container>
          <a
            href='https://fullstack-inventory-app.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              style={{
                width: '100%',
                maxWidth: '700px',
                verticalAlign: 'text-bottom'
              }}
              src='portfolio_images/Inventory_app.JPG'
              alt='Inventory App'
            />
          </a>
          <Grid
            style={{
              background: '#e6e6e6',
              maxWidth: '700px'
            }}
            md={12}
            item
          >
            <Typography
              style={{ textAlign: 'center', marginTop: '30px' }}
              variant='h2'
            >
              Inventory App
            </Typography>
            <Typography
              style={{ fontSize: '1.4rem', marginTop: '30px', margin: '15px' }}
            >
              Personal inventory tracking site, create an account and login to
              create/update your own inventory. Utilizing the MERN stack the
              FrontEnd is built using React, React-Redux w/ thunk middleware,
              React-Router with authentication checking, and material-ui for
              design, and the Backend server is built on top of Express,
              passwords hashed in database with bcryptjs and tracked with
              jsonwebtokens, validation utilizing express validator, and
              mongodb/mongoose for users and user data. Hosted on heroku.
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section
        data-aos='fade-right'
        data-aos-offset='200'
        data-aos-duration='1000'
      >
        <Grid style={{ marginTop: '100px' }} justify='center' container>
          <a
            style={{ background: 'white' }}
            href='https://choconov-portfolio.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              style={{
                width: '100%',
                maxWidth: '700px',
                verticalAlign: 'text-bottom'
              }}
              src='portfolio_images/ChocoNov_Website.png'
              alt='duck'
            ></img>
          </a>
          <Grid
            style={{ background: '#e6e6e6', maxWidth: '700px' }}
            md={12}
            item
          >
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
              React-Router for routing.. Email form runs server side sent
              through an online api to request commissions of the artists.
              Hosted on heroku.
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section
        data-aos='fade-left'
        data-aos-offset='200'
        data-aos-duration='1000'
      >
        <Grid style={{ marginTop: '100px' }} justify='center' container>
          <a
            style={{ background: 'rgb(230, 230, 230)' }}
            href='https://chill-polls.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              style={{
                width: '100%',
                maxWidth: '700px',
                verticalAlign: 'text-bottom'
              }}
              src='portfolio_images/Voting_App.JPG'
              alt='Voting App'
            />
          </a>
          <Grid
            style={{ background: '#e6e6e6', maxWidth: '700px' }}
            md={12}
            item
          >
            <Typography
              style={{ textAlign: 'center', marginTop: '30px' }}
              variant='h2'
            >
              Voting App
            </Typography>
            <Typography
              style={{ fontSize: '1.4rem', marginTop: '30px', margin: '15px' }}
            >
              A fullstack voting appliation built using the MERN stack. The
              Create page form adds more fields as the last field available is
              used. I prevent multiple votes through setting id values in
              localstorage and checking them. The database Results page is
              updated in real-time for user convenience. Styled with
              Material-UI. Hosted on heroku.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Portfolio;
