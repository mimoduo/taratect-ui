/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react'

const Input = ({
  disabled,
  onChange,
  placeholder,
  readOnly,
  styles,
  value
}) => {

  return (
    <input 
      css={[
        {
          appearance: 'none',
          fontFamily: 'inherit',
          fontSize: 'inherit'
        },
        styles
      ]}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      value={value}
    />
  );
};

export default Input;