import React from "react";
import { useState } from "react";

//import Weather from "./Weather";

const Home = () => {
  const [bkgColor, setBkgColor] = useState();
  // !! Find how that coulde work without this bad state trick

  const getRandomBkgd = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r},${g},${b})`;
    // Evaluate brigthness of the color and choose white or black color based on this brightness
    const brightness =
      r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000" : "#fff";
    return [rgb, brightness];
  };
  const [bColor, bLum] = getRandomBkgd();

  return (
    <div
      style={{
        backgroundColor: bColor,
        color: bLum,
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <h1>Home Page TEST</h1>
      <h2>Welcome to the Fire Bird app</h2>
      <button className="myButton" onClick={() => setBkgColor(getRandomBkgd())}>
        I love your colors
      </button>

      {/* <button onClick={() => getRandomBkgd()}> Change color</button> */}

      {/* 
      <h2>Happy conditionnal rendering ! </h2>
      <Weather today="cloudy" windy={true} />
      <Weather today="sunny" windy={false} /> 
      */}
    </div>
  );
};

export default Home;

// Home import Weather and give it key-value pairs today and windy)
// rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

// Pick between black or white, need to know the brightness of the background.
// Formula to convert RGB to gray - R*0.299 + G*0.587 + B*0.114.
// The gamma curve applied to displays makes the middle gray value higher than expected.
// This is solved by using 186 as the middle value rather than 128.
// Anything less than 186 should use white text,
// anything greater than 186 should use black text.
