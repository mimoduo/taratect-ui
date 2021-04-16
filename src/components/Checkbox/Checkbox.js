import React from 'React';

const Checkbox = ({
  checked,
  name,
  value
}) => {
  return(
    <input
      checked={checked}
      name={name}
      type="checkbox"
      value={value}
    />
  );
};

export default Checkbox;