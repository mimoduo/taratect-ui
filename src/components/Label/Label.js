/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react'

const Label = ({
  children,
  htmlFor,
  styles
}) => {
  return (
    <label 
      css={[
        {
          display: 'block'
        },
        styles
      ]}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;