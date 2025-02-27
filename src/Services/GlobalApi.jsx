import axios from 'axios';
import {genres} from "../Constants/GenresList.jsx"

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE5Mzg0MjY5NTUxNjNhY2U3NjUyZTc4OTVmNWM2YSIsIm5iZiI6MTc0MDA4NzU4My4zMzEsInN1YiI6IjY3YjdhMTFmNDQ0ZGQ3ZmNlZmJhMjgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BN1SHU7qevDI2hkTMpgeTx9sT1auGzVYarR2gi_rIK4'




export const getTrendingMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    headers: {
      accept: 'application/json',
      Authorization: API_KEY
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMoviesByGenres = async () => {
  try {
    const requests = genres.map(async (genre) => {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        headers: {
          accept: 'application/json',
          Authorization: API_KEY
        }
      };

      const response = await axios.request(options);
      return { [genre.name]: response.data.results }; // Retorna un objeto con el nombre del género como clave
    });

    const moviesByGenre = await Promise.all(requests);

    return Object.assign({}, ...moviesByGenre); // Convierte el array de objetos en un solo objeto
  } catch (error) {
    console.error('Error fetching movies by genres:', error);
    throw error;
  }
};