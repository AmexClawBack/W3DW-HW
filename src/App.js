// Imports
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { Outlet } from "react-router-dom";

// Components
import Footer from "./components/Footer/Footer.js";
import Nav from "./components/Nav/Nav.js";

// pages
import NASAList from "./pages/NasaList/NASAList.js";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Giphy from "./pages/Giphy/Giphy.js";
import Starships from "./pages/StarShips/services/sw-api.js";
// contexts
import UserContext from "./contexts/UserContext.js";

// CSS
// import "./App.css";

//function declaration
function App() {
  const [user, setUser] = useState("David");
  console.log('App', user)
  const value = {user, setUser}

  return (
    <div >

      <UserContext.Provider value={value}>
        <Nav />

        {/*  the component that changes in our browser is inside the Routes component */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nasalist" element={<NASAList />} />
          <Route path="about" element={<About />} />
          <Route path="giphy" element={<Giphy />} />
          <Route path="starships" element={<Starships />} />
        </Routes>

        <Footer />
      </UserContext.Provider>

      {/* <Outlet /> */}
    </div>
  );
}

export default App;
