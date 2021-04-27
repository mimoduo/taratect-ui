/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

const Button = ({ 
  children,
  disabled,
  endIcon,
  endIconStyles,
  onClick,
  role = "button",
  startIcon,
  startIconStyles,
  styles,
  type = "button"
}) => {
  return(
    <button
      css={[
        {
          alignItems: 'center',
          appearance: 'none',
          cursor: 'pointer',
          display: 'inline-flex',
          fontFamily: 'inherit',
          fontSize: 'inherit'
        },
        styles
      ]}
      disabled={disabled}
      onClick={onClick}
      role={role}
      type={type}
    >
      {startIcon && (
        <span
          aria-hidden="true"
          css={[
            {
              marginRight: 8
            },
            startIconStyles
          ]}
        >
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span
          aria-hidden="true"
          css={[
            {
              marginLeft: 8
            },
            endIconStyles
          ]}
        >
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;