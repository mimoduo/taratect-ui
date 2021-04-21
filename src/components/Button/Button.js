/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

const Button = ({ 
  children,
  disabled,
  endIcon,
  onClick,
  role = "button",
  startIcon,
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
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};

export default Button;