import React from 'react';

import Grid from './index';

export default { title: 'Grid' };

export const alignment = () => (
  <>
    <Grid center>
      <div>Center</div>
      <div>
        <div>Right</div>
        <div>Right</div>
        <div>Right</div>
      </div>
    </Grid>
    <hr />
    <Grid spaceBetween>
      <div>Space Between</div>
      <div>
        <div>Right</div>
        <div>Right</div>
        <div>Right</div>
      </div>
    </Grid>
    <hr />
    <Grid justifyContent="space-around">
      <div>Space Around</div>
      <div>
        <div>Right</div>
        <div>Right</div>
        <div>Right</div>
      </div>
    </Grid>
  </>
);

export const styles = () => (
  <>
    <Grid
      styles={{
        backgroundColor: 'hotpink'
      }}
    >
      <div>Hotpink</div>
    </Grid>
  </>
);