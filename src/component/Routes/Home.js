import React from "react";
import "../../css/home.css";
import AnotherComponent from "./AnotherComponent";

const Home = () => {
  return (
    <div>
      <div className="home_background">
        <div className="box">
          <div className="text_box">
            <p className="never_text">Never Give Up</p>
            <h1 className="it_text">It will all work out</h1>
            <p className="tagline">
              The greatest pleasure in life is doing what people say you cannot
              do
            </p>
          </div>
        </div>
      </div>
      <AnotherComponent />
    </div>
  );
};

export default Home;
