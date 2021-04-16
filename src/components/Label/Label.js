import React from 'React';

const Label = ({
  children,
  htmlFor
}) => {
  return(
    <label htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;