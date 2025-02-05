import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
     
      <NavBar onSearch={setSearchQuery} />
      
      
      <MovieList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
