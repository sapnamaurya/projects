import React from "react";
import dice from "../../assets/images/dice.png";
import "./style.css";
import { useNavigate } from "react-router-dom";

function StartGame() {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate("/score");
  };
  return (
    <>
      <div className="playCont">
        <img src={dice} alt="dice" />
        <div className="name-cont">
          <h1>DICE GAME</h1>
          <button onClick={handlePlay}>Play Now</button>
        </div>
      </div>
    </>
  );
}
export default StartGame;
