import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img
          src={movie.poster_path ? imageBaseUrl + movie.poster_path : "https://via.placeholder.com/500"}
          alt={movie.title}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <h6>Release Date: {movie.release_date}</h6>
          <p className="card-text">{movie.overview.substring(0, 100)}...</p>
        </div>
      </div>
    </div>
  );
};

function MovieList({ searchQuery, genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let apiUrl;

        
        if (searchQuery) {
          apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=934a6e72620cb80725766b2ed7295fb4&query=${searchQuery}`;
        } else if (genre) {
          apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=934a6e72620cb80725766b2ed7295fb4&with_genres=${genre}`;
        } else {
          apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=934a6e72620cb80725766b2ed7295fb4`;
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, [searchQuery, genre]);

  return (
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-center">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-center">No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;
