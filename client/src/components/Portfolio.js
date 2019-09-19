import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Portfolio = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: 'auto', marginTop: '100px' }}>
      <Grid justify='center' container>
        <img
          style={{ width: '100%', maxWidth: '700px' }}
          src='https://i.imgur.com/6nMLf.jpg'
          alt='duck'
        />
        <Grid style={{ background: '#e6e6e6', maxWidth: '700px' }} md={12} item>
          <Typography variant='h2'>Inventory App</Typography>
          <Typography style={{ fontSize: '1.4rem' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            quasi voluptas accusamus officiis sunt distinctio fuga maiores
            magnam, consequuntur praesentium, saepe iste minus! Repellat animi
            officiis suscipit unde sapiente rerum soluta?
          </Typography>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: '100px' }} justify='center' container>
        <img
          style={{ width: '100%', maxWidth: '700px' }}
          src='https://i.imgur.com/6nMLf.jpg'
          alt='duck'
        />
        <Grid style={{ background: '#e6e6e6', maxWidth: '700px' }} md={12} item>
          <Typography variant='h2'>Digital Artist Portfolio Website</Typography>
          <Typography style={{ fontSize: '1.4rem' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            quasi voluptas accusamus officiis sunt distinctio fuga maiores
            magnam, consequuntur praesentium, saepe iste minus! Repellat animi
            officiis suscipit unde sapiente rerum soluta?
          </Typography>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: '100px' }} justify='center' container>
        <img
          style={{ width: '100%', maxWidth: '700px' }}
          src='portfolio_images/Voting_App.JPG'
          alt='duck'
        />
        <Grid style={{ background: '#e6e6e6', maxWidth: '700px' }} md={12} item>
          <Typography style={{ textAlign: 'center' }} variant='h2'>
            Voting App
          </Typography>
          <Typography
            style={{ fontSize: '1.4rem', marginTop: '30px', margin: '15px' }}
          >
            A fullstack voting appliation built using the MERN stack. The Create
            pages form adds more fields as the last field available is used. I
            prevent multiple votes through setting id values in localstorage and
            checking them. The database Results page is updated in real-time for
            user convenience. Styled with Material-UI.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
