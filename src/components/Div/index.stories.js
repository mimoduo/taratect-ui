import React from 'react';

import Div from './index';

export default { title: 'Div' };

export const margin = () => (
  <>
    <Div mt={2}>Margin Top</Div>
    <Div mr={2}>Margin Right</Div>
    <Div mb={2}>Margin Bottom</Div>
    <Div ml={2}>Margin Left</Div>
    <Div mx={2}>Margin Left/Right</Div>
    <Div my={2}>Margin Top/Bottom</Div>
  </>
);

export const padding = () => (
  <>
    <Div pt={2}>Padding Top</Div>
    <Div pr={2}>Padding Right</Div>
    <Div pb={2}>Padding Bottom</Div>
    <Div pl={2}>Padding Left</Div>
    <Div px={2}>Padding Left/Right</Div>
    <Div py={2}>Padding Top/Bottom</Div>
  </>
);

export const styles = () => (
  <Div 
    styles={{
      backgroundColor: 'hotpink'
    }}
  >
    Hotpink
  </Div>
);