/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

const Button = ({ 
  children,
  disabled,
  onClick,
  role = "button",
  rootCSS,
  type = "button"
}) => {
  return(
    <button
      css={[
        {
          appearance: 'none',
          fontFamily: 'inherit',
          fontSize: 'inherit'
        },
        rootCSS
      ]}
      disabled={disabled}
      onClick={onClick}
      role={role}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;