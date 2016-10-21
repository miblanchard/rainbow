import React, { PropTypes } from 'react';

const RayCurved = ({ clickRay, mainColor, gradient, index }) => {
  // const styles = {
  //   background: mainColor,
  //   // background: `linearGradient(270deg, ${mainColor}, ${gradient})`,
  //   // backgroundSize: '400% 400%',
  //   // animation: 'rayGlow 5s ease infinite',
  // };
  const click = () => clickRay(index);
  let width = window.innerWidth;

  return (
    <circle className="rayCurved" id={`ray${index}`} onClick={click} cx={(width / 2)} cy={500} r={(index) * 70} fill={mainColor} />
  );
};

RayCurved.propTypes = {
  clickRay: PropTypes.func,
  mainColor: PropTypes.string,
  gradient: PropTypes.string,
  index: PropTypes.number,
};

export default RayCurved;
