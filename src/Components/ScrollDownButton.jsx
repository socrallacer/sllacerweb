import React from 'react';


const ScrollDownButton = ({ onClick }) =>{

  return (
  <button
  onClick={onClick}
      style={{ cursor: "pointer", border: "none", background: "none" }}
    >
    <img
      src={arrowSvg}
      alt="Scroll Down"
        style={{ height: "3rem", width: "3rem" }}
    />
    </button>
  );
}

export default ScrollDownButton;
