import React from "react";

const Button = ({ children, onClick, pd = 3 }) => {
  return (
    <button className="btn" style={{ padding: `${pd}px` }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
