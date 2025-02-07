import React from 'react';

const Dice = (props) => {
  const style = props.isHeld ? "on" : "";

  return (
    <button
      className={`Dice ${style}`}
      onClick={() => props.hold(props.id)}
      id={props.id}
    >
      {props.nb}
    </button>
  );
};

export default Dice;