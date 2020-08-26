import React from "react";
import AnotherComponent from "./AnotherComponent";

const Contactus = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "BLUEVIOLET",
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
          Contact Us Page
        </h1>
      </div>
      <AnotherComponent />
    </div>
  );
};
export default Contactus;
