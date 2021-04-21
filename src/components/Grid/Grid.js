/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react'

const Grid = ({
  alignItems,
  center,
  children,
  justifyContent,
  spaceBetween,
  styles
}) => {

  return (
    <div
      css={[
        {
          alignItems: alignItems ? alignItems : (center && 'center'),
          display: 'flex',
          justifyContent: justifyContent ? justifyContent : (spaceBetween && 'space-between'),
        },
        styles
      ]}
    >
      {children}
    </div>
  );
};

export default Grid;