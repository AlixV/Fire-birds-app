import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react"; //
import axios from "axios"; //
import Home from "./Pages/Home";
import FireBirdsList from "./Pages/FireBirdsList";
import CreateBird from "./Pages/CreateBird";
import OneBird from "./Pages/OneBird";
import EditBird from "./Pages/EditBird";
import Trucs from "./Pages/Trucs";

function App() {
  const [birds, setBirds] = useState([]);

  // --- GET ALL BIRDS ---
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/firebirds") // cf routes server
      .then(({ data }) => {
        // { destructuration }
        console.log("--- DATA BIRDS FROM DB : " + data);
        setBirds(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<FireBirdsList birds={birds} />} />
        <Route path="/list/:id" element={<OneBird birds={birds} />} />
        <Route path="/create" element={<CreateBird />} />
        <Route path="/edit" element={<EditBird />} />
        <Route path="/trucs" element={<Trucs />} />
        {/* <Route path="*" element={<Error/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
