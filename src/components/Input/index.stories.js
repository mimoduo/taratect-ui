import React from 'react';

import Input from './index';

export default { title: 'Input' };

export const base = () => (
  <>
    <Input 
      placeholder="Input Base"
    />
  </>
);

export const disabled = () => (
  <>
    <Input 
      disabled
      placeholder="Input Disabled"
    />
  </>
);

export const styles = () => (
  <>
    <Input 
      placeholder="Hotpink"
      styles={{
        backgroundColor: 'hotpink'
      }}
    />
  </>
);