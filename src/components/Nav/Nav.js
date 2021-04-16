import React from 'React';

const Nav = ({
  children,
  label
}) => {
  return(
    <nav aria-labelledby={label}>
      {children}
    </nav>
  );
};

export default Nav;