/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react'

const Radio = ({
  containerStyles,
  children,
  id,
  iconStyles,
  inputStyles,
  name,
  value
}) => {
  return (
    <div 
      css={[
        {
          position: 'relative',
          paddingLeft: 14 + 8
        },
        containerStyles
      ]}
    >
      <input 
        css={[
          {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            cursor: 'pointer',
            margin: 0,
            opacity: 0
          },
          inputStyles
        ]}
        id={id ? id : name}
        name={name ? name : id}
        type="radio" 
        value={value}
      />
      {children}
      <span
        css={[
          {
            height: 14,
            width: 14,
            position: 'absolute',
            top: '50%',
            left: 0,
            border: '1px solid #000',
            borderRadius: '50%',
            pointerEvents: 'none',
            transform: 'translate(0, -50%)',
            'input:checked ~ &': {
              background: '#000'
            }
          },
          iconStyles
        ]}
      />
    </div>
  );
};

export default Radio;