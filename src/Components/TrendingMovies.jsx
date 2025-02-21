// src/components/MovieList.jsx
import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from "../Services/trendingMoviesService.js" // Importa el servicio

const TrendingMovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getTrendingMovies(); // Usa el servicio
        setTrendingMovies(data);
      } catch (error) {
        console.error('Error in MovieList:', error);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovieList;
