import React from "react";
import styled from "styled-components";

const Text = styled.h3`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const AnotherComponent = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
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
        This is Another Component!!
      </h1>
      <Text>To see Contact Bar, Reduce screen size to 767px</Text>
      <h4
        style={{
          position: "absolute",
          bottom: "5%",

          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        Kishan Gohil
      </h4>
    </div>
  );
};
export default AnotherComponent;
