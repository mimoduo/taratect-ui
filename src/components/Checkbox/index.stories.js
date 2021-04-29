import React from 'react';

import Checkbox from './index';

export default { title: 'Checkbox' };

export const base = () => (
  <>
    <Checkbox 
      id="checkbox-one"
      name="checkbox"
    >
      <label for="checkbox-one">Checkbox One</label>
    </Checkbox>
    <Checkbox 
      id="checkbox-two"
      name="checkbox"
    >
      <label for="checkbox-two">Checkbox Two</label>
    </Checkbox>
  </>
);

export const styles = () => (
  <>
    <Checkbox 
      containerStyles={{
        backgroundColor: 'hotpink'
      }}
      id="checkbox-one"
      indicatorStyles={{
        borderColor: 'white',
        'input:checked ~ &': {
          backgroundColor: 'white'
        }
      }}
      name="checkbox"
    >
      <label for="checkbox-one">Checkbox One</label>
    </Checkbox>
    <Checkbox 
      containerStyles={{
        backgroundColor: 'hotpink'
      }}
      id="checkbox-two"
      indicatorStyles={{
        borderColor: 'white',
        'input:checked ~ &': {
          backgroundColor: 'white'
        }
      }}
      name="checkbox"
    >
      <label for="checkbox-two">Checkbox Two</label>
    </Checkbox>
  </>
);