import React from "react";
import AnotherComponent from "./AnotherComponent";

const Signin = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "darkblue",
          height: "100vh",
          width: "100%",
          position: "relative",
        }}>
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          Sign In
        </h1>
      </div>
      <AnotherComponent />
    </div>
  );
};
export default Signin;
