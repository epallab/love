import React, { useState } from "react";
import RandomPositionButton from "./Btn";
import love from "./love.gif";
import yay from "./yay.gif";

const Home = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <div className="home-container">
        {state ? (
          <>
            <div className="text">Yaaaay!!</div>
            <img className="imgB" src={yay} alt="" />
          </>
        ) : (
          <>
            <div className="text">
              {"Would you like to go out with me, Sharmistha?"}
            </div>
            <img className="imgA" src={love} alt="" />
            <div>
              <button
                className="btn"
                onClick={() => {
                  setState((prev) => !prev);
                }}
              >
                Yes
              </button>
              <RandomPositionButton />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
