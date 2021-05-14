/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, keyframes } from '@emotion/react';

const twirl = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

const trill = keyframes`
  50% {
    background: #000;
    box-shadow:
      0 0 0 -5px #000,
      0 0 0 -5px #000;
    transform: scale(1.5);
  }
`;

const Loader = ({
  styles,
  type = 'circle',
}) => {
  return (
    <>
      {type === 'circle' && (
        <div
          css={[
            {
              height: 30,
              width: 30,
              animation: `${twirl} 1s infinite`,
              display: 'flex',
              '&:before': {
                height: '100%',
                width: '100%',
                border: '2px solid #000',
                borderRightColor: 'transparent',
                borderRadius: '50%',
                boxSizing: 'border-box',
                content: '""'
              }
            },
            styles
          ]} 
        />
      )}
      {type === 'dots' && (
        <div
          css={[
            {
              height: 10,
              width: 38,
              display: 'flex',
              justifyContent: 'center',
              '&:before': {
                height: '100%',
                width: 10,
                animation: `${trill} 1s infinite`,
                background: '#000',
                borderRadius: '50%',
                boxShadow:
                  `-14px 0 0 0 #000,
                  14px 0 0 0 #000`,
                content: '""',
                display: 'block'
              }
            },
            styles
          ]}
        />
      )}
    </>
  );
};

export default Loader;