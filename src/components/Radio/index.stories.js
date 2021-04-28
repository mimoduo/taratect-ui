import React from 'react';

import Radio from './index';

export default { title: 'Radio' };

export const base = () => (
  <>
    <Radio 
      id="radio-one"
      name="radio"
    >
      <label for="radio-one">Radio One</label>
    </Radio>
    <Radio 
      id="radio-two"
      name="radio"
    >
      <label for="radio-two">Radio Two</label>
    </Radio>
  </>
);

export const styles = () => (
  <>
    <Radio 
      containerStyles={{
        backgroundColor: 'hotpink'
      }}
      id="radio-one"
      indicatorStyles={{
        borderColor: 'white',
        'input:checked ~ &': {
          backgroundColor: 'white'
        }
      }}
      name="radio"
    >
      <label for="radio-one">Radio One</label>
    </Radio>
    <Radio 
      containerStyles={{
        backgroundColor: 'hotpink'
      }}
      id="radio-two"
      indicatorStyles={{
        borderColor: 'white',
        'input:checked ~ &': {
          backgroundColor: 'white'
        }
      }}
      name="radio"
    >
      <label for="radio-two">Radio Two</label>
    </Radio>
  </>
);