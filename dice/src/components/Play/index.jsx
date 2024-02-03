import React, { useState } from "react";
import "./style.css";

function Play() {
  const arrButton = [1, 2, 3, 4, 5, 6];
  const [selectNum, setSelectNum] = useState();
  // const handleButton = (value) => {
  //   setSelectNum(value);
  //   console.log("---", selectNum);
  //   console.log(value);
  // };
  console.log("----", selectNum);
  return (
    <>
      <div className="main-sec">
        <div className="score-cont">
          <div className="totla-score">
            <h1>0</h1>
            <p>Total Score</p>
          </div>
          <div className="number-cont">
            {arrButton.map((ele, index) => {
              return (
                <button
                  isSelected={ele === selectNum}
                  onClick={() => setSelectNum(ele)}
                  key={index}
                >
                  {ele}
                </button>
              );
            })}
            <p>Select Number</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Play;

// const button = styled.div`
//   background-color: ${(props) => (props.isSelected ? "black" : "white")};
// `;
