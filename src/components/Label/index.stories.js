import React from 'react';

import Label from './index';

export default { title: 'Label' };

export const base = () => (
  <>
    <Label htmlFor="label">Label</Label>
  </>
);

export const styled = () => (
  <>
    <Label 
      styles={{
        backgroundColor: 'hotpink'
      }}
    >
      Hotpink
    </Label>
  </>
);