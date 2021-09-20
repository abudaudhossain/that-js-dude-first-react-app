import React from 'react';

const Button = (props) => {
  return (
    <button className="btn">{props.title} &gt;&gt; </button>
  );
};

export default Button;