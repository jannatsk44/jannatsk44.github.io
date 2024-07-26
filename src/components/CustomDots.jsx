import React from 'react';
import '../App.css';

const CustomDots = ({ dots }) => {
  if (dots.length === 0) return null;

  return (
    <div className="custom-dots">
      {dots.map((dot, index) => (
        <div
          key={index}
          className={`dot ${dot.props.className.includes('slick-active') ? 'line' : ''}`}
        >
          {dot.props.className.includes('slick-active')?'':dot}
        </div>
      ))}
    </div>
  );
};

export default CustomDots;
