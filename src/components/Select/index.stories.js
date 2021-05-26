import React from 'react';

import Select from './index';

export default { title: 'Select' };

export const base = () => (
  <>
    <Select 
      options={[
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        }
      ]}
    />
  </>
);

export const disabled = () => (
  <>
    <Select 
      disabled
      options={[
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        }
      ]}
    />
  </>
);

export const styled = () => (
  <>
    <Select 
      containerStyles={{
        border: '1px dashed hotpink',
        padding: 2
      }}
      iconStyles={{
        borderColor: 'hotpink'
      }}
      options={[
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        }
      ]}
      selectStyles={{
        border: '1px solid hotpink'
      }}
    />
  </>
);