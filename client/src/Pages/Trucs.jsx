import React from "react";
import { useState } from "react";

// // - Fonction avec return
// function greet(name) {
//   return `Hello ${name} !`;
// }

// // - Function call stores in a const, with "Sun" as argument
// const helloSun = greet("Sun");

// Background color of "Surprise" button
function randomColor() {
  const colorBtn = [
    "purple",
    "blue",
    "aquamarine",
    "yellow",
    "orange",
    "red",
    "mediumSpringGreen",
    "LightGreen",
    "LightPink",
    "aqua",
    "salmon",
    "tomato",
  ];
  const index = Math.floor(Math.random() * colorBtn.length);
  return colorBtn[index];
}

function randomColorPage() {
  const pageColor = [
    "rgba(255,0,0,0.3)",
    "rgba(0,255,0,0.3)",
    "rgba(0,0,255,0.3)",
    "rgba(192,192,192,0.3)",
    "rgba(255,255,0,0.3)",
    "rgba(255,0,255,0.3",
  ];
  const index = Math.floor(Math.random() * pageColor.length);
  return pageColor[index];
}

const Trucs = () => {
  // const anOtherArray = [<span>1</span>, <span>2</span>, <span>3</span>];
  const [bkgColor, setBkgColor] = useState("rgba(255, 0, 0, 0.2)"); // Background color
  const [counts, setCounts] = useState({ count1: 0, count2: 3 });
  console.log("The counts state : ", counts);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="appDiv" style={{ backgroundColor: bkgColor }}>
      {/* <h2> FUNCTIONS </h2>
      <p>
        Appel de la "function greet" with 'Toto' as argument dans la Trucs
        function:
      </p>
      <p> {greet("Toto")}</p>
      <br /> */}
      {/* ------------------------------------------------------------------ */}
      {/* <p>
        Appel de la "function greet" with "Sun" as argument hors Trucs function
        :
      </p>
      <p>{helloSun}</p>
      <br /> */}
      {/* ------------------------------------------------------------------ */}

      {/* <h2> STRING</h2>
      <p>{"This is a string"}</p>
      <br /> */}

      {/* <h2> ARRAYS </h2>
      <p> - An array : {[1, 2, 3, 4, 5, 6]}</p>
      <p> - An other Array : {anOtherArray}</p>
      <br /> */}
      {/* ------------------------------------------------------------------ */}

      <button onClick={() => setBkgColor(randomColorPage())}>
        <h2>New background</h2>
      </button>
      <br />
      <br />
      {/* ------------------------------------------------------------------ */}

      <h2> COUNTS </h2>
      <h3> The count is : {counts.count1}</h3>

      <button
        onClick={() => {
          setCounts({
            ...counts, // Revoir pq besoind d'un spread ici
            count1: counts.count1 + 1,
          });
        }}
      >
        {" "}
        Increment
      </button>

      <button
        onClick={() => {
          setCounts({
            ...counts,
            count1: counts.count1 - 1,
          });
        }}
      >
        Decrement
      </button>
      <br />
      <br />
      {/* ------------------------------------------------------------------ */}

      <h2> CONDITIONAL RENDERING </h2>
      <p> Button :</p>

      {/*  setIsClicked(!isClicked) set à état inverse*/}
      <button
        onClick={() => setIsClicked(!isClicked)}
        style={{
          backgroundColor: randomColor(),
          // border: "10px solid" + randomColor(), ERREUR
        }}
      >
        {" "}
        Surprise
      </button>
      <br />
      {/* Conditional rendering image */}
      <p> Click to show or hide an image : </p>
      {isClicked && (
        <img
          src="https://img.over-blog-kiwi.com/1/19/43/61/20170712/ob_c0b226_mainimage-full-9587419.jpg"
          alt="pissenlit"
          width={200}
        />
      )}
    </div>
  );
};

export default Trucs;
