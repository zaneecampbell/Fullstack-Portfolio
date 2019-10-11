import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Portfolio = () => {
  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: 'auto',
        marginBottom: '100px',
        overflowX: 'hidden'
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
      <section data-aos='fade-left'>
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
              src='portfolio_images/Inventory_App.JPG'
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
              style={{ fontSize: '1.4rem', margin: '15px', marginTop: '30px' }}
            >
              Create an account and login to create/update an inventory.
              Utilizing the MERN stack with a React Frontend, using React-Redux
              w/ thunk middleware, React-Router with authentication checks,
              Material-UI for design. Backend Express server, Mongodb/Mongoose
              as a database, passwords hashed with bcryptjs, authentication
              tracked with JSONwebtokens, validation with express-validator.
              Hosted on Heroku.
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
              alt='Freelane artist Website'
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
              style={{ fontSize: '1.4rem', margin: '15px', marginTop: '30px' }}
            >
              Freelance project, a portfolio website for a twitch
              streamer/digital artists. Built using the MERN stack. Uses
              ReactStrap for styling and React-Router for routing.. Email form
              runs server side sent through an online api to request commissions
              from the artists. Hosted on Heroku.
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section data-aos='fade-left'>
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
              src='portfolio_images/Voting_App_Big.JPG'
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
              style={{ fontSize: '1.4rem', margin: '15px', marginTop: '30px' }}
            >
              A fullstack voting appliation built using the MERN stack. The
              Create page form adds more fields as the last field available is
              used. I prevent multiple votes through setting id values in
              localstorage and checking them. The database Results page is
              updated in real-time for user convenience. Styled with
              Material-UI. Hosted on Heroku.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Portfolio;
