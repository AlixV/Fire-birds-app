import React from "react";
import { Link } from "react-router-dom";

const FireBirdsList = (props) => {
  const { birds } = props;
  console.log("FireBirdList birds : " + birds);

  // if (!birds) return <div> Loading darling</div>;
  return (
    <>
      <h1> FIRE BIRDS LIST</h1>

      {console.log("-- Nbr of birds : " + birds.length)}
      <ul>
        {birds.map((bird, index) => {
          return (
            // si je retourne qlqchose avant, c'est là que doit être la clef.
            // exemple une "div" ou alors "<>" qui entourerait ma li.
            <li
              className="birdCardList"
              key={bird._id} // dans autre fichier, bird.id fonctionnait, sans le _
              style={{
                listStyleType: "none",
              }}
            >
              {console.log(index + ` ` + bird.name + " " + bird._id)}
              <Link to={bird._id}>
                {" "}
                <h2>{bird.name}</h2>
              </Link>
              {/* 
              to={bird._id}> = /list/:id
              <Link to={index}>{bird.name}</Link> */}

              <p> Powers : {bird.powers}</p>
              <p> Colors : {bird.colors}</p>
              <p> Size : {bird.size}</p>
              <img
                style={{
                  width: 200,
                }}
                src={bird.picture}
                alt={bird.name}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FireBirdsList;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
//   const [birds, setBirds] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/firebirds") // cf routes server
//       .then(({ data }) => {
//         // destructuration
//         console.log("--- DATA BIRDS FROM DB : " + data);
//         setBirds(data);
//       })
//       .catch((e) => console.log(e));
//   }, []);
