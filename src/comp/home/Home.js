import React, { useState } from "react";
import balla from "../balla.png";
import ballb from "../ballb.png";
import ballc from "../ballc.png";
import balld from "../balld.png";
import balls from "../balls.png";
import tree from "../tree.gif";
import brown from "../brown.gif";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    access: false,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.userName === "Santa@pole.com" && user.password === "Admin") {
      setUser({
        ...user,
        access: true,
      });
    }
    console.log(user);
  };

  const springTransition = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <>
      <div className="home-main">
        <div className="back-layer">
          <img className="imgA" src={balla} alt="" />
          <img className="imgB" src={ballb} alt="" />
          <img className="imgC" src={ballc} alt="" />
          <img className="imgD" src={balld} alt="" />
        </div>
        {!user.access ? (
          <div className="log-in-layer">
            <div className="log-title">Login Here</div>
            <form onSubmit={handleSubmit} className="log-in-form">
              <div>
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={user.userName}
                  onChange={handleInputChange}
                  placeholder="Username or Email"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="log-in-btn">
                Log In
              </button>
              <div className="btn-div">
                <button type="button" className="social-btn">
                  <span>
                    <FaGoogle />
                  </span>
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="social-btn"
                  onClick={() => {
                    console.log(user);
                  }}
                >
                  <span>
                    <FaFacebook />
                  </span>
                  <span>Facebook</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="welcome-layer">
            <motion.div
              initial={{ y: "440px", x: "200px" }}
              animate={{ y: "440px", x: "25px" }}
              transition={springTransition}
            >
              <img src={tree} className="img-tree" alt="" />
            </motion.div>
            <motion.div
              initial={{ y: "800px", x: "-25px" }}
              animate={{ y: "440px", x: "-25px" }}
              transition={springTransition}
            >
              <img src={brown} className="img-brown" alt="" />
            </motion.div>

            <motion.div
              initial={{ y: "-200px", x: "-20px" }}
              animate={{ y: "-20px", x: "-20px" }}
              transition={springTransition}
            >
              <img src={balls} className="img-balls" alt="" />
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
