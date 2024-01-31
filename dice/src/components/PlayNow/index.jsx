import React from "react";
import dice from "../../assets/images/dice.png";
import "./style.css";

function PlayNow() {
  return (
    <>
      <div className="playCont">
        <img src={dice} alt="dice" />
        <div className="name-cont">
          <h1>DICE GAME</h1>
          <button>Play Now</button>
        </div>
      </div>
    </>
  );
}
export default PlayNow;
