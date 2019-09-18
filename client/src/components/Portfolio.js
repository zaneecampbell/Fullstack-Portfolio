import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Portfolio = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: 'auto', marginTop: '50px' }}>
      <Grid justify='center' container>
        <img
          style={{ width: '100%', maxWidth: '700px' }}
          src='https://i.imgur.com/6nMLf.jpg'
          alt='duck'
        />
        <Grid style={{ background: '#e6e6e6', maxWidth: '700px' }} md={8} item>
          <Typography style={{ fontSize: '1.4rem' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            quasi voluptas accusamus officiis sunt distinctio fuga maiores
            magnam, consequuntur praesentium, saepe iste minus! Repellat animi
            officiis suscipit unde sapiente rerum soluta?
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
