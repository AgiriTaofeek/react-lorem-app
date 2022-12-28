import React from 'react';

const Button = ({ css, type, children }) => {
  return (
    <button className={css} type={type}>
      {children}
    </button>
  );
};

export default Button;
