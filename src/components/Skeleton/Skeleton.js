/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, keyframes } from '@emotion/react'

const swipe = keyframes`
  100% {
    transform: translate3d(200%, 0, 0)
  }
`;

const Skeleton = ({
  animation = true,
  circle = false,
  height,
  width,
  styles
}) => {
  return (
    <div 
      css={[
        {
          height,
          width,
          position: 'relative',
          background: '#eaeaea',
          borderRadius: circle ? '50%' : null,
          overflow: 'hidden',
          '&:after': {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            right: '100%',
            animation: `${swipe} 2s infinite linear`,
            background:
              `linear-gradient(
                to right,
                  rgba(255, 255, 255, 0),
                  rgba(255, 255, 255, .5) 50%,
                  rgba(255, 255, 255, 0) 100%
              )`,
            content: animation ? '""' : null,
            willChange: 'transform'
          }
        },
        styles
      ]}
    />
  );
};

export default Skeleton;