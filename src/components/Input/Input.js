/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react'

const Input = ({
  disabled,
  id,
  name,
  onChange,
  placeholder,
  readOnly,
  required,
  styles,
  type,
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
      id={id ? id : name}
      name={name ? name : id}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      type={type}
      value={value}
    />
  );
};

export default Input;