import React from "react";
import AnotherComponent from "./AnotherComponent";

const Aboutus = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "blue",
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
          About Us Page
        </h1>
      </div>
      <AnotherComponent />
    </div>
  );
};

export default Aboutus;
