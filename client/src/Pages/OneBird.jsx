import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OneBird = (props) => {
  const { birds } = props;
  console.log("OneBird birds : " + birds);

  const navigate = useNavigate();

  // Destructure pour avoir l'id de params :
  const { id } = useParams();
  console.log("id :" + id);
  // Could be :  const params = useParams();  Sans destructurer.

  // Cherche dans birds from props le bird qui a le même id que celui en params :
  const bird = birds.find((birdy) => birdy._id === id);
  console.log("bird._id : " + bird._id);

  // L'Index que ce bird a dans birds :
  const birdIndex = birds.indexOf(bird);
  console.log("index bird : " + birdIndex);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/firebird/${id}/delete`)
      .then(() => {
        console.log("Bird killed");
        navigate("/list");
      })

      .catch((e) => console.log(e));
  }; // A FINIR ET MODIFIER - peut-être à mettre dans App.js

  if (!bird.name) return <div> Loading darling</div>;
  return (
    <div className="oneBirdCard">
      <h2>{bird.name}</h2>
      <p> Powers : {bird.powers}</p>
      <p> Colors : {bird.colors}</p>
      <p> Size : {bird.size}</p>
      <button
        onClick={() => {
          console.log("Delete Button clicked !");
          if (window.confirm("Are you sure about kill this bird ?"))
            handleDelete(id);
        }}
      >
        Delete this bird
      </button>
      <br />
      {/* sere présent que en fonction authentification */}

      {/* Dans birds, trouver l'index du bird (précédent) correspondant à celui affiché - 1. 
      Pour obtenir l'_id du bird précédent.*/}

      {birdIndex > 0 && (
        <Link
          to={
            "/list/" +
            birds.find((birdy) => birdIndex - 1 === birds.indexOf(birdy))._id
          }
        >
          Previous
        </Link>
      )}

      <img style={{ width: 200 }} src={bird.picture} alt={bird.name} />

      {birdIndex < birds.length - 1 && (
        <Link
          to={
            "/list/" +
            birds.find((birdy) => birdIndex + 1 === birds.indexOf(birdy))._id
          }
        >
          {" "}
          Next{" "}
        </Link>
      )}
    </div>
  );
};

export default OneBird;

/* PREVIOUS 1/  
    {birdIndex > 0 && <Link to={"/list/" + birdPrevious._id}> Previous</Link>} */

/* PREVIOUS 2/ -> OK, mais pas besoin de faire ternary, mais plutôt conditional rendering 
   {birdIndex > 0 ? (
        <Link
          to={
            "/list/" +
            birds.find((birdy) => birdIndex - 1 === birds.indexOf(birdy))._id
          }
        >
          Previous
        </Link>
      ) : (
        <p>Pas de previous</p>
      )} */

/* NEXT 1/  
     {birdIndex < birds.length - 1 && (
        <Link to={"/list/" + birdNext._id}> Next</Link>
      )} */

/* NEXT 2/ -> OK, mais pas besoin de faire ternary, mais plutôt conditional rendering 
      {birdIndex < birds.length - 1 ? (
        <Link
          to={
            "/list/" +
            birds.find((birdy) => birdIndex + 1 === birds.indexOf(birdy))._id
          }
        >
          {" "}
          Next
        </Link>
      ) : (
        <p> Pas de next </p>
      )} */

// ------------------------------------------------------

// !! PROBLÈMES avec ces valeurs lorsque 1er et dernier oiseau affiché !!
// problème de chercher quelque chose qui n'existe pas . le brid précédent alors qu'on est à index 0

// Le BIRD ayant l'INDEX PRÉCÉDENT :
// const birdPrevious = birds.find(
//   (birdy) => birdIndex - 1 === birds.indexOf(birdy)
// );
// console.log("birdPrevious._id : " + birdPrevious._id);

// NOUVEAU CODE avec erreur (+1 au lieu de -1)
// {birdIndex > 0  ? (
//   <p>Pas de previous</p>
//   ):(
//    <Link to={"/list/" + ( birds.find(
//        (birdy) => birdIndex + 1 === birds.indexOf(birdy)))._id }>Previous</Link>
//       )}

// Le BIRD ayant l'INDEX SUIVANT :
// const birdNext = birds.find(
//   (birdy) => birdIndex + 1 === birds.indexOf(birdy)
// );
// console.log("birdNext._id : " + birdNext._id);
// ---------------------------------------------------------

// {birdIndex > 0 && <Link to={"/list/" + birdPrevious._id}> Previous</Link>}
// birdIndex < birds.length  &&  ?
// {birdIndex < birds.length && (
// <Link to={"/list/" + birdNext._id}> Next</Link>
// )}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// IMPORTANT, SANS DOUTE SUPPRIMER UN USEEFFECT, PEUT-ÊTRE LES DEUX SI TOUS DANS APP ET ENSUITE FILTRAGE POUR 1
// FINIR ces histoires de previous et next

// Nous avons son index dans birds tableau.
// Nous avons aussi son params qui est _id

// const bird = birds.find((birdy) => birdy._id === id); X
// console.log("bird : " + bird); X
// => L'oiseau des params qui correspond à celui dans birds list.

// const birdIndex = birds.indexOf(bird); X
// console.log("index bird : " + birdIndex); X
// => l'index de ce bird.

// dans birds trouver le même oiseau que celui des params,
// dans ce cas me faire un lien m'emmenant à l'id de
// cette oiseau situé à l'index avant ou apres dans birds

// trouver dans birds le bibi ayant le même index que bibiPlus
// Ensuite prendre son _id
// birdPrevious._id
// birdNext._id

// const birdPrevious = birds.find((birdy)=> birdIndex - 1 === birds.indexOf(birdy))
// console.log("birdPrevious : " + birdPrevious)
// console.log("birdPrevious._id : " + birdPrevious._id)

// const birdNext = birds.find((birdy)=> birdIndex + 1 === birds.indexOf(birdy))
// console.log("birdNext : " + birdNext)
// console.log("birdNext._id : " + birdNext._id)

//  { birdIndex > 0 && (
//    <Link to = {"/list/"     +}> Previous</Link>
// )}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Appel direct à API pour remplir un state :

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const [bird, setBird] = useState({}); // ENLEVER IMP
// useEffect(() => { // ENLEVER IMP
//   axios
//     .get("http://localhost:8080/api/firebird/" + id) // Could be params.id
//     // Don't forget to check route on server side please.
//     .then(({ data }) => {
//       console.log(data);
//       setBird(data);
//     })
//     .catch((e) => console.log(e));
// }, [id]);
// Could be : [params.id]

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// FONCTIONNE PAS - a retester
// <>
//  {bird ? (
//		<>
//			<p>{bird.name}</p>
//			<img src={bird.picture} alt={bird.name} />
//		</>
//	) : (
//	    <p>No bird</p>
//	)}
//	</>
