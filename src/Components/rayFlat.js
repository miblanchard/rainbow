import React, { PropTypes } from 'react';

const RayFlat = ({ clickRay, mainColor, gradient, index }) => {
  const styles = {
    background: mainColor,
    // background: `linearGradient(270deg, ${mainColor}, ${gradient})`,
    backgroundSize: '400% 400%',
    animation: 'rayGlow 5s ease infinite',
  };
  const click = () => clickRay(index);

  return (
    <div className="ray" id={`ray${index}`} style={styles} onClick={click}>
      Click Me!
    </div>
  );
};

RayFlat.propTypes = {
  clickRay: PropTypes.func,
  mainColor: PropTypes.string,
  gradient: PropTypes.string,
  index: PropTypes.number,
};

export default RayFlat;
