import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBird = () => {
  // Les states
  const [name, setName] = useState("");
  const [powers, setPowers] = useState("");
  const [size, setSize] = useState("");
  const [colors, setColors] = useState("");
  const [picture, setPicture] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // const handleSubmit avec preventDefault, const data,  axios + navigate() et setError
  // je ferai le cloudinary avec formData
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      powers,
      size,
      colors,
      picture,
    };

    axios
      .post("http://localhost:8080/api/firebirds", data)
      .then((response) => {
        console.log(response);
        navigate("/list");
      })
      .catch((e) => {
        console.log(e);
        setError("There was an error, try again please");
      });
  };

  // reset the states dans le then ? setName("");  ou direct navigate

  // form avec onSubmit pour la f° handleSubmit.
  // ≠≠≠ conditional rendering error
  // div : label + input
  // Dans les input : onChange avec setter et e.target.value
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error !== " " && <p>{error}</p>}
        <div>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="powers">Powers </label>
          <input
            type="text"
            id="powers"
            name="powers"
            value={powers}
            onChange={(e) => setPowers(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="colors">Colors </label>
          <input
            type="text"
            id="colors"
            name="colors"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="size"> Size </label>
          <select
            id="size"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="petit"> Petit </option>
            <option value="moyen"> Moyen </option>
            <option value="grand"> Grand </option>
            <option value="immense"> Immense </option>
          </select>
        </div>
        <div>
          <label htmlFor="picture"> Picture </label>
          <input
            type="text"
            id="picture"
            name="picture"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>
        <button> Create a Fire Bird</button>
        {/* do I need a type="submit" for the button ?  */}
      </form>
    </div>
  );
};

export default CreateBird;
