import React from "react";

function Dinner(props) {
  return (
    <div>
      <h1>Today we are serving chicken biryani!</h1>
      <h1>also serving {props.dishName}</h1>
    </div>
  );
}

export default Dinner;
