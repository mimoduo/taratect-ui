/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react'

const Select = ({
  containerStyles,
  disabled,
  icon,
  iconStyles,
  id,
  name,
  options,
  selectStyles,
  value
}) => {
  return (
    <div 
      css={[
        {
          position: 'relative'
        },
        containerStyles
      ]}
    >
      <select
        css={[
          {
            width: '100%',
            appearance: 'none',
            backgroundColor: 'none',
            border: '1px solid #000',
            cursor: disabled ? 'not-allowed' : 'pointer',
            padding: 10,
            paddingRight: 40
          },
          selectStyles
        ]}
        disabled={disabled}
        id={id ? id : name}
        name={name ? name : id}
        value={value}
      >
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {icon ? icon : (
        <span
          css={[
            {
              height: 10,
              width: 10,
              position: 'absolute',
              top: '50%',
              right: 10,
              border: '1px solid #000',
              borderTop: 0,
              borderLeft: 0,
              marginTop: -4,
              pointerEvents: 'none',
              transform: 
                `translate(0, -50%)
                scaleY(1)
                rotate(45deg)`,
            },
            iconStyles
          ]}
        />
      )}
    </div>
  );
};

export default Select;