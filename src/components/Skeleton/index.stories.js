/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, keyframes } from '@emotion/react'

import React from 'react';

import Skeleton from './index';

export default { title: 'Skeleton' };

export const base = () => (
  <>
    <Skeleton height={40} />
  </>
);

export const noAnimation = () => (
  <>
    <Skeleton animation={false} height={40} />
  </>
);

export const circle = () => (
  <>
    <Skeleton circle height={80} width={80} />
  </>
);

export const styled = () => {
  const bubble = keyframes`
    50% {
      transform: scale(4)
    }
  `;

  return (
    <>
      <Skeleton 
        height={40}
        styles={{
          backgroundColor: 'hotpink',
          '&:after': {
            animation: `${bubble} 1s infinite linear`
          }
        }}
      />
    </>
  )
};