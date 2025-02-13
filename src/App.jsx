import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <NavBar onSearch={setSearchQuery} />

      <Routes>
      
        <Route path="/" element={<MovieList searchQuery={searchQuery} />} />

        
        <Route path="/action" element={<MovieList genre="28" />} />

        
        <Route path="/horror" element={<MovieList genre="27" />} />
      </Routes>
    </Router>
  );
}

export default App;
