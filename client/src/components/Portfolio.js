import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Portfolio = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: 'auto' }}>
      <Grid style={{ paddingTop: '50px' }} container>
        <Grid item xs={12} md={6}>
          Picture Here
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography style={{ fontSize: '1.4rem' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            assumenda beatae debitis, reiciendis quia possimus similique sed
            excepturi sapiente culpa odit corrupti quisquam eius vel ab
            dignissimos magni, dolore, repudiandae iste blanditiis hic soluta
            dicta asperiores ipsa! Praesentium maxime dolor, perspiciatis nulla
            accusamus sint, non ullam assumenda repudiandae eos ducimus
            excepturi, laborum illo consectetur qui voluptatibus voluptatum a
            quidem quisquam.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
